const Architecture = () => {
    return (
        <section id="architecture" className="py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Content goes here */}
                <h2 className="text-2xl font-semibold mb-16">
                    System Architecture
                </h2>
                <p className="max-w-3xl text-white/70 mb-16 leading-relaxed">


                    This section outlines the high-level system design, request flow,
                    and key engineering decisions behind the Real-Time Job Portal.
                    The goal was to build a scalable, modular backend that integrates
                    AI-driven analysis with real-world data sources.
                </p>
                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT: Architecture Diagram Placeholder */}
                    <div className="border border-white/10 h-80 flex items-center justify-center text-white/30">
                        Architecture Diagram
                    </div>

                    {/* RIGHT: Explanation */}
                    <div className="space-y-6 text-white/70 text-sm">
                        <p className="max-w-3xl text-white/70 mb-16 leading-relaxed">

                            The system is built around a backend-first architecture where
                            the API layer orchestrates data ingestion, AI processing, and
                            persistence.
                        </p>

                        <p className="max-w-3xl text-white/70 mb-16 leading-relaxed">

                            User requests are handled via REST APIs, which trigger background
                            workflows for scraping, resume generation, and ATS evaluation.
                        </p>

                        <p className="max-w-3xl text-white/70 mb-16 leading-relaxed">

                            AI components are isolated from the core business logic to ensure
                            modularity and easier iteration on models without impacting
                            system stability.
                        </p>
                    </div>

                </div>
                <div className="display-flex ">
                <div className="mt-20 max-w-4xl">
                    <h3 className="text-lg font-medium mb-6">
                        Request Flow
                    </h3>

                    <ul className="space-y-3 text-sm text-white/70">
                        <li>1. User submits LinkedIn profile URL</li>
                        <li>2. Backend validates and queues scraping task</li>
                        <li>3. Profile data is parsed and structured</li>
                        <li>4. Resume is generated and stored</li>
                        <li>5. ATS score is calculated using AI models</li>
                        <li>6. Job matching engine returns relevant roles</li>
                    </ul>
                </div>
                <div className="mt-20 max-w-4xl">
                    <h3 className="text-lg font-medium mb-6">
                        Key Design Decisions
                    </h3>

                    <ul className="space-y-3 text-sm text-white/70">
                        <li>• Backend-first approach to support multiple clients</li>
                        <li>• Separation of AI processing from core API logic</li>
                        <li>• Asynchronous workflows for scraping and AI tasks</li>
                        <li>• Data normalization before persistence</li>
                    </ul>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Architecture
