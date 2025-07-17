import Link from "next/link"
import { CircleIcon, Twitter, Instagram, Dribbble, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-medium mb-6 md:mb-0">
            <CircleIcon className="h-6 w-6" />
            <span>Polo</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <nav className="flex items-center gap-6">
              <Link href="#services" className="text-sm hover:text-primary/80 transition-colors">
                Services
              </Link>
              <Link href="#projects" className="text-sm hover:text-primary/80 transition-colors">
                Projects
              </Link>
              <Link href="#testimonials" className="text-sm hover:text-primary/80 transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-sm hover:text-primary/80 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Dribbble className="h-5 w-5" />
                <span className="sr-only">Dribbble</span>
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Polo Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
