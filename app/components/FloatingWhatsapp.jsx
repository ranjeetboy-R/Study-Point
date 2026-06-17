// components/FloatingWhatsapp.jsx

"use client";

import { contactInfo } from "../assets/data/libraryData";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
    const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Inquiry"
            className="fixed bottom-24 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default FloatingWhatsapp;