---
title: "Auction automation"
description: "Automatically manage Shopify product statuses and product templates as auctions and invoices progress."
---

Use the **Auction automation** settings to control how Reflow Auctions updates Shopify products during the auction lifecycle. You can automate product statuses, apply an auction-specific product template, or manage either setting manually.

![Automation settings showing Auction product status and Auction product template](/img/docs/settings/auction-automation-1.png)

:::note

If the **Auction automation** section does not appear in your settings, this functionality is not currently enabled for your store.

:::

## Open Auction automation settings

#### 1. Open Reflow Auctions

From your Shopify admin, go to **Apps**, then open **Reflow Auctions**.

#### 2. Open Settings

Select **Settings** from the app navigation.

#### 3. Select Automation

Select **Automation** from the Settings menu. The **Auction automation** section contains the **Auction product status** switch and **Auction product template** selector.

## Auction product status

The **Auction product status** setting is off by default. Turn it on to let Reflow Auctions update the Shopify product status as its auctions and invoices progress.

| Auction or invoice state | Shopify product status |
|---|---|
| A new auction starts and the product is available | **Active** |
| An auction invoice is open | **Unlisted** |
| The product is unsold, or its invoice is cancelled or expires | **Draft** |

Turn this setting off if you want to manage product statuses yourself in Shopify. Turning it off stops Reflow Auctions from making future automatic status changes; review the current product status in Shopify and update it manually when needed.

:::warning

Automatic status changes affect product availability in Shopify. Review this setting before publishing auctions if another sales process or app also manages your product statuses.

:::

## Auction product template

Product-template automation is disabled by default. Use **Auction product template** to choose the product template that identifies products being used for auctions.

When a new auction starts, Reflow Auctions applies the selected template to its product so the Auction Widget appears on the product page. The template remains assigned while it is needed for an active auction or open invoice. When it is no longer needed, Reflow Auctions removes the auction template from the product.

Select **None (automation disabled)** if you want to assign templates and manage the Auction Widget manually.

Use the view icon beside **Auction product template** to open the selected template in Shopify.

:::note

The Reflow Auctions app embed must also be enabled in your live theme. See [App Embed](/theme-setup/app-embed) for setup instructions.

:::

## Change the auction product template

#### 1. Open the template selector

In **Settings > Automation**, open the **Auction product template** selector.

#### 2. Choose a template

Select the product template you want Reflow Auctions to use for auction products. The selector shows templates available in your live Shopify theme.

#### 3. Save your changes

Save the settings. Reflow Auctions applies the selected template to eligible auction products.

If the selected template is later removed from the live theme, the app displays a warning. Select another available template to enable the automation again.

## Troubleshooting

### Auction automation is not visible

The functionality may not be enabled for your store. Continue managing product statuses and templates in Shopify, or contact support to confirm availability.

### The Auction Widget does not appear

- Confirm the Reflow Auctions app embed is enabled in the live theme.
- Confirm an auction product template is selected instead of **None (automation disabled)**.
- Confirm the selected template still exists in the live theme.
- Confirm the product has an active auction.

### A product has an unexpected status

Check whether **Auction product status** is enabled, then review the product's auction and invoice state. If the setting is off, manage the product status directly in Shopify.

## Related pages

- **[Installation](/quick-start/installation)**

  Install Reflow Auctions and complete the Quick setup guide.

- **[App Embed](/theme-setup/app-embed)**

  Enable Reflow Auctions in your live theme so auction widgets can appear.

- **[Shopify Flow](/automation/shopify-flow)**

  Build separate workflows triggered by Reflow Auctions events and auction activity.
