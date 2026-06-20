// app/page.jsx

"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SeatAvailability from "./components/SeatAvailability";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import FloatingCall from "./components/FloatingCall";
import ScrollToTop from "./components/ScrollToTop";
import SeatBookingModal from "./components/SeatBookingModal";
import Contact from "./components/Contact";
import { authStore } from "./store/authStore";

export default function HomePage() {
  const {getProfile, profile, loading} = authStore();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingModal = () => setIsBookingOpen(true);
  const closeBookingModal = () => setIsBookingOpen(false);

  useEffect(()=> {
    getProfile()
  }, [])

  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar onBookSeat={openBookingModal} profile={profile} loading={loading} />
      <Hero onBookSeat={openBookingModal} />
      <Stats />
      <SeatAvailability />
      <Features />
      <Gallery />
      <Pricing onBookSeat={openBookingModal} />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <FloatingCall />
      <ScrollToTop />
      <SeatBookingModal
        open={isBookingOpen}
        onClose={closeBookingModal}
      />
    </main>
  );
}