import React from 'react';
import { ArrowUpRight, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a5670] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Tooth Care<br/>Dental Clinic.</h2>
            <p className="text-white/70 max-w-sm text-sm leading-relaxed mb-8">
              Experience world-class dental care with Dr. Siddharth Modi. Precision, comfort, and transparency in every treatment.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/toothcaredental_109?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a5670] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a5670] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-[#ddebf0] transition-colors flex items-center gap-2 group">Home <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#services" className="hover:text-[#ddebf0] transition-colors flex items-center gap-2 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#doctor" className="hover:text-[#ddebf0] transition-colors flex items-center gap-2 group">Dr. Modi <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#testimonials" className="hover:text-[#ddebf0] transition-colors flex items-center gap-2 group">Reviews <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-[#ddebf0] transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#services" className="hover:text-[#ddebf0] transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-[#ddebf0] transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="hover:text-[#ddebf0] transition-colors">General Care</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 font-bold">
          <p>&copy; {new Date().getFullYear()} Tooth Care Dental Clinic.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
