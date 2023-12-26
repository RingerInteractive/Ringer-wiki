import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Ringer-wiki/__docusaurus/debug',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug', 'f40'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/config',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/config', 'd2d'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/content',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/content', 'f48'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/globalData', '606'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/metadata', 'c36'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/registry', 'a1b'),
    exact: true
  },
  {
    path: '/Ringer-wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/Ringer-wiki/__docusaurus/debug/routes', 'beb'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog',
    component: ComponentCreator('/Ringer-wiki/blog', '780'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/archive',
    component: ComponentCreator('/Ringer-wiki/blog/archive', '38d'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/first-blog-post',
    component: ComponentCreator('/Ringer-wiki/blog/first-blog-post', '82f'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/long-blog-post',
    component: ComponentCreator('/Ringer-wiki/blog/long-blog-post', 'ff1'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/mdx-blog-post',
    component: ComponentCreator('/Ringer-wiki/blog/mdx-blog-post', '667'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/tags',
    component: ComponentCreator('/Ringer-wiki/blog/tags', '975'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/tags/docusaurus',
    component: ComponentCreator('/Ringer-wiki/blog/tags/docusaurus', '987'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/tags/facebook',
    component: ComponentCreator('/Ringer-wiki/blog/tags/facebook', '5ea'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/tags/hello',
    component: ComponentCreator('/Ringer-wiki/blog/tags/hello', 'f27'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/tags/hola',
    component: ComponentCreator('/Ringer-wiki/blog/tags/hola', '233'),
    exact: true
  },
  {
    path: '/Ringer-wiki/blog/welcome',
    component: ComponentCreator('/Ringer-wiki/blog/welcome', '7bf'),
    exact: true
  },
  {
    path: '/Ringer-wiki/markdown-features',
    component: ComponentCreator('/Ringer-wiki/markdown-features', 'f4e'),
    exact: true
  },
  {
    path: '/Ringer-wiki/markdown-page',
    component: ComponentCreator('/Ringer-wiki/markdown-page', '5ee'),
    exact: true
  },
  {
    path: '/Ringer-wiki/docs',
    component: ComponentCreator('/Ringer-wiki/docs', 'bfa'),
    routes: [
      {
        path: '/Ringer-wiki/docs/admin-portal-guide/Android',
        component: ComponentCreator('/Ringer-wiki/docs/admin-portal-guide/Android', 'b5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/admin-portal-setup/add-server-key-to-ringer',
        component: ComponentCreator('/Ringer-wiki/docs/admin-portal-setup/add-server-key-to-ringer', '9a3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/admin-portal-setup/create-firebase-token',
        component: ComponentCreator('/Ringer-wiki/docs/admin-portal-setup/create-firebase-token', 'bd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/category/admin-portal-firebase-setup',
        component: ComponentCreator('/Ringer-wiki/docs/category/admin-portal-firebase-setup', '2d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/category/admin-portal-guide',
        component: ComponentCreator('/Ringer-wiki/docs/category/admin-portal-guide', '9ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/category/mobile-integration',
        component: ComponentCreator('/Ringer-wiki/docs/category/mobile-integration', '0b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/intro',
        component: ComponentCreator('/Ringer-wiki/docs/intro', '8b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/mobile-integration/Android',
        component: ComponentCreator('/Ringer-wiki/docs/mobile-integration/Android', '072'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/Ringer-wiki/docs/mobile-integration/iOS',
        component: ComponentCreator('/Ringer-wiki/docs/mobile-integration/iOS', '413'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Ringer-wiki/',
    component: ComponentCreator('/Ringer-wiki/', 'beb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
