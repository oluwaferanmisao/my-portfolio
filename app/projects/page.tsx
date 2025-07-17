import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "FlutterChat",
    description:
      "A real-time messaging app built with Flutter and Firebase. Features include user authentication, real-time messaging, and a clean, intuitive interface.",
    technologies: ["Flutter", "Dart", "Firebase"],
    githubLink: "https://github.com/oluwaferanmisao/FlutterChat",
    liveLink: "#",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    title: "Kitchen Compendium",
    description:
      "A cookbook app for displaying popular recipes. Created the mobile application from scratch with custom UI design and user experience features.",
    technologies: ["Flutter", "Dart", "Firebase"],
    githubLink: "https://github.com/oluwaferanmisao/Kitchen-Compendium.git",
    liveLink: "#",
    gradient: "from-green-600 to-teal-600",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with v0 by Vercel. Features modern design, dark theme, and smooth animations.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "https://oluwaferanmisao.com.ng",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application using Flutter and the Open Weather API. Displays current weather conditions and forecasts.",
    technologies: ["Dart", "Flutter", "Open Weather API"],
    githubLink: "https://github.com/oluwaferanmisao/weather_app",
    liveLink: "#",
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Bidding App",
    description:
      "Just a demo app to practice using dark mode, and rotatable screens in Flutter. Features responsive design and theme switching.",
    technologies: ["Flutter", "Dart"],
    githubLink: "https://github.com/oluwaferanmisao/bidding_app",
    liveLink: "#",
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    title: "Result Checker",
    description:
      "This app is a demo for a school project I made using Flutter. Desktop application for checking and managing student results.",
    technologies: ["Flutter", "Dart"],
    githubLink: "https://github.com/oluwaferanmisao/result_checker_desktop-app-assignment",
    liveLink: "#",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple choice questions. Managed quiz questions in code and ensured they looked well on the UI with theming and styles.",
    technologies: ["Flutter", "Dart"],
    githubLink: "https://github.com/oluwaferanmisao/quiz-app",
    liveLink: "#",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    title: "Private Projects",
    description:
      "This represents several other projects that I have worked on but are privatised by owners, so I am not able to share publicly. These include commercial mobile applications with advanced features.",
    technologies: ["Flutter", "Dart", "Firebase", "Swagger", "Postman"],
    githubLink: "#",
    liveLink: "#",
    gradient: "from-gray-600 to-gray-800",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">My Projects</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            A collection of mobile applications and web projects I've built using Flutter, React, and other modern
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Project Visual */}
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-center p-6">
                  <h3 className="font-space-grotesk font-bold text-xl md:text-2xl mb-4 text-white">{project.title}</h3>
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto"></div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-space-grotesk font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {project.githubLink !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
                    >
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveLink !== "#" && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-300"
                    >
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 border-t border-white/10">
          <h2 className="font-space-grotesk font-bold text-3xl mb-6">Interested in working together?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's create something amazing
            together!
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
