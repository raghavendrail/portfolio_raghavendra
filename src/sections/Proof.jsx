const Proof = () => {
    return (
        <section id="proof" className="py-32 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Content goes here */}
                <h2 className="text-2xl font-semibold mb-16">
                    Engineering Proof
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

                    <div>
                        <p className="text-3xl font-medium">3+</p>
                        <p className="text-sm text-white/60 mt-2">
                            Production Apps Deployed
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-medium">20+</p>
                        <p className="text-sm text-white/60 mt-2">
                            Backend APIs Built
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-medium">2</p>
                        <p className="text-sm text-white/60 mt-2">
                            AI-Integrated Systems
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-medium">AWS</p>
                        <p className="text-sm text-white/60 mt-2">
                            Deployment Experience
                        </p>
                    </div>

                </div>
                <div className="mt-24 max-w-4xl">
                    <h3 className="text-lg font-medium mb-6">
                        Core Technologies
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed">
                        Backend-focused development using FastAPI, Spring Boot, and RESTful
                        architectures. Experience with relational databases, cloud deployment
                        on AWS, and integrating AI/NLP models into production workflows.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Proof
