import { motion } from "framer-motion";

export default function Banner({image, title, tagline}) {
  const patternBg = "/images/projects/arya.jpg";

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content Layer */}
      <div className="relative z-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-accent text-xs tracking-[0.5em] font-bold uppercase my-6"
        >
          {tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-white text-5xl md:text-7xl leading-tight"
        >
          <span className="italic font-normal">{title}</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-accent mx-auto mt-8"
        />
      </div>
    </section>
  );
}