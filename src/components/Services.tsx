import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Stethoscope, Briefcase } from 'lucide-react';
import { TypingText } from './Animations';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f4f9fb] relative overflow-hidden">
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#ddebf0] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#0a5670]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#0a5670] text-[10px] font-bold uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0a5670] mb-4 flex flex-col gap-2 items-center justify-center">
            <TypingText text="Comprehensive Dental Services" delay={0.1} />
          </h3>
          <TypingText
            text="From routine check-ups to advanced surgical procedures, we provide full-spectrum dental care under one roof."
            className="text-lg text-[#0a5670]/70 mb-10"
            delay={0.4}
          />
          
          <Link to="/services" className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-[#0a5670] hover:bg-white/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group">
            View All Services
            <div className="w-8 h-8 rounded-full bg-[#0a5670] flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
