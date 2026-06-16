// components/Features.jsx

"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { scaleIn, staggerContainer } from "../lib/animations";
import { facilities } from "../assets/data/libraryData";

const Features = () => {
  return (
    <section
      id="facilities"
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Premium Facilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Everything You Need To Study Better
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Designed for focused learning with modern amenities,
            comfortable seating, and a distraction-free environment.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <motion.div
                key={facility.title}
                variants={scaleIn}
                className="group rounded-3xl border border-slate-200 p-7 shadow-sm backdrop-blur-xl transition-all hover:shadow-xl bg-zinc-200/10 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-cyan-500 text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {facility.title}
                </h3>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {facility.description}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-1/2" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;