import { Link } from "react-router-dom";
import type { Author } from "@/data/authors";

const AuthorCard = ({ author, label = "Written by" }: { author: Author; label?: string }) => (
  <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-5 my-8">
    <Link to={`/author/${author.slug}`} className="shrink-0">
      <img
        src={author.avatar}
        alt={`${author.name} – ${author.title}`}
        loading="lazy"
        decoding="async"
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover"
      />
    </Link>
    <div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">{label}</p>
      <Link to={`/author/${author.slug}`} className="text-lg font-bold font-heading text-foreground hover:text-primary transition-colors">
        {author.name}
      </Link>
      <p className="text-sm text-primary font-body mb-2">{author.title}</p>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">{author.bio}</p>
    </div>
  </div>
);

export default AuthorCard;
