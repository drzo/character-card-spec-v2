import React from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, 
  Search, 
  Bell, 
  User, 
  Plus,
  Zap,
  Brain
} from 'lucide-react'

interface HeaderProps {
  onMenuToggle: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="glass border-b border-white/10 px-6 py-4 relative z-20">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 md:hidden"
          >
            <Menu className="w-5 h-5 text-gray-400" />
          </button>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search characters, agents, patterns..."
              className="form-input pl-10 w-64 md:w-80"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Quick Actions */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neural"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Character
          </motion.button>

          {/* System Status */}
          <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg">
            <Brain className="w-4 h-4 text-neural-400" />
            <span className="text-sm text-gray-300">Cognitive Engine</span>
            <div className="status-online"></div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-white/10 rounded-lg transition-all duration-200">
            <Bell className="w-5 h-5 text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-neural-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-2 glass px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200">
            <div className="w-8 h-8 bg-gradient-to-br from-neural-500 to-cognitive-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">AI Researcher</p>
              <p className="text-xs text-gray-400">Cognitive Architect</p>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Activity Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neural-500/0 via-neural-500/50 to-neural-500/0">
        <motion.div
          className="h-full bg-gradient-to-r from-neural-400 to-cognitive-400"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: '30%' }}
        />
      </div>
    </header>
  )
}

export default Header