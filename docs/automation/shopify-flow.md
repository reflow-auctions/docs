---
title: "Shopify Flow"
sidebar_position: 1
description: "Use Shopify Flow with Reflow Auctions to automate tasks when an event or auction starts, ends, or changes status. For example, you can tag products, notify y..."
---

Use Shopify Flow with Reflow Auctions to automate tasks when an event or auction starts, ends, or changes status. For example, you can tag products, notify your team, update collections, or trigger follow-up actions automatically.

:::info

Reflow Auctions triggers appear in Shopify Flow under your app's trigger list. You can use them to start workflows based on event and auction activity.

:::

### Before you begin

- Make sure Shopify Flow is installed in your Shopify admin.
- Make sure your Reflow Auctions app is installed and set up.
- Decide what you want the workflow to do, such as adding product tags or sending notifications.

### Create a workflow

#### 1. Open Shopify Flow

In your Shopify admin, open **Shopify Flow**.

#### 2. Start a new workflow

Click **Create workflow**, then click **Select a trigger**.

#### 3. Choose a Reflow Auctions trigger

In the trigger list, find your app's trigger group and select the trigger you want to use, such as **Auction Starts** or **Event Ends**.

#### 4. Add an action

On the trigger card, click the **+** button and choose **Action**.

#### 5. Add a loop when working with multiple products

If the trigger includes more than one product, search for **For each** and select **For each (iterate)**.

#### 6. Choose the list to loop through

Click **Select variable** and choose **products → ids**. This runs the next action once for each product in the event.

#### 7. Add the action inside the loop

Inside the **For each (iterate)** block, click **Repeat for each item** and add the action you want to perform, such as **Add product tags**.

#### 8. Map the current product

When the action asks for a product, insert the current item from the loop. In Flow, this appears as the variable for the current product ID, such as `{{idsForeachitem}}`.

#### 9. Save and turn on the workflow

Click **Save**, then click **Turn on workflow** to enable it.

:::tip

If you want to update every product in an event, use a **For each** loop with **products → ids**. This is the easiest way to apply the same action to all products included in the trigger.

:::

### Example: add a tag when an auction starts

This example automatically adds a tag to products when an auction becomes active.

#### 1. Choose the trigger

Select **Auction Starts** as the workflow trigger.

#### 2. Add a product action

Add the **Add product tags** action.

#### 3. Select the product

Use the product ID provided by the trigger, or add a loop first if the trigger includes multiple products.

#### 4. Enter the tag

In the tag field, enter the tag you want to apply, such as `auction-live`.

#### 5. Save and enable

Save the workflow and turn it on.

## Available triggers

Use these triggers to start workflows based on event and auction activity.

### Event Starts

**What it does:** Fires when an event moves from **Draft** to **Active**.

**When it fires:** At the start time of the first auction in the event.

**How often:** Once per event.

**Common uses:**

- Add tags to products in the event
- Notify your team that the event is live
- Move products into a promotional collection

### Event Ends

**What it does:** Fires when an event moves from **Active** to **Finished**.

**When it fires:** After the event's estimated end time is reached and the final auction in the event has ended.

**How often:** Once per event.

**Common uses:**

- Remove temporary tags or collections
- Send a summary notification to your team
- Start post-event cleanup tasks

### Auction Starts

**What it does:** Fires when an auction becomes **Active** and customers can start bidding.

**When it fires:** At the auction start time.

**How often:** Once per auction.

**Common uses:**

- Tag a product as live
- Send internal or customer notifications
- Publish products to a collection

### Auction Ends

**What it does:** Fires when an auction finishes.

**When it fires:** After the auction end conditions are met.

**How often:** Once per auction.

**Common uses:**

- Remove live-auction tags
- Notify staff that bidding has ended
- Trigger follow-up workflows for fulfillment or reporting

## Tips for building reliable workflows

- Use clear workflow names so your team can quickly understand what each automation does.
- Test with a simple action first, such as adding a tag, before building a more advanced workflow.
- If a trigger returns multiple products, use a loop so every product is handled correctly.
- Review variable mapping carefully, especially when choosing the product or event value for an action.

:::note

The exact list of available actions in Shopify Flow depends on the apps installed in your store. Reflow Auctions provides the trigger, and you can combine it with Shopify or third-party actions inside the same workflow.

:::

## Troubleshooting

### The trigger does not appear in Shopify Flow

- Confirm that the app is installed in the same Shopify store where you are using Flow.
- Refresh Shopify Flow and try creating the workflow again.
- If you recently installed the app, wait a moment and reopen Flow.

### The workflow runs, but the product action does not work

- Check that you selected the correct product variable.
- If the trigger includes multiple products, make sure the action is inside a **For each** loop.
- Confirm that the action supports the type of value you inserted.

### Only one product updates when I expected several

- Use **For each (iterate)** with **products → ids**.
- Place the product action inside the loop, not after it.

:::warning

If you build a workflow without a loop for a trigger that includes multiple products, only part of the event data may be used. Always use a loop when you need to update each product individually.

:::

## What to automate next

- **Tag products automatically**

  Use auction and event triggers to add or remove product tags based on status changes.

- **Notify your team**

  Send internal alerts when an auction or event starts or ends.

- **Clean up after events**

  Remove temporary tags, update collections, or trigger follow-up tasks after an event finishes.
