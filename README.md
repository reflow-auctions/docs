# Reflow Auctions Help Center

The help docs at **https://docs.reflowauctions.com**.

You don't need to be a developer to edit them. This page covers everything you need: how to edit a page, how to format text, how to add callout boxes, screenshots and videos, and how to publish a release note.

- [How publishing works](#how-publishing-works)
- [Editing in Pages CMS](#editing-in-pages-cms)
- [Formatting cheat sheet (Markdown)](#formatting-cheat-sheet-markdown)
- [Callout boxes](#callout-boxes)
- [Step-by-step instructions](#step-by-step-instructions)
- [Screenshots](#screenshots)
- [Videos](#videos)
- [Release notes](#release-notes)
- [Adding a new page](#adding-a-new-page)
- [Reordering the sidebar](#reordering-the-sidebar)
- [When a change doesn't show up](#when-a-change-doesnt-show-up)
- [For developers](#for-developers)

---

## How publishing works

1. You edit a page in **Pages CMS** and click **Save**. The change is stored, but **not live yet**.
2. GitHub checks every save right away (broken links, video lines, release names…). If something's wrong, you'll see it in the run within a couple of minutes. See [When a change doesn't show up](#when-a-change-doesnt-show-up).
3. When you're ready, click **Publish site** in the Pages CMS sidebar and confirm. **Everything saved so far goes live about 2 minutes later.**
4. If the check finds a problem when publishing, the site **stays as it was** and nothing breaks.

You can save as many edits as you like and publish once. Every save is recorded, so any change can be undone.

> Changes developers merge through GitHub pull requests publish automatically; only Pages CMS saves wait for the button.

## Editing in Pages CMS

1. Go to **https://app.pagescms.org** and sign in with your GitHub account (or the email invite you were sent).
2. Open **reflow-auctions / docs**.
3. Pick **Docs** (help pages) or **Releases** (release notes) in the left menu.
4. Open a page, make your change, click **Save**.
5. When you're done with your edits, click **Publish site** in the left sidebar.

### Visual mode vs. Source mode

Above the page content there's a switch between **Editor** (visual, like Google Docs) and **Source** (plain text).

| Use **Editor** mode for | Use **Source** mode for |
|---|---|
| Fixing typos, rewording | Adding or editing a **callout box** (`:::tip` …) |
| Bold, italic, links | Adding a **video** (`::youtube…`) |
| Headings, bullet lists | Anything that looks odd in Editor mode |
| Uploading screenshots | |

**Rule of thumb:** if you see `:::` or `::youtube` in the text, switch to **Source** to edit that part. Editor mode leaves them alone if you don't touch them, but it's easy to break them by accident.

## Formatting cheat sheet (Markdown)

The pages are written in **Markdown**, a simple way to format plain text. In Editor mode you mostly won't see it. In Source mode, it looks like this:

| You type | You get |
|---|---|
| `**bold**` | **bold** |
| `_italic_` | _italic_ |
| `[link text](/settings/buyers-fee)` | a link to another help page |
| `[link text](https://shopify.com)` | a link to another website |
| `## Big heading` | a section heading (shows in "On this page") |
| `### Smaller heading` | a sub-heading |
| `- item` | a bullet point |
| `1. item` | a numbered item |
| `` `code` `` | `code` (for setting names, variables, etc.) |

Leave an **empty line between paragraphs**. One line break on its own doesn't start a new paragraph.

**Linking to another help page:** use the page's address without the domain, e.g. `/settings/buyers-fee`. To link to a section, add `#` and the heading in lowercase with dashes: `/settings/buyers-fee#how-buyers-fee-is-calculated`.

## Callout boxes

Callout boxes highlight a tip, a note or a warning:

```
:::tip

It's best to create auctions as **Draft** first and publish them after review.

:::
```

There are five kinds. Pick the one that fits:

| Type | Use it for |
|---|---|
| `:::tip` | Helpful advice, best practices |
| `:::note` | Extra context worth knowing |
| `:::info` | Neutral information, how something works |
| `:::warning` | Something that can go wrong; be careful |
| `:::danger` | Something that can't be undone or costs money |

**The three rules** (the box won't show if you break one):
1. The opening `:::tip` and the closing `:::` each go on **their own line**.
2. Leave an **empty line** after the opening and before the closing line.
3. Edit them in **Source** mode.

You can use bold, links and lists inside a callout.

## Step-by-step instructions

Steps are written as small numbered headings, with the explanation underneath as normal text:

```
#### 1. Open the event

Go to the event where you want to create auctions.

![Event page with the Add auction button highlighted](/img/docs/auction-setup/auctions-1.png)

#### 2. Select products

Choose products from your Shopify catalog.
```

Use `####` (four `#`), then the step number, a period, and the step title. Screenshots and callout boxes can go under any step.

> Why not a normal numbered list? The visual editor slowly breaks indented text inside numbered lists each time a page is saved. Headings don't have that problem.

## Screenshots

**In Editor mode:** click where the image should go, press `/`, choose **Image**, and upload it. Pages CMS stores the file in the right place automatically.

**Good screenshots:**
- Crop to the part that matters. Avoid full-screen captures.
- Highlight the button or field you're talking about.
- Make sure no customer names, emails or order details are visible.
- PNG for app screenshots, under ~1 MB each.

**Always fill in the image description** (the "alt text"). Screen readers read it out, and it appears if the image can't load. Describe what the screenshot shows, e.g. "Event page with the Add auction button highlighted", not "image" or "screenshot".

In Source mode an image looks like this: `![Description of the screenshot](/img/docs/settings/my-screenshot.png)`

## Videos

### 1. Upload to YouTube

Upload on the **Reflow Auctions** channel. Settings for every help video:

| Setting | Value |
|---|---|
| **Visibility** | **Public** |
| **Audience** | **No, it's not made for kids** |
| **Age restriction** | **No**, don't restrict to viewers over 18 |
| **Paid promotion** | Leave **unchecked** |
| **Remixing** | **Don't allow** remixing (Show more → Shorts remixing) |
| **Category** | **Howto & Style** |
| **Comments** | **Off** (Show more → Comments and ratings). This is already the channel default |
| **Playlist** | Add to **Reflow Auctions help** |

**Title template:**
```
Reflow Auctions: <what the video shows>
```
Examples: `Reflow Auctions: Set up a Buyer's Fee` · `Reflow Auctions: Auction Cart & Checkout (admin setup)`

**Description template:**
```
<One or two sentences: what this video shows and who it's for.>

Full step-by-step guide: https://docs.reflowauctions.com/<page-path>

More help: https://docs.reflowauctions.com
```

**Recording tips:** record at 1920×1080. Zoom the browser so text is readable on a phone. Keep videos under 3 minutes, one task per video. Hide any customer data.

### 2. Add it to a page

You need the **video ID**: the 11 characters after `watch?v=` in the YouTube address.

> `https://www.youtube.com/watch?v=`**`S9Yjatw2Jdo`** → the ID is `S9Yjatw2Jdo`

In **Source** mode, on its own line with an empty line above and below:

```
::youtube{#S9Yjatw2Jdo title="Set up a Buyer's Fee"}
```

- Put the ID straight after `#`, with no spaces.
- `title` is what visitors and screen readers see on the play button. Use the YouTube title without "Reflow Auctions:".
- Don't paste the whole YouTube link. The site check will reject it and tell you which line is wrong.

**What visitors see:** a thumbnail with a play button. YouTube only loads when they click, which keeps pages fast and private, and uses YouTube's privacy-enhanced mode. Suggested videos at the end come from our own channel only. YouTube may still show ads; we can't turn those off.

## Release notes

1. In Pages CMS, open **Releases → New**.
2. **Version:** e.g. `v1.54.0`. The **file name must be the same**: `v1.54.0.md`. Pages CMS suggests a name from the version; check that it still has the dots.
3. **Release date:** pick the date.
4. **Release notes:** use only these headings, in this order, and skip any that don't apply:

```
## Features

- Added …

## Improvements

- Improved …

## Fixes

- Fixed …
```

Use `## Improvements (Admin app)` / `## Fixes (User side)` style headings only if a release needs that split.

5. Save, then **Publish site**. It appears at **/releases** and in the RSS feed ~2 minutes later.

Write for merchants, not developers: say what changed for *them* and where to find it. Link to the help page when there is one.

## Adding a new page

1. **Docs → New**, inside the right section folder (e.g. *settings*).
2. **Page title:** what shows at the top and in the sidebar.
3. **File name:** Pages CMS suggests one from the title, e.g. `bulk-actions.md`. **This becomes the page's web address** (`/managing-auctions/bulk-actions`), so keep it short, lowercase, with dashes, and **don't rename it later**: old links would break.
4. **Short description:** one sentence, shown in Google and search results.
5. Save. The new page appears **at the end of its section** in the sidebar. To move it, see [Reordering the sidebar](#reordering-the-sidebar).

To add a whole **new sidebar section**, ask a developer (it needs a new folder).

## Reordering the sidebar

In Pages CMS, open **Sidebar order** in the left menu. It's one page with a block for each sidebar section:

- **Reorder sections:** drag a section block by its handle.
- **Reorder pages within a section:** drag the pages inside that block.
- **Rename a section heading:** edit **Section heading**.
- Then **Save** and **Publish site**. The sidebar updates ~2 minutes later.

Things to know:
- Pages are listed by **file name** (e.g. `buyers-fee`), not title. Open the page in **Docs** if you're unsure which is which.
- **Don't change "Folder"**, and don't drag a page into a different section. A page's section is part of its web address, so moving it would break links. The site check will stop it and explain why.
- A page that isn't in the list still shows up, at the end of its section. So nothing disappears if you forget it; drag it into place when convenient.

## When a change doesn't show up

1. **Did you click Publish site?** Saving alone doesn't publish. Click it in the Pages CMS sidebar.
2. Wait 2–3 minutes and refresh. Your browser may be showing the old version, so try a private window.
3. Still not there? Open **https://github.com/reflow-auctions/docs/actions**. The newest run shows ✅ or ❌.
4. A ❌ means the site check found a problem, and the live site wasn't changed. Click the run, then the red step. The message names the file and the problem. Common ones:
   - **Broken link:** a link points to a page that doesn't exist. Check the address.
   - **`::youtube needs the form …`:** the video line isn't right. See [Videos](#videos).
   - **`file name must be v1.54.0.md`:** the release file name doesn't match its version.
   - **`date must be YYYY-MM-DD`:** the release date is missing or in the wrong format.
5. Fix it in Pages CMS, save, and publish again. If you're stuck, ask a developer and send them the link to the failed run.

---

## For developers

**Stack:** [Docusaurus 3](https://docusaurus.io) · GitHub Pages (custom domain `docs.reflowauctions.com`) · [Pages CMS](https://pagescms.org) (`.pages.yml`).

```bash
npm ci            # install
npm start         # local dev server
npm test          # unit tests
npm run check     # content rules (Mantle refs, release names/dates, ::youtube lines)
npm run build     # production build; fails on broken links/anchors/images
```

| Path | What |
|---|---|
| `docs/<section>/*.md` | Help pages; folder = sidebar section |
| `sidebar.yml` | Sidebar order and section headings (drag-and-drop in Pages CMS); built by `scripts/sidebar.mjs` |
| `releases/v*.md` | Release notes (blog plugin at `/releases`) |
| `static/img/docs/` | Screenshots (Pages CMS uploads here) |
| `src/components/YouTube/` | Click-to-load youtube-nocookie player |
| `src/remark/youtube.mjs` | Turns `::youtube{#id title="…"}` into `<YouTube>` |
| `src/css/custom.css` | Theme (Mantle-style dark palette, flat sidebar) |
| `scripts/check-content.mjs` | CI content guard |
| `.github/workflows/deploy.yml` | Build on PRs; build + deploy on `main` |
| `.design/` | Migration spec, plan, and post-migration to-do |

**Content conventions:** these exist so content survives Pages CMS's rich-text (TipTap) round-trip unchanged.
- Files are `.md` (CommonMark), not `.mdx`.
- Steps are `#### N. Title` headings, not indented list items (TipTap re-indents list bodies on each save).
- Videos use the attribute form `::youtube{#ID title="…"}`; the `[label]` form gets its brackets escaped by the editor.
- Admonitions (`:::tip` …) must be top-level, not nested in lists.

Pushes to `main` deploy. Use PRs for code changes; content edits from Pages CMS commit directly.
