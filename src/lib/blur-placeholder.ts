import type { ImageMetadata } from 'astro';
import sharp from 'sharp';

// A 24px-wide copy of a photograph, inlined in the page as a data URL (about 300 bytes). The hero
// paints it, stretched and soft, the moment the page arrives, and the full photograph covers it
// once it has downloaded, so a slow connection shows the photograph's colours, never a grey box.
//
// Astro's image metadata carries the source file's path as `fsPath`, a non-enumerable property it
// sets on every imported image; it is not in the public type, hence the cast.
export async function blurPlaceholder(image: ImageMetadata): Promise<string> {
  const fsPath = (image as ImageMetadata & { fsPath?: string }).fsPath;
  if (!fsPath) throw new Error(`No source file recorded for ${image.src}, so no loading placeholder can be made.`);
  const buffer = await sharp(fsPath.split('?')[0]).resize(24).webp({ quality: 60 }).toBuffer();
  return `data:image/webp;base64,${buffer.toString('base64')}`;
}
