---
title: "Events"
sidebar_position: 1
description: "Before bidding can begin, an admin must create an event in the Admin app. When you create an event, you set the event title and an estimated end date and tim..."
---

Before bidding can begin, an admin must create an event in the Admin app. When you create an event, you set the event title and an estimated end date and time.

:::info

The estimated end time helps organize the event schedule, but it does not automatically control the actual closing time if auctions in the event are still running.

:::

![image-5](/img/docs/auction-setup/events-1.png)

### How to create an event

1. **Open the Admin app**

   Go to the area where events are managed.

2. **Enter the event title**

   Add a clear, recognizable title so your team can easily identify the event.

3. **Set the estimated end date and time**

   Choose the date and time you expect the event to finish.

4. **Save the event**

   Once saved, the event is ready for auctions to be added and managed.

### How event timing works

The end date and time you select is an estimate. If any auction inside the event ends later than the estimated time, the event will remain open until all auctions in that event have ended.

:::note

If auctions run past the estimated end time, the event's actual completion and order generation will be delayed until those auctions finish.

:::

An event is considered finished only when both of these conditions are true:

- The estimated end time has passed.
- All auctions within the event have ended.

### Editing and deleting events

After an event is created, you can still make limited changes depending on its status.

- **Delete an event:** You can delete the event at any time before the first bid is placed.
- **Edit an event:** You can update the title and estimated end date and time, but only before the estimated end time has passed.

:::warning

After the first bid is placed, the event can no longer be deleted.

:::

:::warning

Once the estimated end time has passed, you can no longer update the event title or estimated end date and time.

:::

![image](/img/docs/auction-setup/events-2.png)

### What happens when an event ends

When the event is finished, draft orders are automatically created for all auctions that have a winning bidder. This happens within 5 minutes after the event fully closes.

If **Invoice auto-sending** is enabled in Settings, invoices are also sent automatically to winning bidders after the draft orders are created.

:::tip

If you want winners to receive invoices automatically, confirm that **Invoice auto-sending** is enabled before the event ends.

:::

## **Export event data**

You can export event data directly from the **Event Details** page using the **More actions** menu.

![image](/img/docs/auction-setup/events-3.png)

1. Open the event

   Navigate to the event you want to review and open its **Event Details** page.

2. Open More actions

   In the top-right corner of the page, click **More actions**.

3. Select Export CSV

   Choose **Export CSV** from the dropdown menu.

4. Download the file

   The system generates a CSV file containing event and auction data based on your current view.

### **How export works**

- The export is generated in **CSV format**
- The exported data reflects the **currently applied filters**
- Required default fields are included automatically

:::tip

If you want a more focused export, apply the filters you need before exporting so the file matches the data you are reviewing.

:::

### **What’s included in the export**

Each row in the CSV represents auction-related data within the selected event. Exported fields include:

- Event name
- Event status
- Start date
- End date
- Auction type
- Product ID
- Variant ID
- Sold status
- Final sold price, if sold
- Order data
- Draft order link, if created

### Activity log

The Activity log records major milestones throughout the event lifecycle. Use it to review important updates and track what happened during the event.

![image](/img/docs/auction-setup/events-4.png)

### What counts as the actual end of an event?

The event actually ends only after the estimated end time has passed _and_ every auction in the event has ended.

### Why wasn't my order created immediately at the estimated end time?

If one or more auctions were still running after the estimated end time, the event stayed open until those auctions finished. Draft orders are created within 5 minutes after the event fully ends.

### Can I change the event after creating it?

Yes, but only in limited cases. You can update the title and estimated end date and time before the estimated end time has passed. You can delete the event only before the first bid is placed.
