import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
          Flutter Developer
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in-up animation-delay-200 text-muted-foreground font-light">
          Building beautiful mobile experiences
        </p>
        <p className="text-lg mb-8 animate-fade-in-up animation-delay-400 text-muted-foreground max-w-2xl mx-auto">
          I'm Oluwaferanmi, a passionate Flutter developer specializing in cross-platform mobile applications with
          expertise in modern web technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground font-medium bg-transparent"
          >
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
