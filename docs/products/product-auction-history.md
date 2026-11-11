---
title: "Auctions on the Product Page"
description: "Create an auction and review every auction for a product directly from its Shopify admin product page."
---

The **Reflow Auctions** block on a product's details page in Shopify admin lets you create an auction for that product and see every auction it has been in, without leaving the product page.

The block has two parts:

- **Create auction**: add the product to an event and publish the auction or save it as a draft
- **Auction history**: every auction connected to the product, with its event, status, end date and number of bids

![Reflow Auctions block on a Shopify product page with the Create auction button and an Auction history table listing three events with Draft and Unsold statuses](/img/docs/products/product-auction-history-1.png)

## Add the Reflow Auctions block

#### 1. Open Products in Shopify admin

Go to **Shopify Admin → Products**.

#### 2. Open a product

Select any product to open its **Product details** page.

#### 3. Add the app block

Scroll to the **Blocks** section and click **\+ Block**.

#### 4. Choose Reflow Auctions

Select **Reflow Auctions**. The block is added to the page.

#### 5. Optional: pin the block for your team

Click the pin icon to pin the block to product pages for all staff.

:::tip

Pinning the block is useful if your team creates auctions or reviews auction activity from product pages.

:::

## Create an auction from the product page

#### 1. Click Create auction

In the **Reflow Auctions** block, click **Create auction**. The **Create auction** window opens with the product shown at the top.

![Create auction window for The Scream by Edvard Munch with Event, Schedule, Starting bid, Bid increment and Popcorn bidding fields and Save as draft, Cancel and Publish buttons](/img/docs/products/product-auction-history-2.png)

#### 2. Choose an event

In **Event**, select the event to add the auction to. Only events that aren't archived and haven't reached their estimated end time are listed.

When you choose an event, the auction settings are filled in from that event's defaults.

#### 3. Check the schedule

Under **Schedule**, set the **Start date**, **Start time**, **End date** and **End time**. By default, the auction starts now and ends at the event's estimated end time. Times are in your store's time zone, shown as **Time zone**.

#### 4. Check the auction properties

Review the **Starting bid**, **Bid increment**, and the **Remaining time** and **Additional time** for **Popcorn bidding**.

#### 5. Publish or save as draft

- Click **Publish** to make the auction active right away.
- Click **Save as draft** to save it without publishing, so you can review it later.

When the auction is created, a confirmation appears. From there, click **View details** to open the auction, **View auction in Reflow Auctions** to open it in the app, or **Done** to close the window.

![Auction created confirmation saying the auction for The Scream by Edvard Munch has been published, with View auction in Reflow Auctions, View details and Done](/img/docs/products/product-auction-history-3.png)

:::note

Buy It Now isn't part of the create form. To turn it on, open the auction's details after you create it.

:::

Published auctions count toward your [first 50 free auctions](/quick-start/installation#track-your-first-50-free-auctions). Drafts don't.

### When you can't create an auction

If the product can't be auctioned, **Create auction** isn't available and the block shows the reason instead:

| Message | What to do |
|---|---|
| **Archived products can't be auctioned.** | Change the product status in Shopify. |
| **Already in an active or scheduled auction.** | Wait until the current auction ends, or cancel it. |
| **Product is out of stock.** | Add inventory to the product. |
| **Inventory is reserved in an open invoice.** | Wait until the invoice is paid, expires or is canceled. |

Draft and unlisted products can be added to an auction as a draft, but can't be published until the product is active.

### If there are no events to choose

If you don't have an event that can take new auctions, the window shows **No eligible events**. Click **Create an event to add this product to an auction**. After you create the event, you return to the product page and can create the auction.

## Auction history

**Auction history** lists every auction connected to the product, newest first:

| Column | What it shows |
|---|---|
| **Event** | The event the auction belongs to |
| **Status** | The auction's status, for example **Draft**, **Active** or **Unsold** |
| **End date** | When the auction ended or is scheduled to end |
| **Bids** | The number of bids placed |

Use the arrows next to **Page** to see more auctions. Click **View all auctions** to open the **Auctions** page in Reflow Auctions, filtered to this product.

If the product hasn't been in any auction yet, the block shows **No auctions yet for this product.**

## Open an auction's details

Select an auction in **Auction history**, or click **View details** after you create one, to open its details without leaving the product page. You'll see:

- The auction's status and end date
- The schedule and auction properties, which you can change while the auction can still be edited
- A **Buy It Now** switch to turn Buy It Now on or off
- **Bids**: each bid's bidder, amount and time, with a **Buy It Now** badge for Buy It Now purchases. Click **Refresh** to load new bids.

Depending on the auction's status, you can:

- **Publish** a draft auction
- **Save** your changes
- **Keep auction** to restore a canceled auction
- **Cancel auction**, then choose a cancellation reason and confirm
- Click **View auction in Reflow Auctions** to open the full auction record

## Related pages

- [Creating auctions](/auction-setup/auctions)
- [Creating events](/auction-setup/events)
- [Auction statuses](/managing-auctions/auction-statuses)
- [Buy It Now](/bidding-purchasing/buy-it-now)
- [Canceling auctions](/managing-auctions/canceling-auctions)
