// components/AnimatedSection.jsx

"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionViewport } from "../lib/animations";

const AnimatedSection = ({
    children,
    className = "",
    variants = fadeUp,
    delay = 0,
}) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={variants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;