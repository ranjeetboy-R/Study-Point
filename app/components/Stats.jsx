// components/Stats.jsx

"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { stats } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";
import {
    staggerContainer,
    scaleIn,
    hoverScale,
} from "../lib/animations";

const Stats = () => {
    return (
        <AnimatedSection className="py-16">
            <div id="stats" className="container mx-auto px-4">
                <motion.div
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {stats.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={scaleIn}
                            className="group rounded-3xl border border-slate-200 bg-zinc-200/10 p-6 shadow-sm backdrop-blur-xl transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
                        >
                            <p className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                                {item.title}
                            </p>

                            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
                                <CountUp
                                    end={item.value}
                                    duration={2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {item.suffix || ""}
                            </h3>

                            <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 transition-all group-hover:w-20" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Stats;