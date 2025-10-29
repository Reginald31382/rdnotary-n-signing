import { useState } from "react";
import ConfidentialityModal from "./ConfidentialModal";

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-white  py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} R|D Notary & Signing. All rights
          reserved.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:underline hover:text-blue-600 transition"
        >
          Privacy Notice
        </button>
      </div>
      <ConfidentialityModal isOpen={open} onClose={() => setOpen(false)} />
    </footer>
  );
}
