import { motion } from "framer-motion";
import arya from '../../assets/images/projects/arya.webp';
import ira from '../../assets/images/projects/ira.webp';
import vivanta from '../../assets/images/projects/vivanta.webp';

const developments = [
  // { id: "kings-court", year: "2018", title: "King's Court", location: "Kalyan West", status: "Completed", image: "/images/projects/kings-court.jpg", slug: "kings-court" },
  { id: "tcj-arya",    year: "2026", title: "Arya",         location: "Kalyan West", status: "Ongoing",   image: arya.src ,        slug: "tcj-arya" },
  { id: "tcj-ira",     year: "2026", title: "Ira",          location: "Kalyan West", status: "Ongoing",   image: ira.src ,         slug: "tcj-ira" },
  { id: "tcj-vivanta", year: "2026", title: "Vivanta",      location: "Ambernath West", status: "Ongoing",   image: vivanta.src ,     slug: "tcj-vivanta" },
];

export default function CurrentDevelopments() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-black"
          >
            Projects
          </motion.h2>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {developments.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-4 md:mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} by TCJ Realty, ${project.location}`}
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="533"
                />
                <div className="absolute font-body top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  {project.status}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="font-body text-lg md:text-xl lg:text-2xl text-black font-medium leading-tight group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-gray-500 tracking-tight">
                  {project.location}, Maharashtra
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <a
            href="/projects"
            className="group flex items-center gap-5 font-body text-xs tracking-[0.3em] uppercase font-bold text-black"
          >
            View Full Portfolio
            <div className="relative w-10 h-px bg-gray-300 overflow-hidden">
              <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}