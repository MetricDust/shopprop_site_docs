// @ts-check
// Docusaurus configuration for ShopProp Changelog

const config = {
  title: "ShopProp Changelog",
  tagline: "Track all feature releases and updates",
  url: "https://metricdust.github.io", // GitHub Pages root URL
  baseUrl: "/shopprop_app_docs/", // Repo name (as served in GitHub Pages)
  onBrokenLinks: "warn", // Changed from 'throw' to prevent build failures
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  organizationName: "MetricDust", // GitHub org/user
  projectName: "shopprop_app_docs", // GitHub repo
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
            sidebarId: "changelogSidebar", // ✅ Ensure this ID exists in sidebars.js
            position: "left",
            label: "Changelog",
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
                label: "View Changelog",
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
         {
      title: "Experience Our App",
      items: [
        {
          html: `
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <div style="display: flex; gap: 0.5rem;">
                <a href="https://play.google.com/store/apps/details?id=com.shopprop.property.mobile" target="_blank" rel="noopener noreferrer">
                  <img src="img/google-play.jpg" alt="Google Play" style="height: 36px; border-radius: 4px;" />
                </a>
                <a href="https://apps.apple.com/us/app/shopprop/id1569131794" target="_blank" rel="noopener noreferrer">
                  <img src="img/app-store.jpg" alt="App Store" style="height: 36px; border-radius: 4px;" />
                </a>
              </div>
            </div>
          `,
        },
      ],
    },
        ],
        copyright: `© ${new Date().getFullYear()} ShopProp by MetricDust. All rights reserved.`,
      },
    }),
};

module.exports = config;
