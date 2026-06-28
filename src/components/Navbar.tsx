import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Dr. Modi', href: '#doctor' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/60 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.04)] py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/4wHkW3nG/Screenshot-2026-06-27-at-2-46-02-PM.png" alt="Logo" className="h-10" />
            <h1 className={cn("font-bold text-xl leading-none transition-colors", isScrolled ? "text-[#0a5670]" : "text-[#0a5670]")}>
              Tooth Care<br/>
              <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Dental Clinic</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-100",
                    isScrolled ? "text-[#0a5670]/70" : "text-[#0a5670]/70"
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "text-sm font-bold uppercase tracking-widest transition-colors hover:opacity-100",
                    isScrolled ? "text-[#0a5670]/70" : "text-[#0a5670]/70"
                  )}
                >
                  {link.name}
                </a>
              )
            ))}
            <a href="tel:+918460448731" className="bg-[#0a5670] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#0a5670]/90 transition-colors">
              Book Visit
            </a>
          </div>

          <button 
            className="md:hidden text-[#0a5670]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-b border-white/20 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-[#0a5670] font-bold text-sm uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[#0a5670] font-bold text-sm uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
          <a href="tel:+918460448731" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#0a5670] text-white text-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest w-full mt-2">
            Book Visit
          </a>
        </div>
      )}
    </nav>
  );
}
