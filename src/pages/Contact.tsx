import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container-blog py-12">
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">Contact Us</h1>
        <p className="text-muted-foreground font-body mb-8">Have a question, suggestion, or feedback? We would love to hear from you. Fill out the form below or email us directly at <strong>contact@lifenowtips.com</strong>.</p>

        {submitted ? (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold font-heading text-primary mb-2">Message Sent!</h2>
            <p className="text-muted-foreground font-body">Thank you for reaching out. We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            <div>
              <label className="block text-sm font-medium font-body text-foreground mb-1">Name</label>
              <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium font-body text-foreground mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium font-body text-foreground mb-1">Message</label>
              <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" className="px-8 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Contact;
