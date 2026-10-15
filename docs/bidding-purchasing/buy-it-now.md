---
title: "Buy it Now"
sidebar_position: 2
description: "The Buy It Now feature lets you offer an auction item at a fixed price so customers can purchase it immediately instead of waiting for the auction to end. Th..."
---

The **Buy It Now** feature lets you offer an auction item at a fixed price so customers can purchase it immediately instead of waiting for the auction to end. This creates a hybrid experience that combines the excitement of auctions with the convenience of instant checkout.

![image](/img/docs/bidding-purchasing/buy-it-now-1.png)

:::info

Buy It Now is useful when you want to give shoppers a faster path to purchase while still running an auction listing.

:::

### Before you enable Buy It Now

:::warning

The app supports **single-unit sales** across all sales flows: **Auction**, **Buy It Now**, and **Make Offer**. Once a product is sold through any of these methods, the related auction closes automatically, even if more inventory exists for that product.

:::

This behavior is designed to maintain a single-winner auction experience and reduce the risk of overselling the same listing through multiple purchase paths.

:::tip

For the most reliable setup, create a **separate product with tracked inventory** specifically for your auction listing. This helps prevent conflicts with your other sales channels.

:::

### Why a separate auction product is recommended

Shopify does not always indicate the exact sales channel for each order in a way that allows the app to distinguish every sale source. Because of this, any sale involving the same product variant used in an auction can be treated as part of the auction flow.

When that happens, the auction may end automatically as if the item had been sold through Buy It Now or another auction-related purchase method.

- Use a dedicated product for auction listings.
- Make sure inventory tracking is enabled for that product.
- Avoid reusing the same variant in other live sales channels when possible.

:::note

Using a dedicated auction product gives you more accurate inventory handling and more predictable auction behavior.

:::

### Checkout requirement

:::warning

To support correct app behavior during checkout, you must create a **dedicated Checkout Rule** for the app.

:::

![image](/img/docs/bidding-purchasing/buy-it-now-2.png)

Without the required checkout rule, Buy It Now purchases may not follow the expected auction and checkout flow.

## How Buy It Now works

Buy It Now is turned **off by default**. You can enable it in either of these places:

- The **Auction Details** page for an individual auction
- **Bulk editing** from the Auctions table

### Conditions required to enable Buy It Now

Buy It Now can only be enabled when the auction meets the required conditions.

- The auction status is **Draft** or **Scheduled**
- A **product price** is set for the auction item
- The product price is **higher than the starting bid price**

![image](/img/docs/bidding-purchasing/buy-it-now-3.png)

:::note

If Buy It Now is unavailable, review the auction status and pricing first.

:::

## Enable Buy It Now for a single auction

#### 1. Open the auction

Go to the **Auctions** section in the app and open the auction you want to update.

#### 2. Find the Buy It Now setting

On the **Auction Details** page, locate the **Buy It Now** option in the auction settings.

#### 3. Turn the feature on

Enable **Buy It Now** for the listing.

#### 4. Set or confirm pricing

Make sure the product price is already set and that it is higher than the starting bid amount.

#### 5. Save your changes

Save the auction so the Buy It Now option becomes part of the live customer experience when the auction is available.

## Enable Buy It Now in bulk

If you manage many auctions at once, you can update multiple listings from the Auctions table using bulk editing.

#### 1. Open the Auctions table

In the app admin, go to the page that lists all auctions.

#### 2. Select the auctions

Choose the auctions you want to update.

#### 3. Use bulk editing

Open the bulk edit option and choose the setting for **Buy It Now**.

#### 4. Apply the change

Turn Buy It Now on for the selected auctions, then save the update.

## Customer purchase flow

When Buy It Now is enabled and visible on an auction listing, customers can choose to purchase the item immediately at the fixed price.

![image](/img/docs/bidding-purchasing/buy-it-now-4.png)

1. The customer opens the auction product page.
2. They select the **Buy It Now** option.
3. They proceed through checkout.
4. After the purchase is completed, the auction closes automatically.

:::info

A completed Buy It Now purchase ends the auction because the listing is treated as sold.

:::

## What happens after a Buy It Now purchase

- The item is marked as sold.
- The auction closes automatically.
- Other customers can no longer continue bidding on that listing.
- The order is processed through the configured checkout flow.

## Best practices

- Use Buy It Now when you want to give shoppers a fast purchase option for high-interest items.
- Keep your product price clearly above the opening bid so the instant-purchase option makes sense to shoppers.
- Use a separate tracked-inventory product for auction listings to avoid unwanted auction closures from unrelated sales.
- Confirm your checkout rule is in place before making Buy It Now available to customers.

## Troubleshooting

### Why can't I enable Buy It Now?

Check the following first:

- The auction status must be **Draft** or **Scheduled**.
- The product must have a price set.
- The product price must be higher than the starting bid.

### Why did my auction close after a sale from another channel?

If the same product variant is used both in the auction and elsewhere, the app may treat that sale as related to the auction and close the listing automatically.

To avoid this, use a dedicated product with tracked inventory for auction listings.

### Why is the checkout flow not working as expected?

Make sure the required **Checkout Rule** for the app has been created. This rule is needed for correct checkout behavior during Buy It Now purchases.

## Related pages

- **Make Offer**

  Learn how customers can submit offers instead of buying immediately.

- **[Auctions](/auction-setup/auctions)**

  Learn how to create, schedule, and manage auction listings.

- **Checkout Rules**

  Set up the required checkout rule for app-managed purchase flows.
