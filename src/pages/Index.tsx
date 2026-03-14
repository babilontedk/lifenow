import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { articles, categories } from "@/data/articles";

const Index = () => {
  const featured = articles.slice(0, 2);
  const latest = articles.slice(2, 8);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-wide text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4 leading-tight">
            Smart Tips to Improve Your Life,<br className="hidden md:block" /> Productivity, and Success
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-8">
            Discover practical life advice, productivity strategies, and simple ways to improve your daily life.
          </p>
          <Link
            to="/blog"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Read Latest Tips
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="container-wide py-12">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map(a => <ArticleCard key={a.slug} article={a} featured />)}
        </div>
      </section>

      {/* Categories */}
      <section className="container-wide py-8">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <Link
              key={cat}
              to={`/blog?category=${encodeURIComponent(cat)}`}
              className="p-4 bg-card border border-border rounded-lg text-center font-body font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="container-wide py-8">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-primary font-body font-semibold hover:underline">
            View All Articles →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-wide py-12">
        <NewsletterSignup />
      </section>
    </Layout>
  );
};

export default Index;
