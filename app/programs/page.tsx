export default function Programs() {
    return (
      <div className="bg-white min-h-screen font-body">
        {/* Hero Section */}
        <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">Programs & Initiatives</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
                Empowering the next generation of innovators through structured support and strategic collaboration.
            </p>
          </div>
        </section>
  
        {/* Programs Grid */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Startup Incubation Program", 
                desc: "Designed to support early-stage startups with mentorship, infrastructure, funding access, and market entry support.",
                icon: (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                )
              },
              { 
                title: "Accelerator Programs", 
                desc: "Sector-focused accelerators aimed at scaling startups through global exposure, strategic partnerships, and investor readiness.",
                icon: (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              { 
                title: "Research & Academia Collaboration", 
                desc: "Joint research initiatives between Indian and Nepali institutions to commercialize innovation and strengthen knowledge exchange.",
                icon: (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                )
              },
              { 
                title: "Exchange & Immersion Programs", 
                desc: "Cross-border exposure programs for entrepreneurs, students, and researchers to foster learning and collaboration.",
                icon: (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((program, idx) => (
              <div key={idx} className="p-10 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-offwhite flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-md">{program.desc}</p>
                
                <div className="mt-8 flex items-center text-sm font-bold text-primary tracking-wide uppercase group/link cursor-pointer">
                    <span className="mr-2 group-hover/link:underline">Learn More</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }