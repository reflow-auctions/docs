---
title: "Buyer's Fee"
sidebar_position: 2
description: "Use Buyer’s fee to add an extra charge on top of the final item price in your auctions. You can set this fee as a percentage, a fixed amount, or both. This i..."
---

Use **Buyer’s fee** to add an extra charge on top of the final item price in your auctions. You can set this fee as a percentage, a fixed amount, or both. This is useful when you want to pass platform, handling, or service costs to the buyer in a consistent way.

:::info

Buyer’s fee applies to **auctions** and is added on top of the final item price.

:::

### What you can control

- **Percentage fee** — adds a percentage of the final sale price
- **Fixed fee** — adds a flat amount to each transaction
- **Fee product creation** — creates the Shopify product needed to apply the fee at checkout

### Before you begin

To use Buyer’s fee, make sure you have access to **Settings** in Reflow Auctions and permission to manage products in Shopify. The fee cannot be activated unless the required fee product is created.

:::warning

If **Product creation** is not enabled, you will not be able to save Buyer’s fee settings, and the fee will not be applied at checkout.

:::

## Set up Buyer’s fee

Set up Buyer’s Fee Video Guide

1. **Open Selling preferences**

   Go to **Settings → Selling preferences**.

2. **Turn on Buyer’s fee**

   Enable **Buyer’s fee** to start configuring the fee for your auctions.

3. **Enter a percentage fee**

   Add the percentage you want to charge, such as **15%**. This amount is calculated from the final item price and added to the buyer’s total.

4. **Add a fixed fee if needed**

   Enable **Fixed fee** and enter a flat amount, such as **$5**, if you want to charge an additional set fee on each transaction.

   You can use a percentage fee and a fixed fee together.

5. **Enable Product creation**

   Turn on **Product creation**. This allows the app to automatically create the Shopify product required to add the fee at checkout.

   :::note

   The product is created with the default title **Buyer’s Fee**. You can rename it later in Shopify admin if needed.

   :::

6. **Confirm product creation**

   When the confirmation modal appears, confirm the action to create the fee product.

   After confirmation, the app creates the product automatically and shows a success message.

7. **Save your changes**

   Click **Save** to apply the settings. Once saved, the configured buyer’s fee will be used for eligible auctions.

   ![image](/img/docs/settings/buyers-fee-1.png)

## How Buyer’s fee is calculated

Buyer’s fee is always added on top of the final item price. Depending on your settings, the total fee can include:

- **A percentage of the final item price**
- **A flat fixed amount**
- **Both charges together**

:::tip

If you want a simple, predictable surcharge, use a fixed fee. If you want the fee to scale with item value, use a percentage fee.

:::

## Example

If an item sells for **$100** and you configure:

- **15%** Buyer’s fee
- **$5** fixed fee

The buyer pays:

- **$100** item price
- **$15** percentage fee
- **$5** fixed fee

**Total: $120**

## Important behavior

- The fee is added **on top of** the final auction price
- The fee product must exist in Shopify for the charge to work correctly
- You can change the percentage or fixed amount later by returning to **Settings → Selling preferences**
- If you rename the fee product in Shopify, the functionality still remains available

## Troubleshooting

### I can’t save the Buyer’s fee settings

Make sure **Product creation** is enabled. Buyer’s fee cannot be saved until the required Shopify fee product can be created.

### The fee is not being applied

Check that:

- **Buyer’s fee** is turned on
- Your percentage and/or fixed fee values are entered correctly
- The fee product was successfully created
- You clicked **Save** after making changes

### Can I use only one fee type?

Yes. You can use only a **percentage fee**, only a **fixed fee**, or both together.

### Can I change the Buyer’s Fee product name?

Yes. The product is created with the default name **Buyer’s Fee**, but you can rename it in Shopify admin.

## Related settings

Buyer’s fee is part of your broader auction configuration in **Settings**, where admins can also manage auction defaults, feature settings, draft order behavior, and critical notifications.
