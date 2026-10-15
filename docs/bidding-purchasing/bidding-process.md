---
title: "Bidding Process"
sidebar_position: 1
description: "The bidding process lets customers compete for listings in real time until the auction ends. As new bids are placed, the current price updates automatically,..."
---

The bidding process lets customers compete for listings in real time until the auction ends. As new bids are placed, the current price updates automatically, and dynamic closing rules such as popcorn bidding can extend the auction when bidding activity happens near the end.

:::info

This page explains bidding from the customer’s point of view, including how straight bids, proxy bids, and popcorn bidding work during a live auction.

:::

### How customers place bids

Customers can place bids in two ways, depending on which bidding option is available on the listing:

- **Bid Modal** — places a **Straight Bid**.
- **Custom Modal** — lets the customer choose between a **Straight Bid** and a **Proxy Bid**.

![image](/img/docs/bidding-purchasing/bidding-process-1.png)

### Bid types

#### Straight Bid

A straight bid is a standard bid entered for the current auction. When accepted, it becomes the visible current bid for other participants to see.

![image](/img/docs/bidding-purchasing/bidding-process-2.png)

- It is placed manually by the customer.
- It immediately updates the current bid if it is high enough.
- Other bidders can respond by placing a higher bid.

#### Proxy Bid

A proxy bid allows a customer to enter the **maximum amount** they are willing to pay. The system then bids on their behalf only when needed, using the required bid increments, up to that maximum.

![image](/img/docs/bidding-purchasing/bidding-process-3.png)

- The customer does not need to manually increase their bid each time they are challenged.
- The system places only the amount needed to stay in the lead.
- The maximum amount is used only as a ceiling, not necessarily as the final sale price.

:::tip

Proxy bidding is helpful for customers who want to stay competitive without watching the auction every second.

:::

### How proxy bidding works

#### 1. Enter a maximum bid

The customer enters the highest amount they are willing to pay for the listing. This is their maximum, not necessarily the amount they will pay.

#### 2. System places the minimum winning bid

The platform automatically places the lowest bid needed to make them the current highest bidder, based on the required bid increment.

#### 3. Automatic increases happen only when needed

If another bidder places a competing bid, the system increases the proxy bidder’s amount in preset increments, but never above the customer’s maximum.

#### 4. Customer either wins or is outbid

If no one bids above their maximum, they remain in the lead and can win the item. If another bidder goes higher than their maximum, they are outbid.

:::note

A proxy bid does **not** automatically jump to the full maximum amount right away. It increases gradually as competing bids come in.

:::

### What customers can expect during live bidding

- The current bid updates in real time as bids are accepted.
- Customers may see themselves become the highest bidder and later be outbid if another participant places a stronger bid.
- Bid increments are applied automatically based on the auction rules for that listing.
- The final sale price may be lower than a proxy bidder’s maximum if no competing bids push the price higher.

### What is popcorn bidding?

**Popcorn bidding** is designed to keep auctions fair during the final moments of bidding.

![image](/img/docs/bidding-purchasing/bidding-process-4.png)

If a customer places a bid shortly before the scheduled end of the auction, the auction end time is automatically extended. This gives other interested bidders a chance to respond instead of losing the item because the bid came in at the last second.

- It prevents last-second bidding from ending the auction unfairly.
- It keeps bidding open when there is active competition near closing time.
- It helps ensure the final result reflects genuine bidder demand.

:::warning

If popcorn bidding is enabled, the auction may continue beyond the original closing time. Customers should watch the listing until bidding fully ends.

:::

### Why these bidding options matter

These bidding tools are designed to make auctions more transparent and easier to participate in:

- **Straight bids** are simple and immediate.
- **Proxy bids** reduce the need for constant manual bidding.
- **Popcorn bidding** gives everyone a fair chance to respond when bidding is active at the end.

Together, these features help create a smoother and more competitive auction experience for all participants.

### Frequently asked questions

### Will a proxy bid immediately charge the maximum amount?

No. A proxy bid only increases as needed to keep the customer in the lead, up to their maximum amount.

### Can a customer be outbid after placing a proxy bid?

Yes. If another bidder places a bid above the proxy bidder’s maximum, the proxy bidder will be outbid.

### Does the auction always end at the scheduled time?

Not always. If popcorn bidding is enabled and a bid is placed near the end, the auction can be extended automatically.

### What is the difference between a straight bid and a proxy bid?

A straight bid is a single visible bid entered manually. A proxy bid sets a maximum amount and lets the system respond automatically to competing bids.
