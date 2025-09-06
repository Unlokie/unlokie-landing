'use client'

import { useEffect, useState } from 'react'

interface FloatingElementsProps {
  count?: number
  className?: string
}

export function FloatingElements({ count = 3, className = '' }: FloatingElementsProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const elements = Array.from({ length: count }, (_, index) => {
    const size = Math.random() * 300 + 200 // 200-500px - much larger
    const top = Math.random() * 100 // 0-100%
    const left = Math.random() * 100 // 0-100%
    const animationDelay = Math.random() * 20 // 0-20s
    const isLarge = index === 0
    
    return (
      <div
        key={index}
        className={`
          floating-blob absolute rounded-full blur-2xl pointer-events-none
          ${isLarge ? 'bg-unlokieGreen/20' : 'bg-sageGreen/15'}
          ${isLarge ? 'animate-blob-1' : 'animate-blob-2'}
        `}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    )
  })

  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {elements}
    </div>
  )
}

// Geometric shapes for subtle background decoration
export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Large circle - more visible */}
      <div 
        className="absolute w-96 h-96 border-2 border-unlokieGreen/15 rounded-full animate-rotate-slow"
        style={{
          top: '10%',
          right: '-10%',
        }}
      />
      
      {/* Medium squares - enhanced visibility */}
      <div 
        className="absolute w-32 h-32 border-2 border-sageGreen/20 rotate-45 animate-float bg-sageGreen/5"
        style={{
          top: '60%',
          left: '5%',
        }}
      />
      
      <div 
        className="absolute w-24 h-24 bg-mintGreen/20 rotate-12 rounded-lg animate-float-delayed border border-mintGreen/30"
        style={{
          top: '30%',
          left: '80%',
        }}
      />
      
      {/* Enhanced floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-unlokieGreen/30 rounded-full animate-pulse-glow shadow-lg"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

// Grid overlay with subtle animation
export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 bg-grid-pattern animate-grid-fade opacity-20 -z-10" />
  )
}

// Gradient mesh background
export function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-20">
      <div className="absolute inset-0 bg-animated-gradient bg-[length:400%_400%] animate-gradient-shift" />
      {/* Additional gradient layers for more depth */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-unlokieGreen/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-sageGreen/12 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-to-r from-mintGreen/10 to-unlokieGreen/8 rounded-full blur-2xl animate-pulse-glow" />
    </div>
  )
}
