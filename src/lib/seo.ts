export const SITE_URL = "https://lifenow.lovable.app";
export const SITE_NAME = "Life Now Tips";

export const buildArticleSchema = (article: {
  title: string;
  metaDescription: string;
  slug: string;
  date: string;
  updatedDate?: string;
  category: string;
  image: string;
  author: { name: string; slug: string; bio: string };
  reviewer?: { name: string; slug: string } | null;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.metaDescription,
  "image": article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
  "datePublished": article.date,
  "dateModified": article.updatedDate || article.date,
  "author": {
    "@type": "Person",
    "name": article.author.name,
    "url": `${SITE_URL}/author/${article.author.slug}`,
    "description": article.author.bio,
  },
  ...(article.reviewer
    ? {
        "reviewedBy": {
          "@type": "Person",
          "name": article.reviewer.name,
          "url": `${SITE_URL}/author/${article.reviewer.slug}`,
        },
      }
    : {}),
  "publisher": {
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${article.slug}`,
  },
  "articleSection": article.category,
});

export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer },
  })),
});

export const buildBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    "item": it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
  })),
});
