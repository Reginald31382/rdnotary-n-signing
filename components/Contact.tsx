"use client";

import { Radley } from "next/font/google";
import { motion } from "framer-motion";
import Script from "next/script";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className={`py-20 bg-gradient-to-b from-white to-blue-100 ${radleyFont.className}`}
      >
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="mb-6 text-xl">
            Schedule your appointment or ask questions about our services.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="mailto:rdnotaryandsigning@gmail.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Email Us
            </a>
            <a
              href="tel:313-474-1286"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Calendly Embed */}
      <div className="flex flex-col bg-white">
        <p className="text-center text-lg font-semibold mt-20 px-4">
          A 15-minute meeting where we can discuss your needs and answer general
          questions.
        </p>
        <span className="text-center text-sm text-gray-500 px-4">
          Disclaimer: R|D Notary & Signing is not a law firm and is not
          authorized to provide legal advice. Please consult a licensed attorney
          for legal matters.
        </span>
      </div>
      <div className="container mx-auto px-4 my-10 bg-white">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/dixonreggie313/30min"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
