// components/Footer.jsx

"use client";

import {
    footerLinks,
    socialLinks,
    contactInfo,
} from "../assets/data/libraryData";

const Footer = () => {
    const scrollToSection = (href) => {
        const section = document.querySelector(href);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & About */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Study<span className="text-blue-600">Hub</span>
                        </h2>

                        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            Premium study room designed to provide students with
                            a silent, comfortable, and productive environment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Quick Links
                        </h3>

                        <div className="space-y-3">
                            {footerLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Contact
                        </h3>

                        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <p>{contactInfo.phone}</p>
                            <p>{contactInfo.email}</p>
                            <p>{contactInfo.address}</p>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-400"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                    © {new Date().getFullYear()} StudyHub Library. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;