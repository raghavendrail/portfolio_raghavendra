'use client';

import { useState } from "react"

const Projects = () => {
  const [showPreview, setShowPreview] = useState(false)

  const projects = [
    {
      title: "AI Resume Screener",
      description: "Evaluates resumes against job descriptions using NLP-based scoring and AI-driven analysis.",
      links: [
        { label: "Live Demo", href: "https://ai-resume-hub-zeta.vercel.app/" },
        { label: "GitHub", href: "https://github.com/raghavendrail" }
      ],
      hasPreview: true
    },
    {
      title: "CoinDCS Trading Platform",
      description: "Crypto trading system with real-time price tracking, market analysis, and rule-based trading signals.",
      links: [
        { label: "GitHub", href: "#" }
      ]
    },
    {
      title: "Weather Monitoring System",
      description: "Real-time weather monitoring application using external APIs, historical data storage, and alert-based conditions.",
      links: [
        { label: "GitHub", href: "#" }
      ]
    },
    {
      title: "Rule Engine System",
      description: "Configurable rule engine to evaluate dynamic business rules with condition-based execution and extensible logic layers.",
      links: [
        { label: "GitHub", href: "#" }
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Other Projects
            </span>
          </h2>
          <p className="text-white/60 text-lg">Additional systems and tools I've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-white/10 rounded-xl p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all duration-300 hover:border-white/20"
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3 py-2 text-xs md:text-sm bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 font-medium"
                  >
                    {link.label} →
                  </a>
                ))}

                {project.hasPreview && (
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="px-3 py-2 text-xs md:text-sm bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 font-medium"
                  >
                    {showPreview ? "Hide" : "Preview"}
                  </button>
                )}
              </div>

              {project.hasPreview && showPreview && (
                <div className="mt-6 border border-white/20 rounded-lg overflow-hidden bg-black/50">
                  <iframe
                    src="https://ai-resume-hub-zeta.vercel.app/"
                    title={`${project.title} Preview`}
                    className="w-full h-64"
                    scrolling="no"
                    style={{ border: "none" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
