import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { authors } from "@/data/authors";

const About = () => (
  <Layout>
    <SEO
      title="About Life Now Tips"
      description="Learn about Life Now Tips — our mission, editorial team, values, and how we create trustworthy guides on productivity, health, lifestyle and online income."
      path="/about"
    />
    <div className="container-blog py-12">
      <Breadcrumbs items={[{ name: "Home", url: "/" }, { name: "About" }]} />
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">About Life Now Tips</h1>
      <div className="prose-blog font-body text-foreground">
        <p>
          <strong>Life Now Tips</strong> is an independent online publication dedicated to publishing
          practical, expert-reviewed guides on productivity, health, lifestyle, self-improvement, online
          income, and technology. We launched in 2024 with a simple mission: help everyday readers make
          small, sustainable changes that compound into a better life.
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe meaningful change starts with clear, honest, and actionable information. Every article
          we publish is written by a named author, fact-checked against primary sources, and reviewed by a
          second editor before going live. We do not republish syndicated content and we do not publish
          AI-generated articles without human research and editing.
        </p>

        <h2>Editorial Standards</h2>
        <p>
          Our work follows Google's E-E-A-T principles (Experience, Expertise, Authoritativeness,
          Trustworthiness). Read more in our{" "}
          <Link to="/editorial-guidelines" className="text-primary underline">Editorial Guidelines</Link>{" "}
          and{" "}
          <Link to="/fact-checking" className="text-primary underline">Fact-Checking Policy</Link>.
          Sensitive topics like health and finance are reviewed by a second qualified writer, and we
          recommend that readers consult licensed professionals for personal medical, legal, or financial
          decisions.
        </p>

        <h2>What We Cover</h2>
        <ul>
          <li><strong>Productivity</strong> — Time management, focus techniques, and efficiency strategies</li>
          <li><strong>Health Tips</strong> — Natural wellness, stress management, and healthy living</li>
          <li><strong>Self Improvement</strong> — Mindset, confidence, discipline, and personal growth</li>
          <li><strong>Lifestyle</strong> — Daily routines, habits, and life optimization</li>
          <li><strong>Online Money</strong> — Legitimate side hustles and income strategies</li>
          <li><strong>Tech Tips</strong> — Apps and tools to organize your life</li>
        </ul>

        <h2>Our Team</h2>
        <p>
          Life Now Tips is written and edited by a small team of writers with hands-on experience in their
          respective fields. Meet the full team on our{" "}
          <Link to="/authors" className="text-primary underline">Authors page</Link>.
        </p>
        <ul>
          {authors.map((a) => (
            <li key={a.slug}>
              <Link to={`/author/${a.slug}`} className="text-primary underline">{a.name}</Link> — {a.title}
            </li>
          ))}
        </ul>

        <h2>How We Make Money</h2>
        <p>
          Life Now Tips is supported by display advertising (Google AdSense) and, occasionally, affiliate
          links to products we genuinely recommend. Advertising and affiliate relationships never influence
          our editorial decisions. When a post contains affiliate links, we disclose it clearly. Read our{" "}
          <Link to="/disclaimer" className="text-primary underline">full disclaimer</Link>.
        </p>

        <h2>Contact &amp; Corrections</h2>
        <p>
          Questions, feedback, or a correction? Email us at{" "}
          <a href="mailto:contact@lifenowtips.com" className="text-primary underline">contact@lifenowtips.com</a>{" "}
          or use our <Link to="/contact" className="text-primary underline">Contact page</Link>. We respond
          to every legitimate email and aim to correct verified errors within 7 days.
        </p>
      </div>
    </div>
  </Layout>
);

export default About;
