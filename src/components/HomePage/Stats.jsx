import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { HomeIcon, Building, LandPlot, ShieldCheck } from 'lucide-react';

const stats = [
  { 
    id: 1, 
    label: "Happy Families", 
    value: 1700, 
    suffix: "+", 
    icon: HomeIcon 
  },
  { 
    id: 2, 
    label: "Years of expertise", 
    value: 26, 
    suffix: "+", 
    icon: Building 
  },
  { 
    id: 3, 
    label: "Rera Complaints", 
    value: 0, 
    suffix: "", 
    icon: ShieldCheck 
  },
  { 
    id: 4, 
    label: "Sq ft delivered", 
    value: 1011000, 
    suffix: "+", 
    icon: LandPlot 
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
    <section id="knowledge" className="py-20 bg-primary-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center md:border-r last:border-r-0 border-white/10 px-4 flex flex-col items-center"
              >
                {/* Icon Wrapper */}
                <div className="mb-4 p-3 rounded-full  text-accent">
                  <Icon size={48} strokeWidth={1.5} />
                </div>

                <div className="font-heading text-4xl md:text-5xl lg:text-6xl text-accent mb-2">
                  {CountUp ? (
                    <CountUp
                      end={stat.value}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span>{stat.suffix}</span>
                </div>
                
                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/60 font-medium max-w-[120px] mx-auto">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}