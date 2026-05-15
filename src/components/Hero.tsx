"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Staggered text animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen bg-black flex flex-col justify-center pt-20 overflow-hidden">
      
      {/* Background Visual with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          animate={{ scale: [1.05, 1], filter: ["blur(4px)", "blur(0px)"] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black"></div>
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col lg:flex-row gap-16 lg:gap-8 items-end pb-20"
      >
        
        <div className="flex-1">
          <motion.div variants={containerVars} initial="hidden" animate="show">
            <motion.div variants={itemVars} className="subheading mb-8">Ahmedabad, Gujarat</motion.div>
            
            <div className="overflow-hidden mb-10">
              <motion.h1 variants={itemVars} className="display text-white">
                Education
              </motion.h1>
              <motion.h1 variants={itemVars} className="display text-white">
                <span className="text-gray-500 italic">for the</span> Future.
              </motion.h1>
            </div>

            <motion.p variants={itemVars} className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12">
              JG University empowers students to explore and gain wisdom beyond the pages of books with an industry-relevant curriculum. A new age, tech-driven institution.
            </motion.p>
            
            <motion.div variants={itemVars} className="flex flex-col sm:flex-row gap-6">
              <a href="#programs" className="btn-primary overflow-hidden relative group">
                <span className="relative z-10">Explore Programmes</span>
                <div className="absolute inset-0 h-full w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
              </a>
              <a href="#about" className="btn-secondary">
                Discover JG University
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimalist Stat Block with Counters */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" as const }}
          className="w-full lg:w-72 border-l border-[#333333] pl-8 pb-4"
        >
          <div className="mb-10 group cursor-default">
            <div className="text-5xl font-serif text-white mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">
              100<span className="text-[#D4AF37] group-hover:text-white transition-colors duration-500">%</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">Placement Support</div>
          </div>
          <div className="mb-10 group cursor-default">
            <div className="text-5xl font-serif text-white mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">
              500<span className="text-[#D4AF37] group-hover:text-white transition-colors duration-500">+</span>
            </div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">Hiring Partners</div>
          </div>
          <div className="group cursor-default">
            <div className="text-5xl font-serif text-white mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">A</div>
            <div className="text-[11px] uppercase tracking-widest text-gray-500">NAAC Grade</div>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
}
