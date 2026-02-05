import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t border-white/10 relative overflow-hidden font-body">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
                 <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold group-hover:bg-white group-hover:text-primary transition-colors">I</div>
                 <h2 className="text-2xl font-bold font-heading tracking-wide">INSPAN</h2>
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
                {['Li', 'X', 'Fb'].map((social, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 text-xs font-bold text-gray-400 border border-white/10">
                        {social}
                    </a>
                ))}
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
