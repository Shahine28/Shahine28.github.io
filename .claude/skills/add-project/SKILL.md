---
name: add-project
description: Adds a new game project to the portfolio from raw media and French notes dropped in _inbox/. Use when the owner says they added or sent a new project, or asks to put a project on the site.
---

# Add a project

Follow `CLAUDE.md` (content and media rules). Steps in order, do not skip the validation stops.

## 1. Gather

- Look in `_inbox/<ProjectName>/`. Expect media (images, GIFs, videos) and a `notes.md` in French. If there is no folder or no notes, ask the owner where the material is.
- Read the notes. List what is missing among: title, tagline (genres), year, duration, engine / language, roles, team size and composition, pitch, context, tasks, store links, which media is the cover. Ask the owner for the missing items in one go. Never invent facts (team size, dates, tasks).
- Ask whether the project should be featured on Home, and if so, which current featured project leaves.

## 2. Branch

`git checkout main && git pull`, then `git checkout -b GP/AddProject<Name>`.

## 3. Write

- Create `src/content/projects/<slug>/` with a lowercase dashed slug (it becomes the URL).
- Copy the structure of an existing project such as `src/content/projects/synaptik/index.md`.
- Rewrite the notes in English in the tone of the other projects. Keep the owner's facts, improve the wording only.
- Pick `order`: higher than the newest project if it is the most recent, otherwise between its neighbours.

## 4. Media

- Cover: 16:9, saved as `cover.png` or `cover.jpg`. If none fits, ask.
- GIFs become MP4 loops with the ffmpeg command in `CLAUDE.md`. Check each result's size (`du -h`), recompress anything over 15 MB.
- Screenshots go in `screenshots`, system demos (former GIFs) in `features`, each with a short caption.
- Trailer or long gameplay video: compress it for upload (`-crf 23`, 1080p max), put it in `_inbox/<ProjectName>/youtube/`, and give the owner a ready-to-paste title and description. Leave `youtube: ""` until they send the id.

## 5. Check

- `npm run build`. It fails on a missing image or video, a bad URL or a missing field: fix the cause.
- `npx astro preview` in the background, open `/<slug>`, `/games` and `/` (if featured) in the browser pane. Check desktop and mobile (375 px) width, that videos play, and that there is no horizontal scroll.
- Show the owner the page and a short summary: texts written, media sizes, anything assumed.

## 6. Ship (only on the owner's word)

- After their OK: commit `[ADD] Project <Name>` (separate commits if the change also touched layout or another project).
- Merge into `main` and push only when they explicitly say to push. Then confirm the GitHub Actions run succeeded (`gh run list --limit 1`) and the page is online.
- Empty `_inbox/<ProjectName>/` only after asking.
- Add anything learned to `MEMORY.md`.
