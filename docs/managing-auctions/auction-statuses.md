---
title: "Auction Statuses"
sidebar_position: 2
description: "An auction’s status shows where it is in the bidding lifecycle, from setup to completion. These labels help admins quickly understand whether an auction is u..."
---

An auction’s status shows where it is in the bidding lifecycle, from setup to completion. These labels help admins quickly understand whether an auction is upcoming, live, completed, sold early, or no longer active.

Statuses update automatically based on the auction’s schedule, or manually when an admin cancels or saves an auction as a draft.

![image](/img/docs/managing-auctions/auction-statuses-1.png)

:::info

Use the auction status to confirm what buyers can currently do. For example, buyers can only place bids when an auction is **Running**.

:::

## Auction Status Types

### Active Statuses

These statuses are tied to the auction’s configured start and end date and time.

#### Scheduled

The auction has been published but has not started yet. It will automatically change to **Running** when the start date and time are reached.

- Visible to buyers if published
- Not yet accepting bids
- Best used for upcoming auctions with a defined launch time

#### Running

The auction is currently live and accepting bids.

- Buyers can place bids
- The auction remains in this status until it ends or is completed early through Buy It Now
- At the end, it will move to **Finished** or **Sold / Buy It Now**, depending on how it closes

#### Finished

The auction ended after reaching its configured end date and time, including any extra time added by popcorn bidding.

- If valid bids were placed, a winning bidder is recorded
- If no valid bids were placed, the auction ends without a sale
- This status is used for auctions that finish through the normal bidding process

### Completed Status

#### Sold / Buy It Now

The auction ended early because a buyer completed the purchase using **Buy It Now**.

- The regular bidding process stops immediately
- The item is treated as sold through the Buy It Now flow
- This status is different from **Finished**, which is used when the auction ends through standard bidding

### Other Statuses

#### Draft

The auction has been created but is not published yet.

- Not visible to buyers
- Useful while reviewing auction details before launch
- Recommended when you still need to configure options like **Buy It Now** or **Make Offer**

#### Canceled

The auction was manually canceled before completion.

- No winner is assigned
- No order is created
- Buyers can no longer interact with the auction

An auction is cancelled automatically if certain system validations are triggered while it is running. For example, this can happen if its product is set to Draft or Unlisted, or if the product is sold through another channel.

:::note

If an auction ends with a winning bidder through regular bidding, the status is **Finished**. If it is completed through the **Buy It Now** flow, the status is **Sold / Buy It Now**.

:::

## How Status Changes Happen

1. **Draft**

   The auction is being prepared and is not yet visible to buyers.

2. **Scheduled**

   After publication, the auction becomes scheduled until its configured start time arrives.

3. **Running**

   At the start time, the auction goes live and begins accepting bids.

4. **Finished or Sold / Buy It Now**

   The auction either ends normally at the end of the bidding period or closes early if a buyer uses Buy It Now.

## Quick Reference

### When should I use Draft?

Use **Draft** when the auction is not ready for buyers to see. This is helpful if you still need to review pricing, timing, photos, or selling options before publishing.

### Why is my auction still Scheduled?

An auction stays **Scheduled** until the configured start date and time are reached. If it has not started yet, review the auction’s start time settings.

### What is the difference between Finished and Sold / Buy It Now?

**Finished** means the auction ended through the normal bidding timeline. **Sold / Buy It Now** means the item was purchased early using the Buy It Now option.

### Does Finished always mean the item sold?

No. An auction can be **Finished** with or without a sale, depending on whether a valid bid was placed before the auction ended.

### What happens when an auction is Canceled?

A canceled auction is stopped either manually by an admin or automatically by the system. No winner is assigned and no order is created.

:::tip

If you are checking whether buyers should be able to bid, look for the **Running** status first. If the auction is **Draft**, **Scheduled**, **Finished**, or **Canceled**, bidding is not active.

:::
