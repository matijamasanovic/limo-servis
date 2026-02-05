"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const faqs = [
  {
    question: "Da li se otkazivanje naplaćuje?",
    answer: "Besplatno otkazivanje do 24h pre termina.",
  },
  {
    question: "Zašto izabrati AN Group?",
    answer: "Luksuzna vozila, profesionalni vozači, garantovane cene.",
  },
  {
    question: "Koliko unapred mogu rezervisati?",
    answer: "Do 3 meseca unapred, hitni transferi u roku od 2h.",
  },
  {
    question: "Načini plaćanja?",
    answer: "Kartice, PayPal, gotovina, fakturisanje za firme.",
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
            Često postavljena pitanja
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-card border border-border rounded-xl lg:rounded-2xl px-6 overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
  )
}
