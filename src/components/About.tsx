"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: "IIoT Lab", desc: "State-of-the-art Industrial Internet of Things laboratory." },
    { title: "R&D + Incubation", desc: "Dedicated spaces for research, development and startup incubation." },
    { title: "Tech-enabled Library", desc: "Modern library with digital access to global journals and resources." },
    { title: "Wi-Fi Enabled Campus", desc: "High-speed internet access across the entire campus." }
  ];

  return (
    <section id="about" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="subheading mb-6 overflow-hidden">
              <motion.div initial={{ y: 20 }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
                The Philosophy
              </motion.div>
            </div>
            <h2 className="heading text-white mb-10 leading-tight">
              Excellence is a <span className="italic font-light text-gray-400">matter of choice.</span>
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={inView ? { scaleX: 1 } : {}} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-[2px] bg-[#D4AF37] mb-10 origin-left"
            ></motion.div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
              If we choose to be excellent, we will be for sure. JG University aims to bring excellence in everything that it does. We stand by the idea of knowledge beyond books and provide students a real-life experience with an industry-relevant curriculum.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              The University desires to strike an equilibrium between state-of-the-art infrastructure and high-quality education that is recognised globally.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-[#222222] p-12 relative group hover:border-[#D4AF37]/50 transition-colors duration-500 cursor-default"
          >
            <div className="absolute top-0 left-12 w-16 h-[2px] bg-[#D4AF37] -translate-y-1/2 group-hover:w-24 transition-all duration-500"></div>
            
            <h3 className="font-serif text-3xl text-white mb-6">Sponsored by ASIA Charitable Trust</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              In the field of education since 1965, successfully managing 17 colleges and 3 schools. A legacy of transforming potential into professional excellence.
            </p>
            
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Established 2011
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="subheading mb-10">Campus Facilities</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="group cursor-default"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-[1px] bg-[#333333] mb-6 group-hover:bg-[#D4AF37] group-hover:w-16 transition-all duration-500"></div>
                <h4 className="font-serif text-xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">{f.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
