import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const featuredProjects = [
  {
    title: 'Nexa Insights',
    category: 'Web Development',
    description: 'Corporate homepage with expressive headings, layered imagery and interactive elements.',
  },
  {
    title: 'TrueSip Landing',
    category: 'Frontend Engineering',
    description: 'A brand-focused coming-soon / landing design with strong typography and dark themed visuals.',
  },
  {
    title: 'Ready2Tech Analytics',
    category: 'Frontend Development',
    description: 'Learning platform hero and features layout focused on conversion and clarity.',
  },
]

const Home = ({ onNavigate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen pt-20 sm:pt-24 pb-28 sm:pb-32 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-24" id="hero-section">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl"
          >
            Crafting Digital Experiences.{' '}
            <br className="hidden sm:block" />
            Frontend Developer.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e2a1e] border border-[#2a3f2a] text-sm text-accent font-medium" id="availability-badge">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Work
            </span>
          </motion.div>
        </section>

        {/* Featured Projects Cards */}
        <section id="featured-projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onClick={() => onNavigate('projects')}
                className="group relative border border-white/[0.08] rounded-2xl p-5 sm:p-6 pb-5 cursor-pointer
                  bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15]
                  transition-all duration-500 flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
                id={`featured-project-${index}`}
              >
                {/* Top content */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-white leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {project.category}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="flex items-center justify-between mt-8">
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    View Case Study
                  </span>
                  <HiArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Home
