import Banner from "../Shared/Banner";
import CareerForm from "./CareerForm"; // Adjust import path as needed
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users } from "lucide-react";
import careerImg from "../../assets/images/careers/career.png";

export default function Career() {
    const perks = [
        {
            icon: TrendingUp,
            title: "Accelerated Growth",
            desc: "Work on landmark luxury projects that challenge you and elevate your professional trajectory."
        },
        {
            icon: Users,
            title: "Collaborative Culture",
            desc: "Join a diverse team of architects, engineers, and visionaries dedicated to excellence."
        },
        {
            icon: Briefcase,
            title: "Impactful Work",
            desc: "Shape the city's skyline and contribute to spaces where luxury meets legacy."
        }
    ];

    return (
        <main className="bg-secondary-bg min-h-screen">
            <Banner title="Careers" subtitle="Build your Career" image={careerImg.src}/>
            
            <section id="career-details" className="py-24 lg:py-32 bg-[#fafafa] text-[#1a1a1a] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                        {/* Left Side: Content & Features */}
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-center"
                        >
                            <div className="mb-10">
                                <h4 className="font-body text-xs tracking-[0.3em] uppercase text-gray-400 font-bold mb-4">
                                    Join Our Team
                                </h4>
                                <h2 className="font-serif text-5xl md:text-6xl text-black leading-tight tracking-tight mb-6">
                                    Shape The Skyline
                                </h2>
                                <div className="w-16 h-0.5 bg-[#e31e24] mb-8"></div>
                                
                                <div className="space-y-5 font-body text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    <p>
                                        At TCJ Realty, we don't just build homes; we craft legacies. We are always on the lookout for passionate, driven, and innovative individuals who want to redefine the standards of luxury real estate.
                                    </p>
                                    <p>
                                        Whether you are an industry veteran or a rising talent, we provide an environment where your ideas are valued, your skills are honed, and your hard work is rewarded.
                                    </p>
                                </div>
                            </div>

                            {/* Perks / Culture Points */}
                            <div className="space-y-6">
                                {perks.map((perk, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-gray-100 text-[#e31e24]">
                                            <perk.icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h5 className="font-body font-semibold text-black tracking-wide text-sm uppercase">
                                                {perk.title}
                                            </h5>
                                            <p className="font-body text-sm text-gray-500 mt-1 font-light">
                                                {perk.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side: Form Container */}
                        <motion.div 
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative"
                        >
                            {/* Decorative accent on the form card */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#e31e24]"></div>
                            
                            <CareerForm />
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}