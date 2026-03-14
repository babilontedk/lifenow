import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

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

  const related = getRelatedArticles(article.slug);

  return (
    <Layout>
      <article className="container-blog py-12">
        <Link to="/blog" className="text-sm text-primary font-body hover:underline mb-6 inline-block">← Back to Blog</Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold font-body uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">{article.category}</span>
          <span className="text-xs text-muted-foreground font-body">{article.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 leading-tight">{article.title}</h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-8">
          <span>By {article.author}</span>
          <span>·</span>
          <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        </div>

        <div className="prose-blog font-body text-foreground" dangerouslySetInnerHTML={{ __html: article.content.replace(/## (.*)/g, '<h2>$1</h2>').replace(/### (.*)/g, '<h3>$1</h3>').split('\n').map(line => {
          if (line.startsWith('<h2>') || line.startsWith('<h3>')) return line;
          if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`;
          if (line.match(/^\d+\. /)) return `<li>${line.replace(/^\d+\. /, '')}</li>`;
          if (line.trim() === '') return '';
          return `<p>${line}</p>`;
        }).join('\n') }} />
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
