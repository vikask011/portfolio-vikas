import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:vikas95116@gmail.com"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Mail className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 break-all">vikas95116@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919986156229"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Phone className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 9986156229</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vikas-k-95o/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Linkedin className="text-blue-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600">Connect with me</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8 border-t border-gray-200">
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

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 Vikas K. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
