import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Recent Posts",
    allPosts: "All Posts",
    eyebrow: "AIRI PAPER WORKSPACE",
    title: "A calm archive for working papers.",
    description:
      "A focused workspace for papers, reading notes, and technical essays. Built to feel closer to a utility dashboard than a plain blog.",
    browsePapers: "Browse papers",
  },
  empty: {
    archiveLabel: "Empty archive",
    noPapersTitle: "No papers yet.",
    noPapersDesc:
      "Add a Markdown or MDX file to src/content/posts and it will appear here.",
    noTagsLabel: "No tags",
    noTagsTitle: "No paper tags yet.",
    noTagsDesc: "Tags will appear here after the first paper is published.",
    noDatedTitle: "No dated papers yet.",
    noDatedDesc:
      "Once a paper is published, it will be grouped here by year and month.",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "All the articles with the tag",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts.",

    postsTitle: "Posts",
    postsDesc: "All the articles I've posted.",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",

    aboutTitle: "About",
    aboutDesc: "A bit about me and this blog.",
    aboutIntro1: "Airi paper is a minimal English blog built with",
    aboutIntro2:
      "Airi paper is designed for clear writing, fast pages, and a comfortable reading experience across desktop and mobile.",
    aboutIntro3:
      "Posts are written in Markdown or MDX, which keeps publishing simple while still supporting rich technical content.",
    aboutFeaturesTitle: "Features",
    aboutFeatureSeo: "SEO-friendly",
    aboutFeaturePerformance: "Fast performance",
    aboutFeatureTheme: "Light & dark mode",
    aboutFeatureCustomizable: "Highly customizable",
    aboutFeatureOrganizable: "Organizable blog posts",
    aboutFeatureResponsive: "Responsive & accessible",
    aboutFeatureSearch: "Static search with PageFind",
    aboutFeatureOg: "Automatic social image generation",
    aboutMore: "and so much more.",
    aboutContactTitle: "Contact",
    aboutContactDesc:
      "This site is still being shaped. More writing and project notes will be added over time.",
  },
  language: {
    label: "Language",
    switchTo: "Tiếng Việt",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
