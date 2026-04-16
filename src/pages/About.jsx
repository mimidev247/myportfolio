import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJsSquare, 
  FaSass, 
  FaFigma 
} from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'
import profileImg from '/Samuel Miracle.jpg'

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'UI Design', icon: MdDesignServices },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'CSS/SCSS', icon: FaSass },
  { name: 'Figma', icon: FaFigma },
]

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen pt-20 sm:pt-24 pb-28 sm:pb-32 px-4 sm:px-6"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[70vh]">
          {/* Left - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-start justify-center lg:justify-start"
            id="about-image"
          >
            <div className="relative w-full max-w-md lg:max-w-none lg:w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl lg:rounded-none">
              <img
                src={profileImg}
                alt="Samuel Miracle"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141421] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col justify-center lg:pl-12 pt-10 lg:pt-0"
            id="about-content"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-10 tracking-tight">
              About Me
            </h1>

            {/* Mission */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-white mb-3">Mission</h2>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Crafting digital experiences that blend technical precision
                with creative elegance. My goal is to build intuitive, high-performance
                websites that drive results.
              </p>
            </div>

            {/* About text */}
            <div className="mb-10">
              <p className="text-gray-400 leading-relaxed text-[15px] mb-3">
                I'm a passionate developer who loves practicing and creating websites that people can
                conveniently use. I believe in the power of simple, elegant solutions to complex problems.
              </p>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                When I'm not coding, you can find me watching anime, reading manga or manhwa,
                or checking out other skills online. Currently based in Lagos, Nigeria.
              </p>
            </div>

            {/* Technical Arsenal */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-5">Technical Arsenal</h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-5" id="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center
                      group-hover:border-accent/30 group-hover:bg-accent/[0.05] transition-all duration-400">
                      <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
