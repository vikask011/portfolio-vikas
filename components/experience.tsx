import { MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "Blue Midas Consulting",
      position: "Full Stack Web Developer Intern",
      duration: "10/2025 – Present",
      location: "Remote",
      description: [
        "Led the end-to-end transformation of a legacy e-commerce platform into a production-grade system by automating authentication, checkout, payments, order lifecycle, returns/cancellations, and GST-compliant invoicing, integrating OAuth-based login, payment, shipping, and transactional messaging services, enabling zero-failure production deployments, eliminating 100% of manual order handling errors, and improving long-term system maintainability.",
        "Improved performance and scalability through load testing–driven bottleneck analysis, backend query optimization, frontend lazy loading, modern image compression, and cache tuning across edge and storage layers, achieving a ~90% performance improvement and stable behavior under peak concurrent traffic.",
        "Led cost-aware architecture decisions by evaluating advanced data-fetching models and intentionally selecting a simpler request pattern based on query behavior and caching complexity, leveraging cost-efficient hosting, object storage, CDN, and edge security services to reduce latency, simplify operations, and cut infrastructure costs by ~40% under startup constraints.",
        "Established production-grade security and compliance by implementing API rate limiting, secure secret and environment management, encrypted data flows, automated dependency audits, strict input validation, structured error handling, audit logging, data retention controls, and perimeter security protections, ensuring reliable and scalable cloud operations.",
      ],
    },
    {
      company: "ShadowFox",
      position: "Web Developer Intern",
      duration: "08/2025 – 09/2025",
      location: "Remote",
      description: [
        "Engineered a production-ready web application with scalable data workflows, secure authentication, optimized user journeys, and seamless payment processing, improving page load performance by ~60%, supporting high concurrent traffic, and enabling reliable, error-free transactions in production.",
        "Redesigned and optimized a dental clinic website to improve mobile responsiveness, performance, and SEO, achieving a 40% reduction in page load time and a 30% increase in mobile engagement.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-950 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-950 rounded-full blur-3xl opacity-30 dark:opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16 rounded-full" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl dark:hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.position}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                    <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-lg">
                    <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
                    <span className="font-medium">{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover/item:scale-125 transition-transform" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</span>
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