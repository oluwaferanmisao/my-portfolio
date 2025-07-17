import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Code, Palette } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using Flutter and Dart. I create beautiful, performant apps that work seamlessly on both Android and iOS.",
    features: ["Flutter Development", "Cross-platform Apps", "UI/UX Design", "App Store Deployment"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern web applications and websites using React, Next.js, and WordPress. From simple websites to complex web applications.",
    features: ["React Development", "Next.js Applications", "WordPress Sites", "Responsive Design"],
  },
  {
    icon: Code,
    title: "API Integration",
    description:
      "Seamless integration with third-party APIs and backend services. I ensure your apps communicate effectively with external services.",
    features: ["RESTful APIs", "Firebase Integration", "Database Design", "Authentication Systems"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design approach to create intuitive and engaging interfaces. I focus on creating experiences that users love.",
    features: ["User Interface Design", "User Experience Design", "Prototyping", "Design Systems"],
  },
]

export default function Services() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl mb-6">My Services</h1>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            I offer comprehensive development services to help bring your ideas to life with modern technologies and
            best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-space-grotesk font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-gray-200">What I offer:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 border-t border-white/10">
          <h2 className="font-space-grotesk font-bold text-3xl mb-6">Ready to start your project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. I'm here to help turn your ideas into
            reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
