import { Button } from "@/components/ui/button"
import { TestimonialCard } from "./components/testimonial-card"
import { ArrowUpRight, Target, Sparkles } from "lucide-react"

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
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">UI/UX & Graphic Designer</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="font-space-grotesk font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                  Better Designer
                  <ArrowUpRight className="inline-block w-8 h-8 md:w-12 md:h-12 ml-2 text-gray-400" />
                </h1>
              </div>

              {/* Subtext */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                I'm a versatile designer specializing in graphic, web, and product design to help grow your business.
                Let's build something great!
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
                >
                  See All Projects
                </Button>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
                  Contact Now
                </Button>
              </div>
            </div>

            {/* Right Side - Floating Testimonials */}
            <div className="lg:col-span-2 relative h-full">
              <div className="relative space-y-6">
                <TestimonialCard
                  quote="Working with him was a game changer."
                  author="pranavnb"
                  className="absolute top-0 right-0 animate-float"
                />

                <TestimonialCard
                  quote="We increased our conversions by 200%."
                  author="vijaynb"
                  className="absolute top-32 left-0 animate-float-delayed"
                />

                <div className="absolute top-64 right-4 flex items-center space-x-2 text-gray-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">More testimonials</span>
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
            {/* Project Card 1 */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-2xl mb-4">Building brands</h3>
                  <h3 className="font-space-grotesk font-bold text-2xl mb-4">
                    to drive <em className="text-yellow-400">Results</em>
                  </h3>
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mt-6"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-full h-32 bg-white/10 rounded-lg mb-4"></div>
                  <h4 className="font-space-grotesk font-semibold">Mobile App Design</h4>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4"></div>
                  <h4 className="font-space-grotesk font-semibold">Web Platform</h4>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer md:col-span-2">
              <div className="aspect-[8/3] bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-space-grotesk font-bold text-3xl mb-4">Brand Identity</h3>
                  <p className="text-white/80">Complete visual identity system</p>
                </div>
              </div>
            </div>

            {/* Project Card 5 */}
            <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-full h-32 bg-white/20 rounded-lg mb-4"></div>
                  <h4 className="font-space-grotesk font-semibold">Dashboard UI</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
