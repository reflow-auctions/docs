// The sidebar order lives in sidebar.yml, which editors reorder with
// drag-and-drop in Pages CMS (Settings → Sidebar). See scripts/sidebar.mjs.
import { buildSidebar, addLinks } from './scripts/sidebar.mjs';
import { readDocsTree, readSidebarOrder } from './scripts/docs-tree.mjs';

// Links to pages outside docs/, appended to the end of a section.
// They live here, not in sidebar.yml, so editors can't remove them by accident.
const LINKS = {
  resources: [{ label: 'Release Notes', href: '/releases' }],
};

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  docs: addLinks(buildSidebar(readSidebarOrder(), readDocsTree()), LINKS),
};
