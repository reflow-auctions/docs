// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import remarkYouTube from './src/remark/youtube.mjs';

// Outbound links get UTM tags so visits from the docs show up in analytics.
// utm_content says where on the page the link was.
const utm = (url, content) => {
  const u = new URL(url);
  u.searchParams.set('utm_source', 'docs.reflowauctions.com');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', 'help_center');
  u.searchParams.set('utm_content', content);
  return u.toString();
};
const WEBSITE = 'https://www.reflowauctions.com';
const APP_STORE = 'https://apps.shopify.com/reflow-auctions';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reflow Auctions Help Center',
  tagline: 'Run auctions on your Shopify store',
  favicon: 'img/brand/favicon.png',
  url: 'https://docs.reflowauctions.com',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'reflow-auctions',
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/reflow-auctions/docs/edit/main/',
          remarkPlugins: [remarkYouTube],
          sidebarCollapsible: false,
        },
        blog: {
          path: 'releases',
          routeBasePath: 'releases',
          blogTitle: 'Release Notes',
          blogDescription: 'What changed in each Reflow Auctions release',
          remarkPlugins: [remarkYouTube],
          blogSidebarTitle: 'Recent releases',
          blogSidebarCount: 10,
          postsPerPage: 20,
          showReadingTime: false,
          onUntruncatedBlogPosts: 'ignore',
          onInlineAuthors: 'ignore',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Reflow Auctions release notes',
            copyright: `© ${new Date().getFullYear()} Reflow Auctions`,
          },
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  customFields: {
    appStoreBadgeUrl: utm(APP_STORE, 'footer_badge'),
    privacyUrl: utm(`${WEBSITE}/privacy`, 'footer'),
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      { redirects: [{ from: '/resources/release-notes', to: '/releases' }] },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        docsRouteBasePath: '/',
        blogDir: 'releases',
        blogRouteBasePath: '/releases',
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
      image: 'img/brand/apple-touch-icon.png',
      metadata: [{ name: 'theme-color', content: '#171717' }],
      docs: { sidebar: { autoCollapseCategories: false } },
      navbar: {
        title: 'Reflow Auctions',
        logo: {
          alt: 'Reflow Auctions',
          src: 'img/brand/logo.png',
          srcDark: 'img/brand/logo-dark.png',
          width: 28,
          height: 28,
        },
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
          { to: '/releases', label: 'Release Notes', position: 'left' },
          { href: utm(APP_STORE, 'navbar'), label: 'Shopify App Store', position: 'right' },
          { href: utm(WEBSITE, 'navbar'), label: 'reflowauctions.com', position: 'right' },
        ],
      },
      // Footer content; rendered by src/theme/Footer (badge + two compact lines).
      footer: {
        style: 'light',
        links: [
          { label: 'reflowauctions.com', href: utm(WEBSITE, 'footer') },
          { label: 'Shopify App Store', href: utm(APP_STORE, 'footer') },
          { label: 'Release notes RSS', href: 'pathname:///releases/rss.xml' },
        ],
        copyright: `© ${new Date().getFullYear()} Reflow Auctions`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
