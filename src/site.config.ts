// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: "Yitong Xiao",
  role: "Interaction Designer",
  email: "xiaoyitong718@gmail.com",
  tagline:
    "I design digital products and interactive experiences through research, prototyping and visual storytelling.",
  description:
    "Portfolio of Yitong Xiao, an interaction designer working across digital products, AI-enabled experiences and interactive media.",
  social: [],
  locale: "en",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
] as const;
