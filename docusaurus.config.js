// @ts-check
// `@type` JSDoc annotations allow IDEs and type checkers to infer types
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Interactive Course Book - Learn Physical AI, Embodied Intelligence, and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hasnaindevmaster.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Physical-AI-Humanoid-Robotics-Book/',

  // GitHub pages deployment config.
  organizationName: 'HasnainDevMaster', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics-Book', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that contains the built site

  onBrokenLinks: 'throw',
  markdown: {
    format: 'mdx',
    mermaid: false,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HasnainDevMaster/Physical-AI-Humanoid-Robotics-Book/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: ["en"],
        // Default: return 5 more results
        // `highlightSearchTermsOnTargetPage`: true,
        // Default: no max excerpt length
        // `maxSearchResultLength`: 30,
        // ... other options
      }),
    ],
  ],


  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
        plugins: [
          ['@babel/plugin-transform-modules-commonjs', { allowTopLevelThis: true }]
        ],
      },
    }),
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI & Humanoid Robotics Logo',
          src: 'img/logo.svg',
          href: '/Physical-AI-Humanoid-Robotics-Book/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course Book',
          },
          {
            href: 'https://github.com/HasnainDevMaster/Physical-AI-Humanoid-Robotics-Book',
            label: 'GitHub',
            position: 'right',
          },
        ],
        // Mobile responsive navbar
        hideOnScroll: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Course Book',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/HasnainDevMaster/Physical-AI-Humanoid-Robotics-Book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;