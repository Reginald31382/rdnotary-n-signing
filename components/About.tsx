"use client";

import { Radley } from "next/font/google";
import { Lavishly_Yours } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import rdnotary from "@/public/rdnotary.png";
import reggie1 from "@/public/reggie1.jpg";

const radleyFont = Radley({
  subsets: ["latin"],
  weight: "400",
});

const lavishFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div
        className="container mx-auto px-4 md:flex md:items-center md:space-x-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="md:w-1/2 mb-8 md:mb-0">
          {/* Hover Image Swap */}
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] group mx-auto">
            {/* Default Image */}
            <Image
              src={rdnotary}
              alt="R|D Notary & Signing"
              fill
              className="rounded-2xl object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            {/* Hover Image */}
            <Image
              src={reggie1}
              alt="R|D Notary & Signing Alternate"
              fill
              className="rounded-2xl object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <h3 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-black text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-black/40 px-3  rounded ">
              Hello, I'm Reggie
            </h3>
          </div>
        </div>

        <div
          className={`md:w-1/2 text-center md:text-left ${radleyFont.className}`}
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl mb-4">
            <span className={`text-5xl font-bolder ${lavishFont.className}`}>
              At {""}
            </span>
            <span className="font-bold">, R|D Notary & Signing </span>
            we provide reliable, professional, and timely notary services. Our
            goal is to make the notarization process simple and stress-free for
            individuals and businesses alike.
          </p>
          <p className="text-xl">
            Licensed and insured, we handle everything from legal documents to
            mobile signings with integrity and care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
