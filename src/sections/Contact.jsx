const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-2xl font-semibold mb-8 tracking-tight">
          Contact
        </h2>

        <p className="max-w-3xl text-white/60 mb-12 leading-relaxed">
          Open to backend and system-focused roles. 
          If you’re building real products and care about clean architecture,
          feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-8 text-sm">
          <a
            href="mailto:raghashetty30@gmail.com"
            className="underline underline-offset-4 text-white/70 hover:text-white"
          >
            Email
          </a>

          <a
            href="https://github.com/raghavendrail"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-white/70 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raghavendra-il-799317259/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-white/70 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/1Eu4YB1easwzGDw_m7c2wj6cMQnvUPIK_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-white/70 hover:text-white"
          >
            Resume
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
