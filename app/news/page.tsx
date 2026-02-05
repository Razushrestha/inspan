export default function News() {
    return (
      <div className="bg-white min-h-screen font-body">
        {/* Dynamic Hero */}
        <section className="bg-secondary text-white min-h-screen flex items-center relative overflow-hidden">
           <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
           <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 animate-slide-up">News & Updates</h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light animate-slide-up delay-100 opacity-0 fill-mode-forwards">
                Stay informed with the latest developments, partnerships, and events from the INSPAN network.
            </p>
          </div>
        </section>
  
        <section className="container mx-auto px-6 py-24 -mt-10 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    title: "Launch of INSPAN CoE Nepal",
                    category: "Announcement",
                    date: "Oct 20, 2025",
                    image: (
                      <svg className="w-20 h-20 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-3a1 1 0 011-1h2a1 1 0 011 1v3m-5-4v4m3-4v4" />
                      </svg>
                    ),
                    excerpt: "A landmark day for cross-border innovation as we inaugurate the Center of Excellence in Kathmandu."
                },
                {
                    title: "MoUs signed with leading IITs",
                    category: "Partnership",
                    date: "Nov 15, 2025",
                    image: (
                      <svg className="w-20 h-20 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ), // Using Users for partnership/handshake implies people
                    excerpt: "Strengthening academic ties to foster joint research and student exchange programs between nations."
                },
                {
                    title: "Innovation Workshop: Climate Tech",
                    category: "Event",
                    date: "Dec 05, 2025",
                    image: (
                      <svg className="w-20 h-20 text-gray-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    ), // Using adjustments/levels for workshop or maybe Leaf if specifically climate
                    excerpt: "Bringing together experts, policymakers, and startups to discuss sustainable solutions for the Himalayan region."
                }
            ].map((news, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                    <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                         <div className="transition-all duration-300 transform group-hover:scale-110">
                            {news.image}
                         </div>
                         <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider shadow-sm">
                             {news.category}
                         </span>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                        <div className="text-sm text-gray-400 mb-3 font-medium flex items-center">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                            {news.date}
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer block">
                            {news.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {news.excerpt}
                        </p>
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase hover:underline decoration-2 underline-offset-4">
                                Read Full Story <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </section>
      </div>
    );
  }