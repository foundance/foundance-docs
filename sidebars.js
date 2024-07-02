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
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
        title: "Getting Started",
        description:
          "Onboarding Foundance",
        keywords: ["how-to"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "getting started",
        },
      ],
    },
    "started",
    {
      type: "category",
      label: "Foundance Processes",
      link: {
        type: "generated-index",
        title: "Foundance Processes",
        description: "Understand how to create a great profile, find & create great projects and build winning teams.",
        keywords: ["how-to"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "tutorial-basics",
        },
      ],
    },
    {
      type: "category",
      label: "Hackathons & Events",
      link: {
        type: "generated-index",
        title: "Hackathons & Events",
        description: "Understand how to find, join and navigate events.",
        keywords: ["how-to", "events", "hackathons", "Venturethon"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "events",
        },
      ],
    },
    {
      type: "category",
      label: "Creating an Agreement",
      link: {
        type: "generated-index",
        title: "Creating an Agreement",
        description: "Everything that you need to know to create your cofounder agreement.",
        keywords: ["how-to"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "creating-an-agreement",
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
      collapsed: true,
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
