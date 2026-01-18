import { ExternalLink, Github } from "lucide-react";

// Importing images from your local folder
import donationImg from "./assests/donation.png";
import skillbridgeImg from "./assests/skillbridge.png";
import quizImg from "./assests/quiz.png";
import rentImg from "./assests/rent.png";
import spaceImg from "./assests/space.png";
import aiinterviewImg from "./assests/aiinterview.png";

export default function Projects() {
  const getImgSrc = (imgImport) => {
    if (typeof imgImport === "string") return imgImport;
    return imgImport?.src || imgImport?.default || "";
  };

  const projects = [
    {
      title: "AI Interview Simulator",
      description:
        "An intelligent platform that conducts mock technical interviews using AI. It provides real-time feedback and performance analysis to help candidates sharpen their skills.",
      tech: ["Next.js", "Gemini API", "Tailwind", "Clerk"],
      category: "Artificial Intelligence",
      link: "https://aiinterviewsimulator-fmm9.vercel.app/",
      github: "https://github.com/vikask011",
      image: getImgSrc(aiinterviewImg),
    },
    {
      title: "Rent-My-Space",
      description:
        "A marketplace for unused spaces allowing users to list properties for short-term rentals with an integrated secure booking and calendar system.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      category: "Booking System",
      link: "https://rent-my-space-541k.vercel.app/",
      github: "https://github.com/vikask011",
      image: getImgSrc(rentImg),
    },
    {
      title: "Adaptive Quiz",
      description:
        "A smart testing platform that utilizes a dynamic difficulty algorithm. The quiz adjusts its complexity in real-time based on the user's accuracy.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "MERN Stack",
      link: "https://quiz-jmux.vercel.app",
      github: "https://github.com/vikask011/quiz",
      image: getImgSrc(quizImg),
    },
    {
      title: "SparkNate",
      description:
        "A curated crowdfunding platform focused on transparency. It ensures every contribution reaches verified causes through a robust verification system.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      link: "https://sparknate-donation-qpsd.vercel.app/",
      github: "https://github.com/vikask011",
      image: getImgSrc(donationImg),
    },
    {
      title: "Space Explorer",
      description:
        "An interactive 3D astronomy application powered by Three.js. Users can explore celestial bodies and get AI-generated insights about space topics.",
      tech: ["React", "Three.js", "AI API", "Node.js"],
      category: "AI & 3D",
      link: "https://space-explorer-ltze.vercel.app/",
      github: "https://github.com/vikask011",
      image: getImgSrc(spaceImg),
    },
    {
      title: "SkillBridge",
      description:
        "A P2P skill-sharing ecosystem using a gamified points system. Features Google Meet integration for seamless live learning sessions between users.",
      tech: ["React", "Node.js", "MongoDB", "Google API"],
      category: "EdTech",
      link: "https://skillbridge-rust.vercel.app/",
      github: "https://github.com/vikask011",
      image: getImgSrc(skillbridgeImg),
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            A selection of my recent work building scalable web applications and interactive AI experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container - Using aspect-video to fill box without zoom */}
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-fill" 
                />
              </div>

              {/* Tag Section - Inside the card box, outside the image */}
              <div className="px-6 pt-5">
                <span className="inline-block bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20">
                  {project.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-bold text-sm transition-colors"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-blue-500/5 rounded-3xl p-12 border border-blue-500/10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Want to discuss a project?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">I'm currently looking for new opportunities and collaborations.</p>
          <a
            href="https://github.com/vikask011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-10 py-4 rounded-xl hover:scale-105 transition-all font-bold shadow-xl"
          >
            <Github size={20} /> View All Work
          </a>
        </div>
      </div>
    </section>
  );
}