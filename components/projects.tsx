import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "SparkNate",
      description:
        "A curated platform where only verified causes are showcased, ensuring trust and impact in every contribution.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "MERN Stack",
      link: "https://sparknate-donation-qpsd.vercel.app/",
      github: "https://github.com/vikask011",
      image: "/donation-platform-web-application-interface.jpg",
    },
    {
      title: "Rent-My-Space",
      description:
        "A platform where users can list and rent out unused spaces with a secure, date-wise booking system.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "MERN Stack",
      link: "https://rent-my-space-541k.vercel.app/",
      github: "https://github.com/vikask011",
      image: "/property-rental-booking-platform.jpg",
    },
    {
      title: "SkillBridge",
      description:
        "A peer-to-peer skill sharing platform using a points system with Google Meet integration for live sessions.",
      tech: ["React", "Node.js", "MongoDB", "Google Meet API"],
      category: "MERN Stack",
      link: "https://skillbridge-rust.vercel.app/",
      github: "https://github.com/vikask011",
      image: "/skill-sharing-learning-platform-community.jpg",
    },
    {
      title: "Space Explorer",
      description:
        "Search space topics and get AI-powered responses with interactive 3D space animations using Three.js.",
      tech: ["React", "Three.js", "AI API", "Node.js"],
      category: "MERN Stack",
      link: "https://space-explorer-ltze.vercel.app/",
      github: "https://github.com/vikask011",
      image: "/space-explorer-3d-interactive-astronomy.jpg",
    },
    {
      /* Added new Adaptive Quiz project */
      title: "Adaptive Quiz",
      description:
        "An interactive adaptive quiz platform that dynamically adjusts difficulty based on user performance, providing personalized learning experiences.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "MERN Stack",
      link: "https://quiz-jmux.vercel.app",
      github: "https://github.com/vikask011/quiz",
      image: "/adaptive-quiz-learning-platform.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        <p className="text-gray-600 text-lg mb-12">A selection of my recent work in full-stack web development</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-gray-100 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more projects?</p>
          <a
            href="https://github.com/vikask011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
