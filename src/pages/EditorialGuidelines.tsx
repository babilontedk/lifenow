import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const EditorialGuidelines = () => (
  <Layout>
    <SEO title="Editorial Guidelines" description="The editorial standards, sourcing, and review process behind every article on Life Now Tips." path="/editorial-guidelines" />
    <article className="container-blog py-10 prose-blog font-body">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Editorial Guidelines" }]} />
      <h1 className="text-3xl font-bold font-heading mb-4">Editorial Guidelines</h1>
      <p>At Life Now Tips, our mission is to publish practical, trustworthy content that genuinely helps our readers. These guidelines describe how we research, write, edit, and review every article we publish.</p>

      <h2>1. Originality</h2>
      <p>Every article is written from scratch by a named author. We do not republish syndicated content, and we do not allow AI-only generated articles to be published without human research, fact-checking, and editing.</p>

      <h2>2. Sourcing</h2>
      <p>Health, finance, and technology articles cite authoritative sources such as peer-reviewed studies, government health agencies, and recognized industry publications. Where claims are based on personal experience, we say so explicitly.</p>

      <h2>3. Author expertise</h2>
      <p>Writers are assigned topics that align with their stated background, education, or hands-on experience. Author bios disclose credentials and relevant work history.</p>

      <h2>4. Review process</h2>
      <p>Articles in sensitive categories (Health, Finance) are reviewed by a second qualified writer or subject-matter expert before publication. Reviewers are credited at the top of the article.</p>

      <h2>5. Updates</h2>
      <p>Evergreen articles are reviewed at least once a year and updated when statistics, tools, or recommended practices change. The "Updated" date reflects the most recent substantive revision.</p>

      <h2>6. Corrections</h2>
      <p>If we get something wrong, we fix it promptly and add a correction note. Readers can flag errors by emailing us via our <a href="/contact" className="text-primary underline">Contact page</a>.</p>

      <h2>7. Editorial independence</h2>
      <p>Our editorial decisions are independent of advertisers and affiliate partners. Sponsored content, when present, is clearly labeled.</p>
    </article>
  </Layout>
);

export default EditorialGuidelines;
