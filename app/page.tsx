import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center relative">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">Welcome to Oluwaferanmi's Portfolio</h1>
      <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Flutter Developer | Mobile App Specialist</p>
      <div className="space-x-4">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/projects">View My Work</Link>
        </Button>
        <Button asChild className="border-primary text-primary-foreground hover:bg-primary hover:text-primary/90">
          <Link href="/about">About Me</Link>
        </Button>
      </div>
    </div>
  )
}
