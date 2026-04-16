import { motion } from 'framer-motion'
import { 
  HiHome, 
  HiOutlineHome,
  HiFolder, 
  HiOutlineFolder,
  HiInformationCircle, 
  HiOutlineInformationCircle,
  HiEnvelope, 
  HiOutlineEnvelope,
  HiUser,
  HiOutlineUser
} from 'react-icons/hi2'

const dockItems = [
  { 
    id: 'home', 
    label: 'Home', 
    activeIcon: HiHome,
    icon: HiOutlineHome 
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    activeIcon: HiFolder,
    icon: HiOutlineFolder 
  },
  { 
    id: 'about', 
    label: 'About', 
    activeIcon: HiInformationCircle,
    icon: HiOutlineInformationCircle 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    activeIcon: HiEnvelope,
    icon: HiOutlineEnvelope 
  },
]

const BottomDock = ({ activePage, onNavigate }) => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center px-4" id="bottom-dock">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
      <div className="dock-glass rounded-2xl px-2 sm:px-3 py-2 flex items-center gap-0 sm:gap-1">
        {dockItems.map((item) => {
          const isActive = activePage === item.id
          const IconComponent = isActive ? item.activeIcon : item.icon

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-3 sm:px-5 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
              id={`dock-${item.id}`}
            >
              <IconComponent className="w-5 h-5" />
              <span className={`text-[9px] sm:text-[10px] font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          )
        })}

        {/* Profile icon (non-navigating) */}
        <div className="flex flex-col items-center gap-1 px-3 sm:px-5 py-2 text-gray-500">
          <HiOutlineUser className="w-5 h-5" />
        </div>
      </div>

      {/* Dock indicator bar */}
      <div className="flex justify-center mt-2">
        <div className="w-32 h-1 bg-gray-600 rounded-full opacity-40" />
      </div>
      </motion.div>
    </div>
  )
}

export default BottomDock
