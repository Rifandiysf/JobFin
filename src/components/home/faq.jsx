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
        <section
            id="faq"
            className="my-16 scroll-mt-24 px-4 sm:my-24 sm:px-8 md:px-16 lg:my-36 lg:px-24"
        >
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
                <div className="flex flex-col gap-2 sm:gap-3">
                    <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-muted-foreground sm:text-base">
                        Discover the answers to your questions here, and get started with
                        confidence.
                    </p>
                </div>

                <Accordion type="single" collapsible className="flex flex-col gap-3 sm:gap-4">
                    {FAQS.map((faq) => (
                        <AccordionItem
                            key={faq.question}
                            value={faq.question}
                            className="rounded-xl border px-4 last:border-b data-[state=open]:border-foreground/20 sm:px-5"
                        >
                            <AccordionTrigger className="group gap-4 py-4 text-left text-sm font-medium hover:no-underline sm:py-5 sm:text-base [&>svg]:hidden">
                                {faq.question}
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-45">
                                    <PlusIcon className="size-3.5" />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground sm:text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;