export default function Skills() {
  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        { name: "MERN Stack", percentage: 85 },
        { name: "React.js", percentage: 85 },
        { name: "Next.js", percentage: 75 },
        { name: "Node.js", percentage: 80 },
        { name: "JavaScript", percentage: 90 },
        { name: "HTML & CSS", percentage: 90 },
        { name: "REST API", percentage: 85 },
        { name: "MongoDB", percentage: 80 },
      ],
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Java", percentage: 75 },
        { name: "Git & GitHub", percentage: 90 },
        { name: "Responsive Design", percentage: 90 },
        { name: "Express.js", percentage: 85 },
      ],
    },
    {
      category: "Learning & Specialization",
      skills: [{ name: "DSA in Java" }, { name: "AWS Cloud" }, { name: "LeetCode" }, { name: "System Design" }],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills & Expertise</h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    {skill.percentage ? (
                      <>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </>
                    ) : (
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
