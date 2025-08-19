"use client";

import { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";

export default function Home() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-sans text-gray-800">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
