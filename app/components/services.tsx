import { Code, Palette, Layers } from "lucide-react"

const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences for web and mobile applications.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Design",
    description: "Designing beautiful, responsive websites that convert visitors into customers.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Graphic Design",
    description: "Developing visual assets that communicate your brand's message effectively.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">My Services</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I offer a range of design services to help your business stand out and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
              <div className="mb-4 p-3 rounded-full bg-secondary/30 w-fit">{service.icon}</div>
              <h3 className="text-xl font-medium mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
