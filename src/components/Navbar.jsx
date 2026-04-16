import { motion } from 'framer-motion'

const Navbar = ({ activePage, onNavigate }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo - SM monogram */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-0 cursor-pointer group"
          id="nav-logo"
        >
          <span className="font-display text-2xl font-bold text-white tracking-tight">
            <span className="inline-block" style={{ fontFamily: 'serif', fontStyle: 'italic', letterSpacing: '-0.02em' }}>
              S
            </span>
            <span className="inline-block" style={{ fontFamily: 'serif', letterSpacing: '-0.05em' }}>
              M
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {['about', 'projects', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`text-sm font-medium capitalize transition-colors duration-300 cursor-pointer ${
                activePage === page
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              id={`nav-${page}`}
            >
              {page === 'projects' ? 'Projects' : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
