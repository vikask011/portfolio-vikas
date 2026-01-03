import { Award, Download } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Developing Front-End with React",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/3QBHW6DGTDLN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      title: "Developing Back-End with Node.js and Express",
      issuer: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/3WT2Y0HK3EU4?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
  
  ]

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Certifications</h2>
          </div>
          <p className="text-gray-600 text-lg">Professional certifications and credentials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
            >
              <div className="relative h-32 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden flex items-center justify-center border-b border-gray-200">
                <Award className="text-blue-400" size={48} />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mb-3">{cert.date}</p>

                <a
                  href={cert.url}
                  className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  <Download size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
