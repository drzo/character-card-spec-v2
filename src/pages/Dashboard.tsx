import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Users, 
  Bot, 
  Zap, 
  TrendingUp, 
  Activity,
  Network,
  Eye,
  MessageSquare,
  Target
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Active Characters',
      value: '24',
      change: '+12%',
      icon: Users,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      title: 'Autonomous Agents',
      value: '8',
      change: '+25%',
      icon: Bot,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      title: 'Neural Connections',
      value: '1,247',
      change: '+8%',
      icon: Network,
      color: 'text-neural-400',
      bgColor: 'bg-neural-400/10'
    },
    {
      title: 'Cognitive Load',
      value: '73%',
      change: '-5%',
      icon: Brain,
      color: 'text-cognitive-400',
      bgColor: 'bg-cognitive-400/10'
    }
  ]

  const recentActivity = [
    {
      type: 'character_created',
      title: 'New character "Aria" created',
      time: '2 minutes ago',
      icon: Users,
      color: 'text-green-400'
    },
    {
      type: 'agent_learning',
      title: 'Agent "Sage" completed learning cycle',
      time: '5 minutes ago',
      icon: Brain,
      color: 'text-neural-400'
    },
    {
      type: 'conversation',
      title: 'Character "Echo" engaged in conversation',
      time: '8 minutes ago',
      icon: MessageSquare,
      color: 'text-blue-400'
    },
    {
      type: 'goal_achieved',
      title: 'Agent "Nova" achieved exploration goal',
      time: '12 minutes ago',
      icon: Target,
      color: 'text-cognitive-400'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold gradient-text mb-2">
          Cognitive Dashboard
        </h1>
        <p className="text-gray-400 text-lg">
          Monitor your AI characters and autonomous agents in real-time
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:neural-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cognitive Activity Monitor */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 glass rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Neural Activity</h2>
            <div className="flex items-center space-x-2">
              <div className="status-online"></div>
              <span className="text-sm text-gray-400">Real-time monitoring</span>
            </div>
          </div>
          
          {/* Neural Network Visualization Placeholder */}
          <div className="h-64 bg-gray-900/50 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <Network className="w-16 h-16 text-neural-400 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">Neural Network Visualization</p>
              <p className="text-sm text-gray-500 mt-2">Real-time cognitive processing display</p>
            </div>
            
            {/* Animated neural pulses */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-neural-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-xl p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{activity.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          <button className="w-full mt-4 text-center text-neural-400 text-sm hover:text-neural-300 transition-all duration-200">
            View all activity
          </button>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass rounded-xl p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Create Character', icon: Users, path: '/editor' },
            { label: 'Train Agent', icon: Bot, path: '/agents' },
            { label: 'View Analytics', icon: TrendingUp, path: '/analytics' },
            { label: 'System Settings', icon: Activity, path: '/settings' }
          ].map((action, index) => {
            const Icon = action.icon
            return (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-200 group"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {action.label}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard