import { Button } from "@/components/ui/button"
import { TestimonialCard } from "./components/testimonial-card"
import { ArrowUpRight, Code, Smartphone } from "lucide-react"

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
                  Better Developer
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
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
                >
                  View My Projects
                </Button>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right Side - Floating Testimonials */}
            <div className="lg:col-span-2 relative h-full">
              <div className="relative space-y-6">
                <TestimonialCard
                  quote="His Flutter apps are incredibly smooth and well-designed."
                  author="Client A"
                  className="absolute top-0 right-0 animate-float"
                />

                <TestimonialCard
                  quote="Delivered our mobile app ahead of schedule with excellent quality."
                  author="Client B"
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

      {/* Portfolio Grid Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 - FlutterChat */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
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
            </div>

            {/* Project Card 2 - Kitchen Compendium */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
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
            </div>

            {/* Project Card 3 - Weather App */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
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
            </div>

            {/* Project Card 4 - Portfolio Website */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer md:col-span-2">
              <div className="aspect-[8/3] bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-3xl mb-4">Portfolio Website</h3>
                  <p className="text-white/80">Built with Next.js and React</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    <span className="bg-white/20 px-3 py-1 rounded text-sm">Next.js</span>
                    <span className="bg-white/20 px-3 py-1 rounded text-sm">React</span>
                    <span className="bg-white/20 px-3 py-1 rounded text-sm">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 5 - Bidding App */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-xl mb-4">Bidding App</h3>
                  <p className="text-white/80 text-sm mb-4">Demo auction application</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Flutter</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Dart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
