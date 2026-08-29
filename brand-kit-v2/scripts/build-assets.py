from __future__ import annotations

import copy
import re
from pathlib import Path
from xml.etree import ElementTree as ET

from PIL import ImageFont
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont


ROOT = Path(__file__).resolve().parents[1]
LOGOS = ROOT / "assets" / "logos"
ICON_SOURCE = ROOT / "assets" / "icons" / "source"
FONT_DIR = ROOT / "fonts"
SVG_NS = "http://www.w3.org/2000/svg"
ET.register_namespace("", SVG_NS)


def qname(name: str) -> str:
    return f"{{{SVG_NS}}}{name}"


def make_static_font(source: Path, axes: dict[str, float]) -> TTFont:
    font = TTFont(source)
    if "fvar" in font:
        font = instantiateVariableFont(font, axes, inplace=False)
    return font


def save_woff2(source: Path, destination: Path) -> None:
    if destination.exists():
        return
    font = TTFont(source)
    font.flavor = "woff2"
    font.save(destination)


def wordmark_paths(font_path: Path, text: str) -> tuple[list[tuple[str, float]], tuple[float, float, float, float]]:
    font = make_static_font(font_path, {"wght": 400})
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    units_per_em = font["head"].unitsPerEm
    shaping_font = ImageFont.truetype(str(font_path), units_per_em)
    tracking = 5.0

    paths: list[tuple[str, float]] = []
    min_x = float("inf")
    min_y = float("inf")
    max_x = float("-inf")
    max_y = float("-inf")

    for index, char in enumerate(text):
        x = float(shaping_font.getlength(text[:index])) + (tracking * index)
        if char.isspace():
            continue
        glyph_name = cmap.get(ord(char))
        if not glyph_name:
            raise ValueError(f"Missing glyph for {char!r}")
        glyph = glyph_set[glyph_name]
        svg_pen = SVGPathPen(glyph_set)
        glyph.draw(svg_pen)
        path_data = svg_pen.getCommands()
        bounds_pen = BoundsPen(glyph_set)
        glyph.draw(bounds_pen)
        if bounds_pen.bounds:
            gx0, gy0, gx1, gy1 = bounds_pen.bounds
            min_x = min(min_x, x + gx0)
            max_x = max(max_x, x + gx1)
            min_y = min(min_y, -gy1)
            max_y = max(max_y, -gy0)
        paths.append((path_data, x))

    if not paths:
        raise ValueError("Wordmark produced no paths")
    return paths, (min_x, min_y, max_x, max_y)


def write_wordmark(destination: Path, colour: str) -> tuple[float, float]:
    paths, bounds = wordmark_paths(FONT_DIR / "LibreBaskerville-Variable.ttf", "Travelling Places")
    min_x, min_y, max_x, max_y = bounds
    padding = 64.0
    view_x = min_x - padding
    view_y = min_y - padding
    width = (max_x - min_x) + (padding * 2)
    height = (max_y - min_y) + (padding * 2)

    root = ET.Element(
        qname("svg"),
        {
            "viewBox": f"{view_x:.2f} {view_y:.2f} {width:.2f} {height:.2f}",
            "role": "img",
            "aria-labelledby": "wordmark-title",
            "shape-rendering": "geometricPrecision",
        },
    )
    title = ET.SubElement(root, qname("title"), {"id": "wordmark-title"})
    title.text = "Travelling Places"
    group = ET.SubElement(root, qname("g"), {"fill": colour})
    for path_data, x in paths:
        ET.SubElement(
            group,
            qname("path"),
            {"d": path_data, "transform": f"translate({x:.2f} 0) scale(1 -1)"},
        )
    ET.ElementTree(root).write(destination, encoding="utf-8", xml_declaration=True)
    return width, height


def clean_mark() -> None:
    source = LOGOS / "mark-light.svg"
    tree = ET.parse(source)
    root = tree.getroot()
    root.set("role", "img")
    root.set("aria-labelledby", "mark-title")
    root.set("shape-rendering", "geometricPrecision")
    for child in list(root):
        if child.tag == qname("title"):
            root.remove(child)
    title = ET.Element(qname("title"), {"id": "mark-title"})
    title.text = "Travelling Places illustrated aircraft mark"
    root.insert(0, title)
    tree.write(source, encoding="utf-8", xml_declaration=True)

    dark_root = ET.Element(
        qname("svg"),
        {
            "viewBox": root.get("viewBox", "0 0 828 1079"),
            "role": "img",
            "aria-labelledby": "mark-dark-title",
            "shape-rendering": "geometricPrecision",
        },
    )
    dark_title = ET.SubElement(dark_root, qname("title"), {"id": "mark-dark-title"})
    dark_title.text = "Travelling Places illustrated aircraft mark for dark backgrounds"
    defs = ET.SubElement(dark_root, qname("defs"))
    outline_filter = ET.SubElement(
        defs,
        qname("filter"),
        {
            "id": "mark-keyline",
            "x": "-6%",
            "y": "-6%",
            "width": "112%",
            "height": "112%",
            "color-interpolation-filters": "sRGB",
        },
    )
    ET.SubElement(
        outline_filter,
        qname("feMorphology"),
        {"in": "SourceAlpha", "operator": "dilate", "radius": "8", "result": "expanded"},
    )
    ET.SubElement(outline_filter, qname("feFlood"), {"flood-color": "#FFFFFF", "result": "white"})
    ET.SubElement(
        outline_filter,
        qname("feComposite"),
        {"in": "white", "in2": "expanded", "operator": "in", "result": "outline"},
    )
    merge = ET.SubElement(outline_filter, qname("feMerge"))
    ET.SubElement(merge, qname("feMergeNode"), {"in": "outline"})
    ET.SubElement(merge, qname("feMergeNode"), {"in": "SourceGraphic"})
    group = ET.SubElement(dark_root, qname("g"), {"filter": "url(#mark-keyline)"})
    for child in list(root):
        if child.tag != qname("title"):
            group.append(copy.deepcopy(child))
    ET.ElementTree(dark_root).write(LOGOS / "mark-dark.svg", encoding="utf-8", xml_declaration=True)


