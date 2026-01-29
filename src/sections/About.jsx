const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="border border-white/10 rounded-xl p-8 md:p-12 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
          <p className="text-white/70 leading-relaxed text-base md:text-lg mb-8">
            Backend-focused engineer who enjoys designing systems that solve real problems. 
            I care about clean APIs, scalable architectures, and building products that 
            actually ship.
          </p>

          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            Currently exploring AI-driven workflows and system design at scale. Always 
            interested in optimizing backend systems, solving complex technical challenges, 
            and collaborating with teams who value engineering excellence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
