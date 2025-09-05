import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "How can I place an order?",
    answer:
      "You can place an order through the official form provided in this website. Fill in your details, select the items, and confirm your order.",
  },
  {
    id: "item-2",
    question: "What payment methods are accepted?",
    answer: "UPI, bank transfer, and cash are accepted.",
  },
  {
    id: "item-3",
    question: "Can I cancel or change my order?",
    answer:
      "Orders can be canceled or modified only before payment confirmation. After that, changes are not possible.",
  },
  {
    id: "item-4",
    question: "Is there a limit on how many items I can buy?",
    answer: "No strict limit.",
  },
  {
    id: "item-5",
    question: "How will I receive my merchandise?",
    answer:
      "Merchandise will be distributed on-campus at the announced collection point.",
  },
  {
    id: "item-6",
    question: "Can I return or exchange an item?",
    answer:
      "Returns or exchanges are not available unless the item is defective.",
  },
  {
    id: "item-7",
    question: "How do I know my order is confirmed?",
    answer:
      "You'll receive a confirmation message or email after completing the payment.",
  },
  {
    id: "item-8",
    question: "Who do I contact for queries?",
    answer:
      "Reach out to the merchandise team through the official email, WhatsApp group, or contact person shared.",
  },
];

export const FaqSection = (): JSX.Element => {
  return (
    <section id="faq" className="py-16 px-4 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/70">
            Everything you need to know about our merch drop
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-[#222222] rounded-lg border-none px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 text-white hover:text-[#e8ff8c] transition-colors duration-200">
                <span className="text-lg font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-white/70 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};