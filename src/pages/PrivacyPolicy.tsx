import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <div className="container-blog py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground font-body mb-8">Last updated: March 14, 2026</p>
      <div className="prose-blog font-body text-foreground">
        <p>At Life Now Tips, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

        <h2>Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you subscribe to our newsletter, fill out a contact form, or interact with our website. This information may include your name and email address.</p>

        <h2>Automatically Collected Information</h2>
        <p>When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.</p>

        <h2>Cookies</h2>
        <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.</p>

        <h2>Google AdSense</h2>
        <p>This website uses Google AdSense, a third-party advertising service that may use cookies to display relevant ads. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>

        <h2>Third-Party Advertising</h2>
        <p>We may use third-party advertising companies to serve ads when you visit our website. These companies may use information about your visits to this and other websites to provide advertisements about goods and services of interest to you.</p>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect to:</p>
        <ul>
          <li>Send you our newsletter and updates</li>
          <li>Respond to your inquiries and contact form submissions</li>
          <li>Improve our website and content</li>
          <li>Monitor and analyze usage and trends</li>
          <li>Display relevant advertisements</li>
        </ul>

        <h2>Data Security</h2>
        <p>We use administrative, technical, and physical security measures to protect your personal information. However, no data transmission over the Internet or electronic storage method is 100% secure.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails.</p>

        <h2>Children's Privacy</h2>
        <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at <strong>contact@lifenowtips.com</strong>.</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
