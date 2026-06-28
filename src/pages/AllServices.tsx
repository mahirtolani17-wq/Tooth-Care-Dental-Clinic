import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Droplets, Sparkles, Stethoscope, Syringe, Zap, SmilePlus, Bluetooth as Tooth, Briefcase, ShieldCheck, Activity, Heart, MousePointerClick } from 'lucide-react';
import Footer from '../components/Footer';

const allServices = [
  { id: 'whitening', name: 'Teeth Whitening', category: 'Cosmetic', icon: Sparkles, desc: 'Professional whitening for a brighter, confident smile.', price: 'Consult for Pricing', duration: '45-60 mins' },
  { id: 'bonding', name: 'Bonding', category: 'Cosmetic', icon: SmilePlus, desc: 'Repair chipped or cracked teeth seamlessly.', price: 'Consult for Pricing', duration: '30-60 mins' },
  { id: 'checkups', name: 'Check-ups', category: 'General', icon: Stethoscope, desc: 'Routine examinations to ensure optimal oral health.', price: 'Consult for Pricing', duration: '30 mins' },
  { id: 'cosmetic-procedures', name: 'Cosmetic Procedures', category: 'Cosmetic', icon: Sparkles, desc: 'Various procedures to enhance the aesthetics of your smile.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'implants', name: 'Dental Implants', category: 'Surgical', icon: Tooth, desc: 'Permanent replacement for missing teeth.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'dentures-bridges', name: 'Dentures & Bridges', category: 'Restorative', icon: Briefcase, desc: 'Custom-fitted solutions for missing teeth.', price: 'Consult for Pricing', duration: 'Multiple visits' },
  { id: 'emergency', name: 'Emergency Care', category: 'General', icon: Zap, desc: 'Immediate attention for dental emergencies.', price: 'Consult for Pricing', duration: 'Immediate' },
  { id: 'extractions', name: 'Extractions', category: 'Surgical', icon: Syringe, desc: 'Safe and painless tooth removal.', price: 'Consult for Pricing', duration: '30-45 mins' },
  { id: 'fillings', name: 'Fillings and Sealants', category: 'General', icon: ShieldCheck, desc: 'Protect and restore teeth from decay.', price: 'Consult for Pricing', duration: '30 mins' },
  { id: 'laser', name: 'Laser Dentistry', category: 'General', icon: Zap, desc: 'Minimally invasive treatments using advanced lasers.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'mouth-guards', name: 'Mouth Guards', category: 'Preventive', icon: ShieldCheck, desc: 'Custom guards to protect your teeth during sleep or sports.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'online-booking', name: 'Online Dentist Booking', category: 'General', icon: MousePointerClick, desc: 'Easily book your appointments online.', price: 'Free', duration: 'Instant' },
  { id: 'oral-surgery', name: 'Oral Surgery', category: 'Surgical', icon: Syringe, desc: 'Advanced surgical procedures for complex dental issues.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'paediatrics', name: 'Paediatrics', category: 'General', icon: SmilePlus, desc: 'Gentle, child-friendly dental care.', price: 'Consult for Pricing', duration: '30-45 mins' },
  { id: 'root-canals', name: 'Root Canals', category: 'Restorative', icon: Droplets, desc: 'Save infected teeth with painless root canal therapy.', price: 'Consult for Pricing', duration: '60-90 mins' },
  { id: 'cleaning', name: 'Teeth Cleaning', category: 'Preventive', icon: Sparkles, desc: 'Professional cleaning to remove plaque and tartar.', price: 'Consult for Pricing', duration: '30-45 mins' },
  { id: 'reshaping', name: 'Teeth Reshaping', category: 'Cosmetic', icon: SmilePlus, desc: 'Contour and shape your teeth for a perfect smile.', price: 'Consult for Pricing', duration: '30-60 mins' },
  { id: 'veneers-crowns', name: 'Veneers & Crowns', category: 'Cosmetic', icon: Sparkles, desc: 'Custom shells/caps to restore tooth appearance and strength.', price: 'Consult for Pricing', duration: 'Multiple visits' },
  { id: 'xray', name: 'X-Ray', category: 'General', icon: Activity, desc: 'Advanced digital imaging for accurate diagnosis.', price: 'Consult for Pricing', duration: '10 mins' },
  { id: 'denture-treatment', name: 'Denture Treatment', category: 'Restorative', icon: Briefcase, desc: 'Complete care and fitting for dentures.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'cosmetic-dentistry', name: 'Cosmetic Dentistry', category: 'Cosmetic', icon: Sparkles, desc: 'Comprehensive cosmetic dental solutions.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'braces', name: 'Dental Braces Treatment', category: 'Orthodontic', icon: Tooth, desc: 'Straighten your teeth and correct your bite.', price: 'Consult for Pricing', duration: 'Multiple visits' },
  { id: 'decayed-teeth', name: 'Decayed Teeth Treatment', category: 'Restorative', icon: Heart, desc: 'Effective treatments to restore decayed teeth.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'bleeding-gum', name: 'Bleeding Gum Treatment', category: 'General', icon: Droplets, desc: 'Specialized care for healthy gums.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'crowns-treatment', name: 'Dental Crowns Treatment', category: 'Restorative', icon: Briefcase, desc: 'High-quality crowns to protect damaged teeth.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'orthodontic', name: 'Orthodontic Treatment', category: 'Orthodontic', icon: Tooth, desc: 'Advanced treatments for misaligned teeth.', price: 'Consult for Pricing', duration: 'Varies' },
  { id: 'fluoride', name: 'Dental Fluoride Treatment', category: 'Preventive', icon: ShieldCheck, desc: 'Strengthen enamel and prevent cavities.', price: 'Consult for Pricing', duration: '15 mins' }
];

const categories = ['All', 'General', 'Cosmetic', 'Restorative', 'Surgical', 'Orthodontic', 'Preventive'];

export default function AllServices() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredServices = allServices.filter(service => 
    activeCategory === 'All' ? true : service.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#ddebf0] font-sans text-[#0a5670]">
      {/* Simple Header */}
      <nav className="bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group text-[#0a5670] hover:text-[#0a5670]/80 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center border border-white shadow-sm group-hover:-translate-x-1 transition-transform">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs uppercase tracking-widest">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <h1 className="font-bold text-lg leading-none text-[#0a5670]">
                Tooth Care<br/>
                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Dental Clinic</span>
              </h1>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-24 bg-[#f4f9fb] relative min-h-screen overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#ddebf0] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#0a5670]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#0a5670] text-[10px] font-bold uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#0a5670] mb-4">Comprehensive Dental Services</h3>
            <p className="text-lg text-[#0a5670]/70">
              Explore our full spectrum of dental treatments tailored for your perfect smile.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === category 
                    ? 'bg-[#0a5670] text-white shadow-lg' 
                    : 'bg-white/50 backdrop-blur-md border border-white/60 shadow-sm text-[#0a5670]/70 hover:bg-white/80 hover:text-[#0a5670]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    key={service.id}
                    className="group"
                  >
                    <div className="h-full bg-white/40 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                      <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-[1rem] shadow-sm border border-white flex items-center justify-center text-[#0a5670] mb-6 transition-transform group-hover:scale-110 duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h4 className="text-base font-bold text-[#0a5670] mb-2">{service.name}</h4>
                      <p className="text-[#0a5670]/70 text-xs mb-4 leading-relaxed flex-grow">{service.desc}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#0a5670]/10">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-[#0a5670]/50 uppercase font-bold tracking-widest mb-1">Time</span>
                          <span className="font-semibold text-[#0a5670]">{service.duration}</span>
                        </div>
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0a5670] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
