import React, { memo } from 'react';
import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
import { useVisibleBlogSidebarItems, BlogSidebarItemList } from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import ViewAllReleases from '@site/src/components/ViewAllReleases';
import styles from './styles.module.css';

// Copy of Docusaurus's BlogSidebar/Mobile (v3.10) with a "View all releases"
// link added under the list in the mobile menu.
const ListComponent = ({ items }) => (
  <BlogSidebarItemList
    items={items}
    ulClassName="menu__list"
    liClassName="menu__list-item"
    linkClassName="menu__link"
    linkActiveClassName="menu__link--active"
  />
);

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <>
      <BlogSidebarContent items={items} ListComponent={ListComponent} yearGroupHeadingClassName={styles.yearGroupHeading} />
      <ViewAllReleases mobile />
    </>
  );
}

function BlogSidebarMobile(props) {
  return <NavbarSecondaryMenuFiller component={BlogSidebarMobileSecondaryMenu} props={props} />;
}

export default memo(BlogSidebarMobile);
