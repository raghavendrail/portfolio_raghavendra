import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Work from "./sections/Work"
import Architecture from "./sections/Architecture"
import Proof from "./sections/Proof"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Stars from "./components/Stars"
import TechStack from "./sections/TechStack"
import PredictTeamsArchitecture from "./sections/PredictTeamsArchitecture"
import Lottie from "lottie-react"
import Background from "../public/Background.json"

const App = () => {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* LOTTIE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Lottie animationData={Background} loop className="w-full h-full" />
      </div>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 z-[1] bg-black/50 backdrop-blur-[0.5px]
" />



      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Work />
        <Projects />
        <PredictTeamsArchitecture />
        <Architecture />
        <Proof />
        <About />
        <Contact />
      </div>

    </div>
  )
}

export default App
