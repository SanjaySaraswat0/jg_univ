"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Academics", href: "#programs" },
  { label: "The University", href: "#about" },
  { label: "Experience", href: "#why" },
  { label: "Alumni", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
          scrolled ? "bg-black/95 backdrop-blur-md border-[#333333] py-4" : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center transition-all group-hover:bg-[#D4AF37]">
              <span className="font-serif text-white text-lg group-hover:text-black">JG</span>
            </div>
            <div className="leading-none">
              <div className="font-serif text-white text-2xl tracking-wide">JG University</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-[0.15em] uppercase text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#cta" className="text-[13px] font-medium tracking-[0.15em] uppercase text-black bg-white px-6 py-2 hover:bg-[#D4AF37] transition-colors">
              Apply
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0a0a0a] z-40 lg:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 w-full px-8">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-3xl text-white hover:text-[#D4AF37] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="w-16 h-px bg-[#333333] my-4"></div>
              <a href="#cta" onClick={() => setOpen(false)} className="btn-primary w-full max-w-xs">
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
