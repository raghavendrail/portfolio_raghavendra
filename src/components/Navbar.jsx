const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-black border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Brand */}
                <span className="font-mono text-lg tracking-wider">
                    R
                </span>

                {/* Navigation */}
                <ul className="flex gap-8 text-[13px] text-white/60">

                    <li>
                        <a href="#work" className="hover:text-white">Work</a>
                    </li>
                    
                    <li>
                        <a href="#projects" className="hover:text-white">Projects</a>
                    </li>
                    <li>
                        <a href="#architecture" className="hover:text-white">Architecture</a>
                    </li>
                    <li>
                        <a href="#proof" className="hover:text-white">Proof</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-white">Contact</a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1Eu4YB1easwzGDw_m7c2wj6cMQnvUPIK_/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            Resume
                        </a>
                    </li>
                </ul>


            </div>
        </nav>
    )
}

export default Navbar
