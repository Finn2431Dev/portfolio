import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer a complete range of Roblox scripting services including: game mechanics development, UI/UX systems, backend systems (DataStore, RemoteEvents), anti-cheat implementation, performance optimization, bug fixes, and full game development from concept to completion."
  },
  {
    question: "What are your rates?",
    answer: "My rates vary based on project complexity and scope. Simple scripts start at $50, while complex systems range from $200-$2000+. Full game development is quoted per project. I offer free consultations to provide accurate estimates for your specific needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline depends on complexity. Simple features take 1-3 days, medium systems 1-2 weeks, and complex game development 1-3 months. I provide detailed timelines during our initial consultation and keep you updated throughout development."
  },
  {
    question: "Do you provide source code ownership?",
    answer: "Yes! Upon full payment, you receive complete ownership of all code I write for your project. This includes documentation and the right to modify, redistribute, or resell as you see fit."
  },
  {
    question: "What about revisions and support?",
    answer: "I include reasonable revisions within scope at no extra cost. Post-delivery, I offer 14 days of free bug fixes for issues related to my code. Extended support packages are available for ongoing projects."
  },
  {
    question: "How do payments work?",
    answer: "For projects under $200, I accept full payment upfront. Larger projects use a milestone-based system: 50% upfront, 50% on completion. I accept PayPal, Robux, and major cryptocurrencies."
  },
  {
    question: "Can you work with existing code?",
    answer: "Absolutely! I regularly work with existing codebases for optimization, feature additions, or bug fixes. I'll review your current code and provide honest feedback on the best approach forward."
  },
  {
    question: "What makes you different from other scripters?",
    answer: "5+ years of experience, a proven track record with 200+ successful projects, emphasis on clean maintainable code, excellent communication, and a genuine passion for creating exceptional gaming experiences. I treat every project like it's my own game."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? I've got answers. Here are the most common things clients ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-none data-[state=open]:glow-primary transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions? Feel free to{" "}
            <button 
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:underline font-medium"
            >
              reach out directly
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
