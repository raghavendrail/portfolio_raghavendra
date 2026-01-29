import predict from "../../public/predictteams.png"

const PredictTeamsArchitecture = () => {
  return (
    <section id="architecturepredict" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              System Architecture — PredictTeams
            </span>
          </h2>
          <p className="text-white/60 text-lg">Backend-driven cricket prediction platform</p>
        </div>

        <p className="max-w-3xl text-white/70 mb-16 leading-relaxed text-sm md:text-base">
          This section outlines the backend-first architecture behind PredictTeams,
          a live production cricket prediction platform designed for scalability,
          SEO performance, and AI-driven content generation.
        </p>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* LEFT — DIAGRAM */}
          <div className="border border-white/20 rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center min-h-80">
            <img 
              src={predict || "/placeholder.svg"} 
              alt="PredictTeams Architecture Diagram" 
              className="object-contain h-full w-full p-4"
            />
          </div>

          {/* RIGHT — EXPLANATION */}
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">API-Driven Architecture</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                PredictTeams follows a backend-driven architecture where REST APIs 
                act as the central orchestration layer for match data ingestion, 
                AI content generation, and SEO delivery.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">Domain Modeling</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Core domain entities such as matches, teams, venues, and pitch reports 
                are modeled independently to support flexible prediction workflows 
                and content reuse across pages.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4 md:pl-6">
              <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                AI-powered content generation is isolated from request handling, 
                enabling safe iteration on OpenAI prompts without impacting 
                system stability or SEO performance.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID — SIDE BY SIDE */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="border border-white/10 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0">
            <h3 className="text-xl font-bold text-white mb-8">Request Flow</h3>
            <ol className="space-y-4">
              {[
                "User requests a match or prediction page",
                "Backend resolves match, team, and venue context",
                "Prediction logic and stats are computed",
                "OpenAI generates previews and fantasy insights",
                "SEO metadata and structured content are assembled",
                "Optimized page is served to client and indexed"
              ].map((step, idx) => (
                <li key={idx} className="flex gap-3">
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
                "SEO-first routing with clean URLs and metadata",
                "Backend ownership of page structure and content",
                "AI-generated content separated from core APIs",
                "Sitemap automation for organic traffic growth",
                "Cloud-native deployment using AWS + CDN"
              ].map((decision, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold text-lg mt-0.5">→</span>
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

export default PredictTeamsArchitecture
