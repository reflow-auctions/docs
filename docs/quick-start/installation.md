---
title: "Installation"
description: "Install Reflow Auctions from the Shopify App Store and complete setup in your Shopify admin. Installation only takes a few minutes."
---

Install **Reflow Auctions** from the Shopify App Store to add auction functionality to your store. The installation only takes a few minutes and happens inside your Shopify admin.

:::info

After installation, Reflow Auctions appears in your Shopify admin under **Apps**, so you can return to it at any time to manage events and auctions.

:::

## Install the app from the Shopify App Store

#### 1. Sign in to your Shopify store

Go to your Shopify admin and sign in with an account that has permission to install apps.

#### 2. Open the Shopify App Store

In Shopify, open the **Shopify App Store** and search for **Reflow Auctions**.

#### 3. Open the Reflow Auctions listing

Select **Reflow Auctions** from the search results to view the app details page.

#### 4. Click Add app

Click **Add app** to start the installation.

#### 5. Review the requested permissions

Shopify redirects you back to your store admin, where you can review the permissions the app needs in order to run auctions, manage listings, and create winning orders.

#### 6. Click Install app

When you are ready, click **Install app** to approve the permissions and complete the installation.

![Shopify install app window showing Reflow Auctions permissions and the Install button](/img/docs/quick-start/installation-1.png)

#### 7. Open the app and finish setup

After installation, open **Reflow Auctions** from the **Apps** section in Shopify. The app opens on the **Dashboard**, where you can track your first free 50 published auctions and work through the **Quick setup guide**.

:::tip

If you do not see the **Install app** button, make sure you are signed in with a Shopify user account that has permission to manage apps.

:::

## What permissions does the app request?

When you install Reflow Auctions, Shopify asks you to approve several permissions. These permissions allow the app to connect auction activity with your products, customers, and order flow.

:::note

Shopify shows the exact permission list during installation. The wording in your store may vary slightly depending on Shopify updates.

:::

### View personal data

**What Shopify may show:**

- **Customers:** name, email address, phone number, physical address, geolocation, IP address, browser, and operating system
- **Store owner:** name, email address, phone number, and physical address

**Why this is needed:**

- Identify bidders and connect bids to customer accounts
- Support communication related to auction activity
- Help with order handling after an auction ends

### View customers

**Why this is needed:**

- Match auction participants to existing customer records
- Support customer-based auction activity and account lookup

### Edit products

**What this includes:** inventory, product details, publication status, and collections.

**Why this is needed:**

- Create auction listings from products already in your catalog
- Adjust inventory as auction items are sold
- Publish products when an auction starts and unpublish or return them to draft when needed
- Keep product availability aligned with the auction lifecycle

### Edit orders

**What this includes:** draft orders, order details from the last 60 days, and order edits.

**Why this is needed:**

- Create draft orders for winning bidders
- Prepare auction results for checkout and fulfillment
- Support updates to orders when auction outcomes change

### Edit your Online Store

**What this includes:** script tags and theme-related changes.

**Why this is needed:**

- Display auction functionality on your storefront
- Load the app elements required for bidding and auction presentation

### View and sync discounts

**What this includes:** discount codes and promotions.

**Why this is needed:**

- Allow auction-related purchase flows to work alongside your store’s discount setup when applicable

## Why these permissions matter

Reflow Auctions needs access to the parts of Shopify that auctions depend on: products, customers, storefront display, and order creation. Without these permissions, the app would not be able to publish auction items, record bids correctly, or turn winning bids into orders.

:::warning

Do not remove app permissions or uninstall the app while an auction is actively running unless you are sure you want to stop auction-related storefront behavior and management actions.

:::

## After installation

Once the app is installed, use the Dashboard to track your free-auction allowance and prepare your store for its first auction event.

### Track your first 50 free auctions

![Dashboard with the Your first 50! card showing 5 of 50 free auctions used, a progress bar and a Subscribe link, above the Quick setup guide](/img/docs/quick-start/installation-2.png)

Your first 50 published auctions are free. You aren't charged usage fees for them, even when they end with bids and sell.

The **Your first 50!** card on the Dashboard shows:

