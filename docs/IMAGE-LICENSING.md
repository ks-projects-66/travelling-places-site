# Image licensing

The register lives with the images, at `src/assets/images/MANIFEST.md`. One row per file:
subject, source, licence status, who approved it, and where it is used.

It is kept there rather than here on purpose. A register that sits in a `docs/` folder drifts
away from the files it describes. One next to the images is seen by whoever adds the next one.

## The check

```bash
pnpm check:licensing
```

Parses the manifest and fails if any file marked `unlicensed` is still referenced from `src/`.
It currently fails, and that is the correct state: nine photographs were saved from
virtuoso.com for the first draft and hold no licence.

They are kept in the repository rather than deleted so the layout stays reviewable during
design work. The check is what stops them reaching production.

Wire it into the Cloudflare Pages build command once replacements exist:

```
pnpm check:licensing && pnpm build
```

## Adding an image

1. Export a derivative: longest edge 2400px, quality around 78, sRGB, EXIF stripped.
2. Keep the master in the OneDrive folder. Do not commit it.
3. Drop it into the right category folder under `src/assets/images/`.
4. Add a manifest row before referencing it.

Astro handles WebP and AVIF conversion and responsive `srcset` from there, and only outputs
images a page actually references. An unreferenced image sits in the repository without ever
shipping, which is what makes this folder a staging area rather than a publishing one.
