import { useState } from "react"

const Work = () => {
    const [showPreview1, setShowPreview1] = useState(true)
    const [showPreview2, setShowPreview2] = useState(true)

    return (
        <section id="work" className="py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-2xl font-semibold mb-20 tracking-tight">
                    Selected Work
                </h2>
                {/* ================= PROJECT 2 ================= */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* LEFT */}
                    <div>
                        <h3 className="text-xl font-medium mb-4">
                            PredictTeams — Live Cricket Prediction Platform
                        </h3>

                        <p className="text-white/60 mb-10 leading-relaxed">
                            A live production platform for cricket match predictions with
                            SEO-optimized pages, dynamic routing, and AI-generated insights
                            for previews, fantasy analysis, and match context.
                        </p>

                        <ul className="space-y-3 text-sm text-white/60 mb-10">
                            <li>• SEO-first architecture with clean URLs & metadata</li>
                            <li>• Scalable Spring Boot APIs for matches, teams & venues</li>
                            <li>• OpenAI-driven content generation for previews & insights</li>
                            <li>• Sitemap automation enabling Google indexing & traffic growth</li>
                            <li>• Deployed on AWS with PostgreSQL backend</li>
                        </ul>

                        <div className="flex flex-wrap gap-6 text-sm items-center">
                            <a
                                href="http://predictteams.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 text-white/70 hover:text-white"
                            >
                                Live Website
                            </a>

                            <a
                                href="https://github.com/raghavendrail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 text-white/70 hover:text-white"
                            >
                                View Code
                            </a>

                            <button
                                onClick={() => setShowPreview2(!showPreview2)}
                                className="underline underline-offset-4 text-white/60 hover:text-white"
                            >
                                {showPreview2 ? "Hide Preview" : "Preview"}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full">
                        {showPreview2 ? (
                            <div className="border border-white/10 overflow-hidden rounded-sm">
                                <iframe
                                    src="http://predictteams.com/"
                                    title="PredictTeams Preview"
                                    className="w-full h-[420px] scale-[0.98] origin-top"
                                    scrolling="no"
                                    style={{ border: "none" }}
                                />
                            </div>
                        ) : (
                            <div className="h-[420px] border border-white/10 flex items-center justify-center text-white/30 text-sm">
                                System Preview
                            </div>
                        )}
                    </div>
                </div>
                {/* ================= PROJECT 1 ================= */}
                <div className="grid md:grid-cols-2 gap-16 items-start mt-32">

                    {/* LEFT */}
                    <div>
                        <h3 className="text-xl font-medium mb-4">
                            Real-Time Job Portal with AI Matching
                        </h3>

                        <p className="text-white/60 mb-10 leading-relaxed">
                            A production-grade platform that generates resumes from LinkedIn profiles,
                            evaluates ATS compatibility using AI, and matches candidates with relevant
                            job openings using structured candidate data.
                        </p>

                        <ul className="space-y-3 text-sm text-white/60 mb-10">
                            <li>• Resume generation via public profile scraping</li>
                            <li>• ATS score analysis using NLP & AI models</li>
                            <li>• Job matching engine based on candidate data</li>
                            <li>• Deployed end-to-end with real users</li>
                        </ul>

                        <div className="flex flex-wrap gap-6 text-sm items-center">
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
                                View Code
                            </a>

                            <a
                                href="#architecture"
                                className="underline underline-offset-4 text-white/70 hover:text-white"
                            >
                                View Architecture
                            </a>

                            <button
                                onClick={() => setShowPreview1(!showPreview1)}
                                className="underline underline-offset-4 text-white/60 hover:text-white"
                            >
                                {showPreview1 ? "Hide Preview" : "Preview"}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full">
                        {showPreview1 ? (
                            <div className="border border-white/10 overflow-hidden rounded-sm">
                                <iframe
                                    src="https://ai-resume-hub-zeta.vercel.app/"
                                    title="Job Portal Preview"
                                    className="w-full h-[420px] scale-[0.98] origin-top"
                                    scrolling="no"
                                    style={{ border: "none" }}
                                />
                            </div>
                        ) : (
                            <div className="h-[420px] border border-white/10 flex items-center justify-center text-white/30 text-sm">
                                System Preview
                            </div>
                        )}
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Work
