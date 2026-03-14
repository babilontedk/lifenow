import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { articles } from "@/data/articles";

const SitemapPage = () => {
  const pages = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms and Conditions" },
    { to: "/disclaimer", label: "Disclaimer" },
    { to: "/cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <Layout>
      <div className="container-blog py-12">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Sitemap</h1>

        <h2 className="text-xl font-bold font-heading text-foreground mt-8 mb-4">Pages</h2>
        <ul className="space-y-2">
          {pages.map(p => (
            <li key={p.to}>
              <Link to={p.to} className="text-primary font-body hover:underline">{p.label}</Link>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold font-heading text-foreground mt-8 mb-4">Blog Articles</h2>
        <ul className="space-y-2">
          {articles.map(a => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="text-primary font-body hover:underline">{a.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default SitemapPage;
