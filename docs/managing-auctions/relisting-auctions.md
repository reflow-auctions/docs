---
title: "Relisting Auctions"
description: "Bring auctions from previous events into a new event: filter by outcome, choose the auctions, set a new schedule and relist them in one go."
---

Relisting lets you bring auctions from previous events into a new event, for example items that didn't sell or whose invoice expired. Relisting creates new auctions. The original auctions and their history stay unchanged.

You can relist auctions in two ways:

- **From the event page**: relist auctions straight into the event as drafts. See [Relist auctions into an event](#relist-auctions-into-an-event).
- **From the Add auctions page**: add relisted items to the list of products you're adding, then publish them or save them as drafts. See [Relist while adding auctions](#relist-while-adding-auctions).

## Relist auctions into an event

#### 1. Open the event

Open the event you want to add the auctions to.

#### 2. Open Relist auctions

Click **More actions** and select **Relist auctions**.

![Event page with the More actions menu open and Relist auctions highlighted](/img/docs/managing-auctions/relisting-auctions-1.png)

#### 3. Find the auctions to relist

The **Relist auctions** window shows the **Destination event** at the top. To find auctions:

- In **Previous events**, select one or more events, or **All events**.
- Or use **Search products** to find a product across all previous events.
- Use **Outcome** to show only auctions with a certain result. See [Outcomes](#outcomes).

Click **Clear all filters** to start over.

![Relist auctions window with one previous event selected, a list of Sold and Unsold auctions, two of them checked, and the New auction schedule fields](/img/docs/managing-auctions/relisting-auctions-2.png)

#### 4. Select the auctions

Check the auctions you want to relist. The table shows each auction's **Product**, **Previous event**, **Outcome** and **Available** inventory. The number of selected auctions appears below the table. Click **Clear selection** to uncheck them all.

#### 5. Set the new schedule

Under **New auction schedule**, set the **Start** and **End** date and time for the new auctions. By default, they start now and end at the event's estimated end time. The end must be after the start.

#### 6. Relist

Click **Relist [number] auctions**. The new auctions are added to the event as **Draft**, and a confirmation shows how many were relisted.

![Event auction list showing the two relisted auctions with Draft status and a confirmation saying 2 auctions relisted](/img/docs/managing-auctions/relisting-auctions-3.png)

The new auctions keep the original auctions' settings, such as starting bid, bid increment, popcorn bidding, Buy It Now and Make offer. Review them, then publish them when you're ready.

:::note

When you relist a large number of auctions, a progress bar shows how many have been relisted so far.

:::

## Relist while adding auctions

#### 1. Open Add auctions

Open the event and click **Add auction**.

#### 2. Open Relist auctions

In the **Relist auctions** card, click **Select auctions to relist**.

![Add auctions to event page with an arrow pointing to the Relist auctions card and its Select auctions to relist button](/img/docs/managing-auctions/relisting-auctions-4.png)

#### 3. Choose the auctions

Find and select auctions the same way as in [Relist auctions into an event](#relist-auctions-into-an-event). Your selections are kept when you change filters.

#### 4. Add them to the list

Click **Add [number] auctions**. The products are added to **Products/collections** on the page.

#### 5. Publish or save as draft

Review the **Properties**, such as dates, starting bid and bid increment, then click **Publish** or **Save as draft**.

When you relist this way, the new auctions use the properties on the **Add auctions** page instead of the original auctions' settings. Buy It Now and Make offer are turned off.

## Which auctions you can relist

The **Relist auctions** window shows auctions from previous events that have ended: their estimated end time has passed and none of their auctions are still running. The event you're relisting into isn't included.

From those events, you can relist auctions that ended, sold, or were canceled. If a product was in the same event more than once, only its latest auction is shown.

You can't select an auction when:

- The product has no available inventory. Products that don't track inventory, or that continue selling when out of stock, can always be selected.
- The product is already in the destination event.

:::info

Only products with available inventory can be selected.

:::

### Outcomes

Each auction shows its **Outcome**. Use the **Outcome** filter to narrow the list:

| Filter | Shows |
|---|---|
| **All** | Every auction you can relist |
| **Unsold** | Every auction that didn't result in a sale: No sale, Unsold, Invoice canceled and Invoice expired |
| **No sale** | Auctions that ended without bids, or that were canceled |
| **Invoice canceled** | Auctions whose invoice was canceled |
| **Invoice expired** | Auctions whose invoice expired before it was paid |
| **Sold (stock available)** | Sold auctions whose product still has stock |

The **Invoice canceled** and **Invoice expired** filters appear for stores that use [Auction Cart & Checkout](/bidding-purchasing/auction-cart-checkout).

## If some auctions can't be relisted

If any selected auction can't be relisted, nothing is relisted. The window lists the reasons and how many auctions each one affects. Uncheck those auctions, or fix the issue, and try again.

## Frequently asked questions

### Does relisting change the original auction?

No. Relisting creates new auctions. The original auctions and their history are preserved.

### Is the new auction immediately active?

When you relist from the event page, the new auctions are created as drafts. When you relist from the **Add auctions** page, you choose whether to publish them or save them as drafts.

### Can I relist auctions from several events at once?

Yes. Select several events in **Previous events**, or select **All events**.

## Related pages

- [Creating events](/auction-setup/events)
- [Creating auctions](/auction-setup/auctions)
- [Auction statuses](/managing-auctions/auction-statuses)
- [Bulk actions](/managing-auctions/bulk-actions)
