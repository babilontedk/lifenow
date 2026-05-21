import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "lnt_cookie_consent_v1";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-card border border-border shadow-lg rounded-lg p-4 font-body"
    >
      <p className="text-sm text-foreground mb-3 leading-relaxed">
        We use cookies to personalize content, serve ads via Google AdSense, and analyze traffic. See our{" "}
        <Link to="/cookie-policy" className="text-primary underline">Cookie Policy</Link> and{" "}
        <Link to="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
      </p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => decide("rejected")}
          className="text-xs px-3 py-2 rounded border border-border text-foreground hover:bg-muted transition-colors"
        >
          Reject
        </button>
        <button
          onClick={() => decide("accepted")}
          className="text-xs px-3 py-2 rounded bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Accept all
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
