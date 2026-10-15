// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import remarkYouTube from './src/remark/youtube.mjs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reflow Auctions Help Center',
  tagline: 'Run auctions on your Shopify store',
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
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'Reflow Auctions',
        items: [
          { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
          { to: '/releases', label: 'Release Notes', position: 'left' },
          { href: 'https://www.reflowauctions.com', label: 'reflowauctions.com', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          { label: 'Privacy Policy', href: 'https://www.reflowauctions.com/privacy' },
          { label: 'Release notes RSS', href: 'pathname:///releases/rss.xml' },
        ],
        copyright: `© ${new Date().getFullYear()} Reflow Auctions`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
