import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const stats = [
  { 
    id: 1, 
    label: "Happy Families", 
    value: 1700, 
    suffix: "+", 
  },
  { 
    id: 2, 
    label: "Years of expertise", 
    value: 26, 
    suffix: "+", 
  },
  { 
    id: 3, 
    label: "Rera Complaints", 
    value: 0, 
    suffix: "", 
  },
  { 
    id: 4, 
    label: "Sq ft delivered", 
    value: 1011000, 
    suffix: "+", 
  },
];

export default function Stats() {
  const [CountUp, setCountUp] = useState(null);

  useEffect(() => {
    import('react-countup').then((mod) => {
      setCountUp(() => mod.default);
    });
  }, []);

  return (
    <section id="knowledge" className="py-24 bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-b border-black/10 last:border-b-0 py-12 md:py-16"
            >
              <div className="flex items-center justify-between">
                {/* Number Section */}
                <div className="font-heading text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter italic">
                  {CountUp ? (
                    <CountUp
                      end={stat.value}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      formattingFn={(num) => num < 10 && num > 0 ? `0${num}` : num.toLocaleString()}
                    />
                  ) : (
                    <span>00</span>
                  )}
                  <span className="text-4xl md:text-5xl align-top ml-1 font-sans not-italic text-black/40">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label Section */}
                <div className="max-w-50 md:max-w-75 text-right">
                  <p className="font-body text-lg md:text-2xl lg:text-3xl tracking-[0.2em] uppercase font-light leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}