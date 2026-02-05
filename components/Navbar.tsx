"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nepal CoE', path: '/nepal-coe' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Partners', path: '/partners' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'News', path: '/news' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                I
            </div>
            <span className={`text-2xl font-bold font-heading tracking-wide transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
                INSPAN
            </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                    <Link 
                        key={link.path} 
                        href={link.path}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isActive 
                                ? 'bg-primary text-white shadow-md' 
                                : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                    >
                        {link.name}
                    </Link>
                );
            })}
           <Link href="/contact" className="ml-4 px-6 py-2 bg-white text-secondary font-bold rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-0.5 shadow-lg">
             Connect
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white focus:outline-none p-2"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-secondary border-t border-gray-800 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
               <Link 
                    key={link.path} 
                    href={link.path} 
                    className={`text-lg font-medium py-2 border-b border-gray-700 ${pathname === link.path ? 'text-primary' : 'text-gray-300'}`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
               </Link>
            ))}
            <Link 
                href="/contact" 
                className="text-lg font-medium py-2 text-primary"
                onClick={() => setMobileMenuOpen(false)}
            >
                Connect With Us
            </Link>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
