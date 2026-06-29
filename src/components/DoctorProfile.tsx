import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Stethoscope, Instagram } from 'lucide-react';
import { CountUp, TypingText } from './Animations';

export default function DoctorProfile() {
  return (
    <section id="doctor" className="py-24 bg-[#ddebf0] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 blur-3xl -z-10 rounded-l-[100%]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/60 p-3 bg-white/40 backdrop-blur-2xl"
            >
              <img 
                src="https://i.ibb.co/rGCdxf68/Gemini-Generated-Image-4u5em94u5em94u5e.jpg" 
                alt="Dr. Siddharth Modi" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a5670]/80 via-transparent to-transparent rounded-[2.5rem] m-3"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Dr. Siddharth Modi</h3>
                  <p className="text-white/80 font-medium">MDS - Chief Dental Surgeon</p>
                </div>
                
                <a 
                  href="https://www.instagram.com/siddharthgmodi_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-[#0a5670] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -right-8 bg-white/70 backdrop-blur-2xl p-6 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/60 flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#0a5670] border border-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#0a5670]"><CountUp to={10} duration={2} />+ Years</p>
                <p className="text-[#0a5670]/70 text-xs font-bold uppercase tracking-widest">Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[#0a5670] text-[10px] font-bold uppercase tracking-widest mb-4">Meet Your Dentist</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0a5670] mb-6 tracking-tight flex flex-col gap-2">
              <TypingText text="Expert Care with" delay={0.1} />
              <TypingText text="a Humble Approach." delay={0.4} />
            </h3>
            
            <TypingText
              text="Dr. Siddharth Modi (MDS) is renowned for his exceptional skill and humble demeanor. He believes in transparent communication, ensuring every patient fully understands their treatment options and costs without any hidden surprises."
              className="text-lg text-[#0a5670]/70 mb-10 leading-relaxed max-w-2xl"
              delay={0.6}
            />

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[1rem] flex items-center justify-center text-[#0a5670] shadow-sm transition-transform group-hover:scale-105">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a5670]">Exceptional Qualifications</h4>
                  <p className="mt-1.5 text-sm text-[#0a5670]/70 leading-relaxed">Master of Dental Surgery (MDS) from top-tier medical institutions.</p>
                </div>
              </div>
              
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[1rem] flex items-center justify-center text-[#0a5670] shadow-sm transition-transform group-hover:scale-105">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a5670]">Patient-First Philosophy</h4>
                  <p className="mt-1.5 text-sm text-[#0a5670]/70 leading-relaxed">Known for his humble nature and transparent approach to treatment costs.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[1rem] flex items-center justify-center text-[#0a5670] shadow-sm transition-transform group-hover:scale-105">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a5670]">Modern Techniques</h4>
                  <p className="mt-1.5 text-sm text-[#0a5670]/70 leading-relaxed">Specializes in painless procedures utilizing the latest dental technology.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
