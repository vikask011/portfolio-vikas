import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.1) 0%, transparent 50%)`,
        }}
      />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 text-balance">
              Hello! I'm <span className="text-blue-600">Vikas K</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">Full Stack Developer</p>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Full Stack Engineer specializing in building robust, scalable web applications with modern technologies.
            Passionate about clean code, solving complex problems, and delivering impactful digital solutions.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/vikask011"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-full transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-k-95o/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-full transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vikas95116@gmail.com"
              className="p-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 rounded-full transition-all"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
