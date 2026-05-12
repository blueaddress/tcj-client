import { motion } from "framer-motion";

const developments = [
  {
    id: "ira-kalyan",
    title: "Ira",
    location: "Ambernath",
    status: "Ongoing",
    image: "/images/projects/ira.jpg",
    slug: "tcj-ira"
  },
  {
    id: "project-2",
    title: "Arya",
    location: "Ambernath",
    status: "Ongoing",
    image: "/images/projects/arya.jpg",
    slug: "tcj-arya"
  },
  {
    id: "project-3",
    title: "Vivanta",
    location: "Ambernath",
    status: "Ongoing",
    image: "/images/projects/vivanta.jpg",
    slug: "tcj-vivanta"
  },
  {
    id: "project-4",
    title: "King's Court",
    location: "Ambernath",
    status: "Completed",
    image: "/images/projects/kings-court.jpg",
    slug: "kings-court"
  },
];

export default function CurrentDevelopments() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Large Minimal Heading like in the image */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-black"
          >
            Projects
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {developments.map((project, index) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Optional Status Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
                  {project.status}
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="font-body text-xl md:text-2xl text-black font-medium leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm md:text-base text-gray-500 tracking-tight">
                  {project.location}, Mumbai
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-24 flex justify-center">
          <a 
            href="/projects" 
            className="group flex items-center gap-6 font-body text-xs tracking-[0.3em] uppercase font-bold text-black"
          >
            View Full Portfolio
            <div className="relative w-12 h-px bg-gray-300 overflow-hidden">
              <div className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}