- How many of your 50 free auctions you have used, for example **12 of 50 free auctions used**
- A progress bar showing your current usage
- A **Subscribe** link for choosing a plan, if you don't have a subscription yet

#### What counts toward the limit

An auction uses a free slot the first time it's published, that is, when its status becomes **Active**. This includes auctions you publish when you create them, publish later from **Draft**, or create by relisting, manually or with Shopify Flow.

These don't use a free slot:

- Creating events
- Adding products
- Saving auctions as **Draft**
- Publishing the same auction again, for example after you cancel it and select **Keep auction**

:::note

A used slot isn't returned. Canceling or deleting a published auction doesn't give you that free auction back.

:::

#### Publishing more auctions than you have left

If you don't have a subscription and try to publish more auctions than you have remaining, the auctions aren't published and the app shows how many free auctions you have left. For example: *You have 45 free auctions remaining, but you're trying to publish 50. Remove 5 auctions or subscribe to publish all 50.*

![Add auctions to event page with an error banner saying 45 free auctions remain while 50 auctions are being published, with a subscribe link](/img/docs/quick-start/installation-3.png)

Remove auctions until you're within your remaining free auctions, or click **subscribe** in the error to choose a plan and publish all of them.

When Shopify Flow relists auctions and you don't have a subscription, only as many auctions as you have free slots left are relisted.

#### Free auction notifications

Reflow Auctions lets you know how your free auctions are going in the [Notification Center](/settings/notification-center) and by email:

- **After 25 auctions:** *You're halfway through your free auctions!* shows how many you've used and how many remain.
- **After 50 auctions:** *You've reached your free auction limit.* If you don't have a subscription, the notification includes a **Subscribe** link.

Each notification is sent only once.

#### After you use all 50 free auctions

- **Without a subscription:** you can't publish new auctions until you subscribe. You can still open the app and manage the auctions you've already published.
- **With a subscription:** auctions you publish from now on are billed under your plan when they end with bids. The **Your first 50!** card no longer appears on the Dashboard.

:::tip

If you subscribe before you've used all 50, your remaining free auctions stay free. The card keeps tracking them until they're used.

:::

### Complete the Quick setup guide

The **Quick setup guide** appears on the Dashboard and tracks your progress through 11 setup tasks:

1. **Enable app embed** — Turn on the Reflow Auctions app embed in your live theme.
2. **Add User’s Auctions page** — Give customers a page where they can view and manage auctions they have participated in.
3. **Add Auctions Cart page** or **Add Items Summary page** — Add the customer page used by your store's checkout configuration to a storefront menu.
4. **Add Auctions page** — Add the Auctions page to your storefront menu so customers can see all running and scheduled auctions in one place.
5. **Review global bidding settings** — Configure your store-wide bidding rules and preferences.
6. **Review checkout settings** — Configure invoices, buyer’s fees, and payment preferences.
7. **Create your first event** — Create the event that will group your auctions.
8. **Add products to your event** — Select products and configure their auction schedules, rules, and purchase options.
9. **Customize auction widget** — Adjust the widget layout and colors to match your storefront.
10. **Publish your first event** — Publish an auction to activate its event.
11. **Monitor auction outcomes** — Open Event Analytics to review auction activity and results.

:::note

The third task depends on your store configuration. The guide displays either **Auctions Cart** or **Items Summary**.

:::

Select a task to view its instructions and open the relevant app page or Shopify setting. Some later tasks require you to create an event first. The progress bar and completed-task count update as you finish the setup actions.

You can collapse the guide, hide it for the current session with **Remind me later**, or dismiss it. If you dismiss it, you can reopen it from **Settings**.

### Next steps

- Open **Apps** in Shopify
- Select **Reflow Auctions**
- Work through the **Quick setup guide** on the Dashboard
- Create your first event, add products, and publish your first auction

- **[App Embed](/theme-setup/app-embed)**

  Enable Reflow Auctions in your Shopify theme so auction widgets can appear on your storefront.

- **[Auction automation](/automation/auction-automation)**

  Automatically manage Shopify product statuses and auction product templates.

- **[Creating Events](/auction-setup/events)**

  Create an event to group and manage related auctions.

- **[Creating Auctions](/auction-setup/auctions)**

  Add products, configure auction rules, and publish your listings.
