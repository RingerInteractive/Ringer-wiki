import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'df5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '061'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '470'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '041'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e7a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '4ce'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4c8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'e07'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'e4c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '17b'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9a3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '691'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '72f'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '427'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '159'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '06e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '0c5'),
    exact: true
  },
  {
    path: '/markdown-features',
    component: ComponentCreator('/markdown-features', 'c6e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '75d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'af7'),
    routes: [
      {
        path: '/docs/admin-portal-guide/Android',
        component: ComponentCreator('/docs/admin-portal-guide/Android', 'f64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin-portal-setup/add-server-key-to-ringer',
        component: ComponentCreator('/docs/admin-portal-setup/add-server-key-to-ringer', '923'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/admin-portal-setup/create-firebase-token',
        component: ComponentCreator('/docs/admin-portal-setup/create-firebase-token', 'af5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/admin-portal-firebase-setup',
        component: ComponentCreator('/docs/category/admin-portal-firebase-setup', 'cf0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/admin-portal-guide',
        component: ComponentCreator('/docs/category/admin-portal-guide', '59d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/mobile-integration',
        component: ComponentCreator('/docs/category/mobile-integration', '25d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mobile-integration/Android',
        component: ComponentCreator('/docs/mobile-integration/Android', 'f95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mobile-integration/iOS',
        component: ComponentCreator('/docs/mobile-integration/iOS', '1d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c7f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
