import React from 'react'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mx-auto mb-4"
        >
          <Brain className="w-12 h-12 text-neural-400" />
        </motion.div>
        
        <h3 className="text-lg font-medium text-white mb-2">Processing Neural Pathways</h3>
        <p className="text-gray-400 mb-4">Initializing cognitive architecture...</p>
        
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-neural-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner