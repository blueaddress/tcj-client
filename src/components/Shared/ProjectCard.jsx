import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const placeholder = "/images/tcj-banner-placeholder.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm"
    >
      {/* 1. Image Container with "Ongoing" Badge */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholder;
          }}
        />
        
        {/* Status Badge - Luxury Style */}
        <div className="absolute top-5 right-5 z-20">
          <span className="bg-primary-bg text-white text-[10px] tracking-[0.2em] font-bold px-5 py-2 uppercase backdrop-blur-md shadow-lg border border-white/10">
            {project.status || 'Ongoing'}
          </span>
        </div>

        {/* Sophisticated Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>

      {/* 2. Content Area */}
      <div className="p-8 text-center flex flex-col items-center">
        {/* Location - Accentuated */}
        <p className="font-body text-accent text-[11px] tracking-[0.4em] font-bold uppercase mb-3">
          {project.location}
        </p>

        {/* Project Title - High-end Serif */}
        <h3 className="font-heading text-primary-bg text-3xl mb-6 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Luxury Divider */}
        <div className="w-12 h-[1px] bg-slate-200 group-hover:w-24 group-hover:bg-accent transition-all duration-500 mb-8" />

        {/* Animated View Details Link */}
        <a 
          href={`/projects/${project.slug}`} 
          className="flex items-center gap-3 group/link"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary-bg text-white transition-all duration-300 group-hover/link:bg-accent group-hover/link:scale-110">
             <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
          </div>
          <span className="font-body text-primary-bg text-xs tracking-widest font-bold uppercase">
            View Details
          </span>
        </a>
      </div>
      
      {/* 3. Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}