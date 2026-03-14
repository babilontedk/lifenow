import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <div className="container-blog py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">About Us</h1>
      <div className="prose-blog font-body text-foreground">
        <p>Welcome to <strong>Life Now Tips</strong> — your trusted source for practical life advice, productivity strategies, and self-improvement tips that you can apply every day.</p>

        <h2>Our Mission</h2>
        <p>Life Now Tips was created to help people improve their lives with simple, practical advice they can apply every day. We believe that meaningful change does not require dramatic overhauls — it starts with small, consistent steps that compound into remarkable results over time.</p>

        <h2>Who We Are</h2>
        <p>We are a passionate team of writers, researchers, and life improvement enthusiasts who are dedicated to providing high-quality, evidence-based content across topics including productivity, health, lifestyle, personal development, and financial wellness.</p>

        <h2>What We Cover</h2>
        <ul>
          <li><strong>Productivity</strong> — Time management, focus techniques, and efficiency strategies</li>
          <li><strong>Health Tips</strong> — Natural wellness, stress management, and healthy living</li>
          <li><strong>Self Improvement</strong> — Mindset, confidence, discipline, and personal growth</li>
          <li><strong>Lifestyle</strong> — Daily routines, habits, and life optimization</li>
          <li><strong>Online Money</strong> — Legitimate side hustles and income strategies</li>
          <li><strong>Technology Tips</strong> — Apps and tools to organize your life</li>
        </ul>

        <h2>Our Commitment</h2>
        <p>Every article we publish is carefully researched, original, and designed to provide genuine value. We are committed to maintaining the highest standards of quality, accuracy, and helpfulness in everything we publish. Our goal is to be the most trusted resource for practical life improvement advice on the internet.</p>

        <h2>Get in Touch</h2>
        <p>We love hearing from our readers! If you have questions, suggestions, or feedback, please visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> and send us a message. We read every email and do our best to respond promptly.</p>
      </div>
    </div>
  </Layout>
);

export default About;
