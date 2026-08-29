from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageCms, ImageOps


IMAGES = {
    "expertise-hero-mountain-lake.jpg": {
        "spec": "A",
        "size": (3600, 2400),
        "centering": (0.50, 0.50),
    },
    "virtuoso-hero-tropical-island.jpg": {
        "spec": "A",
        "size": (3600, 2400),
        "centering": (0.50, 0.50),
    },
    "contact-hero-tamborine-mountain.jpg": {
        "spec": "A",
        "size": (3600, 2400),
        "centering": (0.50, 0.50),
    },
    "mediterranean-coast.jpg": {
        "spec": "B",
        "size": (3200, 2000),
        "centering": (0.50, 0.50),
    },
    "antarctica-ice-mountains.jpg": {
        "spec": "B",
        "size": (3200, 2000),
        "centering": (0.50, 0.50),
    },
    "cruise-dining-ocean-view.jpg": {
        "spec": "B",
        "size": (3200, 2000),
        "centering": (0.50, 0.52),
    },
    "japan-temple-landscape.jpg": {
        "spec": "C",
        "size": (3200, 1800),
        "centering": (0.50, 0.50),
    },
    "spain-white-village.jpg": {
        "spec": "C",
        "size": (3200, 1800),
        "centering": (0.50, 0.58),
    },
    "amsterdam-canal-houses.jpg": {
        "spec": "C",
        "size": (3200, 1800),
        "centering": (0.50, 0.52),
    },
    "european-rail-journey.jpg": {
        "spec": "C",
        "size": (3200, 1800),
        "centering": (0.50, 0.55),
    },
}

MINIMUM_SOURCE = {
    "A": (3200, 2000),
    "B": (2560, 1600),
    "C": (2400, 1350),
}


def convert_to_srgb(image: Image.Image) -> Image.Image:
    srgb = ImageCms.createProfile("sRGB")
    embedded = image.info.get("icc_profile")
    if embedded:
        try:
            source = ImageCms.ImageCmsProfile(bytes(embedded))
            return ImageCms.profileToProfile(image, source, srgb, outputMode="RGB")
        except (ImageCms.PyCMSError, OSError, TypeError):
            pass
    return image.convert("RGB")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    args = parser.parse_args()

    args.output_dir.mkdir(parents=True, exist_ok=True)
    srgb_bytes = ImageCms.ImageCmsProfile(ImageCms.createProfile("sRGB")).tobytes()

    for filename, settings in IMAGES.items():
        source_path = args.source_dir / filename
        if not source_path.is_file():
            raise FileNotFoundError(source_path)

        with Image.open(source_path) as source:
            source.load()
            minimum = MINIMUM_SOURCE[settings["spec"]]
            if source.width < minimum[0] or source.height < minimum[1]:
                raise ValueError(
                    f"{filename}: source {source.size} is below {minimum}"
                )

            converted = convert_to_srgb(source)
            cropped = ImageOps.fit(
                converted,
                settings["size"],
                method=Image.Resampling.LANCZOS,
                centering=settings["centering"],
            )
            clean = Image.new("RGB", cropped.size)
            clean.paste(cropped)
            clean.save(
                args.output_dir / filename,
                format="JPEG",
                quality=95,
                subsampling=0,
                optimize=True,
                progressive=True,
                exif=b"",
                icc_profile=srgb_bytes,
            )
            print(f"{filename}: {clean.width}x{clean.height}")


if __name__ == "__main__":
    main()
