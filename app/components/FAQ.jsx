// components/FAQ.jsx

"use client";

import { Collapse } from "antd";
import { faqItems } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";

const FAQ = () => {
    const items = faqItems.map((faq, index) => ({
        key: String(index + 1),
        label: (
            <span className="font-medium text-slate-800 dark:text-slate-200">
                {faq.question}
            </span>
        ),
        children: (
            <p className="text-slate-600 dark:text-slate-400">
                {faq.answer}
            </p>
        ),
    }));

    return (
        <section
            id="faq"
            className="py-20"
        >
            <div className="container mx-auto px-4">
                <AnimatedSection className="mx-auto max-w-4xl">
                    <div className="mb-14 text-center">
                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                            Got Questions?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                            Find answers to the most common questions about our
                            study room and membership plans.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-2 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
                        <Collapse
                            accordion
                            items={items}
                            ghost
                            size="large"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default FAQ;