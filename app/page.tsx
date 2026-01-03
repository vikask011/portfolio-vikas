"use client"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}
