import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with Polo was a game changer for our brand. The designs exceeded our expectations and helped us stand out in a crowded market.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
  },
  {
    quote:
      "We increased our conversions by 200% after implementing the new website design. The user experience is intuitive and engaging.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
  },
  {
    quote:
      "Polo has an exceptional eye for detail and a deep understanding of user behavior. The designs are not just beautiful, but functional.",
    author: "Emma Rodriguez",
    position: "Product Manager, InnovateCo",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg border border-secondary bg-secondary/10">
              <Quote className="h-8 w-8 text-muted-foreground mb-4" />
              <p className="mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
