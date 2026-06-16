// components/Navbar.jsx

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../assets/data/libraryData";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ onBookSeat }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / docHeight) * 100;

            setScrollY(progress.toFixed(1));

            setScrolled(window.scrollY > 20);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const section = document.querySelector(href);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        setIsOpen(false);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 border border-transparent z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-sky-400/10 dark:border-slate-800 dark:bg-slate-950/70"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4">

                <div
                    style={{ width: `${scrollY}%` }}
                    className="bg-linear-to-l from-cyan-400 to-violet-600 shadow-md dark:shadow-cyan-500 rounded-r-full h-1 transition-all duration-100 absolute bottom-0 left-0 right-0"
                ></div>

                {/* Logo */}
                <button
                    onClick={() => scrollToSection("#home")}
                    className="text-2xl font-bold text-slate-900 dark:text-white"
                >
                    Study<span className="text-blue-600">Hub</span>
                </button>

                {/* Desktop Menu */}
                <nav className={`${scrolled ? '' : 'shadow-lg shadow-sky-500/10 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-800'} hidden items-center gap-8 lg:flex py-3 px-5 rounded-full`}>
                    {navigationLinks.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => scrollToSection(item.href)}
                            className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="hidden items-center gap-3 lg:flex">
                    <DarkModeToggle />

                    <button
                        onClick={onBookSeat}
                        className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
                    >
                        Book Seat
                    </button>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 lg:hidden">
                    <DarkModeToggle />

                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="rounded-lg p-2 text-slate-700 dark:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? "block" : "hidden"} overflow-hidden w-full h-screen bg-black/30 backdrop-blur-2xl`}>
                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "h-fit" : "max-h-0"
                        }`}
                >
                    <div className="border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
                        <div className="flex flex-col gap-4 px-5">
                            {navigationLinks.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left font-medium text-slate-700 dark:text-slate-300"
                                >
                                    {item.label}
                                </button>
                            ))}

                        </div>
                        <button
                            onClick={() => {
                                onBookSeat?.();
                                setIsOpen(false);
                            }}
                            className="mt-7 rounded-xl bg-blue-600 py-3 w-full text-sm font-semibold text-white"
                        >
                            Book Seat
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbar;