import { useState } from "react"

const Projects = () => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <section id="projects" className="py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-2xl font-semibold mb-16 tracking-tight">
          Other Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl">

          {/* ================= PROJECT 1 ================= */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              AI Resume Screener
            </h3>

            <p className="text-sm text-white/60 mb-3 leading-relaxed">
              Evaluates resumes against job descriptions using NLP-based scoring
              and AI-driven analysis.
            </p>

            <div className="flex gap-6 text-sm items-center mb-4">
              <a
                href="https://ai-resume-hub-zeta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white/70 hover:text-white"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/raghavendrail"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-white/70 hover:text-white"
              >
                GitHub
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="text-white/60 hover:text-white underline underline-offset-4"
              >
                {showPreview ? "Hide Preview" : "Preview"}
              </button>
            </div>

            {showPreview && (
              <div className="border border-white/10 overflow-hidden">
                <iframe
                  src="https://ai-resume-hub-zeta.vercel.app/"
                  title="AI Resume Screener Preview"
                  className="w-full h-64 scale-[0.98] origin-top"
                  scrolling="no"
                  style={{ border: "none" }}
                />
              </div>
            )}
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              CoinDCS Trading Platform
            </h3>

            <p className="text-sm text-white/60 mb-3 leading-relaxed">
              Crypto trading system with real-time price tracking,
              market analysis, and rule-based trading signals.
            </p>

            <div className="flex gap-6 text-sm">
              <a className="underline underline-offset-4 text-white/70 hover:text-white">
                GitHub
              </a>
            </div>
          </div>

          {/* ================= PROJECT 3 ================= */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              Weather Monitoring System
            </h3>

            <p className="text-sm text-white/60 mb-3 leading-relaxed">
              Real-time weather monitoring application using external APIs,
              historical data storage, and alert-based conditions.
            </p>

            <div className="flex gap-6 text-sm">
              <a className="underline underline-offset-4 text-white/70 hover:text-white">
                GitHub
              </a>
            </div>
          </div>

          {/* ================= PROJECT 4 ================= */}
          <div>
            <h3 className="text-lg font-medium mb-2">
              Rule Engine System
            </h3>

            <p className="text-sm text-white/60 mb-3 leading-relaxed">
              Configurable rule engine to evaluate dynamic business rules
              with condition-based execution and extensible logic layers.
            </p>

            <div className="flex gap-6 text-sm">
              <a className="underline underline-offset-4 text-white/70 hover:text-white">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
