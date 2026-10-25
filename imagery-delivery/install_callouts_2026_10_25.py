"""Install the photographs chosen in the owner's callout round of 25 October 2026.

    python imagery-delivery/install_callouts_2026_10_25.py

The owner delegated the choice ("pick the photos"); the shortlist and the reasons are in
docs/CALLOUTS-2026-10-25.md (CO1, CO5, CO12). Each source page was read on 25 October 2026 and
showed "Free to use under the Unsplash License", not Unsplash+. unsplash.com itself now sits behind a
bot check for scripts, so this script cannot repeat that check: it only downloads from the public
images.unsplash.com CDN. Re-read the page by hand before re-running it for a new file.

For each image it downloads at 3200px on the long edge, converts to sRGB, strips metadata and writes
the file. MANIFEST.md rows are written by hand.
"""

from __future__ import annotations

import io
import sys
import urllib.request
from pathlib import Path

from PIL import Image, ImageCms

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "src/assets/images"
UA = {"User-Agent": "Mozilla/5.0 (Travelling Places imagery install)"}

CHOSEN = [
    # unsplash id, cdn base, output, use
    ("IuvZ3QXgwXQ", "https://images.unsplash.com/photo-1696881807583-60e7ff5ab2b0",
     "destinations/positano-golden-hour.jpg", "Home hero, slide 1"),
    ("gzKf0_sVTxc", "https://images.unsplash.com/photo-1654011905292-c342dd9fc433",
     "destinations/varenna-loggia-lake-como.jpg", "Home hero, slide 2"),
    ("hRAwKkd8rF4", "https://images.unsplash.com/photo-1757535842925-9c24723f83fc",
     "destinations/lake-como-sunset.jpg", "Home hero, slide 3"),
    ("aj7SvmAZdqY", "https://images.unsplash.com/photo-1647163927241-5351094dfffc",
     "destinations/antarctica-pastel-bay.jpg", "Antarctica article cover"),
    ("QStrN6Pr4wM", "https://images.unsplash.com/photo-1760204741315-abfc98ce3bf5",
     "features/sea-view-room-greece.jpg", "About, Virtuoso row"),
]


def to_srgb(im: Image.Image) -> Image.Image:
    icc = im.info.get("icc_profile")
    if icc:
        src = ImageCms.ImageCmsProfile(io.BytesIO(icc))
        im = ImageCms.profileToProfile(im, src, ImageCms.createProfile("sRGB"), outputMode="RGB")
    return im.convert("RGB")


def main() -> int:
    for uid, base, out, use in CHOSEN:
        url = f"{base}?w=3200&q=90&fm=jpg"
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=90) as r:
            im = Image.open(io.BytesIO(r.read()))
            im.load()
        im = to_srgb(im)
        im.thumbnail((3200, 3200), Image.LANCZOS)
        path = IMAGES / out
        path.parent.mkdir(parents=True, exist_ok=True)
        im.save(path, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{out}: {im.size[0]}x{im.size[1]} ({use}, unsplash.com/photos/{uid})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
