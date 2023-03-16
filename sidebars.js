/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    //add your tutorial here
    {
      type: 'category',
      label: 'Tokengated Website with polkadot.js and next.js',
      link: {
          type: 'doc',
          id: 'tutorials/tokengated-polkadot-next-js/intro',
      },
      items: [
          'tutorials/tokengated-polkadot-next-js/intro',
          'tutorials/tokengated-polkadot-next-js/step1',
          'tutorials/tokengated-polkadot-next-js/step2',
          'tutorials/tokengated-polkadot-next-js/conclusion'
      ],
    },
  ],

  authorsSidebar: [
    {
      type: 'category',
      label: 'How to Write a New Tutorial on Polkadot.study',
      link: {
        type: 'doc',
        id: 'authors/new-tutorial-on-polkadot-study/intro',
      },
      items: [ 
        'authors/new-tutorial-on-polkadot-study/development-environment',
        'authors/new-tutorial-on-polkadot-study/use-the-tutorial-template',
        'authors/new-tutorial-on-polkadot-study/structure-and-style',
        'authors/new-tutorial-on-polkadot-study/metadata',
        'authors/new-tutorial-on-polkadot-study/funding',
        'authors/new-tutorial-on-polkadot-study/further-reading'
      ]
    },    
    'authors/contribution-cheatsheet',
    'authors/components-cheatsheet',
  ],
};

module.exports = sidebars;
