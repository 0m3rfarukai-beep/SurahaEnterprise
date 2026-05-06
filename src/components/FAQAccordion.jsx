import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = ({ faqs }) => {
  return (
    <div className="w-full space-y-4">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border border-slate-200 rounded-xl px-6 bg-white data-[state=open]:border-blue-600 data-[state=open]:bg-blue-50/30 transition-all duration-300"
          >
            <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-slate-700 leading-relaxed pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
