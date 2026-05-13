import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { getAuthorForArticle, getReviewerForArticle } from "@/data/authors";
import { getCategoryImage } from "@/data/categoryImages";
import ArticleCard from "@/components/ArticleCard";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import AuthorCard from "@/components/AuthorCard";
import ShareButtons from "@/components/ShareButtons";
import FAQSection from "@/components/FAQSection";
import KeyTakeaways from "@/components/KeyTakeaways";
import { renderArticleContent, getReadingTime, generateFAQs, generateKeyTakeaways } from "@/lib/articleRender";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, SITE_URL } from "@/lib/seo";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <Layout>
        <div className="container-blog py-20 text-center">
          <h1 className="text-2xl font-bold font-heading">Article Not Found</h1>
          <Link to="/blog" className="text-primary font-body mt-4 inline-block hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const author = getAuthorForArticle(article);
  const reviewer = getReviewerForArticle(article);
  const featuredImage = getCategoryImage(article.category);
  const inlineImage = featuredImage; // reuse category image inline mid-article
  const related = getRelatedArticles(article.slug);
  const faqs = (article as any).faqs?.length ? (article as any).faqs : generateFAQs(article);
  const takeaways = (article as any).keyTakeaways?.length ? (article as any).keyTakeaways : generateKeyTakeaways(article);
  const updatedDate = (article as any).updatedDate || article.date;

  const { html, headings } = renderArticleContent(article.content, {
    inlineImage: { src: inlineImage, alt: `Illustration for ${article.title}`, caption: `${article.category} – Life Now Tips` },
    afterHeadingIndex: 2,
  });
  const readTime = article.readTime || getReadingTime(article.content);

  const path = `/blog/${article.slug}`;
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.category, url: `/blog?category=${encodeURIComponent(article.category)}` },
    { name: article.title },
  ];

  const schemas = [
    buildArticleSchema({
      title: article.title,
      metaDescription: article.metaDescription,
      slug: article.slug,
      date: article.date,
      updatedDate,
      category: article.category,
      image: featuredImage,
      author: { name: author.name, slug: author.slug, bio: author.bio },
      reviewer: reviewer ? { name: reviewer.name, slug: reviewer.slug } : null,
    }),
    buildFaqSchema(faqs),
    buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, url: b.url || path }))),
  ];

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.metaDescription}
        path={path}
        image={featuredImage}
        type="article"
        publishedTime={article.date}
        modifiedTime={updatedDate}
        author={author.name}
        schema={schemas}
      />

      <article className="container-blog py-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="flex items-center gap-3 mb-3">
          <Link to={`/blog?category=${encodeURIComponent(article.category)}`}
            className="text-xs font-semibold font-body uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded hover:bg-primary/20 transition-colors">
            {article.category}
          </Link>
          <span className="text-xs text-muted-foreground font-body">{readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 leading-tight">{article.title}</h1>
        <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">{article.excerpt}</p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-body mb-6">
          <Link to={`/author/${author.slug}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <img src={author.avatar} alt={author.name} loading="lazy" width={32} height={32}
              className="w-8 h-8 rounded-full object-cover" />
            <span>By <span className="text-foreground font-semibold">{author.name}</span></span>
          </Link>
          <span>·</span>
          <time dateTime={article.date}>Published {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          {updatedDate !== article.date && (
            <>
              <span>·</span>
              <time dateTime={updatedDate}>Updated {new Date(updatedDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            </>
          )}
          {reviewer && (
            <>
              <span>·</span>
              <span>Reviewed by <Link to={`/author/${reviewer.slug}`} className="text-foreground font-semibold hover:text-primary">{reviewer.name}</Link></span>
            </>
          )}
        </div>

        <figure className="my-6">
          <img src={featuredImage} alt={`Featured image for ${article.title}`}
            width={1280} height={720}
            className="w-full rounded-lg border border-border aspect-video object-cover" />
        </figure>

        <ShareButtons title={article.title} path={path} />
        <KeyTakeaways items={takeaways} />
        <TableOfContents headings={headings} />

        <div className="prose-blog font-body text-foreground" dangerouslySetInnerHTML={{ __html: html }} />

        <FAQSection faqs={faqs} />

        <div className="border-t border-border my-8" />
        <ShareButtons title={article.title} path={path} />
        <AuthorCard author={author} label="Written by" />
        {reviewer && <AuthorCard author={reviewer} label="Reviewed by" />}

        <p className="text-xs text-muted-foreground font-body italic mt-8">
          Disclaimer: This article is for informational purposes only and does not constitute professional medical, legal, or financial advice. Always consult a qualified expert for advice tailored to your situation. See our <Link to="/disclaimer" className="underline">full disclaimer</Link>.
        </p>
      </article>

      {related.length > 0 && (
        <section className="container-wide py-12 border-t border-border">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(a => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
