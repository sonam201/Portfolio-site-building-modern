import { Hero } from "./Sections/Hero"
import { Experience } from "./Sections/Experience"
import { Testimonials } from "./Sections/Testimonials"
import { About } from "./Sections/About"
import { Projects } from "./Sections/Projects"
import { Contact } from "./Sections/Contact"
import { Navbar } from "./layout/Navbar"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App