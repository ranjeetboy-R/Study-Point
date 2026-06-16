// components/FloatingWhatsapp.jsx

"use client";

import { MessageCircle } from "lucide-react";
import { contactInfo } from "../assets/data/libraryData";

const FloatingWhatsapp = () => {
    const whatsappNumber = contactInfo.whatsapp.replace(/\D/g, "");

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Inquiry"
            className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
            <MessageCircle size={28} />
        </a>
    );
};

export default FloatingWhatsapp;