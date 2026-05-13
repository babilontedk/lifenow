import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import SEO from "@/components/SEO";
import { articles, categories } from "@/data/articles";
import { getCategoryImage } from "@/data/categoryImages";

const Index = () => {
  const sorted = [...articles].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const heroFeatured = sorted[0];
  const featured = sorted.slice(1, 3);
  const trending = sorted.slice(3, 7);
  const recommended = sorted.slice(7, 13);

  return (
    <Layout>
      <SEO
        title="Life Now Tips – Smart Tips to Improve Your Life, Productivity & Success"
        description="Practical, expert-reviewed advice on productivity, health, lifestyle, online money, and self-improvement. New guides every week."
        path="/"
      />

      {/* Hero with featured article */}
      <section className="bg-primary/5">
        <div className="container-wide py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded mb-3">Featured</span>
            <h1 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4 leading-tight">
              Smart, Practical Tips to Improve Your Life — Every Week
            </h1>
            <p className="text-lg text-muted-foreground font-body mb-6">
              Life Now Tips publishes in-depth, expert-reviewed guides on productivity, health, online income, and personal growth. No fluff. No spam. Just real, useful advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/blog" className="px-6 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Browse all articles
              </Link>
              <Link to="/authors" className="px-6 py-3 border border-border text-foreground font-body font-semibold rounded-lg hover:bg-secondary transition-colors">
                Meet the authors
              </Link>
            </div>
          </div>
          {heroFeatured && (
            <Link to={`/blog/${heroFeatured.slug}`} className="group block bg-card border border-border rounded-lg overflow-hidden shadow-elevated">
              <img src={getCategoryImage(heroFeatured.category)} alt={heroFeatured.title}
                width={1280} height={720} loading="eager"
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{heroFeatured.category}</span>
                <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors mt-2">{heroFeatured.title}</h2>
                <p className="text-sm text-muted-foreground font-body mt-2 line-clamp-2">{heroFeatured.excerpt}</p>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Featured */}
      <section className="container-wide py-12">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Editor's Picks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="container-wide py-8">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map(cat => (
            <Link key={cat} to={`/blog?category=${encodeURIComponent(cat)}`}
              className="group relative h-32 rounded-lg overflow-hidden border border-border">
              <img src={getCategoryImage(cat)} alt={cat} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center text-card font-heading font-bold text-lg">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="container-wide py-8">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Trending This Week</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trending.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* Recommended */}
      <section className="container-wide py-8">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Recommended For You</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="text-primary font-body font-semibold hover:underline">
            View All Articles →
          </Link>
        </div>
      </section>

      <section className="container-wide py-12">
        <NewsletterSignup />
      </section>
    </Layout>
  );
};

export default Index;
