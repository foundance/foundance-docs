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
    "onboarding",
    "your-profile",
    {
      type: "category",
      label: "(Co)Founder's Journey",
      link: {
        type: "generated-index",
        title: "(Co)Founder's Journey",
        description: "Your Journey with Foundance as a Founder or Cofounder.",
        keywords: ["journies"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "founders-journey",
        },
      ],
    },
    {
      type: "category",
      label: "Freelancer's Journey",
      link: {
        type: "generated-index",
        title: "Freelancer's Journey",
        description: "Your Journey with Foundance as a Freelancer.",
        keywords: ["journies"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "freelancers-journey",
        },
      ],
    },
    {
      type: "category",
      label: "Advisor's Journey",
      link: {
        type: "generated-index",
        title: "Advisor's Journey",
        description: "Your Journey with Foundance as an Advisor.",
        keywords: ["journies"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "advisors-journey",
        },
      ],
    },
    {
      type: "category",
      label: "Hacker's Journey",
      link: {
        type: "generated-index",
        title: "Hacker's Journey",
        description: "Your Journey with Foundance as a Hacker.",
        keywords: ["journies"],
        image: "/img/foundance.png",
      },
      collapsed: true,
      items: [
        {
          type: "autogenerated",
          dirName: "hackers-journey",
        },
      ],
    },
    {
      type: "category",
      label: "Foundance Processes",
      link: {
        type: "generated-index",
        title: "Foundance Processes",
        description:
          "Understand how to create a great profile, find & create great projects and build winning teams.",
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
