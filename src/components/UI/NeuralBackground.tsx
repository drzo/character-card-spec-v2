import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      connections: number[]
      opacity: number
    }> = []

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1,
        connections: [],
        opacity: Math.random() * 0.8 + 0.2
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Find connections
        node.connections = []
        nodes.forEach((other, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
            )
            if (distance < 150) {
              node.connections.push(j)
            }
          }
        })

        // Draw connections
        node.connections.forEach(connectionIndex => {
          const other = nodes[connectionIndex]
          const distance = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          )
          const opacity = (150 - distance) / 150 * 0.3

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `rgba(217, 70, 239, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        })

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        
        // Gradient fill
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        )
        gradient.addColorStop(0, `rgba(217, 70, 239, ${node.opacity})`)
        gradient.addColorStop(1, `rgba(249, 115, 22, ${node.opacity * 0.5})`)
        
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-30"
        style={{ pointerEvents: 'none' }}
      />
      
      {/* Additional gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-950/90 to-gray-900/90 pointer-events-none" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neural-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </>
  )
}

export default NeuralBackground