import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

const featuredServices = [
  {
    id: 'implants',
    name: 'Dental Implants',
    image: 'https://i.ibb.co/CyQST3G/Screenshot-2026-06-29-at-10-01-40-PM.png',
    desc: 'Permanent solutions for missing teeth that look and feel completely natural.'
  },
  {
    id: 'crowns',
    name: 'Dental Crowns',
    image: 'https://i.ibb.co/9HDDrgGq/Screenshot-2026-06-29-at-10-02-09-PM.png',
    desc: 'High-quality crowns to protect damaged teeth.'
  },
  {
    id: 'bridges',
    name: 'Dental Bridges',
    image: 'https://i.ibb.co/GfVvT6cR/Screenshot-2026-06-29-at-10-02-16-PM.png',
    desc: 'Custom-fitted solutions for missing teeth.'
  },
  {
    id: 'veneers',
    name: 'Dental Venners',
    image: 'https://i.ibb.co/nNDX9Jhb/Screenshot-2026-06-29-at-10-02-21-PM.png',
    desc: 'Custom shells to restore tooth appearance and strength.'
  },
  {
    id: 'dentures',
    name: 'Dentures',
    image: 'https://i.ibb.co/N0GpHc4/Screenshot-2026-06-29-at-10-02-31-PM.png',
    desc: 'Complete care and fitting for dentures.'
  },
  {
    id: 'gum-disease',
    name: 'Gum Disease',
    image: 'https://i.ibb.co/ZRmRyQsz/Screenshot-2026-06-29-at-10-02-41-PM.png',
    desc: 'Specialized care for healthy gums.'
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    image: 'https://i.ibb.co/4b7V1q7/Screenshot-2026-06-29-at-10-02-52-PM.png',
    desc: 'Professional whitening for a brighter, confident smile.'
  },
  {
    id: 'bone-crafting',
    name: 'Bone Crafting',
    image: 'https://i.ibb.co/FkW180Ln/Screenshot-2026-06-29-at-10-03-00-PM.png',
    desc: 'Advanced bone grafting procedures to support implants.'
  }
];

const allServices = [
  "Bonding",
  "Check-ups",
  "Cosmetic procedures",
  "Dentures & bridges",
  "Emergency care",
  "Extractions",
  "Fillings and sealants",
  "Laser dentistry",
  "Mouth guards",
  "Online dentist booking",
  "Oral surgery",
  "Paediatrics",
  "Root canals",
  "Teeth cleaning",
  "Teeth reshaping",
  "X-ray",
  "Cosmetic Dentistry",
  "Dental Braces Treatment",
  "Decayed Teeth Treatment",
  "Bleeding Gum Treatment",
  "Orthodontic Treatment",
  "Dental Fluoride Treatment"
];

export default function AllServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Link to="/" className="flex items-center gap-3">
              <h1 className="font-bold text-lg leading-none text-[#0a5670]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                Tooth Care<br/>
                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Dental Clinic</span>
              </h1>
            </Link>
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

          <div className="mb-16">
            <h4 className="text-xl font-bold text-[#0a5670] mb-8 text-center" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Featured Services</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-left hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
                >
                  <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-2xl mb-6" />
                  <h4 className="text-xl font-bold text-[#0a5670] mb-2">{service.name}</h4>
                  <p className="text-[#0a5670]/70 text-sm leading-relaxed mb-4 flex-grow">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#0a5670] mb-8 text-center" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Other Services</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allServices.map((service) => (
                <div
                  key={service}
                  className="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm flex items-center gap-3 hover:bg-white/60 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0a5670]" />
                  <span className="font-semibold text-[#0a5670]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

