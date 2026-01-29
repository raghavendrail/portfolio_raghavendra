const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-md border-b border-gradient-to-r from-blue-500/20 to-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-lg">R</span>
          </div>
          <span className="hidden sm:inline font-mono text-sm tracking-widest text-white/80">RAGHAVENDRA IL</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-sm text-white/70">
          <li>
            <a href="#work" className="hover:text-white transition-colors duration-200 relative group">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors duration-200 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#architecture" className="hover:text-white transition-colors duration-200 relative group">
              Architecture
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#proof" className="hover:text-white transition-colors duration-200 relative group">
              Proof
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1Eu4YB1easwzGDw_m7c2wj6cMQnvUPIK_/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg shadow-blue-500/20"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Indicator */}
      <div className="md:hidden h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent"></div>
    </nav>
  )
}

export default Navbar
