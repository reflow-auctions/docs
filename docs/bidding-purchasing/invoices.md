---
title: "Invoices"
description: "Track every auction invoice in one place, filter by status or customer, cancel or resend invoices, and edit open invoices from the Invoice details page."
---

The **Invoices** page lists every invoice Reflow Auctions creates for your customers. Use it to see which invoices are still waiting for payment, which were paid, and which expired or were canceled. From here you can open any invoice, cancel invoices, or resend the invoice email.

:::info

Invoices are part of [Auction Cart & Checkout](/bidding-purchasing/auction-cart-checkout). When a customer wins an auction, Reflow Auctions creates an invoice and emails it to them. The invoice then appears on this page.

:::

## Invoices page

In the Reflow Auctions app, open **Invoices** from the app navigation.

![Invoices page showing the All, Open, Completed, Canceled and Expired tabs and a table of invoices with status and payment status badges](/img/docs/bidding-purchasing/invoices-1.png)

### Invoice table columns

| Column | What it shows |
|---|---|
| **Invoice** | The invoice number, for example `#INV1061`. You can change the prefix in [Invoice number prefix](/bidding-purchasing/auction-cart-checkout#invoice-number-prefix). |
| **Customer** | The customer the invoice was sent to. |
| **Subtotal** | The total for the items on the invoice, before shipping and taxes. |
| **Status** | Where the invoice is in its lifecycle. See [Invoice statuses](#invoice-statuses). |
| **Sale type** | How the items were sold, for example **Auction**. |
| **Payment status** | The payment state of the invoice. See [Payment statuses](#payment-statuses). |
| **Created date** | When the invoice was created. |
| **Last updated** | When the invoice last changed, for example when it was paid, expired or edited. |

Click any row to open the [Invoice details page](#invoice-details-page).

### Invoice statuses

| Status | Meaning |
|---|---|
| **Open** | The invoice is waiting for payment. Only open invoices can be edited, canceled or resent. |
| **Completed** | The customer paid and a Shopify order was created. |
| **Canceled** | You canceled the invoice. It can no longer be paid. |
| **Expired** | The customer didn't pay before the invoice expiration time. |

How long an invoice stays open is set by **Invoice expiration time** in [Checkout settings](/settings/checkout-settings).

### Payment statuses

The **Payment status** column shows the most useful payment detail for each invoice:

- **Invoice open**: the invoice is open and not paid yet.
- **Paid**: the customer paid in full.
- **Payment expired**: the invoice expired without payment.
- **Invoice canceled**: the invoice was canceled.

For completed invoices, the payment status follows the Shopify order. You may also see **Payment pending**, **Payment authorized**, **Partially paid**, **Partially refunded**, **Payment refunded** or **Payment voided**.

### Tabs

Use the tabs above the table to switch between **All**, **Open**, **Completed**, **Canceled** and **Expired** invoices. The **Open** tab shows how many invoices are currently waiting for payment.

### Search, filter and sort

- **Search** by invoice number or customer name.
- **Filter** by status, customer, subtotal range, or a date range. For the date range, choose whether to filter by **Created date** or **Last updated**.
- **Sort** by invoice number, subtotal, status, sale type, payment status, created date or last updated. By default, the newest invoices are shown first.

You can also choose which columns to show and reorder them.

## Bulk actions

Select one or more invoices with the checkboxes to see the bulk actions.

![Invoices table with three open invoices selected and the Set as canceled bulk action shown above the table](/img/docs/bidding-purchasing/invoices-2.png)

### Cancel several invoices

#### 1. Select the invoices

Tick the checkbox next to each invoice you want to cancel.

#### 2. Click Set as canceled

Click **Set as canceled** above the table.

#### 3. Confirm

In the confirmation window, click **Cancel invoices**. The invoices move to the **Canceled** tab.

:::warning

Canceling an invoice can't be undone. The customer can no longer pay it.

:::

### Resend several invoices

Click **Resend invoices** to send the invoice email again to every selected invoice. Each email goes to the customer's email address saved on the invoice. To send an invoice to a different address, resend it from the [Invoice details page](#resend-an-invoice) instead.

When the emails have been sent, you'll see how many invoices were resent.

### Invoices that can't be changed

Bulk actions only work on **Open** invoices. If your selection includes invoices that can't be changed, a banner lists them with the reason, for example:

- The invoice is **Completed**, **Canceled** or **Expired**.
- The customer is blocked or has no email address (resend only).

Click **Uncheck them** in the banner to remove those invoices from your selection, then try again. If some emails couldn't be delivered, click **Resend them** in the banner to try those invoices again.

## Invoice details page

Click an invoice in the table to open its details.

![Invoice details page for an open invoice showing the products list, customer card, and View event and Cancel invoice buttons](/img/docs/bidding-purchasing/invoices-3.png)

At the top of the page you'll see the invoice number, its status and payment status, and when it was last updated. Use the arrows in the top right to move to the previous or next invoice without going back to the list.

The page has these sections:

- **Products**: every item on the invoice with its price and quantity. Items that are no longer available are marked **Item is no longer available**.
- **Customer**: the customer's name, linked to their profile, and their email address. **Shipping** and **Billing address** show **Will be available after payment** until the customer pays.
- **Payment**: the subtotal and number of items. **Discount**, **Shipping**, **Estimated taxes** and **Total** show **TBD** until the customer checks out, because Shopify calculates them when the order is placed.
- **Activity**: a timeline of what happened to the invoice, such as when it was sent, resent, or edited. Click **Show more** to see older entries.

For a **Completed** invoice, a banner shows when the order was created, with a link to **View the related order** in Shopify.

### View the event

Click **View event** to open the event the auctions on this invoice belong to.

### Remove items from an open invoice

You can remove items from an invoice while it's **Open**, for example if an item is no longer available.

#### 1. Remove the item

Click the **×** next to the item you want to remove. A save bar appears at the top of the page.

#### 2. Save the changes

Click **Save** in the save bar to apply the change, or **Discard** to keep the invoice as it was. The removal is recorded in the **Activity** section.

:::note

An invoice must have at least one item. You can't remove the last item; cancel the invoice instead.

:::

### Resend an invoice

Resend the invoice email when a customer can't find it or needs it sent to a different address. Only **Open** invoices can be resent.

![Payment section of an open invoice with the Resend invoice button highlighted](/img/docs/bidding-purchasing/invoices-4.png)

#### 1. Click Resend invoice

In the **Payment** section, click **Resend invoice**.

#### 2. Check the recipient

The **Send invoice** window shows the sender address, the recipient, and a preview of the email. The **To** field is filled in with the customer's email address. Change it if the customer wants the invoice sent somewhere else.

![Send invoice window with From and To fields and a preview of the auction invoice email with a Complete your purchase button](/img/docs/bidding-purchasing/invoices-5.png)

#### 3. Send the invoice

Click **Send invoice**. A confirmation appears, and the resend is added to the **Activity** section.

:::tip

The email uses your **Auction Invoice** email template. To change its text, see [Auction Invoice Emails](/settings/auction-invoice-emails).

:::

:::note

**Resend invoice** isn't available while you have unsaved changes to the invoice. Save or discard them first.

:::

### Cancel an invoice

#### 1. Click Cancel invoice

On the invoice details page, click **Cancel invoice** in the top right.

#### 2. Confirm

Click **Cancel invoice** in the confirmation window. To go back without canceling, click **Keep invoice**.

The invoice status changes to **Canceled** and the customer can no longer pay it. This can't be undone.

## Related pages

- [Auction Cart & Checkout](/bidding-purchasing/auction-cart-checkout)
- [Checkout settings](/settings/checkout-settings)
- [Draft orders](/bidding-purchasing/draft-orders)
