"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, CircleIcon } from "lucide-react"

const testimonials = [
  {
    quote: "Working with him was a game changer!",
    author: "pranavnb",
  },
  {
    quote: "We increased our conversions by 200%.",
    author: "vijaynb",
  },
  {
    quote: "The designs exceeded our expectations.",
    author: "sarahk",
  },
]

export default function Hero() {
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!testimonialsRef.current) return

      const cards = testimonialsRef.current.querySelectorAll(".testimonial-card")
      const rect = testimonialsRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const moveX = (e.clientX - centerX) / 30
      const moveY = (e.clientY - centerY) / 30

      cards.forEach((card, index) => {
        const factor = (index + 1) * 0.8
        ;(card as HTMLElement).style.transform =
          `perspective(1000px) rotateX(${-moveY * factor}deg) rotateY(${moveX * factor}deg)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm animate-fade-up">
              <CircleIcon className="h-4 w-4" />
              <span>UI/UX & Graphic Designer</span>
            </div>

            <h1 className="font-heading animate-fade-up animation-delay-200">
              Better <span className="text-muted-foreground">Designer</span>
              <ArrowUpRight className="inline-block ml-2 h-8 w-8" />
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl animate-fade-up animation-delay-400">
              I'm a versatile designer specializing in graphic, web, and product design to help grow your business.
              Let's build something great!
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up animation-delay-600">
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 transition-colors"
              >
                See All Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Now
              </Link>
            </div>
          </div>

          <div ref={testimonialsRef} className="md:w-2/5 relative h-[300px] md:h-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card absolute p-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-secondary w-64 shadow-lg ${
                  index === 0 ? "top-0 right-0" : index === 1 ? "top-1/2 right-1/4" : "bottom-0 right-1/3"
                }`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <p className="text-sm mb-2">"{testimonial.quote}"</p>
                <p className="text-xs text-muted-foreground text-right">-{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
