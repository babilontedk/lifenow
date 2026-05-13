import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQ { question: string; answer: string }

const FAQSection = ({ faqs }: { faqs: FAQ[] }) => {
  if (!faqs?.length) return null;
  return (
    <section className="my-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem value={`faq-${i}`} key={i}>
            <AccordionTrigger className="text-left font-body font-semibold">{f.question}</AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground leading-relaxed">{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
