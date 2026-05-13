import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authors } from "@/data/authors";

const Authors = () => (
  <Layout>
    <SEO title="Our Authors" description="Meet the writers and experts behind Life Now Tips. Each author brings real-world expertise in their field." path="/authors" />
    <section className="container-wide py-10">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Authors" }]} />
      <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Our Authors</h1>
      <p className="text-muted-foreground font-body mb-8 max-w-2xl">Every article on Life Now Tips is written by experienced writers and reviewed for accuracy. Get to know the people behind the content.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {authors.map((a) => (
          <Link key={a.slug} to={`/author/${a.slug}`} className="bg-card border border-border rounded-lg p-5 hover:shadow-elevated transition-shadow">
            <img src={a.avatar} alt={a.name} width={80} height={80} loading="lazy"
              className="w-20 h-20 rounded-full object-cover mb-3" />
            <h2 className="text-lg font-bold font-heading text-foreground">{a.name}</h2>
            <p className="text-sm text-primary font-body mb-2">{a.title}</p>
            <p className="text-sm text-muted-foreground font-body line-clamp-3">{a.bio}</p>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Authors;
