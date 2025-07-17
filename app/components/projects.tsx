import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Building brands to drive Results",
    image: "/placeholder.svg?height=600&width=800",
    category: "Branding",
  },
  {
    id: 2,
    title: "One Day, We Met",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Design",
  },
  {
    id: 3,
    title: "AtomAI Dashboard",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI/UX",
  },
  {
    id: 4,
    title: "Minimal Portfolio",
    image: "/placeholder.svg?height=600&width=800",
    category: "Web Design",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading mb-4">Selected Projects</h2>
            <p className="text-muted-foreground max-w-lg">
              A showcase of my best work across various design disciplines.
            </p>
          </div>
          <Link href="#" className="hidden md:flex items-center gap-2 text-sm hover:text-primary/80 transition-colors">
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link href="#" key={project.id} className="project-card rounded-lg overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="overlay">
                  <ArrowUpRight className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-4 bg-secondary/50">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="#" className="inline-flex items-center gap-2 text-sm hover:text-primary/80 transition-colors">
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
