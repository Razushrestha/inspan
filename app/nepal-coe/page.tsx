import Link from "next/link";
import Image from "next/image";

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

      {/* Vision Section */}
      <section className="py-24 container mx-auto px-6">
         <div className="max-w-5xl mx-auto text-center animate-on-scroll">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-10">Building a Self-Sustaining Ecosystem</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
              To build a self-sustaining bilateral startup and innovation ecosystem anchored in Nepal, where founders, researchers, and institutions from Nepal and India collaborate to create scalable ventures, deploy real-world innovation, and contribute to regional economic growth.
            </p>
         </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#1a2c42] to-secondary z-0"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-10">Translating Momentum into Impact</h2>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-justify md:text-center max-w-4xl mx-auto">
              To translate the momentum of the India-Nepal Startup Partnership Network into a Center of Excellence, enabling structured incubation, cross-border collaboration, technical capacity building, and sector-focused innovation through partnerships with leading academic, industry, and research institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-24 bg-offwhite relative">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <div>
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Strategic Goals</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-2">Core Objectives</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                 </div>
                 <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-right">Nine strategic pillars driving bilateral innovation and sustainable growth.</p>
            </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { title: "Institutionalize INSPAN", desc: "Anchor and institutionalize INSPAN outcomes in Nepal for lasting impact." },
                { title: "Startup Collaboration", desc: "Strengthen India-Nepal startup collaboration through structured partnerships." },
                { title: "Technical Ecosystem Access", desc: "Extend IITM Pravartak or other technical ecosystem access to Nepali founders." },
                { title: "Founder Leadership", desc: "Enable founder-led ecosystem leadership driving bottom-up innovation." },
                { title: "Incubation & Venture Support", desc: "Build structured incubation programs and comprehensive venture support systems." },
                { title: "Innovation Pilots", desc: "Activate sector-focused innovation pilots addressing real-world challenges." },
                { title: "Academia-Startup Bridge", desc: "Connect academic institutions with startups for research commercialization." },
                { title: "Bilateral Engagement", desc: "Anchor bilateral innovation engagement between India and Nepal." },
                { title: "Long-term Sustainability", desc: "Ensure long-term ecosystem sustainability through self-sustaining models." }
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

      {/* Key Activities */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Key Activities</h2>
          <p className="text-gray-500 max-w-3xl mx-auto">To effectively achieve its institutional objectives and strengthen the India-Nepal startup and innovation corridor, the INSPAN Center of Excellence will undertake the following key activities.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Annual INSPAN Program Cohort",
              desc: "Plan, announce, and manage the national selection process to identify and prepare high-potential Nepali startups for participation in the annual INSPAN Program in India, including screening, jury evaluation, and pre-departure readiness support.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )
            },
            {
              title: "Monthly Embassy Startup Forums",
              desc: "Convene structured monthly startup meets at the Embassy Premises, each anchored around a thematic focus area, integrating expert talks, capacity building workshops, training sessions, and ecosystem networking engagements.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Startup Incubation & Fund Bridging",
              desc: "Design and operate an incubation program for selected startups, providing mentorship, business advisory, market access, and facilitation of funding linkages through investors, grants, and institutional partners from both Nepal and India.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Capacity Building & Bootcamps",
              desc: "Organize sectoral training, workshops, and bootcamps across priority domains including AI, Deep Technology, Entrepreneurship, Financial Literacy, FinTech, Product Innovation, Tourism, Agritech, and other emerging industries.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: "Flagship Bilateral Convenings",
              desc: "Host two annual flagship platforms to strengthen policy dialogue and innovation collaboration: India-Nepal Innovation Bridge Conference and the Policy & Ecosystem Dialogue Summit.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Cross-Border Partnerships",
              desc: "Establish and nurture strategic partnerships with Indian incubators, accelerators, academic institutions, and industry partners to create seamless collaboration pathways for Nepali startups.",
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            }
          ].map((activity, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{activity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Significance */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-[#1a2c42] to-secondary z-0"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Strategic Significance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">The INSPAN Center of Excellence will serve as a cornerstone institution for bilateral innovation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Permanent Institutional Outcome", desc: "A lasting legacy of the INSPAN Program" },
              { title: "Bilateral Innovation Bridge", desc: "Connecting Nepal and India's startup ecosystems" },
              { title: "Founder-Led Platform", desc: "Empowering entrepreneurs to lead ecosystem growth" },
              { title: "Research & Market Enabler", desc: "Facilitating technology and market access" },
              { title: "Policy Dialogue Facilitator", desc: "Bridging governments and innovators" },
              { title: "Pipeline Builder", desc: "Nurturing future INSPAN cohorts" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embassy Support Request */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Partnership</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4">Request for Embassy Support</h2>
              <p className="text-gray-500">The Inception Cohort respectfully seeks the support of the Embassy of India, Kathmandu for the following areas.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Institutional Patronage", desc: "Official endorsement and institutional backing" },
                { title: "Strategic Advisory", desc: "Representation and guidance on bilateral affairs" },
                { title: "Diplomatic Facilitation", desc: "Support for cross-border partnership development" },
                { title: "Programmatic Collaboration", desc: "Access to embassy programs and initiatives" },
                { title: "Ecosystem Linkage", desc: "Connections to Indian incubators and institutions" },
                { title: "Engagement Platforms", desc: "Periodic forums within Embassy premises" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="font-bold">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-primary/25">
                Get In Touch
              </Link>
            </div>
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
                    {/* Innovation Lab Image */}
                    <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 bg-gray-200">
                        <Image 
                             src="/window.svg" 
                             alt="Innovation Lab" 
                             fill
                             className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                 </div>
             </div>
        </div>
      </section>
    </div>
  );
}
