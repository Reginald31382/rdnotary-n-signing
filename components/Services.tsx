"use client";

import { Radley } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

export default function Services() {
  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/notary-jrome.jpg" // 👈 must be inside /public/
        alt="Notary services background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Content */}
      <div className={`${radleyFont.className} relative z-10`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <motion.div
              className="p-6 bg-white/80 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">General Notary</h3>
              <p className="text-xl">
                Certified notarizations for documents, affidavits, and
                agreements.
              </p>
            </motion.div>

            {/* Right Card */}
            <motion.div
              className="p-6 bg-white/80 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Mobile/Remote Notary
              </h3>
              <p className="text-xl">
                We come to you or meet me online! Convenient on-location
                notarizations for your schedule.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
