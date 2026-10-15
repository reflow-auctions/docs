---
title: "FAQ's"
sidebar_position: 1
description: "Find answers to the most common questions about using the Reflow Auctions App in your Shopify store.This page covers the most common setup, bidding, checkout..."
---

Find answers to the most common questions about using the Reflow Auctions App in your Shopify store.

:::info

This page covers the most common setup, bidding, checkout, and storefront questions. Use it as a quick reference when managing live auctions.

:::

## General questions

### What is the Reflow Auctions App?

The Reflow Auctions App lets you run product auctions directly in your Shopify store. Customers can place bids on auction products, and when the auction ends, the highest bidder wins the right to purchase the item.

This makes it possible to sell limited, collectible, or high-demand items through competitive bidding instead of a fixed price alone.

### How do I set up my first auction?

To create your first auction:

1. **Open Events**

   In your Shopify admin, open the Reflow Auctions App and go to the **Events** page.

2. **Create an event**

   Create a new event to organize one or more auctions.

3. **Add auction products**

   Click **Add auctions** and select an active Shopify product.

4. **Set auction rules**

   Configure the auction start time, end time, starting bid, bid increment, remaining time, and any additional time settings.

5. **Save or publish**

   Save the auction as a draft if you want to review it later, or publish it when you're ready for customers to start bidding.

:::tip

If you're creating several auctions for the same campaign, start by creating the event first and then add all auction products into that event so they stay grouped together.

:::

### Can I run multiple auctions at the same time?

Yes. You can run multiple auctions at the same time.

Each auction can have its own:

- Start and end time
- Starting bid
- Bid increment
- Time extension rules
- Buy Now settings

You can also place auctions with different settings inside a single event, or separate them into multiple events depending on how you want to organize your storefront and campaigns.

### Do customers need an account to place bids?

Yes. By default, customers must log in or create an account before placing a bid.

This helps ensure that:

- Bids are tied to a real customer account
- Winning bidders can be identified correctly
- Order creation and notifications work reliably

## Bidding and auction flow

### What happens when an auction ends?

When an auction ends, the app can automatically continue the selling process for the highest bidder.

Depending on your setup:

- The highest bidder is notified by email
- A draft order is created for the winning customer
- An invoice can be sent automatically

If the winning bidder does not complete the purchase, you can manually assign the order to the next highest bidder.

:::note

Review your notification and invoice settings before launching live auctions so winners receive the correct follow-up automatically.

:::

### Can customers buy the product immediately instead of bidding?

Yes, if you enable **Buy Now** for the auction.

You can set a Buy Now price on the **Auction Details** page while the auction is in **Draft** or **Scheduled** status. When enabled, customers can skip bidding and purchase the product immediately at the Buy Now price.

### How does the global Buy Now Cutoff (%) setting work?

The global **Buy Now Cutoff (%)** setting controls when the Buy Now option is automatically disabled after bidding reaches a certain level.

For example, if your Buy Now price is $100 and the cutoff is set to **80%**, the Buy Now option will be turned off once bidding reaches $80.

This helps prevent customers from seeing a Buy Now option that no longer makes sense once bidding is already close to the instant-purchase price.

### What happens if Buy Now is enabled and someone uses it?

If a customer completes the purchase using **Buy Now**, the auction ends immediately because the item has been sold.

After that:

- No more bids can be placed
- The item is no longer available through the auction
- The product is sold at the Buy Now price

:::warning

If you plan to allow both bidding and instant purchase, make sure your Buy Now price is high enough that you are comfortable ending the auction early.

:::

### What happens if two customers try to bid at nearly the same time?

The app records bids in order and applies the current auction rules to determine the leading bid. The highest valid bid at that moment becomes the active winning bid.

If your auction uses time extension settings, last-minute bids can also extend the auction based on the rules you configured.

## Storefront and customer experience

### Can customers filter products by auction status in my storefront?

Yes. If your store uses Shopify Search & Discovery and auction status is available as a filter source, you can expose an **Auction Status** filter so shoppers can narrow products by statuses such as **Active** or **Finished**.

This is useful if you want customers to quickly find products that are currently open for bidding.

![Selecting Auction Status as a filter source in Shopify Search and Discovery](/img/docs/resources/faqs-1.png)

When configured, you can label the filter clearly so customers understand what it does.

![Auction Status filter settings showing label and available values](/img/docs/resources/faqs-2.png)

On the storefront, customers can then use the filter to view products by auction state.

![Storefront collection page with Auction Status filter dropdown showing Active and Finished values](/img/docs/resources/faqs-3.png)

:::tip

Use customer-friendly filter labels such as **Auction Status** so shoppers immediately understand the difference between live and ended auctions.

:::

### Can I show both regular products and auction products in the same store?

Yes. Auction products can exist alongside standard products in your Shopify store.

Many merchants choose to separate them using:

- Dedicated collections
- Navigation links
- Search and filter options
- Event-based merchandising

This makes it easier for customers to browse auction items without affecting the rest of your catalog.

## Operations and follow-up

### Can I leave an auction in draft before launching it?

Yes. You can save auctions as **Draft** while you finish configuring products, pricing, timing, and display settings.

This is helpful when you want to prepare an event in advance without making it visible to customers yet.

### Can I manually assign the item to another bidder if the winner does not pay?

Yes. If the winning bidder does not complete the purchase, you can manually assign the order to the next highest bidder.

This gives you a way to continue the sale without having to recreate the auction.

### What should I check before publishing an auction?

Before you publish, confirm that the following are correct:

- The product is active in Shopify
- The auction start and end times are accurate
- The starting bid and bid increment match your strategy
- Buy Now settings are correct, if enabled
- Email notifications and invoice settings are ready
- The auction is assigned to the correct event

:::warning

Publishing an auction with incorrect timing or pricing can confuse customers and lead to avoidable support issues, so it is worth reviewing each setting before launch.

:::

## Quick summary

- Use **Events** to organize and launch one or more auctions.
- Customers typically need to log in before placing bids.
- When an auction ends, the winning bidder can be notified and a draft order can be created.
- **Buy Now** can end an auction early if a customer purchases immediately.
- You can support discovery with storefront filters such as **Auction Status**.

:::note

If you are setting up your store for the first time, make sure your auction products, event structure, storefront filters, and customer notification settings are all reviewed together before going live.

:::
