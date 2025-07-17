import Hero from "./components/hero"
import Projects from "./components/projects"
import Services from "./components/services"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
