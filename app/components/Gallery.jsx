// components/Gallery.jsx

"use client";

import { Image } from "antd";
import { motion } from "framer-motion";
import { galleryImages } from "../assets/data/libraryData";
import AnimatedSection from "./AnimatedSection";
import { staggerContainer, scaleIn } from "../lib/animations";

const Gallery = () => {
    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
                <AnimatedSection className="mb-14 text-center">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        Gallery
                    </span>

                    <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                        Explore Our Premium Study Environment
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
                        Modern interiors, comfortable seating, silent atmosphere, and
                        everything required for productive study sessions.
                    </p>
                </AnimatedSection>

                <Image.PreviewGroup>
                    <motion.div
                        variants={staggerContainer()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                variants={scaleIn}
                                whileHover={{ scale: 1.03 }}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-xl dark:border-slate-800 h-70 dark:bg-slate-900/60"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width='100%'
                                    height='100%'
                                    preview={{ mask: "View Image" }}
                                    className="object-cover w-auto h-auto transition duration-500 hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </Image.PreviewGroup>
            </div>
        </section>
    );
};

export default Gallery;
