export default function Partners() {
    return (
      <div className="bg-white min-h-screen font-body">
        {/* Hero Section */}
        <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 origin-bottom-right"></div>
           <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">Partners & Collaborations</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
                Building a robust ecosystem through strategic alliances with industry, academia, and government.
            </p>
          </div>
        </section>
  
        {/* Intro Text */}
        <section className="container mx-auto px-6 py-24">
             <div className="max-w-4xl mx-auto text-center mb-20 animate-on-scroll">
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Ecosystem</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                    INSPAN collaborates with leading academic institutions, industry partners, startups, investors, and policymakers to create a seamless corridor for knowledge exchange and economic value creation.
                </p>
             </div>
  
             {/* Partners Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Simulated Partner Logos */}
                {[
                    "Academic Partner", "Industry Leader", "Govt Body", "Investment Firm",
                    "Tech Giant", "Startup Hub", "Research Inst", "Global NGO"
                ].map((item, idx) => (
                    <div key={idx} className="aspect-[4/3] bg-white rounded-xl border border-gray-100 flex items-center justify-center p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-offwhite to-white z-0"></div>
                        <span className="relative z-10 text-gray-400 font-bold text-center group-hover:text-secondary transition-colors text-sm md:text-base">
                            {item} <br/><span className="text-xs font-normal opacity-50">Logo Placeholder</span>
                        </span>
                    </div>
                ))}
             </div>

             {/* Call to Action */}
             <div className="mt-24 bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
                <h3 className="text-2xl font-bold text-secondary mb-4">Become a Partner</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join us in shaping the future of innovation in the India-Nepal corridor. Let's create impact together.
                </p>
                <button className="px-8 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-primary transition-colors shadow-lg">
                    Partnership Inquiry
                </button>
             </div>
        </section>
      </div>
    );
  }