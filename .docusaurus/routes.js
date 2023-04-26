import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '862'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ec2'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '2cf'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '8c7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ff2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '0d8'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '88d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'cf1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '601'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '450'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3c9'),
    exact: true
  },
  {
    path: '/markdown-features',
    component: ComponentCreator('/markdown-features', 'dbb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a34'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e55'),
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
        path: '/docs/category/mobile-interation',
        component: ComponentCreator('/docs/category/mobile-interation', '344'),
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
        path: '/docs/mobile-interation/Android',
        component: ComponentCreator('/docs/mobile-interation/Android', 'cae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/mobile-interation/iOS',
        component: ComponentCreator('/docs/mobile-interation/iOS', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '310'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
