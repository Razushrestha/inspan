import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t border-white/10 relative overflow-hidden font-body">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
                 <div className="bg-white rounded-lg p-1.5">
                   <Image 
                     src="/inspan.png" 
                     alt="INSPAN Logo" 
                     width={120} 
                     height={44} 
                     className="h-9 w-auto"
                   />
                 </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building the definitive cross-border innovation bridge between India and Nepal. Empowering startups, research, and sustainable growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1">About Us</Link></li>
              <li><Link href="/nepal-coe" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1">Nepal CoE</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1">Programs</Link></li>
              <li><Link href="/leadership" className="hover:text-primary transition-colors inline-block transform hover:translate-x-1">Leadership</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400 uppercase tracking-wider">
              <li><Link href="/news" className="hover:text-primary transition-colors">News Room</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partner Network</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                 <span className="text-primary mr-3 text-lg">📍</span>
                 <span>INSPAN Center of Excellence<br/>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                 <span className="text-primary mr-3 text-lg">📧</span>
                 <a href="mailto:info@inspan.org" className="hover:text-white transition-colors">info@inspan.org</a>
              </li>
            </ul>
            
            {/* Socials */}
            <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 text-gray-400 border border-white/10" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 text-gray-400 border border-white/10" aria-label="X">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 text-gray-400 border border-white/10" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} INSPAN. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
