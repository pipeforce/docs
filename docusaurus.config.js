// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PIPEFORCE',
  tagline: 'Platform for Workflow Automation and Integration',
  url: 'https://pipeforce.github.io',
  baseUrl: '/',
  // TODO Change this to 'throw', once in production:
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'pipeforce', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pipeforce/pipeforce.github.io/edit/master/',
          docLayoutComponent: require.resolve('./src/components/DocsLayout.jsx')
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/pipeforce/pipeforce.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-KXWX67RYXR',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'G-KXWX67RYXR',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'PIPEFORCE',
          src: 'img/pipeforce-logo-150w.png',
        },
        items: [
          /**
          {
            type: 'docsVersionDropdown',
          },**/
          {
            href: 'https://logabit.atlassian.net/wiki/spaces/PA/pages/2543353860',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://logabit.atlassian.net/wiki/spaces/PA/pages/3162931201',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://pipeforce.github.io/redoc.html',
            position: 'left',
            label: 'REST API',
          },
          {
            position: 'right',
            href: 'https://logabit.atlassian.net/servicedesk/customer/portals',
            label: 'Support',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                href: 'https://logabit.atlassian.net/wiki/spaces/PA',
              },
              {
                label: 'REST API',
                href: 'https://pipeforce.github.io/redoc.html',
              },
            ],
          },
          {
            title: 'LOGABIT',
            items: [
              {
                label: 'Website',
                href: 'https://pipeforce.io',
              },
              {
                label: 'Support',
                href: 'https://logabit.atlassian.net/servicedesk/customer/portals',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://pipeforce.io/blog/',
              },
              {
                label: "Imprint",
                to: 'https://pipeforce.io/impressum/',
              }
            ],
          },
        ],
        copyright: `<br/>Copyright © ${new Date().getFullYear()} <b>LOGABIT GmbH.</b>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
