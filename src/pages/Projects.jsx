import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const allProjects = [
  {
    year: '2025',
    title: 'Nexa Insights',
    tags: 'NextJS, CSS, EmailJS, TypeScript',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'TrueSip Landing',
    tags: 'TailwindCSS, NextJS',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Ready2Tech Analytics',
    tags: 'ReactJS, TailwindCSS',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Quizford',
    tags: 'Frontend Frameworks, UI Design',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Landing Page',
    tags: 'Web Development, Custom Design',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Waitlist Landing Page',
    tags: 'HTML, CSS, JavaScript',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Portfolio Website',
    tags: 'HTML, CSS, JavaScript',
    category: 'frontend',
  },
  {
    year: '2025',
    title: 'Expense Tracker',
    tags: 'HTML, CSS, JavaScript',
    category: 'frontend',
  },
]

const filters = ['All', 'Frontend']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter(
        (p) => p.category === activeFilter.toLowerCase()
      )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen pt-20 sm:pt-24 pb-28 sm:pb-32 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8 sm:mb-10"
          id="projects-title"
        >
          Selected Works
        </motion.h1>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-6 mb-10"
          id="project-filters"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-medium transition-all duration-300 cursor-pointer pb-1 ${activeFilter === filter
                ? 'text-white border-b border-white'
                : 'text-gray-500 hover:text-gray-300'
                }`}
              id={`filter-${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project List */}
        <div className="space-y-0">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative py-5 border-b border-white/[0.06] cursor-pointer
                  transition-all duration-500 rounded-xl px-4
                  ${hoveredIndex === index
                    ? 'bg-white/[0.03] glow-border border-transparent'
                    : 'hover:bg-white/[0.02]'
                  }`}
                id={`project-row-${index}`}
              >
                {/* Desktop: horizontal grid | Mobile: stacked */}
                <div className="hidden md:grid grid-cols-12 items-center">
                  {/* Year */}
                  {/* <div className="col-span-1">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-accent' : 'text-gray-500'
                    }`}>
                      {project.year}
                    </span>
                  </div> */}
                  {/* Title */}
                  <div className="col-span-5">
                    <h3 className={`font-display text-lg font-semibold transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-200'
                      }`}>
                      {project.title}
                    </h3>
                  </div>
                  {/* Tags */}
                  <div className="col-span-6 text-right">
                    <span className={`text-sm transition-colors duration-300 ${hoveredIndex === index ? 'text-accent' : 'text-gray-500'
                      }`}>
                      {project.tags}
                    </span>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden">
                  <div className="flex items-center gap-3 mb-1">
                    {/* <span className={`text-xs font-medium transition-colors duration-300 ${hoveredIndex === index ? 'text-accent' : 'text-gray-500'
                      }`}>
                      {project.year}
                    </span> */}
                    <h3 className={`font-display text-base font-semibold transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-200'
                      }`}>
                      {project.title}
                    </h3>
                  </div>
                  <span className={`text-xs transition-colors duration-300 leading-relaxed ${hoveredIndex === index ? 'text-accent' : 'text-gray-500'
                    }`}>
                    {project.tags}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
