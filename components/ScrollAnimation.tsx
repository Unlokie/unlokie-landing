'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in'
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function ScrollAnimation({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(element) // Only animate once
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold, rootMargin, isMounted])

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out'
    const visibleClass = isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : ''
    
    switch (animation) {
      case 'fade-up':
        return `${baseClass} ${isVisible ? visibleClass : 'opacity-0 translate-y-8'}`
      case 'fade-in':
        return `${baseClass} ${isVisible ? 'opacity-100' : 'opacity-0'}`
      case 'slide-left':
        return `${baseClass} ${isVisible ? visibleClass : 'opacity-0 translate-x-8'}`
      case 'slide-right':
        return `${baseClass} ${isVisible ? visibleClass : 'opacity-0 -translate-x-8'}`
      case 'scale-in':
        return `${baseClass} ${isVisible ? visibleClass : 'opacity-0 scale-95'}`
      default:
        return `${baseClass} ${isVisible ? visibleClass : 'opacity-0 translate-y-8'}`
    }
  }

  // Show content immediately if not mounted to prevent layout shift
  if (!isMounted) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

// Staggered animation container
interface StaggeredAnimationProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredAnimation({ 
  children, 
  className = '',
  staggerDelay = 100 
}: StaggeredAnimationProps) {
  const childArray = Array.isArray(children) ? children : [children]
  
  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <ScrollAnimation
          key={index}
          delay={index * staggerDelay}
          animation="fade-up"
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}
