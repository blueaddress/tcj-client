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
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = placeholder;
          }}
        />

        {/* Status Badge */}
        <div className="absolute top-2 right-2 md:top-5 md:right-5 z-20">
          <span className="bg-primary-bg text-white text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-bold px-2 md:px-5 py-1 md:py-2 uppercase shadow-lg border border-white/10">
            {project.status || 'Ongoing'}
          </span>
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-primary-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>

      {/* Content */}
      <div className="p-3 md:p-8 text-center flex flex-col items-center">

        {/* Location */}
        <p className="font-body text-accent text-[8px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] font-bold uppercase mb-1 md:mb-3">
          {project.location}
        </p>

        {/* Title */}
        <h3 className="font-heading text-primary-bg text-lg md:text-3xl mb-3 md:mb-6 group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.title}
        </h3>

        {/* Divider */}
        <div className="w-8 md:w-12 h-px bg-slate-200 group-hover:w-16 md:group-hover:w-24 group-hover:bg-accent transition-all duration-500 mb-3 md:mb-8" />

        {/* CTA */}
        <a
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 md:gap-3 group/link"
        >
          <div className="relative flex items-center justify-center w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary-bg text-white transition-all duration-300 group-hover/link:bg-accent group-hover/link:scale-110">
            <ArrowRight size={12} className="md:hidden group-hover/link:translate-x-1 transition-transform" />
            <ArrowRight size={18} className="hidden md:block group-hover/link:translate-x-1 transition-transform" />
          </div>
          <span className="font-body text-primary-bg text-[8px] md:text-xs tracking-widest font-bold uppercase">
            View Details
          </span>
        </a>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-accent group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
}