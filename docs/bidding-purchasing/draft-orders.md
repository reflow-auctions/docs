---
title: "Draft Orders"
description: "When an event finishes, Reflow Auctions creates draft orders that group each bidder's winning items, ready for invoicing and payment."
---

Draft orders are created automatically after an event is fully finished. They collect each bidder’s winning items into an order draft that you can use for the next steps in your workflow, such as sending invoices and collecting payment.

:::info

A separate draft order is created for each buyer. If buyer’s fees are enabled, those fees are included in the draft order.

:::

## How draft orders are created

Draft order creation begins only when the event is considered complete. The system waits until both the event timing and all active auctions are finished before generating any orders.

#### 1. Wait for the event to complete

The event must reach its **Estimated End Time**.

#### 2. Confirm all auctions are finished

Every active auction in the event must also be closed. If even one auction is still running, draft orders will not be generated yet.

#### 3. Group winning items by buyer

Once the event is complete, the system groups all winning bids by buyer.

#### 4. Create one draft order per buyer

Each buyer receives a separate draft order containing their won items and any applicable buyer’s fee.

## What a draft order includes

- All items the buyer won in the event
- A separate order draft for each buyer
- Buyer’s fees, if that setting is enabled

## When draft orders are delayed

Draft orders are not created based only on the event’s planned schedule. They are created after the event actually finishes, which may be later than expected.

:::warning

The **Estimated End Time** is not dynamic. It does not automatically update if you add more auctions to the event or if existing auctions run longer than expected.

:::

### Draft order creation is delayed if:

- An auction ends later than the event’s Estimated End Time
- Auction extensions push the final closing time later
- New auctions are added to the same event while it is still ongoing

In all of these cases, the system waits until the final active auction has finished before generating draft orders.

:::note

Auction end times may run later than the time originally set in Admin. For example, **popcorn bidding** can extend the auction when bids are placed near the end.

:::

## Key rule

Draft orders are generated only after the later of these two times:

- The event’s **Estimated End Time**
- The actual closing time of the **last active auction** in the event

:::tip

If draft orders have not appeared when you expected, check whether any auction in the event closed late or was extended by last-minute bidding.

:::

## How this affects your workflow

Draft orders are the bridge between auction results and checkout or invoicing. Because they are created only after the full event is complete, any delay in auction completion also delays:

- Invoice generation
- Payment collection
- Order review and fulfillment steps

If you are planning post-event communications, it is best to account for possible auction extensions before promising a specific invoice delivery time.

## Items Summary page

The **Items Summary** page gives bidders a clear view of all items they are currently winning across auctions in the same event.

It groups those items into **Draft Orders**, helping bidders understand how their wins will be combined into orders once the event and all related auctions are fully complete.

:::info

This page is especially useful during live or multi-auction events because bidders can review their current winning items in one place before final orders are created.

:::

## Installing the Items Summary page

You can add the **Items Summary** page to your storefront so bidders can view their current winning items and expected order grouping.

#### 1. Open your storefront setup

Go to the area where you manage your storefront pages and navigation.

#### 2. Add the Items Summary page

Add the **Items Summary** page to your storefront experience.

#### 3. Publish your changes

Save and publish the storefront update so bidders can access the page.

#### 4. Review the bidder experience

Confirm that bidders can see their currently winning items grouped into draft orders during the event.

:::note

Items shown on the Items Summary page are not final orders yet. They remain grouped as draft orders until the event is fully complete and draft order generation finishes.

:::

## What bidders should expect

- They can see items they are currently winning before the event ends
- Items are grouped based on how final orders will be created
- Final draft orders are created only after the event and all active auctions are fully complete

## Common questions

### Why were draft orders not created when the Estimated End Time passed?

Draft orders are not created until **all active auctions** in the event are finished. If any auction is still open or was extended, the system continues waiting.

### Does adding a new auction to an event affect draft orders?

Yes. If you add a new auction to an ongoing event, it becomes part of that same event. The system waits for that auction to finish before creating draft orders.

### Can actual auction end times differ from the planned end time?

Yes. Auctions may end later than planned, especially when popcorn bidding extends the close time after last-minute bids.

### Are buyer’s fees included in draft orders?

Yes. If buyer’s fees are enabled, they are included in the draft order for that buyer.
