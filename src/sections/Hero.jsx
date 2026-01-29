'use client';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Building Backend
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Systems That Scale
            </span>
          </h1>

          {/* Proof bullets with enhanced styling */}
          <div className="max-w-2xl mx-auto space-y-3 text-sm sm:text-base text-white/70">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">→</span>
              <p>Production-ready backend systems deployed and serving real users</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold mt-1">→</span>
              <p>Backend-first engineer focused on APIs, databases, and system design</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold mt-1">→</span>
              <p>AI-integrated products in production, not prototypes</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() =>
                document.getElementById("work").scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-full sm:w-auto"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-white/60 hover:bg-white/5 transition-all duration-200 w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
