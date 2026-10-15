---
title: "Auction Cart & Checkout — Common Questions"
sidebar_position: 4
description: "Get quick answers about Auction Cart, Buy It Now invoices, checkout, fees, unavailable items, and what customers see in My Auctions."
---

**Auction Cart & Checkout** helps buyers pay for won items and **Buy It Now** purchases using a familiar Shopify checkout flow. This page answers the most common questions about what customers see in **My Auctions**, how the **Auction Cart** works, and what to expect when totals, fees, or item availability change.

:::info

**Auction Cart & Checkout** replaces the older **Items Summary** experience with the customer-facing **Auction Cart**.

:::

## Quick overview

Customers usually reach this flow from **My Auctions** or after using **Buy It Now** on an auction item. Inside the **Auction Cart**, they can review two main sections:

- **Ready to pay** for invoices and item groups that can be checked out now
- **Ending soon** for auctions they are currently leading that may soon move into checkout

When a customer selects an invoice or item group, the right side of the page shows the item list, **Subtotal**, **Shipping**, **Fees**, **Taxes**, and the final **Total**. If the selection is payable, the customer can continue with **Checkout**.

:::note

The **Auction Cart** is for reviewing and paying auction-related purchases. The page itself is **not designed for viewing auction results** or deciding who won an auction.

:::

## Common questions

### Where do customers find the Auction Cart?

Admins can add the **Auction Cart** page to the storefront from **Reflow Auctions Settings**. Once added, customers can access the **Auction Cart** from the storefront menu where the page was added.

Customers may also access the **Auction Cart** after signing in and going to **My Auctions**, or after using **Buy It Now** and selecting **Add to Auction Cart**.

### What is the difference between Ready to pay and Ending soon?

**Ready to pay** contains invoices that are already available for payment.

**Ending soon** shows item groups the customer is currently leading. These are visible for reference, but they are not final proof of the auction outcome.

### Why does one section show an invoice and another show an item group?

Invoices in **Ready to pay** represent purchases that are already payable. Groups in **Ending soon** represent auctions that are still active or close to closing.

In other words, **Ready to pay** is for checkout now, while **Ending soon** is for items that may move into checkout if the customer remains the winner when bidding fully ends.

### What happens when a customer clicks Checkout?

After selecting a payable invoice, the customer clicks **Checkout** and continues through the standard Shopify checkout flow. They can then enter contact details, confirm shipping, review taxes, choose a payment method, and complete the order.

This keeps the auction payment flow closer to a normal storefront purchase instead of sending the customer through a separate draft-order-only experience.

### What does 'Unavailable items are not included in checkout' mean?

This message appears when one or more items in a payable group are no longer available. In the invoice list, the unavailable line may show **Item is no longer available**.

When this happens, checkout continues only with the remaining available items. The **Total** updates to reflect the items that can still be purchased.

### Can customers remove an unavailable item themselves?

Yes. In the invoice view, customers may see a delete icon next to an item. If an item is no longer available, removing it helps clean up the invoice before checkout.

### Why doesn't every item show a Checkout button?

Only selections that are ready for payment show the blue **Checkout** button. Items in **Ending soon** may instead show an inactive state such as **Estimated checkout in** with a countdown, because the auction is not finished yet.

### What does 'Estimated checkout in' mean?

This countdown appears for items that are not payable yet. It gives the customer an estimate of when the item group may be ready to move into checkout if they remain the winning bidder.

It is only an estimate. Live bidding activity can still affect the final timing.

### What if Buy It Now disappears near the end of an auction?

**Buy It Now** becomes unavailable approximately **5 minutes before the auction ends**. Customers may see this message inside the **Buy It Now invoice** view.

This prevents last-minute instant purchases from conflicting with the closing auction flow.

### Does Buy It Now end the auction immediately?

Yes. **Buy It Now purchases take precedence over proxy bids and end the auction immediately.** Once the purchase is completed, other bidders can no longer continue bidding on that listing.

### Is the Auction Cart the same as My orders?

No. The **Auction Cart** is where customers review auction-related items before payment. **My orders** is for completed order history after checkout.

On the **Auction Cart** page, customers may also see quick links such as **Manage subscription** and **My orders** at the bottom.

### Does Auction Cart replace Draft Orders?

Not exactly. Customers now use the **Auction Cart** instead of the older storefront **Items Summary** experience, but draft-order style grouping still matters behind the scenes for auction workflows and invoice creation.

