// components/Testimonials.jsx

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";
import { staggerContainer, scaleIn } from "../lib/animations";

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection className="mb-14 text-center">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        Testimonials
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        What Students Say About Us
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Trusted by hundreds of students preparing for competitive exams,
                        college studies, and professional certifications.
                    </p>
                </AnimatedSection>

                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 lg:grid-cols-3"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={scaleIn}
                            whileHover={{
                                x: 8
                            }}
                            className="rounded-3xl border border-slate-200 p-7 shadow-sm backdrop-blur-xl bg-zinc-200/10 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60"
                        >
                            <div className="mb-5 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
                                "{testimonial.review}"
                            </p>

                            <div className="border-t border-slate-200 pt-4 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-900 dark:text-white">
                                    {testimonial.name}
                                </h3>

                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    Verified Student
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;