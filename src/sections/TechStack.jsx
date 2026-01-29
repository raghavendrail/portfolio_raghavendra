import {
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaReact
} from "react-icons/fa"

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiOpenai,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSwagger,
  SiPostman,
  SiIntellijidea
} from "react-icons/si"

const stack = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: SiPostgresql }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "REST APIs", icon: FaGitAlt },
      { name: "Hibernate / JPA", icon: FaJava }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    title: "AI / GenAI",
    items: [
      { name: "OpenAI API", icon: SiOpenai }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, RDS, S3, CloudFront)", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 }
    ]
  },
  {
    title: "Tools",
    items: [
      { name: "Swagger", icon: SiSwagger },
      { name: "Postman", icon: SiPostman },
      { name: "IntelliJ IDEA", icon: SiIntellijidea }
    ]
  }
]

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-white/60 text-lg">Tools and technologies I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stack.map((group, idx) => (
            <div
              key={idx}
              className="group border border-white/10 rounded-xl p-6 md:p-8
                         bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent
                         hover:from-blue-500/10 hover:via-purple-500/10
                         hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-sm font-bold mb-6 tracking-widest text-white/90 uppercase">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.items.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200"
                    >
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
