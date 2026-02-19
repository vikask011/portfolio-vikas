import { Star, Trophy, Award, Zap } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "3rd Place - INNOVEX-25 Project Expo",
      description: "MVJ College of Engineering",
      detail: "Selected from 150+ teams for FACESYNTH (Real-Time 3D Facial Mapping System)",
    },
    {
      icon: Star,
      title: "Special Prize - Health & Humanity",
      description: "Project Expo Award",
      detail: "Recognized among 52 teams for developing a socially impactful innovation",
    },
    {
      icon: Award,
      title: "4th Place - AI for Education Hackathon",
      description: "ThinkPlus Hackathon",
      detail: "Competed against 120+ teams with AI-powered educational solution",
    },
    {
      icon: Zap,
      title: "Top 50 - Avishkar Hackathon",
      description: "Selected for 2nd Round",
      detail: "Selected among top 50 from 500+ teams for advanced innovation challenge",
    },
  ]

  const highlights = [
    {
      title: "Award-Winning Projects & Innovations",
      items: [
        "Secured 3rd Place at INNOVEX-25 Project Expo - FACESYNTH (Real-Time 3D Facial Mapping System)",
        "Awarded Special Prize for Health & Humanity in Project Expo for socially impactful innovation",
        "Secured 4th Place in AI for Education Hackathon conducted by ThinkPlus (120+ teams)",
        "Selected for 2nd round in Avishkar Hackathon among top 50 from 500+ teams",
      ],
    },
  ]

  return (
    <section id="achievements" className="py-10 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Awards</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Recognition and accomplishments in competitions and professional work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            return (
              <div
                key={achievement.title}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{achievement.title}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mb-2">{achievement.description}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{achievement.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{highlights[0].title}</h3>
          <ul className="space-y-4">
            {highlights[0].items.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}