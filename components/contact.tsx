import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:vikas95116@gmail.com"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-lg mb-4">
              <Mail className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400 break-all">vikask050905@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919986156229"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-lg mb-4">
              <Phone className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+91 9986156229</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vikas-k-95o/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-lg mb-4">
              <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="https://github.com/vikask011"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-300 rounded-full transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-k-95o/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-300 rounded-full transition-all"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:vikas95116@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-300 rounded-full transition-all"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>2026 Vikas K</p>
        </div>
      </div>
    </section>
  )
}