# AGENTS.md

Instructions for AI coding agents working in this repo. Humans: see [README.md](README.md).

This is the Reflow Auctions help center: a Docusaurus 3 site deployed to GitHub Pages at https://docs.reflowauctions.com. Non-developers edit content through Pages CMS (`.pages.yml`), whose rich-text editor rewrites Markdown on every save. **Most rules below exist so content survives that editor unchanged.** `npm run check` enforces the ones marked ✓.

## Commands

```bash
npm ci
npm test          # unit tests (scripts/, src/)
npm run check     # content rules; must print "✓ N files OK"
npm run build     # fails on any broken link, anchor, or image
npm start         # local dev server
```

Before you finish, run all three: `npm test`, `npm run check`, `npm run build`. Don't change the `onBroken*: 'throw'` settings to get a build to pass. Fix the link instead.

## Layout

| Path | What |
|---|---|
| `docs/<section>/<page>.md` | Help pages. Folder = sidebar section; `_category_.json` sets its label and order |
| `releases/vX.Y.Z.md` | Release notes (blog plugin, served at `/releases`) |
| `static/img/docs/<section>/` | Screenshots, referenced as `/img/docs/...` |
| `src/components/YouTube/` | Click-to-load youtube-nocookie player |
| `src/remark/youtube.mjs` | Turns `::youtube{...}` into `<YouTube>` |
| `src/css/custom.css` | Theme, sidebar, search styling |
| `scripts/check-content.mjs` | CI content guard (with tests) |
| `.design/` | Migration spec, plan, and the owner's to-do list. Not published |

## Content rules

- ✓ **Files are `.md`, never `.mdx`.** `markdown.format` is `detect`; MDX would break on `{{variables}}` in the docs.
- ✓ **Steps are headings, not numbered lists:**
  ```md
  #### 1. Open the event

  Go to the event…

  ![Event page with Add auction highlighted](/img/docs/auction-setup/auctions-1.png)
  ```
  The editor shifts indented images, callouts and extra paragraphs inside list items by a space on every save. Plain one-line numbered lists are fine.
- ✓ **Videos:** `::youtube{#VIDEO_ID title="Title"}` on its own line, with an 11-character ID. Never `::youtube[Title]{#id}`: the editor escapes the brackets.
- **Callouts:** `:::tip` / `note` / `info` / `warning` / `danger`, with the opening and closing `:::` on their own lines, blank lines inside, top level only (not inside lists).
- ✓ **No Mantle references.** `heymantle.com` / `mantledocs.com` must not appear anywhere, including code comments.
- ✓ **Releases:** file `releases/vX.Y.Z.md` with front matter `title: "vX.Y.Z"` (must equal the file name) and `date: YYYY-MM-DD`. Body headings only from: `## Features`, `## Improvements`, `## Fixes`, optionally with a suffix like `## Fixes (Admin app)`.
- **Never rename or move a doc file.** Its path is its public URL (`docs/settings/buyers-fee.md` → `/settings/buyers-fee`), and external links depend on it. If you must, add a redirect in `@docusaurus/plugin-client-redirects` in `docusaurus.config.js`.
- **Images need real alt text** that describes the screenshot. Not "image" or "screenshot".
- **Internal links** are site paths without the domain: `[Buyer's Fee](/settings/buyers-fee)`.
- **Front matter** for docs: `title`, `description` (one sentence), `sidebar_position`. Keep `sidebar_label` if present.

## Code rules

- **Outbound links** to our sites go through the `utm()` helper in `docusaurus.config.js` so they carry UTM tags. Don't hard-code `reflowauctions.com` or App Store URLs elsewhere.
- **Styling** goes in `src/css/custom.css` via Infima variables or narrowly scoped selectors. Search plugin classes are hashed (`searchBar_RVTs`), so target them with `[class*='searchBar']`. Check dark and light mode, and a phone width (390px).
- Don't add dependencies for things CSS or a few lines of code can do.
- Content guard rules belong in `scripts/check-content.mjs`'s pure `findProblems()`, with a test in `scripts/check-content.test.mjs`.

## Workflow

- `main` deploys automatically. Make code changes on a branch and open a PR. CI builds every PR and only deploys `main`.
- Pages CMS commits content edits straight to `main`.
- Keep commits focused, with conventional prefixes (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).
