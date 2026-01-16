export default function About() {
  return (
    <section id="about" className="py-10 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/images/pattern.png')`,
          backgroundSize: "400px 400px",
        }}
      />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16 rounded-full" />

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-1 first-letter:float-left">
              Full Stack Engineer with a strong foundation in designing and deploying production-grade web applications.
              Proficient in the MERN stack (MongoDB, Express, React, Node.js) with expertise in modern frontend
              technologies including Tailwind CSS, TypeScript, and responsive design patterns.
            </p>

            <p>
              Currently gaining hands-on experience as a Full Stack Web Developer Intern at Blue Midas Consulting, where I
              contribute to full-stack e-commerce solutions with advanced features including SSO authentication,
              multilingual support, and secure payment integration. Passionate about solving real-world problems through
              clean, scalable code and collaborating with teams to deliver exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 pt-10 border-t border-gray-200">
              <div className="group hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform" />
                  Profile
                </h3>
                <p className="text-gray-600">Full Stack Web Developer</p>
              </div>
              <div className="group hover:bg-blue-50 p-6 rounded-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-600">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform" />
                  Location
                </h3>
                <p className="text-gray-600">Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}