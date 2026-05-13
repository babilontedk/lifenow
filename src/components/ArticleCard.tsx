import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";
import { getCategoryImage } from "@/data/categoryImages";
import { getAuthorForArticle } from "@/data/authors";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const image = getCategoryImage(article.category);
  const author = getAuthorForArticle(article);
  return (
    <article className={`group bg-card rounded-lg border border-border shadow-card hover:shadow-elevated transition-shadow overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
      <Link to={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img src={image} alt={`Featured image for ${article.title}`} loading="lazy" decoding="async"
            width={1280} height={720}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <span className="absolute top-3 left-3 text-xs font-semibold font-body uppercase tracking-wider text-primary-foreground bg-primary px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className={`font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2 ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <img src={author.avatar} alt={author.name} loading="lazy" width={24} height={24}
              className="w-6 h-6 rounded-full object-cover" />
            <span className="text-foreground/80 font-semibold">{author.name}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
