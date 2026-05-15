"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Alumni Worldwide", delay: 0 },
  { value: 95, suffix: "%", label: "Placement Rate", delay: 0.1 },
  { value: 500, suffix: "+", label: "Hiring Partners", delay: 0.2 },
  { value: 30, suffix: "+", label: "Academic Programs", delay: 0.3 },
  { value: 13, suffix: "+", label: "Years of Legacy", delay: 0.4 },
  { value: 50, suffix: "+", label: "Awards Won", delay: 0.5 },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-black text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 border-y border-white/5 bg-[#08080d]" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-transparent to-red-950/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 divide-x divide-white/5">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: s.delay }}
              className="text-center px-4"
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-3">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
