---
title: "Auction collections"
description: "Keep Shopify collections of running, scheduled, Buy It Now and ending-soon auctions up to date automatically."
---

**Auction collections** keep your Shopify collections filled with auction products automatically. Connect a collection to Reflow Auctions, choose which auctions it should show, and the app adds and removes products as auctions start, change and end. Use these collections anywhere in your store, for example in your menu or on your home page.

![Automation settings with an arrow pointing to the Auction collections card, which explains how to connect collections and has an Ending soon threshold of 15 minutes](/img/docs/settings/auction-collections-1.png)

## Collection types

When you connect a collection, choose one of these types:

| Type | Products in the collection |
|---|---|
| **All active auctions** | Products in any published auction that hasn't ended, both running and scheduled |
| **Running auctions** | Products in auctions that have started and haven't ended |
| **Scheduled auctions** | Products in auctions that haven't started yet |
| **Buy it now** | Products in running auctions with Buy It Now turned on. If **Allow Buy It Now on Scheduled Auctions before they start** is on in **Settings → Bidding**, scheduled auctions with Buy It Now are included too. |
| **Ending soon** | Products in running auctions that end within your [Ending soon threshold](#set-the-ending-soon-threshold) |

In every type, a product is only included while its auction:

- Is published, not a draft or canceled
- Hasn't been sold
- Has its auction widget visible on the storefront
- Belongs to an event that isn't archived

Collections update within a minute as auctions change. You can connect as many collections as you need, including several of the same type.

## Connect a collection to Reflow Auctions

#### 1. Open a collection in Shopify admin

Go to **Shopify Admin → Products → Collections**. Open an existing collection or click **Create collection**.

#### 2. Choose App as the collection type

In the collection type card, choose **App**, then click **Connect app**.

#### 3. Select a collection type

In **Select app**, choose **Reflow Auctions**, then select the type of auctions the collection should show, for example **Running auctions**.

![Shopify Select app window for Reflow Auctions listing All active auctions, Buy it now, Ending soon, Running auctions and Scheduled auctions](/img/docs/settings/auction-collections-2.png)

#### 4. Connect and save

Click **Connect**, then save the collection. Within a minute, Reflow Auctions adds the matching auction products to it.

:::tip

Add the collection to your store menu or home page so shoppers can browse auctions by type, such as **Ending soon** or **Buy it now**.

:::

## Set the Ending soon threshold

The **Ending soon threshold** decides when an auction moves into **Ending soon** collections. For example, with a threshold of **15 minutes**, an auction appears in the collection when 15 minutes or less are left before it ends.

#### 1. Open the Automation settings

In Reflow Auctions, go to **Settings → Automation**.

#### 2. Set the threshold

In the **Auction collections** card, enter a whole number in **Ending soon threshold** and choose **minutes**, **hours** or **days**. The threshold can be from 15 minutes to 1 day (24 hours). The default is 30 minutes.

#### 3. Save your changes

Click **Save**.

## Good to know

- Collections connected to Reflow Auctions don't appear in the collection list when you add products to an auction, so you don't add auction collections to new auctions by mistake.

## Related pages

- [Auction automation](/automation/auction-automation)
- [Buy It Now](/bidding-purchasing/buy-it-now)
- [Auction statuses](/managing-auctions/auction-statuses)
