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
  tutorialSidebar: [
    "welcome",
    "started",
    {
      type: "category",
      label: "Foundance Process",
      link: {
        type: "generated-index",
        title: "Foundance Process",
        description: "Get to know the foundance how-to.",
        keywords: ["how-to"],
        image: "/img/foundance.png",
      },
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-basics",
        },
      ],
    },
    {
      type: "category",
      label: "Running A Foundance",
      link: {
        type: "generated-index",
        title: "Running A Foundance",
        description:
          "Now you've created an agreement, run the organization. Here you will find all of the resources required to keep your organization running smoothly and effectively.",
        keywords: ["how-to"],
        image: "/img/foundance.png",
      },
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "running-a-foundance",
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
