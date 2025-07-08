import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const projects = [
  {
    title: "FlutterChat",
    description: "A real-time messaging app built with Flutter and Firebase.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/oluwaferanmisao/FlutterChat"
  },
  {
    title: "Kitchen Compendium",
    description: "A cookbook app for displaying popular recipes.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/oluwaferanmisao/Kitchen-Compendium.git"
  },
  {
    title: "Portfolio Website - AI built site",
    description: "A responsive portfolio website built with v0 by Vercel.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    link: "https://oluwaferanmisao.com.ng"
  },
  {
    title: "Weather App",
    description: "A simple weather application using Flutter and the Open Weather API.",
    technologies: ["Dart", "Flutter", "Open Weather API"],
    link: "https://github.com/oluwaferanmisao/weather_app"
  },
  {
    title: "Bidding App",
    description: "Just a demo app to practice using dark mode, and rotatable screens in Flutter.",
    technologies: ["Flutter", "Dart"],
    link: "https://github.com/oluwaferanmisao/bidding_app"
  },
  {
    title: "Result Checker",
    description: "This app is a demo for a school project I made using Flutter.",
    technologies: ["Flutter", "Dart"],
    link: "https://github.com/oluwaferanmisao/result_checker_desktop-app-assignment"
  },
  {
    title: "Others",
    description: "This is here just to take a spot representing a few other projects that I have worked on but are privatised (by owners), so I am not able to share.",
    technologies: ["Flutter", "Dart", "Firebase", "Swagger", "Postman"],
    link: "#"
  },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 animate-fade-in-up">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card text-card-foreground animate-fade-in-up" style={{animationDelay: `${index * 200}ms`}}>
            <CardHeader>
              <CardTitle className="text-primary">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground">{tech}</Badge>
                ))}
              </div>
              <Link href={project.link} className="text-primary hover:underline">
                View Project
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
