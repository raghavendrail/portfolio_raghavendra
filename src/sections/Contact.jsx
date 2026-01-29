const Contact = () => {
  const links = [
    {
      label: "Email",
      href: "mailto:raghashetty30@gmail.com",
      icon: "✉️"
    },
    {
      label: "GitHub",
      href: "https://github.com/raghavendrail",
      icon: "🔗"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raghavendra-il-799317259/",
      icon: "💼"
    },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1Eu4YB1easwzGDw_m7c2wj6cMQnvUPIK_/view",
      icon: "📄"
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-white/60 text-lg">Let's build something great together</p>
        </div>

        <div className="border border-white/10 rounded-xl p-8 md:p-12 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <p className="text-white/70 leading-relaxed mb-12 text-base md:text-lg max-w-2xl">
            Open to backend and system-focused roles. 
            If you're building real products and care about clean architecture, 
            feel free to reach out. I'm always interested in discussing engineering challenges, 
            scalability, and innovative solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
                className="group border border-white/20 rounded-lg px-4 py-4 md:px-6 md:py-5 text-center bg-white/5 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-white/40 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <span className="text-white/80 group-hover:text-white text-sm font-medium transition-colors duration-200">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/50 text-xs md:text-sm text-center">
              © 2024 Raghavendra. Built with React, Tailwind CSS, and a passion for clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