def inner_svg(path: Path) -> tuple[str, str]:
    raw = path.read_text(encoding="utf-8")
    view_box = re.search(r'viewBox="([^"]+)"', raw)
    if not view_box:
        raise ValueError(f"No viewBox found in {path}")
    body = re.sub(r"^<\?xml[^>]+>\s*", "", raw)
    body = re.sub(r"^<svg[^>]*>", "", body)
    body = re.sub(r"</svg>\s*$", "", body)
    body = re.sub(r"<title[^>]*>.*?</title>", "", body, flags=re.S)
    return view_box.group(1), body.strip()


def write_lockup(destination: Path, mark_name: str, wordmark_name: str) -> None:
    mark_view, mark_body = inner_svg(LOGOS / mark_name)
    word_view, word_body = inner_svg(LOGOS / wordmark_name)
    _, _, mark_w, mark_h = [float(value) for value in mark_view.split()]
    word_x, word_y, word_w, word_h = [float(value) for value in word_view.split()]

    canvas_height = 360.0
    mark_display_h = 320.0
    mark_display_w = mark_display_h * (mark_w / mark_h)
    word_display_h = 84.0
    word_display_w = word_display_h * (word_w / word_h)
    gap = 46.0
    left_padding = 24.0
    right_padding = 32.0
    total_width = left_padding + mark_display_w + gap + word_display_w + right_padding
    wordmark_x = left_padding + mark_display_w + gap
    wordmark_y = (canvas_height - word_display_h) / 2

    svg = f'''<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="{SVG_NS}" viewBox="0 0 {total_width:.2f} {canvas_height:.2f}" role="img" aria-labelledby="lockup-title" shape-rendering="geometricPrecision">
  <title id="lockup-title">Travelling Places</title>
  <svg x="{left_padding:.2f}" y="20" width="{mark_display_w:.2f}" height="{mark_display_h:.2f}" viewBox="{mark_view}">{mark_body}</svg>
  <svg x="{wordmark_x:.2f}" y="{wordmark_y:.2f}" width="{word_display_w:.2f}" height="{word_display_h:.2f}" viewBox="{word_x:.2f} {word_y:.2f} {word_w:.2f} {word_h:.2f}">{word_body}</svg>
</svg>
'''
    destination.write_text(svg, encoding="utf-8", newline="\n")


def build_icon_sprite() -> None:
    sprite = ET.Element(qname("svg"), {"aria-hidden": "true"})
    for path in sorted(ICON_SOURCE.glob("*.svg")):
        source_root = ET.parse(path).getroot()
        symbol = ET.SubElement(
            sprite,
            qname("symbol"),
            {"id": f"icon-{path.stem}", "viewBox": source_root.get("viewBox", "0 0 24 24")},
        )
        for child in list(source_root):
            clone = copy.deepcopy(child)
            clone.set("fill", "currentColor")
            symbol.append(clone)
    ET.ElementTree(sprite).write(ROOT / "assets" / "icons" / "ui-icons.svg", encoding="utf-8", xml_declaration=True)


def main() -> None:
    save_woff2(FONT_DIR / "LibreBaskerville-Variable.ttf", FONT_DIR / "LibreBaskerville-Regular.woff2")
    save_woff2(FONT_DIR / "IBMPlexSans-Variable.ttf", FONT_DIR / "IBMPlexSans-Variable.woff2")
    clean_mark()
    write_wordmark(LOGOS / "wordmark-blue.svg", "#3E55A0")
    write_wordmark(LOGOS / "wordmark-white.svg", "#FFFFFF")
    write_wordmark(LOGOS / "wordmark-black.svg", "#221F20")
    write_lockup(LOGOS / "lockup-primary.svg", "mark-light.svg", "wordmark-blue.svg")
    write_lockup(LOGOS / "lockup-dark.svg", "mark-dark.svg", "wordmark-white.svg")
    build_icon_sprite()
    print("Built fonts, logo suite, and icon sprite")


if __name__ == "__main__":
    main()
