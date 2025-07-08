import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-50">
      <nav className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link 
              href="/" 
              className="text-secondary-foreground hover:text-primary transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="text-secondary-foreground hover:text-primary transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/skills" 
              className="text-secondary-foreground hover:text-primary transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-secondary-foreground hover:text-primary transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
