import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-primary/5 border border-primary/10 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Stay Updated</h2>
      <p className="text-muted-foreground font-body mb-6 max-w-md mx-auto">
        Get the latest tips and advice delivered straight to your inbox. No spam, just value.
      </p>
      {submitted ? (
        <p className="text-primary font-body font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-body font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSignup;
