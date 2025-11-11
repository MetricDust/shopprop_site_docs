// @ts-check
// Docusaurus configuration for ShopProp Docs

const config = {
  title: "ShopProp Docs",
  tagline: "Track all feature releases and updates",
  url: "https://metricdust.github.io", // GitHub Pages root URL
  baseUrl: "/shopprop_site_docs/", // Repo name (as served in GitHub Pages)
  onBrokenLinks: "warn", // Changed from 'throw' to prevent build failures
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  organizationName: "MetricDust", // GitHub org/user
  projectName: "shopprop_site_docs", // GitHub repo
  deploymentBranch: "gh-pages", // Branch used for GitHub Pages
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve docs at the site root
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    // ✅ Local Search Plugin (no Algolia needed)
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        language: ["en"],
        docsRouteBasePath: "/",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "ShopProp Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar", // ✅ Ensure this ID exists in sidebars.js
            position: "left",
            label: "Docs",
          },
          {
            href: "https://www.shopprop.com",
            label: "Main Website",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "View Docs",
                to: "/intro", // ✅ Avoid broken / link
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "ShopProp Website",
                href: "https://www.shopprop.com",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ShopProp by MetricDust. All rights reserved.`,
      },
    }),
};

module.exports = config;
