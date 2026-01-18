"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar({ activeSection, setActiveSection }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-2 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-2xl font-bold text-gray-900 cursor-pointer"
          >
            VIKAS K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop View Resume Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
