import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <div className="container-blog py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Terms and Conditions</h1>
      <p className="text-sm text-muted-foreground font-body mb-8">Last updated: March 14, 2026</p>
      <div className="prose-blog font-body text-foreground">
        <p>Welcome to Life Now Tips. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>

        <h2>Use of Website</h2>
        <p>The content on this website is for general information and educational purposes only. You may access and use this website for your personal, non-commercial use. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the website without express written permission.</p>

        <h2>User Responsibilities</h2>
        <p>By using this website, you agree to:</p>
        <ul>
          <li>Use the website only for lawful purposes</li>
          <li>Not engage in any activity that could damage, disable, or impair the website</li>
          <li>Not attempt to gain unauthorized access to any part of the website</li>
          <li>Provide accurate information when submitting forms or subscribing to our newsletter</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, images, and software, is the property of Life Now Tips and is protected by applicable copyright and intellectual property laws. You may not use, reproduce, or distribute any content from this website without our prior written consent.</p>

        <h2>Limitation of Liability</h2>
        <p>Life Now Tips and its team shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website. The information provided on this website is for general informational purposes and should not be considered professional advice.</p>

        <h2>Third-Party Links</h2>
        <p>This website may contain links to third-party websites. These links are provided for your convenience and do not signify our endorsement of such websites. We have no control over the content of linked websites and accept no responsibility for them.</p>

        <h2>Modifications</h2>
        <p>We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the modified terms.</p>

        <h2>Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at <strong>contact@lifenowtips.com</strong>.</p>
      </div>
    </div>
  </Layout>
);

export default Terms;
