import React from 'react';
import Link from '@docusaurus/Link';

// Link from the "Recent releases" sidebar to the full list (/releases/archive).
export default function ViewAllReleases({ mobile = false }) {
  return (
    <Link
      to="/releases/archive"
      className={mobile ? 'menu__link reflow-view-all-releases' : 'reflow-view-all-releases'}
    >
      View all releases →
    </Link>
  );
}
