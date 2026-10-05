"""Download, licence-check and crop the card photographs Karim approved on 5 October 2026.

Run from the repository root on a machine that can reach unsplash.com:

    python imagery-delivery/install_approved_2026_10.py

For each image it:
1. opens the Unsplash photo page and stops if "Free to use under the Unsplash License" is absent
   (Unsplash+, a changed licence or a removed page all stop it);
2. downloads the original;
3. crops to the slot's ratio at the recorded centring, caps the longest edge at 2000px (cards are
   served at most 1200px wide, so the 3200px hero master in MANIFEST.md is not needed here),
   converts to sRGB and strips metadata;
4. writes it to src/assets/images/features/ and flips its MANIFEST.md status from `placeholder`
   to `owned`.

The licence check is a text match, not a review. Look at every crop on the built page before
calling it approved: faces, branding and the crop itself are judged by eye, not by this script.
Slot 1 (Your specialist) and slot 4 (the retouched Lyon river ship) are not handled here.
"""

from __future__ import annotations

import io
import re
import sys
import urllib.request
from pathlib import Path

from PIL import Image, ImageCms, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src/assets/images/features"
MANIFEST = ROOT / "src/assets/images/MANIFEST.md"
LICENCE_LINE = "Free to use under the Unsplash License"
MAX_EDGE = 2000
UA = {"User-Agent": "Mozilla/5.0 (Travelling Places imagery install)"}

# centring is ImageOps.fit's (x, y): 0.5 keeps the middle, larger y keeps more of the bottom.
APPROVED = [
    # slot, Unsplash id, output file, ratio (w, h), centring, note
    ("2 Privileged access", "9d2XwiBOh_o", "luxury-terrace-camogli.jpg", (4, 5), (0.5, 0.5),
     "Native 4:5, no substantive crop."),
    ("3 Peace of mind", "Tl9ntkhaimg", "luxury-stone-portico-sea.jpg", (4, 5), (0.5, 0.5),
     "Light vertical trim; keep arch, table and sea."),
    ("5 Expedition journeys", "ZFA5c0loQE8", "expedition-penguins.jpg", (3, 2), (0.5, 0.5),
     "Central crop keeping the two foreground penguins."),
    ("6 Luxury travel", "sGIMrQSEaGI", "luxury-lakeside-villa.jpg", (3, 2), (0.5, 0.65),
     "Portrait original: lower-middle band with villa, hillside and lake. Check the crop."),
    ("7 Tailor-made journeys", "-E7dpukTajA", "rail-nine-arch-bridge.jpg", (3, 2), (0.5, 0.5),
     "Portrait original, crop-sensitive: keep locomotive, curve and upper arches. Check the crop."),
    ("8 About ship", "Jk6DYRdnSMs", "ship-at-sunset.jpg", (16, 9), (0.5, 0.5),
     "Trim sides; keep sun, vessel silhouette and sea."),
]


def fetch(url: str) -> bytes:
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read()


def to_srgb(im: Image.Image) -> Image.Image:
    icc = im.info.get("icc_profile")
    if icc:
        src = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        im = ImageCms.profileToProfile(im, src, ImageCms.createProfile("sRGB"), outputMode="RGB")
    return im.convert("RGB")


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = MANIFEST.read_text(encoding="utf-8")
    failures = 0
    for slot, pid, name, (rw, rh), centring, note in APPROVED:
        page = f"https://unsplash.com/photos/{pid}"
        print(f"\n{slot}: {name}\n  {page}")
        try:
            html = fetch(page).decode("utf-8", "replace")
        except Exception as e:  # noqa: BLE001 - report and move on to the next image
            print(f"  STOP: page could not be opened ({e})"); failures += 1; continue
        if LICENCE_LINE not in html:
            print(f"  STOP: '{LICENCE_LINE}' not found on the page"); failures += 1; continue
        print(f"  Licence line present: '{LICENCE_LINE}'")
        im = Image.open(io.BytesIO(fetch(f"{page}/download?force=true")))
        im = to_srgb(ImageOps.exif_transpose(im))
        print(f"  Original {im.width} x {im.height}")
        h = min(im.height, round(im.width * rh / rw))
        w = round(h * rw / rh)
        im = ImageOps.fit(im, (w, h), Image.Resampling.LANCZOS, centering=centring)
        if max(im.size) > MAX_EDGE:
            im.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        im.save(OUT / name, quality=82, optimize=True, progressive=True)
        print(f"  Saved {im.width} x {im.height}. {note}")
        manifest = re.sub(rf"(\| `features/{re.escape(name)}` \|[^\n]*?\| )placeholder( \|)",
                          r"\1owned\2", manifest)
    MANIFEST.write_text(manifest, encoding="utf-8")
    print("\nNext: pnpm build && pnpm check:licensing && pnpm check:placeholders, then look at "
          "/luxury/, /expertise/ and /who-we-are/ at 1440px and 390px.")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
