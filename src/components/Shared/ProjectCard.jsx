import { motion } from "framer-motion";

const PLACEHOLDER = "/images/tcj-banner-placeholder.png";

/**
 * ProjectCard
 * Card structure mirrors CurrentDevelopments.jsx:
 *  - Portrait aspect-[3/4] image
 *  - grayscale-20 → full color + scale on hover
 *  - Status badge top-left, white pill
 *  - Left-aligned text block below image (title + location)
 */
export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col"
    >
      {/* ── Image ──────────────────────────────────────────────────────────── */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-4 md:mb-6">
        <img
          src={project.image}
          alt={`${project.title} by TCJ Realty, ${project.location}`}
          className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          loading="lazy"
          decoding="async"
          width="400"
          height="533"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PLACEHOLDER;
          }}
        />

        {/* Status badge — top-left white pill, matching CurrentDevelopments */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
          {project.status}
        </div>
      </div>

      {/* ── Text ───────────────────────────────────────────────────────────── */}
      <div className="space-y-1">
        <h3 className="font-body text-lg md:text-xl lg:text-2xl text-black font-medium leading-tight group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-body text-sm text-gray-500 tracking-tight">
          {project.location}, Maharashtra
        </p>
      </div>
    </motion.a>
  );
}