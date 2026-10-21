---
title: "Bidder Status"
description: "Control whether a customer can bid in your auctions. Bidder Status changes apply across your storefront in real time."
---

Use **Bidder Status** to control whether a customer can participate in your auctions. This setting applies across your storefront in real time, so a customer's access updates immediately after their status changes.

:::info

Bidder status affects all auctions, not just a single product or event.

:::

### Available statuses

- **Active** _(default)_ — The customer can fully participate in auctions.

  - Can place bids
  - Can use **Buy It Now**

- **Inactive / Banned** — The customer is blocked from auction activity.

  - Cannot place bids
  - Cannot use **Buy It Now**
  - Auction widget interactions on the storefront are disabled

:::note

If a customer is marked as **Inactive / Banned**, the restriction is enforced immediately and is reflected on the storefront without requiring additional changes.

:::

### When to use each status

- Use **Active** for customers who should be allowed to bid and purchase through auctions normally.
- Use **Inactive / Banned** when you need to prevent a customer from participating in any auction activity on your storefront.

### What customers see on the storefront

When a customer with **Inactive / Banned** status tries to interact with an auction, they will not be able to complete auction actions. Instead, they may see an error message indicating that the action is unavailable.

![Storefront example showing an unavailable action message for a blocked bidder](/img/docs/bidders/bidder-status-1.png)

This is how the **Inactive / Banned** status appears on the storefront when a customer attempts to bid or use auction actions.

:::warning

Setting a customer to **Inactive / Banned** prevents them from participating in **all** auctions on your storefront.

:::