For merchants, that means the customer-facing experience is simpler, while auction management and payment tracking still remain organized.

### What happens if I relist an auction using the same variant that was not purchased by the previous winning bidder?

If an auction is relisted using the same variant because the previous winning bidder did not complete the purchase, the **previous bidder will no longer be able to complete the purchase from the old auction/invoice**.

The variant becomes associated with the relisted auction and can be purchased by the winner of the new auction. The original auction remains in the auction history, but its previous winning bidder can no longer check out that item.

### What happens when the payment period set in Reflow Auctions Settings expires?

The bidder can no longer complete the purchase for the unpaid auction items. The related invoice expires, and the items can be handled as uncollected items, including being relisted if needed.

### What happens if the buyer has multiple unpaid invoices?

Admins can monitor unpaid invoices and their statuses in **Event Analytics**. If a buyer repeatedly wins auctions without completing payment, the admin can **ban the bidder** to prevent them from participating in and winning additional auctions.

If needed, the bidder can later be **unbanned**. After being unbanned, they can complete payment for any invoices that are still available for payment and have not expired.

### What happens if the buyer has multiple unpaid invoices?

No. Separate invoices are created for **Auction wins** and **Buy It Now purchases**, so they are checked out separately.

Auction wins are also separated by **Event**, meaning wins from different Events are placed into separate invoices and cannot be checked out together.

### What happens to an invoice after the buyer successfully completes checkout?

After the buyer successfully completes checkout, an **order is created in Shopify**. On the **Event Details** page, the order’s **Payment Status** reflects the corresponding payment status of the order in Shopify.

### Can a buyer return to the Auction Cart and continue checkout later?

Yes. The buyer can return to the **Auction Cart** and continue checkout later, as long as the invoice is still available for payment.

The buyer will also receive an **email notification** when the invoice is generated, with a link to proceed with the payment.

### What happens if items in the same invoice have different delivery methods, such as shipping and pickup?

Currently, all items within the same invoice must use the **same delivery method** and be delivered to the **same address**. Items within one invoice cannot be split between different delivery methods, such as shipping and pickup.

### Does enabling Auction Cart & Checkout affect existing unpaid invoices created before the feature was enabled?

No. **Auction Cart & Checkout** applies only to Events that are started after the feature is enabled.

Events that started before the feature was enabled, including their existing unpaid invoices, continue through the **previous checkout flow**.

### What changes will buyers see after Auction Cart & Checkout is enabled?

Buyers will use the **Auction Cart** to manage and pay for their auction purchases. From there, they can review their auction wins, Buy It Now purchases, open invoices, and auctions they are currently leading, and proceed to checkout when payment is available.

For a step-by-step overview of the buyer experience, see the Auction cart\_Storefront part.

## What customers usually do

1. **Open My Auctions**

   The customer signs in and opens **My Auctions**.

2. **Review Auction Cart**

   They open the **Auction Cart** and look through **Ready to pay** or **Ending soon**.

3. **Select an invoice**

   They select a payable item such as a **Buy It Now invoice** or **Auction invoice**.

4. **Review totals**

   They check the item list and the summary lines for **Subtotal**, **Shipping**, **Fees**, **Taxes**, and **Total**.

5. **Continue to Checkout**

   If the selection is payable, they click **Checkout** and finish payment in Shopify checkout.

## Best practices

- Tell customers that the **Auction Cart** is for payment review, not final auction-result confirmation.
- Explain that **Shipping** and **Taxes** may show **To be determined** until checkout.
- If you charge a buyer fee, make sure customers understand that **Fees** can increase the final total.
- Test both **Buy It Now** and won-auction checkout flows from the storefront, not just from admin.
- Verify that **Reflow** **Auctions checkout validators** are enabled in **Settings → Checkout**.

## Related pages

- **[Buy it Now](/bidding-purchasing/buy-it-now)**

  Learn how fixed-price purchases work, when Buy It Now is available, and why it can end an auction immediately.

- **[Draft Orders](/bidding-purchasing/draft-orders)**

  Understand how winning items are grouped after events finish and how that affects invoicing.

- **[Buyer's Fee](/settings/buyers-fee)**

  See how buyer fees are added on top of item prices and why the final checkout total may be higher.

- **[Bidding Process](/bidding-purchasing/bidding-process)**

  Review straight bids, proxy bids, and end-of-auction behavior that can affect when checkout becomes available.
