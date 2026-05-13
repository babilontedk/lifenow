import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const FactChecking = () => (
  <Layout>
    <SEO title="Fact-Checking Policy" description="How Life Now Tips verifies facts, sources, and statistics in every article we publish." path="/fact-checking" />
    <article className="container-blog py-10 prose-blog font-body">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "Fact-Checking Policy" }]} />
      <h1 className="text-3xl font-bold font-heading mb-4">Fact-Checking Policy</h1>
      <p>Accuracy is non-negotiable. Before any article goes live, it passes through the following fact-checking workflow.</p>

      <h2>Primary sources first</h2>
      <p>Whenever possible, we link directly to the original study, dataset, government publication, or official documentation rather than citing it second-hand.</p>

      <h2>Statistics and claims</h2>
      <p>Numerical claims (percentages, study results, prices) are checked against the source on the day of publication. We avoid cherry-picked or out-of-context data.</p>

      <h2>Expert review</h2>
      <p>Articles in regulated topic areas (medical, financial, legal) are reviewed by a qualified writer with relevant background. Where a topic exceeds in-house expertise, we explicitly recommend readers consult a licensed professional.</p>

      <h2>Reader-reported errors</h2>
      <p>If you notice an inaccuracy, please contact us. Verified errors are corrected within 7 days, and a dated correction note is added to the article.</p>

      <h2>Limitations</h2>
      <p>Information evolves. Our content represents the best available understanding at the time of writing or last update, but it is not a substitute for personalized professional advice.</p>
    </article>
  </Layout>
);

export default FactChecking;
