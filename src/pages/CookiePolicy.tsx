import Layout from "@/components/Layout";

const CookiePolicy = () => (
  <Layout>
    <div className="container-blog py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground font-body mb-8">Last updated: March 14, 2026</p>
      <div className="prose-blog font-body text-foreground">
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.</p>

        <h2>How We Use Cookies</h2>
        <p>Life Now Tips uses cookies for several purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</li>
          <li><strong>Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience.</li>
          <li><strong>Advertising Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests.</li>
        </ul>

        <h2>Google Advertising Cookies</h2>
        <p>We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</p>
        <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies by visiting the <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance opt-out page</a>.</p>

        <h2>Managing Cookies</h2>
        <p>Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, please note that some parts of the website may not function properly if you disable cookies.</p>

        <h2>Third-Party Cookies</h2>
        <p>In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These third-party services have their own privacy policies addressing how they use such information.</p>

        <h2>Changes to This Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about our use of cookies, please contact us at <strong>contact@lifenowtips.com</strong>.</p>
      </div>
    </div>
  </Layout>
);

export default CookiePolicy;
