import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#ddebf0] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a5670]/10 border border-[#0a5670]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0a5670] animate-pulse"></span>
              <span className="text-[#0a5670] text-[10px] font-bold uppercase tracking-widest">Accepting New Patients</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a5670] leading-[1.1] mb-6 tracking-tight">
              Flawless smiles, <br className="hidden sm:block" />
              crafted with precision.
            </h1>
            
            <p className="text-base sm:text-lg text-[#0a5670]/80 mb-10 max-w-xl leading-relaxed">
              Experience world-class dental care at Tooth Care Dental Clinic, led by Dr. Siddharth Modi (MDS). We combine advanced technology with a serene, patient-first environment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+918460448731" className="bg-[#0a5670] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#0a5670]/90 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 group">
                Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#ddebf0] border-2 border-white flex items-center justify-center">
                       <Star className="w-3 h-3 text-[#0a5670] fill-current" />
                    </div>
                  ))}
                </div>
                <p className="text-[#0a5670]/70 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-[#0a5670] font-extrabold text-xs">5.0</span> (149 REVIEWS)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px]"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4 pt-8">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/30 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-[4/5] overflow-hidden"
                >
                  <img 
                    src="https://i.ibb.co/99cVngLs/unnamed-10.jpg" 
                    alt="Modern Clinic" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white/30 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-square overflow-hidden"
                >
                  <img 
                    src="https://i.ibb.co/tMCMYLF4/unnamed-11.jpg" 
                    alt="Dental Care" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white/30 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-square overflow-hidden"
                >
                  <img 
                    src="https://i.ibb.co/ccGRrHYT/unnamed-6.jpg" 
                    alt="Reception" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="bg-white/30 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] aspect-[4/5] overflow-hidden"
                >
                  <img 
                    src="https://i.ibb.co/W45RKHkD/unnamed-7.jpg" 
                    alt="Technology" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
