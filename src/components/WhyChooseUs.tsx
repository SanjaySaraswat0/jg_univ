"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
    "Faculty Members with Industry Experience and Academic Expertise",
    "Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange",
    "Hands-on Experience using Industry Use-Cases and Emerging Tech",
    "Full Pay On-The-Job Training Opportunities",
    "Cross-Cultural and Cross-Sectoral Internships",
    "Course-Embedded Capstone Projects",
    "24*7 Accessibility of Facilities to Students and Faculty Members"
  ];

  return (
    <section id="why" className="py-24 lg:py-32 bg-black border-b border-[#111111]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="subheading mb-4">The Experience</div>
          <h2 className="heading text-white max-w-2xl">
            Why JG <span className="text-[#D4AF37] italic">University?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#222222]">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border-b border-r border-[#222222] hover:bg-[#0a0a0a] transition-colors duration-500 flex flex-col"
            >
              <div className="text-[#D4AF37] font-serif text-3xl mb-6">0{i + 1}</div>
              <p className="text-gray-400 font-light text-sm leading-relaxed mt-auto">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
