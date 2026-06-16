// components/Pricing.jsx

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { pricingPlans } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";
import {
    staggerContainer,
    scaleIn,
} from "../lib/animations";

const Pricing = ({ onBookSeat }) => {
    return (
        <section
            id="pricing"
            className="py-20"
        >
            <div className="container mx-auto px-4">
                <AnimatedSection className="mb-14 text-center">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        Pricing Plans
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Flexible Plans For Every Student
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Choose the plan that best suits your study schedule and budget.
                    </p>
                </AnimatedSection>

                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 lg:grid-cols-3"
                >
                    {pricingPlans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            variants={scaleIn}
                            className={`relative rounded-3xl border p-8 backdrop-blur-xl transition-all ${plan.featured
                                ? "border-blue-500 bg-linear-to-b from-blue-600 to-indigo-700 text-white shadow-2xl"
                                : "border-slate-200 hover:border-indigo-300 bg-blue-50 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
                                }`}
                        >
                            {plan.featured && (
                                <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600">
                                    Most Popular
                                </span>
                            )}

                            <h3
                                className={`text-2xl font-bold ${plan.featured
                                    ? "text-white"
                                    : "text-slate-900 dark:text-white"
                                    }`}
                            >
                                {plan.name}
                            </h3>

                            <div className="mt-5 flex items-end gap-1">
                                <span
                                    className={`text-5xl font-bold ${plan.featured
                                        ? "text-white"
                                        : "text-slate-900 dark:text-white"
                                        }`}
                                >
                                    {plan.price}
                                </span>

                                <span
                                    className={`mb-1 ${plan.featured
                                        ? "text-blue-100"
                                        : "text-slate-500 dark:text-slate-400"
                                        }`}
                                >
                                    {plan.duration}
                                </span>
                            </div>

                            <div className="my-8 space-y-4">
                                {plan.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className={
                                                plan.featured
                                                    ? "text-white"
                                                    : "text-blue-600"
                                            }
                                        />

                                        <span
                                            className={
                                                plan.featured
                                                    ? "text-blue-50"
                                                    : "text-slate-600 dark:text-slate-300"
                                            }
                                        >
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={onBookSeat}
                                className={`w-full rounded-xl py-3 font-semibold transition ${plan.featured
                                    ? "bg-white text-blue-600 hover:scale-105"
                                    : "bg-blue-600 text-white hover:scale-105 hover:bg-blue-700"
                                    }`}
                            >
                                Book Seat
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;