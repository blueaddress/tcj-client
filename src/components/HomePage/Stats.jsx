import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Happy Families",    value: 1700,    suffix: "+" },
  { id: 2, label: "Years of Expertise", value: 26,     suffix: "+" },
  { id: 3, label: "Rera Complaints",   value: 0,       suffix: ""  },
  { id: 4, label: "Sq ft Delivered",   value: 1011000, suffix: "+" },
];

export default function Stats() {
  const [CountUp, setCountUp] = useState(null);

  useEffect(() => {
    import('react-countup').then((mod) => setCountUp(() => mod.default));
  }, []);

  return (
    <section id="stats" className="py-16 md:py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col divide-y divide-black/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="py-8 md:py-12 lg:py-16"
            >
              <div className="flex items-center justify-between gap-4">
                {/* Number */}
                <div className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter italic shrink-0">
                  {CountUp ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                      formattingFn={(n) =>
                        n < 10 && n > 0 ? `0${n}` : n.toLocaleString('en-IN')
                      }
                    />
                  ) : (
                    <span>—</span>
                  )}
                  {stat.suffix && (
                    <span className="text-3xl sm:text-4xl md:text-5xl align-top ml-1 font-sans not-italic text-black/30">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="font-body text-base sm:text-xl md:text-2xl lg:text-3xl tracking-[0.15em] md:tracking-[0.2em] uppercase font-light leading-snug text-right max-w-[45%]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}