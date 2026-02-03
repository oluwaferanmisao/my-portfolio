import { Button } from "@/components/ui/button"
import { TestimonialCard } from "./components/testimonial-card"
import { Code } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Magnifying Glass Effect */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-24">
        <div className="container mx-auto w-full">
          {/* Main Showcase Text with Magnifying Glass Effect */}
          <div className="relative flex flex-col items-center justify-center mb-16">
            {/* Magnifying Glass Animation Container */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full glass-effect animate-glass-slide"></div>
            </div>

            {/* Main Headline - Responsive Text Breaking */}
            <h1 className="font-space-grotesk font-bold text-center relative z-10">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                Sao
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                Oluwaferanmi
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base md:text-lg mt-12 text-center max-w-2xl">
              Flutter Mobile Developer • Building beautiful cross-platform applications
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <TestimonialCard
              quote="Passionate developer who loves to build"
              author="Oluwaferanmi Sao"
            />

            <TestimonialCard
              quote="The website is really good and works so well. Thank you so much for paying attention to detail and for actually listening to my complaints."
              author="Taiwo Ogunbode"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center items-center gap-2 text-gray-400 text-sm mt-12">
            <span>Scroll to explore</span>
            <div className="w-5 h-8 border border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-4">Featured Projects</h2>
            <p className="text-gray-400">A selection of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 - FlutterChat */}
            <Link
              href="/projects"
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-2xl mb-4">FlutterChat</h3>
                  <p className="text-white/80 text-sm mb-4">Real-time messaging app</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Firebase</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </Link>

            {/* Project Card 2 - Kitchen Compendium */}
            <Link
              href="/projects"
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-xl mb-4">Kitchen Compendium</h3>
                  <p className="text-white/80 text-sm mb-4">Recipe cookbook app</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Dart</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Project Card 3 - Weather App */}
            <Link
              href="/projects"
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-xl mb-4">Weather App</h3>
                  <p className="text-white/80 text-sm mb-4">Weather forecast application</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">API</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
