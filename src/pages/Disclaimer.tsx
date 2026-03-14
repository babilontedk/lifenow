import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <div className="container-blog py-12">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Disclaimer</h1>
      <p className="text-sm text-muted-foreground font-body mb-8">Last updated: March 14, 2026</p>
      <div className="prose-blog font-body text-foreground">
        <h2>General Information Disclaimer</h2>
        <p>The information provided on Life Now Tips is for general informational and educational purposes only. All information on the website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.</p>
        <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the website or reliance on any information provided on the website. Your use of the website and your reliance on any information on the website is solely at your own risk.</p>

        <h2>Affiliate Disclaimer</h2>
        <p>This website may contain links to affiliate websites, and we may receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include various online retailers, service providers, and digital product sellers.</p>
        <p>We are a participant in various affiliate programs designed to provide a means for us to earn fees by linking to affiliated sites. When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission.</p>

        <h2>External Links Disclaimer</h2>
        <p>The website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
        <p>We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.</p>

        <h2>Professional Disclaimer</h2>
        <p>The website cannot and does not contain medical, legal, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Disclaimer, please contact us at <strong>contact@lifenowtips.com</strong>.</p>
      </div>
    </div>
  </Layout>
);

export default Disclaimer;
