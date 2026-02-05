import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* Hero Section */}
      <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
         
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">About <span className="text-primary">INSPAN</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
            Bridging borders through innovation, collaboration, and shared growth.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Narrative */}
            <div className="space-y-16">
                <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                             </svg>
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-secondary">Who We Are</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg pl-16 border-l-2 border-gray-100 group-hover:border-primary transition-colors duration-300">
                        INSPAN (India–Nepal Startup Partnership Network) is an innovation-driven platform established to facilitate cross-border collaboration between India and Nepal. It connects startups, research institutions, investors, industries, and policymakers to create sustainable economic and technological growth.
                    </p>
                </div>

                <div className="group">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                             </svg>
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-secondary">Our Vision</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg pl-16 border-l-2 border-gray-100 group-hover:border-primary transition-colors duration-300">
                        To become the leading India–Nepal innovation platform that nurtures impactful startups, advances research, and strengthens regional and global partnerships.
                    </p>
                </div>

                 <div className="group">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                        </div>
                        <h2 className="text-3xl font-bold font-heading text-secondary">Our Mission</h2>
                    </div>
                    <ul className="space-y-4 text-gray-600 text-lg pl-16">
                        {[
                            "Enable cross-border startup collaboration",
                            "Support innovation-led entrepreneurship",
                            "Promote clean energy and sustainability solutions",
                            "Strengthen academia–industry linkages",
                            "Facilitate policy dialogue and international cooperation"
                        ].map((item, idx) => (
                             <li key={idx} className="flex items-start group/item">
                                <span className="text-primary mr-3 transform translate-y-1 group-hover/item:scale-125 transition-transform">
                                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                   </svg>
                                </span> 
                                <span className="group-hover/item:text-secondary transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Column: Visual Feature */}
            <div className="relative sticky top-24">
                 <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-secondary group">
                     {/* Background Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-secondary to-[#2c3e50]"></div>
                     
                     {/* Decorative Elements */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                     <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-10 -translate-x-10"></div>

                     {/* Content Overlay */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center">
                        <div className="w-32 h-32 mb-8 relative group-hover:scale-110 transition-transform duration-500">
                            {/* Replace src with your specific rocket/impact image */}
                            <Image 
                                src="/globe.svg" 
                                alt="Driving Impact" 
                                fill
                                className="object-contain drop-shadow-2xl invert opacity-80"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Driving Impact</h3>
                        <p className="text-white/70 leading-relaxed font-light">
                            Connect. Innovate. Grow.<br/>
                            Building the future of cross-border entrepreneurship.
                        </p>
                     </div>
                 </div>
                 
                 {/* Floating Card */}
                 <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block animate-slide-up animation-delay-500">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="text-primary text-2xl font-bold">5+</div>
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Key Focus Areas</div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-primary rounded-full"></div>
                    </div>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
}