import Banner from '../Shared/Banner.jsx';
import PartnerForm from './PartnerForm.jsx';
import Footer from '../Shared/Footer';
import { motion } from "framer-motion";
import { Building, FileCheck2, Clock } from "lucide-react";
import partner from '../../assets/images/partner/partnerwithus.png';
export default function Partner() {
    const features = [
        {
            icon: Building,
            title: "Cooperative Society Focus",
            desc: "Complete reconstruction of existing CHS buildings with upgraded infrastructure."
        },
        {
            icon: FileCheck2,
            title: "Maximum FSI Utilization",
            desc: "Expert management of Transfer of Development Rights (TDR) and FSI regulations."
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            desc: "A pristine record of delivering transformative residential projects on schedule."
        }
    ];

    return (
        <main className="bg-secondary-bg min-h-screen">
            <Banner title="Partner With Us" subtitle="Redevelopment" image={partner.src}/>
            
            <section id="redevelopment" className="py-24 lg:py-32 bg-[#fafafa] text-[#1a1a1a] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Changed items-center to items-start so both columns align at the top */}
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
                                    Transforming Spaces
                                </h4>
                                <h2 className="font-serif text-5xl md:text-6xl text-black leading-tight tracking-tight mb-6">
                                    Redevelopment
                                </h2>
                                <div className="w-16 h-0.5 bg-[#e31e24] mb-8"></div>
                                
                                <div className="space-y-5 font-body text-gray-600 leading-relaxed font-light text-base md:text-lg">
                                    <p>
                                        The process of redevelopment involves the reconstruction of an existing Cooperative Housing Society building. It involves the Transfer of Development Rights (TDR) and utilization of the maximum area permissible by Floor Space Index (FSI) regulations.
                                    </p>
                                    <p>
                                        We have a pristine record of timely delivery of projects that have successfully transformed old structures and catered to the exact needs of the residents.
                                    </p>
                                </div>
                            </div>

                            {/* Feature Points */}
                            <div className="space-y-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 p-2 bg-gray-100 text-[#e31e24]">
                                            <feature.icon size={20} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h5 className="font-body font-semibold text-black tracking-wide text-sm uppercase">
                                                {feature.title}
                                            </h5>
                                            <p className="font-body text-sm text-gray-500 mt-1 font-light">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative"
                        >
                            {/* Optional decorative accent on the form card */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#e31e24]"></div>
                            
                            <PartnerForm />
                        </motion.div>

                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}