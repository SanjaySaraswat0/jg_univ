"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const [status, setStatus] = useState("idle");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="cta" className="py-24 lg:py-32 bg-[#111111]" ref={ref}>
      <div className="max-w-4xl mx-auto px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Start Your Journey.</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Admissions are now open for the 2024-25 academic year. Join a community of high achievers and transform your potential.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="border border-[#D4AF37] p-12 text-center bg-black">
              <h3 className="font-serif text-3xl text-white mb-4">Application Received.</h3>
              <p className="text-gray-400 font-light">Our admissions team will contact you shortly to guide you through the next steps.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-black border border-[#222222] p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Full Name</label>
                  <input required className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:border-[#D4AF37] outline-none transition-colors rounded-none placeholder-gray-700" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Phone Number</label>
                  <input required type="tel" className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:border-[#D4AF37] outline-none transition-colors rounded-none placeholder-gray-700" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:border-[#D4AF37] outline-none transition-colors rounded-none placeholder-gray-700" placeholder="john@example.com" />
              </div>
              
              <div className="mb-12">
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-3">Program of Interest</label>
                <select required className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:border-[#D4AF37] outline-none transition-colors rounded-none appearance-none">
                  <option value="" className="text-gray-900">Select a program...</option>
                  <option value="btech" className="text-gray-900">B.Tech - Computer Science & Engineering</option>
                  <option value="bba" className="text-gray-900">BBA (Hons)</option>
                  <option value="bca" className="text-gray-900">BCA (Hons)</option>
                  <option value="mba" className="text-gray-900">MBA</option>
                  <option value="mca" className="text-gray-900">MCA</option>
                </select>
              </div>
              
              <button type="submit" disabled={status === "submitting"} className="btn-primary w-full">
                {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
