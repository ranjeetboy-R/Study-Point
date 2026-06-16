// assets/data/libraryData.ts

import {
    AirVent,
    Wifi,
    ShieldCheck,
    Armchair,
    BatteryCharging,
    Droplets
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Seat Availability", href: "#availability" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
    title: "Focus Better. Study Smarter.",
    subtitle:
        "Premium AC Study Room with High-Speed WiFi, Silent Environment, CCTV Security and Comfortable Seating.",
    trustedText: "Trusted by 500+ Students",
    timing: "Open Daily • 6:00 AM - 11:00 PM",
    heroImage:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
};

export const stats = [
    {
        title: "Students Joined",
        value: 500,
        suffix: "+",
    },
    {
        title: "Total Seats",
        value: 120,
    },
    {
        title: "Available Seats",
        value: 32,
    },
    {
        title: "Occupancy Rate",
        value: 73,
        suffix: "%",
    },
];

export const seatAvailability = {
    totalSeats: 120,
    availableSeats: 32,
    occupiedSeats: 88,
};

export const facilities = [
    {
        title: "Air Conditioned",
        description: "Comfortable temperature throughout the day.",
        icon: AirVent,
    },
    {
        title: "High-Speed WiFi",
        description: "Reliable internet for study and research.",
        icon: Wifi,
    },
    {
        title: "24/7 CCTV Security",
        description: "Safe and secure study environment.",
        icon: ShieldCheck,
    },
    {
        title: "Individual Seating",
        description: "Dedicated personal study space.",
        icon: Armchair,
    },
    {
        title: "Power Backup",
        description: "Uninterrupted study sessions.",
        icon: BatteryCharging,
    },
    {
        title: "RO Drinking Water",
        description: "Clean and purified drinking water.",
        icon: Droplets,
    },
];

export const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
        alt: "Library Interior",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
        alt: "Study Room",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        alt: "Reading Area",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        alt: "Library Seats",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        alt: "Students Studying",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
        alt: "Premium Study Space",
    },
];

export const pricingPlans = [
    {
        id: 1,
        name: "Daily",
        price: "₹99",
        duration: "/day",
        featured: false,
        features: [
            "Full Day Access",
            "WiFi Included",
            "AC Environment",
            "RO Water",
        ],
    },
    {
        id: 2,
        name: "Weekly",
        price: "₹599",
        duration: "/week",
        featured: false,
        features: [
            "Reserved Seat",
            "WiFi Included",
            "Power Backup",
            "Silent Zone",
        ],
    },
    {
        id: 3,
        name: "Monthly",
        price: "₹1499",
        duration: "/month",
        featured: true,
        features: [
            "Dedicated Seat",
            "High-Speed WiFi",
            "CCTV Security",
            "Premium Access",
        ],
    },
];

export const testimonials = [
    {
        name: "Aman Kumar",
        rating: 5,
        review:
            "Best study environment in the city. Clean, silent and very comfortable.",
    },
    {
        name: "Priya Sharma",
        rating: 5,
        review:
            "Excellent facilities and fast WiFi. Helped me stay focused every day.",
    },
    {
        name: "Rohit Singh",
        rating: 5,
        review:
            "Affordable pricing with premium experience. Highly recommended.",
    },
];

export const faqItems = [
    {
        question: "What are the library timings?",
        answer: "The library is open daily from 6:00 AM to 11:00 PM.",
    },
    {
        question: "Is high-speed WiFi available?",
        answer: "Yes, unlimited high-speed WiFi is available for all members.",
    },
    {
        question: "Do you offer trial access?",
        answer: "Yes, trial access is available based on seat availability.",
    },
    {
        question: "What is the monthly membership fee?",
        answer: "Monthly plans start from ₹1499 with premium facilities.",
    },
    {
        question: "Can I reserve my seat?",
        answer: "Yes, reserved seating is available on weekly and monthly plans.",
    },
];

export const contactInfo = {
    phone: "+919205478065",
    whatsapp: "+919205478065",
    email: "info@studyhublibrary.com",
    address: "Near Main Market, Purnea, Bihar, India",
    mapEmbed:
        "https://www.google.com/maps?q=Purnea%20Bihar&output=embed",
};

export const socialLinks = [
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: FaFacebook,
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedin,
    },
];

export const footerLinks = navigationLinks;