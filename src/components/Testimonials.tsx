"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    text: "As a celebrity singer today, I owe a great deal to JG for shaping me into the person I am. It fills me with pride to say that I am an alumnus of JG. The faculty members were more than just teachers; they served as mentors."
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Head, TCS",
    text: "My education at JG has played a pivotal role in shaping my career as a Technical Head at TATA Consultancy Services. The BCA program provided me with a strong foundation in IT, and the opportunities to apply my knowledge in real-world scenarios."
  },
  {
    name: "Parth Rupareliya",
    role: "Alumnus",
    text: "My time at JG was one of my most fulfilling and life-changing experiences. They offer an exceptional academic curriculum that emphasizes both theoretical and practical learning."
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Heading & Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 flex flex-col justify-between"
          >
            <div>
              <div className="subheading mb-4">Our Alumni</div>
              <h2 className="heading text-white mb-8">Voices of <br/>Success.</h2>
              <div className="w-12 h-px bg-[#D4AF37] mb-8"></div>
            </div>

            <div className="flex gap-4 mt-8 lg:mt-0">
              <button onClick={prev} className="w-12 h-12 border border-[#333333] flex items-center justify-center text-white hover:border-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="w-12 h-12 border border-[#333333] flex items-center justify-center text-white hover:border-white transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right: The Quote */}
          <div className="lg:w-2/3 relative min-h-[400px] flex items-center">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, position: "absolute" }}
                animate={current === i ? { opacity: 1, position: "relative", zIndex: 10 } : { opacity: 0, position: "absolute", zIndex: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <div className="text-8xl text-[#222222] font-serif leading-none absolute -top-10 -left-6">"</div>
                <p className="font-serif text-3xl lg:text-4xl lg:leading-snug text-white mb-12 relative z-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-6 border-t border-[#333333] pt-6 inline-flex">
                  <div>
                    <h4 className="text-white font-medium uppercase tracking-widest text-[11px] mb-1">{t.name}</h4>
                    <p className="text-[#D4AF37] text-sm font-serif italic">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
