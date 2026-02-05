import Link from "next/link";

export default function NepalCoE() {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* Hero Section */}
      <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#1a2c42] to-secondary z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 animate-slide-up">
              <span className="text-primary">INSPAN</span> Center of Excellence – Nepal
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-orange-400 mx-auto mb-8 rounded-full animate-slide-up delay-100 opacity-0 fill-mode-forwards"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up delay-200 opacity-0 fill-mode-forwards">
              A strategic initiative positioning Nepal as a regional innovation hub, connecting local talent with global opportunities.
            </p>
        </div>
      </section>

      {/* About The Center */}
      <section className="py-24 container mx-auto px-6">
         <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-10">Catalyzing Innovation</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
             The INSPAN Center of Excellence (CoE) Nepal is designed to be the lighthouse for the country's startup ecosystem. By providing world-class infrastructure, expert mentorship, and access to global markets, the CoE fosters a culture of high-impact research and entrepreneurship.
            </p>
         </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-offwhite relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-2">Key Objectives</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                 </div>
                 <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-right">Driving growth through strategic pillars of development.</p>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { title: "Entrepreneurship", desc: "Foster innovation-driven ventures and startups in Nepal." },
                { title: "Sustainability", desc: "Support climate-tech solutions for a greener future." },
                { title: "Collaboration", desc: "Enable seamless India–Nepal research and trade partnerships." },
                { title: "Investment", desc: "Bridge high-potential startups with angel investors and VCs." },
                { title: "Global Ventures", desc: "Develop technology ventures that can compete on a global scale." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-gray-100 group">
                    <div className="w-12 h-12 bg-offwhite text-primary rounded-full flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        {idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">Strategic Focus Areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { 
                name: "Clean Energy", 
                icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            },
            { 
                name: "Climate Solutions", 
                icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            },
            { 
                name: "AI & IoT", 
                icon: (
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                )
            },
            { 
                name: "Deep-Tech", 
                icon: (
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                )
            },
            { 
                name: "Infrastructure", 
                icon: (
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                )
            }
          ].map((area, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 text-center flex flex-col items-center justify-center min-h-[14rem] hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all group cursor-default">
               <span className="mb-6 text-primary/80 group-hover:text-primary group-hover:scale-110 transition-all duration-300">{area.icon}</span>
               <h3 className="text-lg font-bold text-secondary leading-tight group-hover:text-primary transition-colors">{area.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities & Support */}
      <section className="py-24 bg-white text-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gray-50 skew-x-12 pointer-events-none opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                     <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-secondary">World-Class Facilities & Support</h2>
                     <div className="space-y-6">
                        {[
                          "Comprehensive startup incubation & acceleration programs",
                          "State-of-the-art research and prototyping labs",
                          "Mentorship from industry vets and academic leaders",
                          "Direct access to regional and global partner networks",
                          "Guidance on cross-border policy and regulations"
                        ].map((facility, idx) => (
                          <div key={idx} className="flex items-start group">
                            <div className="mr-5 mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <span className="text-primary text-sm group-hover:text-white">
                                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                   </svg>
                                </span>
                            </div>
                            <span className="text-lg text-gray-600 font-medium group-hover:text-secondary transition-colors">{facility}</span>
                          </div>
                        ))}
                     </div>
                     <div className="mt-12">
                        <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-primary/25">
                            Apply for Incubation
                        </Link>
                     </div>
                </div>
                 <div className="order-1 lg:order-2 relative h-[500px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div className="absolute bottom-10 left-10 right-10 z-20">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Campus</span>
                        <h3 className="text-2xl font-bold text-white">Innovation Lab 1</h3>
                    </div>
                    {/* Placeholder for Image */}
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition-transform duration-700">
                        <span className="text-6xl">🏢</span>
                    </div>
                 </div>
             </div>
        </div>
      </section>
    </div>
  );
}
