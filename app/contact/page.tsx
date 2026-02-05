export default function Contact() {
    return (
      <div className="bg-white min-h-screen font-body">
        {/* Dynamic Hero */}
        <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">Contact & Connect</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
                    We'd love to hear from you. Reach out for collaborations, inquiries, or just to say hello.
                </p>
            </div>
        </section>
  
        <section className="container mx-auto px-6 py-24 -mt-10 relative z-20">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
             
             {/* Left: Contact Info (Dark) */}
             <div className="bg-secondary p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                
                <h2 className="text-3xl font-bold font-heading mb-8 relative z-10">Get in Touch</h2>
                <div className="space-y-8 relative z-10">
                    <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl mr-6 group-hover:bg-primary transition-colors duration-300">
                             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                             </svg>
                        </div>
                        <div>
                            <strong className="block text-lg mb-1">Visit Us</strong>
                            <p className="text-gray-300 font-light">
                                INSPAN Center of Excellence<br/>
                                Kathmandu, Nepal
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl mr-6 group-hover:bg-primary transition-colors duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                         <div>
                            <strong className="block text-lg mb-1">Email Us</strong>
                            <a href="mailto:info@inspan.org" className="text-gray-300 hover:text-white hover:underline decoration-primary underline-offset-4 transition-all">
                                info@inspan.org
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl mr-6 group-hover:bg-primary transition-colors duration-300">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <strong className="block text-lg mb-1">Call Us</strong>
                            <p className="text-gray-300 font-light">+977-XXXXXXXX</p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
                   <h3 className="text-lg font-bold mb-2">Connect Socially</h3>
                   <div className="flex gap-4 opacity-70">
                        {/* Social Icons Placeholders */}
                        <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-primary cursor-pointer transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-primary cursor-pointer transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full hover:bg-primary cursor-pointer transition-colors flex items-center justify-center">
                           <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                   </div>
                </div>
             </div>

             {/* Right: Form (Light) */}
             <div className="p-12 bg-white">
                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                        <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                        <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Subject</label>
                        <div className="relative">
                            <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg appearance-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Partnership Proposal</option>
                                <option>Incubation Application</option>
                                <option>Research Collaboration</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                        <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg h-40 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 resize-none" placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <button type="button" className="w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:transform active:scale-95">
                        Send Message
                    </button>
                </form>
             </div>
          </div>
        </section>
      </div>
    );
  }