---
title: "Auction Cart & Checkout"
sidebar_position: 3
description: "Learn how Reflow Auctions handles Buy It Now items in cart, which Shopify settings to turn on, and how auction checkout behaves."
---

**Auction Cart & Checkout** gives buyers a more familiar checkout experience for auction purchases and Buy It Now purchases. Instead of sending customers through Shopify Draft Orders, Reflow Auctions uses the standard Shopify cart and checkout flow while still keeping auction-specific features such as invoices, payment tracking, and auction management.

:::info

**Auction Cart & Checkout** replaces the previous **Items Summary** experience with the **Auction Cart**.

:::

## What **Auction Cart & Checkout** does

When **Auction Cart & Checkout** is enabled, eligible purchases are collected in the Auction Cart. Customers can review what they owe, open invoices, and continue to Shopify checkout using a more native storefront flow.

- **Auction wins** can be grouped into invoices and paid through Shopify checkout.
- **Buy It Now purchases** can be added to the Auction Cart and completed through the same checkout flow.
- **Ending soon** items help customers keep track of auctions they are currently leading.

## How the Auction Cart works

The Auction Cart is the customer-facing area where buyers review items related to their auction activity before checkout.![image](/img/docs/bidding-purchasing/auction-cart-checkout-1.png)

### Ready to pay

This section shows invoices or item groups that are already available for checkout. Customers can review totals and open the invoice they want to pay.

### Ending soon

This section shows auctions the customer is currently leading that are close to ending. It helps buyers understand what may soon move into their Auction Cart if they win.

Customers can usually review:

- Item name and thumbnail
- Current amount or subtotal
- Quantity or number of items
- Invoice grouping
- Estimated amount due

:::note

The Auction Cart is designed to help customers prepare for checkout. It should not be used as the final source of truth for determining auction outcomes.

:::

## Invoices in **Auction Cart & Checkout**

### Auction invoices

When a customer wins an auction, Reflow Auctions creates an invoice for the item or item group that is ready for payment. The customer can open that invoice from the Auction Cart or from the invoice email and continue to checkout.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-2.png)

### Buy It Now invoices

Buy It Now purchases can also be added to the Auction Cart and completed through Shopify checkout. This gives buyers a consistent process across different Reflow sale types.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-3.png)

![image](/img/docs/bidding-purchasing/auction-cart-checkout-4.png)

## Set up Auction Cart & Checkout in the Admin app

Before customers can use **Auction Cart & Checkout** on the storefront, make sure the required settings are configured in the Reflow Auctions Admin app.

### Checkout validators

In Shopify admin, open **Reflow Auctions**, go to **Settings → Checkout**, and make sure all Reflow Auctions validators are enabled.

Validators are required to ensure auction-related items are handled correctly during cart and checkout.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-5.png)

### Auction Widget removal

On the **Settings → Checkout** page, configure **Auction Widget removal**.

This setting controls when the Auction Widget is removed from products after the auction is completed.

### Invoice number prefix

On the **Settings → Checkout** page, you can customize the prefix used for Auction Invoice numbers.

The prefix can contain **1–10 letters and numbers** and is applied to newly generated invoices.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-6.png)

### Auction Cart page

Go to **Settings → Pages** and make sure the **Auction Cart** page is configured.

With **Auction Cart & Checkout** enabled, bidders use the Auction Cart instead of the previous **Items Summary** page.

Make sure the Auction Cart page appears in the correct storefront menu so customers can easily access it.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-7.png)

### Auction Invoice email

Go to **Settings → Notifications** to configure the **Auction Invoice** email sent to customers when an invoice is generated.

You can customize the email content and choose the language used for the notification by default. **English** and **Spanish**are available.

Review the email settings before launching Auction Cart & Checkout to make sure customers receive the correct invoice information and can easily continue to payment.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-8.png)

### Admin setup walkthrough

The video below shows how to configure the required **Auction Cart & Checkout** settings in the Reflow Auctions Admin app.

