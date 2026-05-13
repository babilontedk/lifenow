import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { authors, getAuthorBySlug, getAuthorForArticle } from "@/data/authors";
import { articles } from "@/data/articles";

const AuthorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = getAuthorBySlug(slug || "");

  if (!author) {
    return (
      <Layout>
        <div className="container-blog py-20 text-center">
          <h1 className="text-2xl font-bold font-heading">Author Not Found</h1>
          <Link to="/blog" className="text-primary font-body mt-4 inline-block hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const authorArticles = articles.filter((a) => getAuthorForArticle(a).slug === author.slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.title,
    "description": author.bio,
    "image": author.avatar,
    "knowsAbout": author.expertise,
    "sameAs": Object.values(author.social).filter(Boolean),
  };

  return (
    <Layout>
      <SEO
        title={`${author.name} – ${author.title}`}
        description={author.bio}
        path={`/author/${author.slug}`}
        image={author.avatar}
        schema={personSchema}
      />
      <section className="container-wide py-10">
        <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Authors", url: "/authors" }, { name: author.name }]} />
        <div className="flex flex-col md:flex-row gap-6 items-start bg-card border border-border rounded-lg p-6">
          <img src={author.avatar} alt={author.name} width={160} height={160}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shrink-0" />
          <div>
            <h1 className="text-3xl font-bold font-heading text-foreground">{author.name}</h1>
            <p className="text-primary font-body font-semibold mb-3">{author.title}</p>
            <p className="text-foreground/90 font-body leading-relaxed mb-4">{author.bio}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {author.expertise.map((e) => (
                <span key={e} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground font-body">{e}</span>
              ))}
            </div>
            <div className="flex gap-3 text-sm font-body">
              {author.social.twitter && <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">X / Twitter</a>}
              {author.social.linkedin && <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>}
              {author.social.website && <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Website</a>}
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide pb-12">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Articles by {author.name.split(" ")[0]}</h2>
        {authorArticles.length === 0 ? (
          <p className="text-muted-foreground font-body">No articles yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorArticles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default AuthorPage;
