"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    category: "Undergraduate",
    items: [
      { name: "B.Tech - Computer Science & Engineering", duration: "4 years" },
      { name: "BBA (Hons)", duration: "4 years" },
      { name: "BCA (Hons)", duration: "4 years" },
      { name: "B.Com (Hons)", duration: "4 years" },
    ]
  },
  {
    category: "Postgraduate",
    items: [
      { name: "MBA", duration: "2 years" },
      { name: "MCA - AI & Full Stack Development", duration: "2 years" },
      { name: "M.Sc. - Cyber Security & Digital Forensics", duration: "2 years" },
      { name: "M.Com (Hons)", duration: "2 years" },
    ]
  },
  {
    category: "Integrated & Specialized",
    items: [
      { name: "iMBA", duration: "5 years" },
      { name: "iMCA", duration: "5 years" },
      { name: "B.Sc.(Hons)/iMSc - Forensic Science", duration: "3-5 years" },
      { name: "LL.B.", duration: "3 years" },
    ]
  }
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="programs" className="section-padding bg-black border-y border-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="subheading mb-4">Academics</div>
            <h2 className="heading text-white">Our Programmes</h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 font-light max-w-sm md:text-right"
          >
            New Age Tech-Driven University offering programmes that evolve as per future industry demand.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-16">
          
          {/* Tabs */}
          <div className="flex flex-col gap-6">
            {programs.map((prog, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left pb-4 border-b relative transition-colors duration-300 ${
                  activeTab === i 
                    ? "text-white" 
                    : "border-[#333333] text-gray-600 hover:text-gray-300"
                }`}
              >
                <span className="font-serif text-2xl relative z-10">{prog.category}</span>
                {activeTab === i && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] z-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* List */}
          <div className="min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col"
              >
                {programs[activeTab].items.map((item, j) => (
                  <motion.a 
                    key={j}
                    href="#cta"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.1 }}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-[#222222] hover:border-[#D4AF37] transition-colors duration-500 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-0"></div>
                    <span className="font-serif text-2xl lg:text-3xl text-gray-300 group-hover:text-white transition-colors duration-300 mb-2 sm:mb-0 relative z-10">
                      {item.name}
                    </span>
                    
                    <div className="flex items-center gap-8 relative z-10">
                      <span className="text-[11px] uppercase tracking-widest text-gray-500">
                        {item.duration}
                      </span>
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 5 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
