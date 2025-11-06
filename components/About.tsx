"use client";

import { Radley } from "next/font/google";
import { Lavishly_Yours } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="bg-gray-50 scroll-mt-32 py-12 md:py-20">
      <motion.div
        className="container mx-auto px-4 md:flex md:items-center md:space-x-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image Flip Card */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          {/* perspective container */}
          <div
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px]"
            style={{ perspective: 1000 }}
          >
            {/* the actual card we rotate */}
            <motion.div
              onClick={() => setFlipped((s) => !s)} // click/tap toggles on mobile
              whileHover={{ rotateY: 180 }} // optional hover rotate
              animate={{ rotateY: flipped ? 180 : 0 }} // click-controlled state
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                transformStyle: "preserve-3d", // keep 3d children
              }}
            >
              {/* FRONT FACE */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                {/* parent must be relative for next/image fill */}
                <div className="w-full h-full relative">
                  <Image
                    src={rdnotary}
                    alt="R|D Notary & Signing"
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1280px) 450px, 450px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* BACK FACE */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={reggie1}
                    alt="Reggie Dixon"
                    fill
                    sizes="(max-width: 768px) 300px, (max-width: 1280px) 450px, 450px"
                    className="object-cover"
                  />
                </div>

                {/* overlay text (positioned above the image) */}
                <div className="absolute inset-0 flex items-center justify-center px-4 bottom-1/2">
                  <div className="text-black text-center text-2xl font-semibold drop-shadow-md bg-white/50 p-2 rounded-2xl">
                    Hello, nice to meet you!
                    <br />
                    My name is Reggie.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div
          className={`md:w-1/2 text-center md:text-left ${radleyFont.className}`}
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl mb-4">
            <span className={`text-5xl font-bolder ${lavishFont.className}`}>
              At{" "}
            </span>
            <span className="font-bold">R|D Notary & Signing,</span> we provide
            reliable, professional, and timely notary services. Our goal is to
            make the notarization process simple and stress-free for individuals
            and businesses alike.
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
