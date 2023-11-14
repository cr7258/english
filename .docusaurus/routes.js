import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/english/__docusaurus/debug',
    component: ComponentCreator('/english/__docusaurus/debug', 'e2a'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/config',
    component: ComponentCreator('/english/__docusaurus/debug/config', 'ca3'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/content',
    component: ComponentCreator('/english/__docusaurus/debug/content', '1b8'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/globalData',
    component: ComponentCreator('/english/__docusaurus/debug/globalData', 'b41'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/metadata',
    component: ComponentCreator('/english/__docusaurus/debug/metadata', 'fcd'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/registry',
    component: ComponentCreator('/english/__docusaurus/debug/registry', '024'),
    exact: true
  },
  {
    path: '/english/__docusaurus/debug/routes',
    component: ComponentCreator('/english/__docusaurus/debug/routes', '432'),
    exact: true
  },
  {
    path: '/english/helloMarkdown',
    component: ComponentCreator('/english/helloMarkdown', '63c'),
    exact: true
  },
  {
    path: '/english/helloReact',
    component: ComponentCreator('/english/helloReact', 'db8'),
    exact: true
  },
  {
    path: '/english/markdown-page',
    component: ComponentCreator('/english/markdown-page', '8b4'),
    exact: true
  },
  {
    path: '/english/docs',
    component: ComponentCreator('/english/docs', '732'),
    routes: [
      {
        path: '/english/docs/词根词缀/lesson1',
        component: ComponentCreator('/english/docs/词根词缀/lesson1', 'a74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/english/docs/单词分类/describe-human-adj',
        component: ComponentCreator('/english/docs/单词分类/describe-human-adj', 'f59'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/english/docs/单词分类/describe-human-adv',
        component: ComponentCreator('/english/docs/单词分类/describe-human-adv', 'ee6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/english/docs/intro',
        component: ComponentCreator('/english/docs/intro', '70d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/english/',
    component: ComponentCreator('/english/', '17d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
