import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';

// Compact footer:
//   [Available on Shopify App Store badge]
//   reflowauctions.com · Shopify App Store · Release notes RSS
//   © 2026 Reflow Auctions · Privacy Policy
// Links come from themeConfig.footer (docusaurus.config.js); the badge and
// privacy URLs from customFields so they carry UTM tags.
// The badge is Shopify's official asset: don't recolor, crop or resize below
// 30px tall (https://shopify.dev/docs/apps/launch/marketing/shopify-brand-assets).
export default function Footer() {
  const { footer } = useThemeConfig();
  const { siteConfig } = useDocusaurusContext();
  const { appStoreBadgeUrl, privacyUrl } = siteConfig.customFields;
  if (!footer) return null;

  return (
    <footer className="footer reflow-footer">
      <div className="container container-fluid">
        <a className="reflow-footer__badge" href={appStoreBadgeUrl} target="_blank" rel="noopener noreferrer">
          <ThemedImage
            alt="Available on the Shopify App Store"
            width={166}
            height={44}
            sources={{
              light: '/img/brand/shopify-app-store-badge-dark.svg',
              dark: '/img/brand/shopify-app-store-badge-light.svg',
            }}
          />
        </a>
        <nav className="reflow-footer__links" aria-label="Footer">
          {footer.links.map((item) => (
            <Link key={item.label} className="reflow-footer__link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="reflow-footer__bottom">
          <span>{footer.copyright}</span>
          <Link className="reflow-footer__link" href={privacyUrl}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
