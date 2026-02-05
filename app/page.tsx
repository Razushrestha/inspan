import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body text-secondary overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none transform skew-x-12 origin-top-right"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight animate-slide-up tracking-tight">
              Building the <span className="text-primary">India–Nepal</span> Innovation Bridge
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 font-light leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100 opacity-0 fill-mode-forwards">
              INSPAN is a cross-border platform fostering collaboration between startups, academia, industry, and policymakers to accelerate innovation and economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-200 opacity-0 fill-mode-forwards">
              <Link href="/nepal-coe" className="px-10 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
                Explore Nepal CoE
              </Link>
              <Link href="/contact" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-300">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Purpose</span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">Why INSPAN Matters</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="prose prose-lg text-gray-600 leading-relaxed text-justify md:text-left">
                  <p>
                    INSPAN was established to strengthen the innovation ecosystem between India and Nepal by enabling structured collaboration among startups, research institutions, industries, and governments. 
                  </p>
                  <p className="mt-4">
                    By bridging resources, talent, and technology, INSPAN aims to unlock scalable solutions to regional and global challenges, creating a seamless corridor for knowledge exchange and economic value creation.
                  </p>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent z-10"></div>
                     {/* Placeholder Image */}
                     <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 group-hover:scale-105 transition-transform duration-700">
                        <span className="text-6xl">🤝</span>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Key Focus Areas</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { 
                  title: "Startup Incubation", 
                  desc: "Nurturing early-stage ventures",
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  )
              },
              { 
                  title: "Clean Energy", 
                  desc: "Sustainable power solutions",
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
              },
              { 
                  title: "Research & Academia", 
                  desc: "Cross-border knowledge exchange",
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  )
              },
              { 
                  title: "Deep-Tech", 
                  desc: "AI, Hardware & Biotech",
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )
              },
              { 
                  title: "Policy Dialogues", 
                  desc: "Regulatory frameworks",
                  icon: (
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  )
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group border border-gray-100">
                <div className="w-16 h-16 mb-6 bg-offwhite rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2 leading-tight">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSPAN Nepal CoE Highlight */}
      <section className="py-24 bg-secondary text-white relative isolate overflow-hidden">
         {/* Background pattern */}
         <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.15" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="#F36F21" />
                <stop offset="1" stopColor="#F36F21" />
              </radialGradient>
            </defs>
          </svg>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Flagship Initiative</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">INSPAN CoE – Nepal</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    The Center of Excellence (CoE) in Kathmandu is a national hub designed to support deep-tech startups, enable industry-driven research, and create pathways for international collaboration.
                </p>
                <Link href="/nepal-coe" className="inline-flex items-center bg-white text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg">
                    Explore the Center <span className="ml-2">→</span>
                </Link>
            </div>
             <div className="relative order-1 md:order-2 h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="absolute inset-0 bg-secondary/40 hover:bg-transparent transition-colors duration-300 z-10"></div>
                 {/* Placeholder Image */}
                 <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white/20">
                    <span className="text-6xl">🏢</span>
                 </div>
             </div>
        </div>
      </section>
    </div>
  );
}
