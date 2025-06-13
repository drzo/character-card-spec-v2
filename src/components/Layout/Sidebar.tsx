import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Users,
  Edit3,
  Activity,
  Bot,
  BarChart3,
  Settings,
  ChevronLeft,
  Zap,
  Network
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

const navigationItems = [
  { path: '/', icon: Activity, label: 'Dashboard', color: 'text-blue-400' },
  { path: '/characters', icon: Users, label: 'Character Library', color: 'text-green-400' },
  { path: '/editor', icon: Edit3, label: 'Character Editor', color: 'text-purple-400' },
  { path: '/cognitive', icon: Brain, label: 'Cognitive Architecture', color: 'text-neural-400' },
  { path: '/agents', icon: Bot, label: 'Agent Workspace', color: 'text-cognitive-400' },
  { path: '/analytics', icon: BarChart3, label: 'Analytics', color: 'text-yellow-400' },
  { path: '/settings', icon: Settings, label: 'Settings', color: 'text-gray-400' },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ width: isOpen ? 280 : 80 }}
        animate={{ width: isOpen ? 280 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="glass border-r border-white/10 relative z-20"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-neural-500 to-cognitive-500 rounded-xl flex items-center justify-center neural-glow">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold gradient-text">CogniChar</h1>
                      <p className="text-xs text-gray-400">AI Cognition Platform</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button
                onClick={onToggle}
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-white/10 neural-glow' 
                      : 'hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? item.color : 'text-gray-400 group-hover:text-white'}`} />
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`font-medium ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 bg-neural-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Status */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="status-online"></div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1"
                  >
                    <p className="text-sm font-medium text-white">System Online</p>
                    <p className="text-xs text-gray-400">All cognitive systems active</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}

export default Sidebar