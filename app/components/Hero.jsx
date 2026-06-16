// components/Hero.jsx

"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Clock3 } from "lucide-react";
import { contactInfo, heroData } from "../assets/data/libraryData";
import { floatingAnimation } from "../lib/animations";
import AnimatedSection from "./AnimatedSection";

const Hero = ({ onBookSeat }) => {
    return (
        <section
            id="home"
            className="relative overflow-hidden pt-32 pb-20 lg:min-h-screen"
        >
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

            <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* Content */}
                    <AnimatedSection>
                        <div className="md:text-left text-center">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                                ⭐ {heroData.trustedText}
                            </div>

                            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                                {heroData.title}
                            </h1>

                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                {heroData.subtitle}
                            </p>

                            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                                <button
                                    onClick={onBookSeat}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
                                >
                                    Book Seat
                                    <ArrowRight size={18} />
                                </button>

                                <a
                                    href={`https://wa.me/${contactInfo.whatsapp}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-green-600 hover:text-green-600 dark:border-slate-700 dark:text-slate-300"
                                >
                                    <MessageCircle size={18} />
                                    WhatsApp Inquiry
                                </a>
                            </div>

                            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-5 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                                <Clock3 size={18} className="text-blue-600" />

                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    {heroData.timing}
                                </span>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Image */}
                    <AnimatedSection>
                        <motion.div
                            {...floatingAnimation}
                            className="relative mx-auto max-w-xl"
                        >
                            <div className="absolute -inset-4 rounded-[40px] bg-linear-to-r from-blue-600/20 to-violet-600/20 blur-2xl" />

                            <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/40 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-900/50">
                                <img
                                    src={heroData.heroImage}
                                    alt="Premium Study Room"
                                    className="h-[500px] w-full rounded-[24px] object-cover"
                                />
                            </div>

                            <div className="absolute -left-6 top-8 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl dark:bg-slate-900/80">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                    500+ Students
                                </p>
                                <span className="text-xs text-slate-500">
                                    Trusted Community
                                </span>
                            </div>

                            <div className="absolute -right-6 bottom-10 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl dark:bg-slate-900/80">
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                    AC + WiFi
                                </p>
                                <span className="text-xs text-slate-500">
                                    Premium Facilities
                                </span>
                            </div>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default Hero;