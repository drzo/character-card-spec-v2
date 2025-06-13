import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Layout from './components/Layout/Layout'
import LoadingSpinner from './components/UI/LoadingSpinner'

// Pages (lazy loaded for performance)
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const CharacterEditor = React.lazy(() => import('./pages/CharacterEditor'))
const CharacterLibrary = React.lazy(() => import('./pages/CharacterLibrary'))
const CognitiveArchitecture = React.lazy(() => import('./pages/CognitiveArchitecture'))
const AgentWorkspace = React.lazy(() => import('./pages/AgentWorkspace'))
const Analytics = React.lazy(() => import('./pages/Analytics'))
const Settings = React.lazy(() => import('./pages/Settings'))

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/characters" element={<CharacterLibrary />} />
                <Route path="/editor" element={<CharacterEditor />} />
                <Route path="/editor/:id" element={<CharacterEditor />} />
                <Route path="/cognitive" element={<CognitiveArchitecture />} />
                <Route path="/agents" element={<AgentWorkspace />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
          </Layout>
        </motion.div>
      </AnimatePresence>
      
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(12px)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          },
        }}
      />
    </div>
  )
}

export default App