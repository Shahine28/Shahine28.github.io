# Portfolio Site

Personal portfolio of Shahine Benthanane (gameplay programmer), built with Astro and published on GitHub Pages at https://shahine28.github.io.
It replaced the old Adobe myportfolio site (school account, closed at the end of the 2025-2026 school year).

Read `MEMORY.md` at the start of every session.

## Roles

The owner sends raw media and French notes. Claude does all the layout work: writing the English text, choosing and optimizing media, building the page. The owner only validates and uploads long videos to YouTube.

## Stack

- Astro 7, static output, no UI framework. Fonts self-hosted through `@fontsource` (Bebas Neue for display, Oswald for body).
- `npm run dev` for the dev server, `npm run build` then `npx astro preview` to check the real output.
- Deploy: `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Nothing else is needed.

## Layout

- `src/content/projects/<slug>/index.md`: one folder per project. The folder name is the URL (`/<slug>`).
  - Frontmatter holds every structured field (see `src/content.config.ts`, which is the source of truth). Body holds `## Context`, `## Team`, `## Tasks`.
  - `cover.*` and `media/` sit next to `index.md`. Images go through Astro's optimizer (WebP, responsive widths). Looping videos (`.mp4`) are resolved by `src/lib/media.ts`.
- `src/pages/`: `index.astro` (Home, featured projects), `games.astro` (all projects), `about.astro`, `[slug].astro` (project page).
- `src/lib/site.ts`: name, role, social links. Change identity here only.
- `public/resume.pdf`: the CV linked from Home and About. `src/assets/resume-preview.png` is its image version shown large on About: replace both together when the CV changes.
- `_inbox/`: drop zone for new project material. Git-ignored, never published.

## Content rules

- Site language is English only. Notes arrive in French: translate and rewrite in the tone of the existing projects (second person pitch, first person context, terse task bullets with a bold or prefixed theme when useful).
- `order`: higher shows first on the Games page. Projects are spaced by 10, so a new one gets an in-between or a higher number, never a renumbering.
- `featured`: position on Home (1 = first). Only 3 projects are featured. Featuring a new one means removing `featured` from another, ask the owner which.
- `youtube`: video id only (the part after `watch?v=`). Empty means the cover image is shown instead of a trailer.
- `availableOn.platform`: `itch` and `googleplay` have badge images in `src/assets/badges/`. `steam` and `link` render as a text button until a badge is added there.

## Media rules

GitHub Pages limits: 100 MB per file (hard), about 1 GB of published site and 100 GB of traffic per month (soft). The site is around 140 MB, keep it lean.

- Never commit GIFs. Convert them to MP4 (they play as autoplay muted loops, same look):
  `ffmpeg -i in.gif -vf "scale='min(1280,iw)':-2:flags=lanczos,fps=30" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart -an out.mp4`
- Gallery loops: aim for under 5 MB each, never above 15 MB. Raise `-crf` (28 to 30) or lower the width (960) if needed.
- Trailers and gameplay videos do not go in the repo. Prepare a compressed file for the owner to upload to YouTube as unlisted, then fill `youtube`.
- Images: PNG/JPG straight from the owner are fine, Astro optimizes them. Still downscale anything wider than 2560 px before committing.

## Workflow

New project: run the `/add-project` skill (`.claude/skills/add-project/SKILL.md`).

Git, per the owner's global rules:
- `main` is what is online. Work on a `GP/<Feature>` branch (`GP/AddProjectName`, `GP/Redesign`), no `Dev` branch for this repo.
- Commit messages `[ADD|MOD|FIX|DEL|DIV] Explicit description`. No Claude signature or `Co-Authored-By` line.
- Never commit without the owner's confirmation. Never push without their explicit go, since pushing to `main` publishes the site.
- Always preview locally (`npm run build` + `npx astro preview`) and show the owner before asking to commit.
