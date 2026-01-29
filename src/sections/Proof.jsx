const Proof = () => {
  const stats = [
    { number: "3+", label: "Production Apps Deployed", icon: "📱" },
    { number: "20+", label: "Backend APIs Built", icon: "⚙️" },
    { number: "2", label: "AI-Integrated Systems", icon: "🤖" },
    { number: "AWS", label: "Deployment Experience", icon: "☁️" }
  ]

  const techs = [
    "FastAPI",
    "Spring Boot",
    "RESTful Architectures",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS (EC2, RDS, S3)",
    "Docker & Kubernetes",
    "OpenAI Integration",
    "NLP/ML Models"
  ]

  return (
    <section id="proof" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Engineering Proof
            </span>
          </h2>
          <p className="text-white/60 text-lg">Production experience and technical expertise</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl p-4 md:p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 hover:border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-white/70 text-xs md:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="border border-white/10 rounded-xl p-8 md:p-12 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
          <h3 className="text-2xl font-bold text-white mb-8">
            Core Technologies
          </h3>

          <p className="text-white/70 leading-relaxed mb-8 text-sm md:text-base">
            Backend-focused development using FastAPI, Spring Boot, and RESTful architectures. 
            Experience with relational databases, cloud deployment on AWS, and integrating AI/NLP 
            models into production workflows.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {techs.map((tech, idx) => (
              <div
                key={idx}
                className="border border-white/20 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-center"
              >
                <span className="text-white/80 text-xs md:text-sm font-medium">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proof
