// The sidebar order lives in sidebar.yml, which editors reorder with
// drag-and-drop in Pages CMS (Settings → Sidebar). See scripts/sidebar.mjs.
import { buildSidebar } from './scripts/sidebar.mjs';
import { readDocsTree, readSidebarOrder } from './scripts/docs-tree.mjs';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  docs: buildSidebar(readSidebarOrder(), readDocsTree()),
};
