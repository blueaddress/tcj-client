import Banner from './Banner.jsx';
import ContactForm from './contactForm.jsx';
import Footer from '../Shared/Footer.jsx';
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-secondary-bg min-h-screen">
      {/* 1. Shared Banner Component */}
      <Banner title="Contact" subtitle="Connect With Us" />

      {/* 2. Main Contact Section */}
      <section className="py-20 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Map & Contact Info (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Map Element */}
            <div className="relative w-full h-[400px] bg-slate-200 grayscale contrast-125 hover:grayscale-0 transition-all duration-700 rounded-sm shadow-inner overflow-hidden border border-slate-100">
              <iframe
                title="TCJ Realty Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120651.92138547466!2d72.8252!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712678000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactDetail 
                icon={MapPin} 
                title="Office Address" 
                detail="Level 5, Executive Chambers, Mumbai, MH 400001" 
              />
              <ContactDetail 
                icon={Phone} 
                title="Direct Line" 
                detail="+91 98765 43210" 
              />
              <ContactDetail 
                icon={Mail} 
                title="Email Support" 
                detail="hello@tcjrealty.in" 
              />
              <ContactDetail 
                icon={Clock} 
                title="Operating Hours" 
                detail="Mon - Sat: 10:00 AM - 7:00 PM" 
              />
            </div>
          </motion.div>

          {/* RIGHT: The Form (5 Columns) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="lg:col-span-5 bg-white p-8 lg:p-12 shadow-2xl rounded-sm border border-slate-100"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}

// Helper Sub-component for Info Cards
function ContactDetail({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary-bg/5 text-accent rounded-sm">
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div>
        <h5 className="font-heading text-primary-bg text-lg mb-1">{title}</h5>
        <p className="font-body text-slate-500 text-sm leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}