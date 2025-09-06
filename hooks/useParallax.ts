'use client'

import { useEffect, useState, useCallback } from 'react'

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion) return
    
    const scrollY = window.scrollY
    const newOffset = scrollY * speed
    setOffset(newOffset)
  }, [speed, prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) return

    let ticking = false

    const update = () => {
      handleScroll()
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    return () => window.removeEventListener('scroll', requestTick)
  }, [handleScroll, prefersReducedMotion])

  return prefersReducedMotion ? 0 : offset
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = window.scrollY / scrollHeight
      setProgress(Math.min(scrollProgress, 1))
    }

    let ticking = false
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', requestTick)
  }, [])

  return progress
}
