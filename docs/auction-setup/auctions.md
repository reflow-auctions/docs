---
title: "Auctions"
sidebar_position: 2
description: "Create auctions by selecting products from your Shopify catalog and assigning them to an event. You can add products one by one or browse by collection, then..."
---

Create auctions by selecting products from your Shopify catalog and assigning them to an event. You can add products one by one or browse by collection, then apply shared auction settings like start time, end time, starting bid, and bid increment to all selected items at once.

When you add products to an event, the system creates one auction for each eligible product you select.

## How auction creation works

- Select products individually or by collection.
- Apply default settings in bulk to all products in the current batch.
- Choose whether the auctions should be saved as **Draft** or made **Active**.
- Return later to adjust settings for individual auctions if needed.

:::tip

If you still need to configure details like Buy It Now, it is best to create auctions as **Draft** first and publish them after review.

:::

## Create auctions for an event

1. **Open the event**

   Go to the event where you want to create auctions. Auctions are always created inside a specific event.

   ![Event page with the Add auction button highlighted in the top right corner](/img/docs/auction-setup/auctions-1.png)

2. **Select products or collections**

   Choose products from your Shopify catalog. You can browse individual products or switch to collections to add multiple products more efficiently.

   ![Add products or collections window showing selectable products for auction creation](/img/docs/auction-setup/auctions-2.png)

3. **Set the default auction parameters**

   Enter the settings you want applied to all selected products in this batch.

4. **Choose Draft or Active**

   Decide whether to save the auctions as **Draft** or publish them immediately. This choice determines whether the auctions are visible in the magazine right away.

5. **Review individual auctions if needed**

   After the auctions are created, you can open any individual auction and adjust its settings without changing the others.

## Setting default auction parameters

The **Properties** panel lets you apply the same starting values to every product you are adding in the current batch. This is the fastest way to create many auctions with consistent timing and bidding rules.

![image](/img/docs/auction-setup/auctions-3.png)

### Available default settings

- **Start date**: The date the auction becomes scheduled or begins running.
- **Start time**: The exact time the auction starts.
- **End date**: The date the auction is set to end.
- **End time**: The exact ending time for the auction.
- **Starting bid**: The amount bidders see as the opening bid.
- **Bid increment**: The amount each new bid must increase by.
- **Remaining time**: The countdown shown during active bidding, if your setup uses timed extensions.
- **Additional time**: The amount of extra time added when late bids extend the auction.

### How these defaults are applied

- Every eligible product you add in the current batch receives the same default values.
- You can still edit an auction individually after it has been created.
- Changing the values in the panel affects the products you are creating now, not previously created auctions.

:::note

Default auction parameters are useful when a group of products should follow the same schedule and bidding structure. If some items need different settings, create them first with shared defaults, then open those auctions individually to fine-tune them.

:::

### Best practices for default settings

- Double-check the time zone shown on the screen before publishing active auctions.
- Use a starting bid and bid increment that fit the value of the products in the batch.
- Create auctions as **Draft** if you still need to review item-specific details.
- If you are adding many items from a collection, confirm the default settings before saving so all auctions are created correctly the first time.

## Draft vs. Active auctions

When you create auctions, their initial status depends on the action you choose and the start date you set.

- **Draft**: The auction is saved but not shown in the magazine.
- **Active**: The auction is published and may appear as scheduled or running, depending on the start date and time.

This gives you flexibility to prepare auctions in advance, review them, and publish only when everything is ready.

## What to check before saving

- The correct event is selected.
- Your product list only includes items you want to turn into auctions.
- Start and end dates are correct.
- Starting bid and bid increment match your auction strategy.
- You have chosen the right initial status: **Draft** or **Active**.

:::warning

If a product is invalid or has already been added to another auction, you may need to remove it from the batch before you can save successfully.

:::
