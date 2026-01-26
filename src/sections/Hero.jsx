const Hero = () => {
    return (
        <section id="hero" className="min-h-[90vh] flex items-center">
            <div className="max-w-6xl mx-auto px-6">

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight">

                    I build production-ready backend systems<br />
                    that turn real-world data into intelligent products.
                </h1>

                {/* Proof bullets */}
                <div className="mt-8 space-y-2 text-white/70">
                    <p>• Deployed real-world applications used end-to-end</p>
                    <p>• Backend-first engineer focused on APIs & systems</p>
                    <p>• AI-integrated products, not demos or toy apps</p>
                </div>

                {/* CTA */}
                <div className="mt-10">
                    <button
                        onClick={() =>
                            document.getElementById("work").scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-sm border border-white/20 px-6 py-3 hover:border-white"
                    >
                        View My Work
                    </button>

                </div>

            </div>
        </section>
    )
}

export default Hero
