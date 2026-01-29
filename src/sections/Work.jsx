'use client';

import { useState } from "react"

const Work = () => {
  const [showPreview1, setShowPreview1] = useState(true)
  const [showPreview2, setShowPreview2] = useState(true)

  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-white/60 text-lg">Production systems built with performance and scale in mind</p>
        </div>

        <div className="space-y-20">
          {/* ================= PROJECT 1 ================= */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  PredictTeams
                </h3>
                <p className="text-white/60 text-sm">Live Cricket Prediction Platform</p>
              </div>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                A live production platform for cricket match predictions with SEO-optimized pages, 
                dynamic routing, and AI-generated insights for previews, fantasy analysis, and match context.
              </p>

              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>SEO-first architecture with clean URLs & metadata</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Scalable Spring Boot APIs for matches, teams & venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>OpenAI-driven content generation for previews & insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Sitemap automation enabling Google indexing & traffic growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Deployed on AWS with PostgreSQL backend</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="http://predictteams.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white/90 rounded-lg hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-200 text-sm font-medium"
                >
                  Live Website →
                </a>
                <a
                  href="https://github.com/raghavendrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  View Code
                </a>
                <a
                  href="#architecturepredict"
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  Architecture
                </a>    
                <button
                  onClick={() => setShowPreview2(!showPreview2)}
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  {showPreview2 ? "Hide Preview" : "Preview"}
                </button>
              </div>
            </div>

            <div className="w-full">
              {showPreview2 ? (
                <div className="border border-white/20 rounded-xl overflow-hidden bg-black/50 shadow-2xl shadow-blue-500/10">
                  <iframe
                    src="http://predictteams.com/"
                    title="PredictTeams Preview"
                    className="w-full h-[400px] md:h-[500px]"
                    scrolling="no"
                    style={{ border: "none" }}
                  />
                </div>
              ) : (
                <div className="h-[400px] md:h-[500px] border border-white/20 rounded-xl flex items-center justify-center text-white/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Click preview to see live demo
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ================= PROJECT 2 ================= */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  AI Resume Portal
                </h3>
                <p className="text-white/60 text-sm">Real-Time Job Matching with AI</p>
              </div>

              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                A production-grade platform that generates resumes from LinkedIn profiles, evaluates ATS 
                compatibility using AI, and matches candidates with relevant job openings using structured candidate data.
              </p>

              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Resume generation via public profile scraping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>ATS score analysis using NLP & AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span>Job matching engine based on candidate data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Deployed end-to-end with real users</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://ai-resume-hub-zeta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 text-white/90 rounded-lg hover:from-blue-500/40 hover:to-purple-500/40 transition-all duration-200 text-sm font-medium"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/raghavendrail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  View Code
                </a>
                <a
                  href="#architecture"
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  Architecture
                </a>
                <button
                  onClick={() => setShowPreview1(!showPreview1)}
                  className="px-4 py-2 bg-white/5 border border-white/20 text-white/80 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm font-medium"
                >
                  {showPreview1 ? "Hide Preview" : "Preview"}
                </button>
              </div>
            </div>

            <div className="w-full">
              {showPreview1 ? (
                <div className="border border-white/20 rounded-xl overflow-hidden bg-black/50 shadow-2xl shadow-blue-500/10">
                  <iframe
                    src="https://ai-resume-hub-zeta.vercel.app/"
                    title="Job Portal Preview"
                    className="w-full h-[400px] md:h-[500px]"
                    scrolling="no"
                    style={{ border: "none" }}
                  />
                </div>
              ) : (
                <div className="h-[400px] md:h-[500px] border border-white/20 rounded-xl flex items-center justify-center text-white/30 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Click preview to see live demo
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
