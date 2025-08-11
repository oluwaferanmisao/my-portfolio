import { Button } from "@/components/ui/button"
import { TestimonialCard } from "./components/testimonial-card"
import { ArrowUpRight, Code, Smartphone } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Subtitle */}
              <div className="flex items-center space-x-2 text-gray-400">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">Flutter Mobile Developer</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-space-grotesk font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                  Oluwaferanmi Sao
                  <ArrowUpRight className="inline-block w-8 h-8 md:w-12 md:h-12 ml-2 text-gray-400" />
                </h1>
              </div>

              {/* Subtext */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                I'm a passionate Flutter mobile developer with experience in creating beautiful and functional
                cross-platform applications. I also have knowledge of WordPress, HTML, CSS, and React. Let's build
                something amazing together!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
            </div>

            {/* Right Side - Floating Testimonials */}
            <div className="lg:col-span-2 relative h-full">
              <div className="relative space-y-6">
                <TestimonialCard
                  quote="Passionate developer who loves to build"
                  author="Oluwaferanmi Sao"
                  className="absolute top-0 right-0 animate-float"
                />

                <TestimonialCard
                  quote="The  website is really good and works so well. Thank you so much for paying attention to detail and for actually listening to my complaints. I really appreciate the effort and care you have put into it."
                  author="Taiwo Ogunbode"
                  className="absolute top-32 left-0 animate-float-delayed"
                />

                <div className="absolute top-64 right-4 flex items-center space-x-2 text-gray-400">
                  <Code className="w-4 h-4" />
                  <span className="text-sm">More projects</span>
                </div>
              </div>
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
