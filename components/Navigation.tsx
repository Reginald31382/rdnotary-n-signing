import rdnotary from "@/public/rdnotary.png";

import Image from "next/image";

import { useState } from "react";

export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* NAVIGATION */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="w-15 md:w-20">
            <Image src={rdnotary} alt="R|D Notary & Signing" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-gray-600">
              Services
            </a>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </nav>
          {/* Hamburger */}
          <div className="md:hidden" onClick={toggleMenu}>
            <div className={`space-y-1.5 cursor-pointer`}>
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white transition-max-h duration-300 overflow-hidden ${
            menuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
