import React from 'react';
import { motion } from "framer-motion";
import { ICON_REGISTRY } from './iconRegistry';

export default function Amenities({ amenities }) {
  // Guard clause in case a project has no amenities listed
  if (!amenities || amenities.length === 0) return null;
{/* Dynamically pick cols based on count to avoid orphans */}
const count = amenities.length;
const gridCols =
  count % 4 === 0 ? "grid-cols-2 md:grid-cols-4" :
  count % 3 === 0 ? "grid-cols-2 md:grid-cols-3" :
  count % 5 === 0 ? "grid-cols-2 md:grid-cols-5" :
  count === 7     ? "grid-cols-2 md:grid-cols-4" : // 4+3 split
  count === 8     ? "grid-cols-2 md:grid-cols-4" :
  count === 9     ? "grid-cols-2 md:grid-cols-3" :
  count === 10    ? "grid-cols-2 md:grid-cols-5" :
  count === 11    ? "grid-cols-2 md:grid-cols-4" : // 4+4+3
                    "grid-cols-2 md:grid-cols-4";

  return (
    <div className="w-full space-y-12">
      {/* 1. Elegant Header */}
      <div className="flex items-center gap-6">
        <h4 className="font-body text-primary-bg text-xs tracking-[0.4em] font-bold uppercase whitespace-nowrap">
          Lifestyle Amenities
        </h4>
        <div className="h-[1px] w-full bg-slate-100"></div>
      </div>

      {/* 2. The Luxury 1px Grid Layout */}
      <div
        className="grid gap-px bg-slate-200 border border-slate-200 overflow-hidden"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(clamp(140px, 20vw, 200px), 1fr))" }}
        >
        {amenities.map((item, idx) => {
          // Extract the icon component and the name from the data object
          const Icon = ICON_REGISTRY[item.icon];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.05, // Stagger effect
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 flex flex-col items-center text-center group transition-all duration-500 hover:z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Icon Container */}
              <div className="mb-6 text-slate-300 group-hover:text-accent group-hover:scale-110 transition-all duration-500 ease-in-out">
                {Icon ? (
                  <Icon size={32} strokeWidth={1.2} />
                ) : (
                  <div className="w-8 h-8 bg-slate-50 rounded-full" /> // Fallback if icon is missing
                )}
              </div>
              
              {/* Amenity Name */}
              <span className="font-body text-[10px] sm:text-xs tracking-[0.2em] leading-relaxed uppercase font-bold text-primary-bg/70 group-hover:text-primary-bg transition-colors duration-300">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}