import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Lottie from "lottie-react"

// ✅ Correct import (keep folder name as-is)
import DeveloperAnimation from "./assests/Developer.json"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "console.log('Hello World!');"

  /* -------------------------------
     Typing Animation
  -------------------------------- */
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-1"
    >
      {/* Background (simple & clean) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ============================
            LEFT SIDE — TEXT CONTENT
        ============================ */}
        <div className="space-y-6 text-center lg:text-left">

          {/* Typing */}
          <div className="inline-block">
            <code className="text-black font-mono text-sm">
              {text}
              <span className="inline-block w-2 h-4 bg-black ml-1 animate-blink" />
            </code>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
            Hello! I'm <span className="text-blue-600">Vikas K</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-600 max-w-xl">
            Full Stack Engineer specializing in building robust, scalable web
            applications with modern technologies. Passionate about clean code,
            solving complex problems, and delivering impactful digital solutions.
          </p>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-4 pt-2">
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

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center gap-2"
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

        {/* ============================
            RIGHT SIDE — LOTTIE
        ============================ */}
        <div className="flex justify-center lg:justify-end">
          <Lottie
            animationData={DeveloperAnimation}
            loop
            autoplay
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px]"
          />
        </div>
      </div>

      {/* Cursor Blink */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  )
}
