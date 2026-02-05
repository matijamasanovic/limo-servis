"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  // FAQs definisane direktno unutar funkcije
  const faqs = [
    {
      question: "Da li se otkazivanje rezervacije naplaćuje?",
      answer: "Ne, otkazivanje je besplatno ako se izvrši 24h prije termina.",
    },
    {
      question: "Zašto izabrati HTD Transfers?",
      answer:
        "Luksuzna i udobna vozila, profesionalni vozači i garantovane cijene.",
    },
    {
      question: "Koliko unaprijed mogu rezervisati transfer?",
      answer:
        "Možete rezervisati do 3 mjeseca unaprijed, a hitni transferi su mogući u roku od 2h.",
    },
    {
      question: "Koji su načini plaćanja?",
      answer: "Prihvatamo kartice, gotovinu i fakturisanje za firme.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            Često postavljena pitanja
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-card border border-border rounded-xl lg:rounded-2xl px-6 overflow-hidden transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
