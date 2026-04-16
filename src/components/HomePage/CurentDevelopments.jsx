import { motion } from "framer-motion";
import ProjectCard from "../Shared/ProjectCard.jsx";

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
    <section id="projects" className="w-full py-20 lg:py-32 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-body text-accent text-xs tracking-[0.4em] font-bold uppercase mb-4"
            >
              Current Portfolio
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-primary-bg text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Our Latest <span className="italic font-normal">Developments</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
            <a href="#all-projects" className="group flex items-center gap-4 font-body text-[11px] tracking-widest font-bold uppercase text-primary-bg/60 hover:text-accent transition-colors">
              View All Projects 
              <span className="w-12 h-[1px] bg-slate-300 group-hover:bg-accent transition-all"></span>
            </a>
          </motion.div>
        </div>

        {/* 2x2 Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {developments.map((project) => (
                <div key={project.id} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-30px)] max-w-[400px]">
                <ProjectCard project={project} />
                </div>
            ))}
            </div>

        {/* Mobile View All */}
        <div className="mt-12 md:hidden flex justify-center">
          <a href="#all-projects" className="font-body text-[10px] tracking-widest font-bold uppercase py-4 px-8 border border-slate-200">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}