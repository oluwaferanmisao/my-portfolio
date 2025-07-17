"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CircleIcon } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-background/90 backdrop-blur-md" : "py-6"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-medium">
          <CircleIcon className="h-6 w-6" />
          <span>Polo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
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

        <Link
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-sm"
        >
          <span className="sr-only">Get for Free</span>
          <span>Get for Free</span>
        </Link>

        <button className="md:hidden text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
