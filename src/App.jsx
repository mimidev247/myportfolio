import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import BottomDock from './components/BottomDock'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home key="home" onNavigate={setActivePage} />
      case 'projects':
        return <Projects key="projects" />
      case 'about':
        return <About key="about" />
      case 'contact':
        return <Contact key="contact" />
      default:
        return <Home key="home" onNavigate={setActivePage} />
    }
  }

  return (
    <div className="min-h-screen bg-[#141421] relative">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-60" />
      
      {/* Top Navbar */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Page Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Bottom Dock Navigation */}
      <BottomDock activePage={activePage} onNavigate={setActivePage} />
    </div>
  )
}

export default App
