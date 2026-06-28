import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Aarti Sharma",
    text: "Dr. Modi is incredibly patient and thorough. The clinic is spotless and the staff is very welcoming. I finally found a dentist I trust.",
    rating: 5
  },
  {
    name: "Rahul Patel",
    text: "I was always afraid of dental treatments, but the laser dentistry here was completely painless. Highly recommend Tooth Care Dental Clinic!",
    rating: 5
  },
  {
    name: "Meera Desai",
    text: "Got my veneers done here. The precision and aesthetic sense of Dr. Siddharth are unmatched. My smile has never looked better.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a5670] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-4">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Smiles that speak for themselves.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] relative hover:bg-white/15 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-8">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white hover:bg-[#ddebf0] text-[#0a5670] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
