---
title: "Last Chance Reminders"
description: "Automatically email winners a Last chance to pay reminder before their auction invoice expires."
---

Winners sometimes forget to pay before their invoice expires. **Last chance reminders** automatically send them a **Last chance to pay** email shortly before the deadline, with the payment due date, the outstanding balance and a button to pay.

:::info

Last chance reminders are available for stores that use [Auction Cart & Checkout](/bidding-purchasing/auction-cart-checkout). They're off by default.

:::

![Settings Notifications page showing the Last chance reminders card turned on, the reminder set to 1 hour before invoice expiry, and the Last chance to pay email with English and Spanish tabs](/img/docs/settings/last-chance-reminders-1.png)

## How reminders work

You choose how long before an invoice expires the reminder is sent, in hours or days. For example, if you send reminders **1 hour** before expiry and an invoice expires at 6:00 PM, the reminder is sent at 5:00 PM.

- Each invoice gets **one** reminder at most.
- Reminders are sent only to open auction invoices that are still waiting for payment.
- The invoice's expiry is based on your [invoice expiration time](/settings/checkout-settings#invoice-expiration-time), counted from when the invoice was created.

These invoices don't get a reminder:

- Paid, canceled and expired invoices
- Invoices with no items left to pay for
- Invoices whose customer is blocked or has no email address

:::note

Reminders are sent at the scheduled time only. If you turn reminders on, or change the reminder time, after an invoice's reminder time has already passed, that invoice doesn't get a reminder.

:::

Each reminder, including one that couldn't be sent, is recorded in the invoice's activity log on the [Invoice details page](/bidding-purchasing/invoices#invoice-details-page).

## Turn on last chance reminders

#### 1. Open the Notifications settings

In the Reflow Auctions app, go to **Settings → Notifications**.

#### 2. Turn on the reminders

In the **Last chance reminders** card, turn on the switch.

#### 3. Set the reminder time

In **Send reminder … before invoice expiry**, enter a whole number and choose **Hours** or **Days**. The example below the field shows when a reminder would be sent.

The reminder time must be shorter than your invoice expiration time. For example, if invoices expire after 24 hours, the reminder can be sent at most 23 hours before expiry.

#### 4. Customize the email

Customize the **Last chance to pay** email for each language. See [Customize the reminder email](#customize-the-reminder-email).

#### 5. Save your changes

Click **Save**.

## Customize the reminder email

The **Last chance to pay** email has its own version for each language, with three fields:

| Field | What it changes | Default (English) |
|---|---|---|
| **Subject** | The email subject line. The invoice number is added after it, for example *Last chance to pay — Auction invoice #1*. | Last chance to pay |
| **Custom message** | The text above the payment details. | Your auction invoice is still awaiting payment. Please complete your purchase before the deadline below. |
| **Checkout button text** | The label on the button that takes the customer to pay. | Pay invoice |

Select the **English** or **Spanish** tab to edit that language. The email is sent in the customer's language, following the same rules and default language as your [auction invoice emails](/settings/auction-invoice-emails#choose-the-default-language).

### Preview the email

Click **Preview** to see the email as customers receive it. Use the language menu in the preview to switch languages.

![Preview of the Last chance to pay email with the subject line, custom message, a Payment due date and time, the Outstanding balance and a Pay invoice button](/img/docs/settings/last-chance-reminders-2.png)

The email includes:

- Your custom message
- **Payment due**: the date and time the invoice expires, in your store's time zone
- **Outstanding balance**: the amount the customer still owes
- A button that takes the customer to pay the invoice

## Related pages

- [Auction invoice emails](/settings/auction-invoice-emails)
- [Checkout settings](/settings/checkout-settings)
- [Invoices](/bidding-purchasing/invoices)
- [Auction Cart & Checkout](/bidding-purchasing/auction-cart-checkout)
