import type { Article } from "@/data/articles";

export interface ParsedHeading { id: string; text: string }

const slugifyHeading = (text: string): string =>
  text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 60);

const escapeHtml = (s: string) => s
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const inline = (s: string) =>
  // bold then italic, then links [text](url)
  s
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline">$1</a>');

export interface RenderedArticle {
  html: string;
  headings: ParsedHeading[];
  wordCount: number;
}

export function renderArticleContent(content: string, options?: { inlineImage?: { src: string; alt: string; caption?: string }; afterHeadingIndex?: number }): RenderedArticle {
  const lines = content.split("\n");
  const out: string[] = [];
  const headings: ParsedHeading[] = [];
  let inUL = false;
  let inOL = false;
  let h2Count = 0;

  const closeLists = () => {
    if (inUL) { out.push("</ul>"); inUL = false; }
    if (inOL) { out.push("</ol>"); inOL = false; }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "") { closeLists(); continue; }
    if (line === "---") { closeLists(); out.push("<hr />"); continue; }

    if (line.startsWith("## ")) {
      closeLists();
      const text = line.slice(3).trim();
      const id = slugifyHeading(text);
      headings.push({ id, text });
      out.push(`<h2 id="${id}">${escapeHtml(text)}</h2>`);
      h2Count++;
      if (options?.inlineImage && options.afterHeadingIndex === h2Count) {
        out.push(`<figure class="my-6"><img src="${options.inlineImage.src}" alt="${escapeHtml(options.inlineImage.alt)}" loading="lazy" decoding="async" class="w-full rounded-lg border border-border" />${options.inlineImage.caption ? `<figcaption class="text-sm text-muted-foreground text-center mt-2">${escapeHtml(options.inlineImage.caption)}</figcaption>` : ""}</figure>`);
      }
      continue;
    }
    if (line.startsWith("### ")) {
      closeLists();
      const text = line.slice(4).trim();
      out.push(`<h3>${escapeHtml(text)}</h3>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!inUL) { closeLists(); out.push("<ul>"); inUL = true; }
      out.push(`<li>${inline(escapeHtml(line.replace(/^[-*]\s+/, "")))}</li>`);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      if (!inOL) { closeLists(); out.push("<ol>"); inOL = true; }
      out.push(`<li>${inline(escapeHtml(line.replace(/^\d+\.\s+/, "")))}</li>`);
      continue;
    }
    closeLists();
    out.push(`<p>${inline(escapeHtml(line))}</p>`);
  }
  closeLists();

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  return { html: out.join("\n"), headings, wordCount };
}

export function getReadingTime(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

// Generate fallback FAQs from article metadata
export function generateFAQs(article: Article): { question: string; answer: string }[] {
  const t = article.title;
  const cat = article.category.toLowerCase();
  return [
    {
      question: `What is the main goal of "${t}"?`,
      answer: `${article.excerpt} Our goal is to give you actionable, beginner-friendly steps you can apply right away without needing prior expertise.`,
    },
    {
      question: `How long does it take to see results?`,
      answer: `Most readers notice meaningful progress within 2–4 weeks of consistent application. Habits and skills covered in ${article.category.toLowerCase()} content compound over time, so the longer you stay consistent, the bigger the results.`,
    },
    {
      question: `Is this guide suitable for beginners?`,
      answer: `Yes. Every concept is explained in plain language with practical examples. You don't need any prior background in ${cat} to follow along.`,
    },
    {
      question: `Where can I learn more about ${article.category}?`,
      answer: `Browse our full ${article.category} category for related guides, or subscribe to our newsletter to get new tips and case studies delivered weekly.`,
    },
  ];
}

export function generateKeyTakeaways(article: Article): string[] {
  return [
    `Practical, step-by-step guidance focused on real-world results in ${article.category.toLowerCase()}.`,
    `Most strategies can be implemented in under 30 minutes a day.`,
    `Consistency matters more than perfection — start small and build momentum.`,
    `Internal links and FAQs help you go deeper into related topics.`,
  ];
}
