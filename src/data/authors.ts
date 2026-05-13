import sarah from "@/assets/authors/sarah-mitchell.jpg";
import david from "@/assets/authors/david-chen.jpg";
import priya from "@/assets/authors/priya-sharma.jpg";
import marcus from "@/assets/authors/marcus-johnson.jpg";
import emily from "@/assets/authors/emily-rodriguez.jpg";
import james from "@/assets/authors/james-park.jpg";

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  expertise: string[];
  categories: string[];
  social: { twitter?: string; linkedin?: string; website?: string };
}

export const authors: Author[] = [
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    title: "Senior Editor & Self-Improvement Writer",
    bio: "Sarah is a certified life coach and writer with over 10 years of experience helping people build better habits, mindset, and daily routines. She holds a Master's in Behavioral Psychology from the University of Manchester and has been featured in major publications covering personal development.",
    avatar: sarah,
    expertise: ["Habits", "Mindset", "Personal Growth", "Behavioral Psychology"],
    categories: ["Self Improvement", "Lifestyle"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
  {
    slug: "david-chen",
    name: "David Chen",
    title: "Productivity & Workflow Expert",
    bio: "David is a productivity consultant and former tech project manager with 12+ years optimizing workflows for Fortune 500 teams. He writes about deep work, time management, and tools that help knowledge workers do more with less.",
    avatar: david,
    expertise: ["Productivity", "Time Management", "Deep Work", "Systems"],
    categories: ["Productivity", "Technology Tips"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
  {
    slug: "priya-sharma",
    name: "Priya Sharma, RD",
    title: "Registered Dietitian & Health Writer",
    bio: "Priya is a Registered Dietitian (RD) with a Bachelor's in Nutrition Science and 8 years of clinical experience. She translates complex nutrition and wellness research into practical, evidence-based guidance for everyday readers.",
    avatar: priya,
    expertise: ["Nutrition", "Sleep", "Wellness", "Preventive Health"],
    categories: ["Health Tips"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
  {
    slug: "marcus-johnson",
    name: "Marcus Johnson",
    title: "Online Business & Finance Writer",
    bio: "Marcus has built and sold two online businesses and writes about freelancing, side hustles, and passive income. His advice is grounded in real numbers from his own ventures and case studies from creators he interviews.",
    avatar: marcus,
    expertise: ["Freelancing", "Passive Income", "Online Business", "Personal Finance"],
    categories: ["Online Money"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
  {
    slug: "emily-rodriguez",
    name: "Emily Rodriguez",
    title: "Lifestyle & Wellness Editor",
    bio: "Emily is a lifestyle journalist who covers minimalism, mindful living, and home organization. Her work focuses on small, sustainable changes that create calmer, more intentional everyday life.",
    avatar: emily,
    expertise: ["Minimalism", "Home", "Mindful Living", "Travel"],
    categories: ["Lifestyle"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
  {
    slug: "james-park",
    name: "James Park",
    title: "Technology & AI Tools Writer",
    bio: "James is a software engineer turned writer who reviews productivity software, AI tools, and digital privacy practices. He cuts through marketing hype to help readers pick tools that actually fit their workflow.",
    avatar: james,
    expertise: ["AI Tools", "Productivity Software", "Privacy", "Tech Reviews"],
    categories: ["Technology Tips"],
    social: { twitter: "https://twitter.com/", linkedin: "https://linkedin.com/" },
  },
];

export const getAuthorBySlug = (slug: string): Author | undefined =>
  authors.find((a) => a.slug === slug);

// Deterministic author assignment based on category + slug hash for variety
const categoryAuthorMap: Record<string, string[]> = {
  "Productivity": ["david-chen", "sarah-mitchell"],
  "Lifestyle": ["emily-rodriguez", "sarah-mitchell"],
  "Health Tips": ["priya-sharma"],
  "Online Money": ["marcus-johnson"],
  "Self Improvement": ["sarah-mitchell", "emily-rodriguez"],
  "Technology Tips": ["james-park", "david-chen"],
};

const hashSlug = (slug: string): number => {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
};

export const getAuthorForArticle = (article: { category: string; slug: string; author?: string }): Author => {
  // Allow override via author field if it matches a slug
  if (article.author) {
    const direct = authors.find((a) => a.name === article.author || a.slug === article.author);
    if (direct) return direct;
  }
  const candidates = categoryAuthorMap[article.category] || ["sarah-mitchell"];
  const idx = hashSlug(article.slug) % candidates.length;
  return getAuthorBySlug(candidates[idx])!;
};

export const getReviewerForArticle = (article: { category: string; slug: string }): Author | null => {
  // Assign a reviewer to roughly half of articles for variety
  if (hashSlug(article.slug) % 2 !== 0) return null;
  const author = getAuthorForArticle(article);
  const reviewers = authors.filter((a) => a.slug !== author.slug);
  return reviewers[hashSlug(article.slug) % reviewers.length];
};
