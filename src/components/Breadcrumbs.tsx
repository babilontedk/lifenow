import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb { name: string; url?: string }

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground font-body mb-4">
    <ol className="flex flex-wrap items-center gap-1.5">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <li key={i} className="flex items-center gap-1.5">
            {c.url && !last ? (
              <Link to={c.url} className="hover:text-primary transition-colors">{c.name}</Link>
            ) : (
              <span className="text-foreground/80">{c.name}</span>
            )}
            {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
