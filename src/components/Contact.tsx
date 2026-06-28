import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f4f9fb] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ddebf0] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a5670]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0a5670] text-[10px] font-bold uppercase tracking-widest mb-4">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0a5670] mb-6 tracking-tight">Book Your Appointment.</h3>
          <p className="text-lg text-[#0a5670]/70 leading-relaxed">
            We are ready to provide you with the best dental care. Call us or visit our clinic during working hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.a 
            href="tel:+918460448731"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-[#0a5670] shadow-sm border border-white mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0a5670]/70 mb-2">Call Us</h4>
            <p className="text-lg font-bold text-[#0a5670]">+91 084604 48731</p>
          </motion.a>
          
          <motion.a 
            href="https://maps.app.goo.gl/JUQ3mNkpPinXVmW3A"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-[#0a5670] shadow-sm border border-white mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0a5670]/70 mb-2">Location</h4>
            <p className="text-sm font-semibold text-[#0a5670] leading-relaxed">
              Silver hub complex, FF-09, 10, Chhani Jakatnaka, Circle, Chhani, Vadodara, Gujarat 390024
            </p>
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all"
          >
            <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center text-[#0a5670] shadow-sm border border-white mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0a5670]/70 mb-2">Clinic Hours</h4>
            <p className="text-sm font-semibold text-[#0a5670]">Open &bull; Closes at 8:30 PM</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
