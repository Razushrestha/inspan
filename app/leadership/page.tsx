export default function Leadership() {
    return (
      <div className="bg-white min-h-screen font-body">
        {/* Dynamic Hero */}
        <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">Leadership & Advisory</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
               Guiding vision and strategy through global expertise and regional insight.
            </p>
          </div>
        </section>
  
        <section className="container mx-auto px-6 py-24">
            <div className="mb-20 max-w-3xl mx-auto text-center animate-on-scroll">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    INSPAN is led by a distinguished council of domain experts from academia, industry, and government who are committed to fostering a vibrant innovation ecosystem in the India-Nepal corridor.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                   { name: "Dr. Name Surname", role: "Chairperson", bg: "bg-blue-100" },
                   { name: "Ms. Name Surname", role: "Executive Director", bg: "bg-orange-100" },
                   { name: "Mr. Name Surname", role: "Head of Partnerships", bg: "bg-gray-100" }
               ].map((leader, item) => (
                 <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className={`h-80 ${leader.bg} relative overflow-hidden`}>
                        {/* Placeholder generic avatar or pattern */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-700">
                             <svg className="w-48 h-48 text-gray-400 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                                <path clipRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" fillRule="evenodd" />
                             </svg>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-8 relative">
                        <div className="absolute -top-12 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-secondary transition-colors duration-300">
                             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-secondary mb-1 group-hover:text-primary transition-colors">{leader.name}</h3>
                        <p className="text-gray-500 font-semibold mb-4 uppercase text-xs tracking-widest">{leader.role}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A brief two-line bio description outlining expertise and strategic role within the INSPAN ecosystem.
                        </p>
                    </div>
                 </div>
               ))}
            </div>
        </section>
      </div>
    );
  }