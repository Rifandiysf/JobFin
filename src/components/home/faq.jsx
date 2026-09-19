import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const FAQS = [
    {
        question: "Is JobFin free to use?",
        answer: "Yes, JobFin is completely free to use — no hidden fees or premium tiers.",
    },
    {
        question: "How does the commute distance feature work?",
        answer:
            "Once you set your home address, JobFin automatically calculates the real driving route and distance to every company address you add to an application.",
    },
    {
        question: "Can I use JobFin without sharing my home address?",
        answer:
            "Yes. Your home address is optional — it's only needed if you want the commute distance and map route feature to work.",
    },
    {
        question: "Is my data private?",
        answer:
            "Your applications and account data are private to you and are never shared with anyone else.",
    },
];

const Faq = () => {
    return (
        <section id="faq" className="grid grid-cols-1 gap-10 px-24 my-36 md:grid-cols-2">
            <div className="flex flex-col gap-3">
                <h2 className="text-4xl font-bold tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                    Discover the answers to your questions here, and get started with confidence.
                </p>
            </div>

            <Accordion type="single" collapsible className="flex flex-col gap-4">
                {FAQS.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-xl border px-5 last:border-b data-[state=open]:border-foreground/20"
                    >
                        <AccordionTrigger className="group py-5 text-left text-base font-medium hover:no-underline [&>svg]:hidden">
                            {faq.question}
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-45">
                                <PlusIcon className="size-3.5" />
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};

export default Faq;