import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <article className={`group bg-card rounded-lg border border-border shadow-card hover:shadow-elevated transition-shadow ${featured ? "md:col-span-2" : ""}`}>
      <Link to={`/blog/${article.slug}`} className="block p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold font-body uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-xs text-muted-foreground font-body">{article.readTime}</span>
        </div>
        <h3 className={`font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2 ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          <span>{article.author}</span>
          <span>·</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
