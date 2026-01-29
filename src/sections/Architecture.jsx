import jobportal from "../../public/jobportal.png"

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              System Architecture
            </span>
          </h2>
          <p className="text-white/60 text-lg">Real-Time Job Portal Design & Engineering</p>
        </div>

        <p className="max-w-3xl text-white/70 mb-12 leading-relaxed text-sm md:text-base">
          This section outlines the high-level system design, request flow, and key engineering 
          decisions behind the Real-Time Job Portal. The goal was to build a scalable, modular 
          backend that integrates AI-driven analysis with real-world data sources.
        </p>

        {/* Diagram and Explanation Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* LEFT: Architecture Diagram */}
          <div className="border border-white/20 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center min-h-80">
            <img 
              src={jobportal || "/placeholder.svg"} 
              alt="Job Portal Architecture Diagram" 
              className="object-contain h-full w-full p-4" 
            />
          </div>

          {/* RIGHT: Explanation */}
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-3">Architecture Overview</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                The system is built around a backend-first architecture where the API layer 
                orchestrates data ingestion, AI processing, and persistence.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-3">Request Handling</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                User requests are handled via REST APIs, which trigger background workflows for 
                scraping, resume generation, and ATS evaluation.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-3">AI Integration</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                AI components are isolated from the core business logic to ensure modularity and 
                easier iteration on models without impacting system stability.
              </p>
            </div>
          </div>
        </div>

        {/* Request Flow and Design Decisions */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0">
            <h3 className="text-xl font-bold text-white mb-8">Request Flow</h3>
            <ol className="space-y-4">
              {[
                "User submits LinkedIn profile URL",
                "Backend validates and queues scraping task",
                "Profile data is parsed and structured",
                "Resume is generated and stored",
                "ATS score is calculated using AI models",
                "Job matching engine returns relevant roles"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-white/70 text-sm md:text-base pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0">
            <h3 className="text-xl font-bold text-white mb-8">Key Design Decisions</h3>
            <ul className="space-y-3">
              {[
                "Backend-first approach to support multiple clients",
                "Separation of AI processing from core API logic",
                "Asynchronous workflows for scraping and AI tasks",
                "Data normalization before persistence"
              ].map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold text-lg mt-0.5">→</span>
                  <span className="text-white/70 text-sm md:text-base">{decision}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
