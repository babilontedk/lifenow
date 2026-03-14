import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/cookie-policy", label: "Cookie Policy" },
  { to: "/sitemap", label: "Sitemap" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <h3 className="text-lg font-bold font-heading text-primary mb-2">Life Now Tips</h3>
            <p className="text-sm text-muted-foreground font-body">
              Your trusted source for practical life advice, productivity strategies, and self-improvement tips.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold font-body text-foreground mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
              {footerLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground font-body">
            © 2026 Life Now Tips. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
