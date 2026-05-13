import { Link } from "react-router-dom";

const sections = [
  {
    heading: "Explore",
    links: [
      { to: "/", label: "Home" },
      { to: "/blog", label: "Blog" },
      { to: "/authors", label: "Authors" },
      { to: "/sitemap", label: "Sitemap" },
    ],
  },
  {
    heading: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/editorial-guidelines", label: "Editorial Guidelines" },
      { to: "/fact-checking", label: "Fact-Checking Policy" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { to: "/privacy-policy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms" },
      { to: "/disclaimer", label: "Disclaimer" },
      { to: "/cookie-policy", label: "Cookie Policy" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-card mt-16">
    <div className="container-wide py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold font-heading text-primary mb-2">Life Now Tips</h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            Practical, expert-reviewed guides on productivity, health, lifestyle, and online income — written by real people for real readers.
          </p>
        </div>
        {sections.map((s) => (
          <div key={s.heading}>
            <h4 className="text-sm font-semibold font-body text-foreground mb-3">{s.heading}</h4>
            <ul className="space-y-2">
              {s.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground font-body">
        <p>© {new Date().getFullYear()} Life Now Tips. All rights reserved.</p>
        <p>Content for informational purposes only. See our <Link to="/disclaimer" className="underline hover:text-primary">disclaimer</Link>.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
