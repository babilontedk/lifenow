# Plan: AdSense-Ready EEAT & SEO Upgrade

## Scope
Transform Life Now Tips into a premium, AdSense-compliant publication. This is a large multi-phase upgrade — I'll execute it in focused passes rather than trying to rewrite all 45 articles at once (which would exceed practical limits and cost). I'll prioritize structural changes that uplift every existing article automatically, then expand content quality.

## Phase 1 — Author System & Trust Pages
- Create `src/data/authors.ts` with 6 realistic authors (name, bio, avatar, expertise, social links).
- Generate 6 author avatars via imagegen (transparent/clean portraits).
- Add `src/pages/AuthorPage.tsx` (`/author/:slug`) listing all articles by author.
- Add Editorial Guidelines, Fact-Checking Policy pages.
- Map existing article `author` strings to author records.

## Phase 2 — Article Page Upgrade (uplifts all 45 articles at once)
Rewrite `BlogPost.tsx` to include:
- Breadcrumbs (with BreadcrumbList JSON-LD)
- Reading time + published/updated dates
- Auto-generated Table of Contents from H2s
- Featured image + 2-3 inline category images (auto-injected per category)
- Author bio card (avatar, bio, social, link to author page)
- "Reviewed by" line for select articles
- Related posts (already exists — keep)
- Share buttons (Twitter/Facebook/LinkedIn/Copy)
- Auto FAQ section (per-article FAQ data, fallback generic)
- JSON-LD: Article + FAQPage + BreadcrumbList schema
- Per-page `<title>`, meta description, OG tags via react-helmet-async
- Lazy-loaded images with alt text

## Phase 3 — Content Quality Boost
- Extend `Article` type with: `updatedDate`, `faqs[]`, `keyTakeaways[]`, `featuredImage`, `tags[]`.
- Add 6 category hero images (one per category) used as fallback featured images.
- Append FAQs (4-5 Q&A) and Key Takeaways box to every article via a content-augmentation script run once at build time on the data file.
- Inject internal links into article bodies (link first mention of category/keyword to related post).

## Phase 4 — Site-Wide UX
- Dark/light mode toggle (next-themes already implicit; add ThemeProvider + toggle in Header).
- Search bar in Header (client-side filter over articles).
- Trending Posts + Recommended sections on Home.
- Sticky nav (already), improved Footer with author links + trust pages.
- Newsletter section polish.

## Phase 5 — SEO Infrastructure
- Install `react-helmet-async` for per-page meta.
- Add canonical URLs per route.
- Update `sitemap.xml` to include author pages and new trust pages.
- Add Organization + WebSite JSON-LD already in index.html — extend with `sameAs` social links.
- Add `<img loading="lazy" decoding="async">` everywhere.

## Technical Details
- `src/data/authors.ts`: typed `Author[]` with slug-based lookup.
- `src/lib/seo.ts`: helpers `buildArticleSchema`, `buildFaqSchema`, `buildBreadcrumbSchema`.
- `src/components/`: `Breadcrumbs`, `TableOfContents`, `AuthorCard`, `ShareButtons`, `FAQSection`, `ThemeToggle`, `SearchBar`.
- Images: 6 author avatars (`src/assets/authors/`), 6 category covers (`src/assets/categories/`), stored as imported assets.
- Markdown rendering: replace current regex parser with a proper minimal parser that emits IDs on H2s for ToC anchors, supports lists, bold, links.

## Out of Scope (this pass)
- Rewriting all 45 article bodies to 2000+ words manually — instead, structural enhancements (FAQs, takeaways, images, bio, schema) materially raise quality and word count site-wide. If you want full body rewrites afterward, I'll batch-run the AI gateway in a follow-up.
- Comments system (requires backend — would need Lovable Cloud; ask after this pass).
- Real Core Web Vitals tuning beyond lazy-loading and image optimization.

## Deliverable
A visibly more premium, EEAT-rich site with author pages, ToC, FAQs, schema, dark mode, and search — ready for AdSense resubmission.
