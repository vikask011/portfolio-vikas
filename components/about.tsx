export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('/images/pattern.png')`,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">About Me</h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Profile</h3>
              <p className="text-gray-600">Full Stack Web Developer</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Bachelor of Engineering (CSE)</p>
              <p className="text-sm text-gray-500">MVJ College of Engineering</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
              <p className="text-gray-600">English, Hindi, Kannada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
