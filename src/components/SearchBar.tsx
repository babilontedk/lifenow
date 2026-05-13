import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const results = q.trim().length >= 2
    ? articles.filter((a) =>
        a.title.toLowerCase().includes(q.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(q.toLowerCase()) ||
        a.category.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 6)
    : [];

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(!open)} aria-label="Search" className="p-2 rounded-md hover:bg-secondary transition-colors text-foreground">
        {open ? <X size={18} /> : <Search size={18} />}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-80 max-w-[calc(100vw-2rem)] bg-card border border-border rounded-lg shadow-elevated p-3 z-50">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {results.length > 0 && (
            <ul className="mt-2 max-h-80 overflow-auto">
              {results.map((a) => (
                <li key={a.slug}>
                  <Link to={`/blog/${a.slug}`} onClick={() => setOpen(false)}
                    className="block px-2 py-2 rounded hover:bg-secondary text-sm font-body">
                    <div className="font-semibold text-foreground line-clamp-1">{a.title}</div>
                    <div className="text-xs text-muted-foreground">{a.category}</div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {q.trim().length >= 2 && results.length === 0 && (
            <p className="mt-3 text-sm text-muted-foreground font-body px-2">No results.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
