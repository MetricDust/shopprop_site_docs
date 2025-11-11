/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  docsSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Home",
    },
    {
      type: "category",
      label: "General Docs",
      collapsed: false,
      items: ["seo"],
    },
  ],
};
