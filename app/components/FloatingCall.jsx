// components/FloatingCall.jsx

"use client";

import { Phone } from "lucide-react";
import { contactInfo } from "../assets/data/libraryData";

const FloatingCall = () => {
  const phoneNumber = contactInfo.phone.replace(/\s+/g, "");

  return (
    <a
      href={`tel:${phoneNumber}`}
      aria-label="Call Now"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <Phone size={26} />
    </a>
  );
};

export default FloatingCall;