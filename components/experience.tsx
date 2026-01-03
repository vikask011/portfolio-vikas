import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Blue Midas Consulting",
      position: "Full Stack Web Developer Intern",
      duration: "10/2025 – Present",
      location: "Remote",
      description: [
        "Developed full-stack e-commerce enhancements (MERN) including SSO authentication, email-OTP login, multilingual UI, advanced cart/checkout logic, and Razorpay payment integration.",
        "Implemented major security, compliance, and performance upgrades such as encryption, HTTPS/TLS, Cloudflare WAF rules, rate limiting, secure key handling, NPM audits, environment variable hardening, and backend optimization.",
        "Built admin dashboards and customer workflows including product management, order tracking, GST-compliant invoicing, automated backups, analytics integration, and business reporting tools.",
      ],
    },
    {
      company: "ShadowFox",
      position: "Web Developer Intern",
      duration: "08/2025 – 09/2025",
      location: "Remote",
      description: [
        "Developed a MERN stack e-commerce platform with responsive UI, listings, bookings, authentication, and payment integration.",
        "Built and optimized a dental clinic website, improving performance, mobile responsiveness, navigation, and SEO for better online visibility.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-15 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span className="font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
