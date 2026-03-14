import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { articles, categories } from "@/data/articles";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const filtered = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <Layout>
      <section className="container-wide py-12">
        <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Blog</h1>
        <p className="text-muted-foreground font-body mb-8">Practical tips and advice to improve every area of your life.</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["All", ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setSearchParams(cat === "All" ? {} : { category: cat })}
              className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
        {filtered.length === 0 && <p className="text-muted-foreground font-body text-center py-12">No articles found in this category.</p>}
      </section>
    </Layout>
  );
};

export default Blog;
