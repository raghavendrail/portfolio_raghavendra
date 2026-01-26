import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Work from "./sections/Work"
import Architecture from "./sections/Architecture"
import Proof from "./sections/Proof"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Stars from "./components/Stars"

import Lottie from "lottie-react"
import Background from "../public/Background.json"

const App = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* LOTTIE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Lottie
          animationData={Background}
          loop
          className="w-full h-full"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Work />
        <Projects />
        <Architecture />
        <Proof />
        <About />
        <Contact />
      </div>

    </div>
  )
}

export default App
