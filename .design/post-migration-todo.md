# Post-migration to-do (owner)

Things the migration left for a human. Each one is safe to do in Pages CMS (Source mode) or by editing the file directly.

## 1. Video links ✅ done

Embedded with the reusable `::youtube` component (click-to-load, youtube-nocookie, `rel=0`).
To add a video anywhere, put this on its own line (in Pages CMS use **Source** mode):

```
::youtube[Video title]{#VIDEO_ID}
```

`VIDEO_ID` is the 11 characters after `watch?v=` in the YouTube URL. The content check fails the build if it's wrong.

## 2. Dead "related page" cards (already 404 on Mantle; now plain text)

| Page | Card | Old Mantle link | Suggested fix |
|---|---|---|---|
| `docs/theme-setup/about-theme-blocks.md` (line 142) | Creating Auctions | `/quick-start/creating-auctions` | link to `/auction-setup/auctions` |
| `docs/theme-setup/about-theme-blocks.md` (line 146) | Settings | `/configuration/settings` | link to `/settings/checkout-settings` |
| `docs/bidding-purchasing/buy-it-now.md` (line 179) | Make Offer | `/make-offer` | delete the card (no Make Offer page exists) |
| `docs/bidding-purchasing/buy-it-now.md` (line 187) | Checkout Rules | `/checkout-rules` | link to `/settings/checkout-settings` |

Link format inside a card: `- **[Creating Auctions](/auction-setup/auctions)**`

## 3. Release dates

| File | Current | Likely correct |
|---|---|---|
| `releases/v1.15.0.md` | `2024-01-13` | `2025-01-13` |
| `releases/v1.16.0.md` | `2024-01-27` | `2025-01-27` |

Keep the `YYYY-MM-DD` format, or the content check fails the build.

## 4. Notion links (kept as-is; check they're public)

Open each one in a private browser window. If it asks you to log in, customers will hit that too. ⚠️ = the Notion page title doesn't match the release note (this was already wrong on Mantle).

| File | Line | Release note | Link text | Notion page |
|---|---|---|---|---|
| `releases/v1.42.0.md` | 8 | Simplified Onboarding guide for Merchants | Setup guide | Online Store App Blocks in Themes Editor |
| `releases/v1.42.0.md` | 10 | Items Summary Page for the Storefront | Learn more | Draft Orders ⚠️ |
| `releases/v1.42.0.md` | 11 | Bidder Profile UI extension | Learn more | Statistics & Insights ⚠️ |
| `releases/v1.41.0.md` | 8 | Shopify Flow integration | Setup guide | Shopify Flow Support |
| `releases/v1.41.0.md` | 9 | Event Export (CSV) | Learn more | Statistics & Insights |
| `releases/v1.41.0.md` | 13 | Buyer’s Fee / Fixed Fee unification | Learn more | Settings & Configuration |
| `releases/v1.41.0.md` | 14 | Refined auction filtering on Catalog | Setup guide | FAQ & Troubleshooting ⚠️ |

Several of these now have real pages on the new site (e.g. `/automation/shopify-flow`, `/settings/buyers-fee`). Swapping the links over is optional.

## 5. Text cleanups

| File | Line | Problem | Fix |
|---|---|---|---|
| `releases/v1.37.0.md` | 18 | Shows literal asterisks: `Added \*\*\*\*support \*\*\*\*for…` | `- Added support for the **Horizon theme**.` |
| `releases/v1.37.0.md` | 25–27 | Split sentence: `**Resolved**` / `minor bugs and UI inconsistencies.` | One bullet under `## Fixes`: `- Resolved minor bugs and UI inconsistencies.` |
| `docs/quick-start/welcome.md` | 4 | Description describes Mantle's UI ("Ask A.I.", "Search or ask") | Rewrite in one sentence about Reflow Auctions |
| 29 doc pages | 4 | `description:` is Mantle's cut-off version ending in `..."` | Optional; it's shown in search results. Rewrite the important ones |

## 6. Going live (after the PR is merged)

- [ ] DNS: `CNAME docs → reflow-auctions.github.io`
- [ ] Repo Settings → Pages: Source = GitHub Actions; Custom domain = `docs.reflowauctions.com`; then tick Enforce HTTPS once offered
- [ ] Install Pages CMS on the `docs` repo; give editors access
- [ ] Test-edit one page with a callout box in Pages CMS and check it still looks right
- [ ] Ask Mantle to redirect `reflow.mantledocs.com/*` → `docs.reflowauctions.com/*`
- [ ] Update help links in the Shopify listing, the app, and emails
- [ ] Cancel Mantle