::youtube{#0mdLfrYy6RQ title="Auction Cart & Checkout — Admin setup walkthrough"}
## What customers see on the storefront

The video below shows the customer experience with **Auction Cart & Checkout**, including how bidders can purchase items using **Buy It Now**, place bids, review their Auction Cart, and pay their invoices through Shopify checkout.

::youtube{#60WVHBK7aPM title="Auction Cart & Checkout — what buyers see"}
With **Auction Cart & Checkout** enabled, customers stay closer to the normal Shopify buying experience.

- They can review auction-related items in the **Auction Cart**.
- They can open an invoice from the cart or from an invoice email.
- They complete payment using the standard Shopify checkout.
- Shopify handles customer details, shipping, taxes, discounts, and payment methods during checkout.

## Checkout flow

After the customer opens an invoice, they continue through the regular Shopify checkout flow. This means common checkout features continue to behave in the standard Shopify way.

During checkout, customers can complete steps such as:

- Entering contact information
- Selecting or confirming shipping details
- Reviewing taxes
- Applying eligible discounts
- Choosing a payment method
- Completing the order

:::tip

If you want the experience to feel as seamless as possible, test **Auction Cart & Checkout** using the same customer journey your buyers use: storefront purchase, invoice open, checkout, and payment confirmation.

:::

## Payment statuses you may see

Orders and invoices created through **Auction Cart & Checkout** can move through several payment states. These statuses help you understand whether a customer still needs to pay, has completed payment, or needs follow-up.

![image](/img/docs/bidding-purchasing/auction-cart-checkout-9.png)

![image](/img/docs/bidding-purchasing/auction-cart-checkout-10.png)

- **Invoice open** — the invoice is available and waiting for customer action.
- **Payment authorized** — payment was authorized but may not be fully captured yet.
- **Payment pending** — checkout was started, but payment is not yet complete.
- **Paid** — the customer completed payment successfully.
- **Partially paid** — only part of the total has been collected.
- **Payment refunded** — the payment was refunded.
- **Partially refunded** — only part of the payment was refunded.
- **Payment expired** — the payment window expired before checkout was completed.
- **Payment voided** — the payment was voided and is no longer valid.

## Common checkout checks

If Buy It Now checkout or invoice checkout does not behave as expected, review these areas first.

### Buy It Now purchase is not going to the expected checkout flow

- Check that your checkout configuration matches the current **Auction Cart & Checkout** flow.
- Test from the storefront as a customer to confirm the item moves into the Auction Cart or checkout flow correctly.

### Customer can open the invoice but cannot finish checkout

- Check whether the invoice is still open and has not expired.
- Review shipping, taxes, and payment settings in Shopify checkout.
- Make sure the customer is using the correct invoice link from the email or Auction Cart.

### Payment status does not look final yet

- **Payment authorized** and **Payment pending** do not always mean the order is fully paid.
- Wait for the final payment result in Shopify and Reflow Auctions before treating the invoice as collected.

### Customer expects to use the old Items Summary flow

The previous Items Summary experience has been replaced by the Auction Cart. Customers should use the Auction Cart to review eligible items and continue to checkout.

## Best practices

- Test auction wins and Buy It Now purchases, separately so you can verify each flow.
- Review invoice emails to make sure the checkout action is clear for customers.
- Monitor payment statuses after launch to confirm orders are moving from open or pending to paid as expected.
- Use the standard Shopify checkout flow as your reference point when validating customer behavior.

## Summary

**Auction Cart & Checkout** modernizes the Reflow Auctions checkout experience by routing eligible purchases through the standard Shopify cart and checkout flow. Customers can review invoices in the Auction Cart, open them from the storefront or email, and complete payment using Shopify’s native checkout experience. For Buy It Now purchases to work correctly, make sure your Reflow Auctions and Shopify checkout setup is configured for the **Auction Cart & Checkout** flow.
