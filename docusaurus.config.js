// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "RingerInteractive";
const projectName = "Ringer-wiki";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ringer Interactive',
  tagline: 'Full-Screen Branded Calling Ensures Customers Never Miss Your Call',
  url: 'https://${organizationName}.github.io',
  baseUrl: '/${projectName}/',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://${organizationName}.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RingerInteractive', // Usually your GitHub org/user name.
  projectName: 'Ringer-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
           editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },blog: {
          // (...)
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ringer Interactive',
        logo: {
          alt: 'Ringer Interactive',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Document',
          },
          {
            href: 'https://github.com/RingerInteractive',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ringer Inteactive.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = {
  // ...
  url: 'https://ringer-wiki.github.io', // Your website URL
  baseUrl: '/',
  projectName: 'Ringer-wiki.github.io',
  organizationName: 'RingerInteractive',
  trailingSlash: false,
  // ...
};
module.exports = config;
