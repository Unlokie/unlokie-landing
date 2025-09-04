'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'

const navigationItems = [
  { name: 'Product', href: '#product' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Impact', href: '#impact' },
  { name: 'Traction', href: '#traction' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-100' 
        : 'bg-white/80 sm:bg-white backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-18 lg:h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3 group">
              <div className={`transition-all duration-300 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center group-hover:from-green-600 group-hover:to-green-800 shadow-lg ${
                isScrolled ? 'w-9 h-9' : 'w-11 h-11 lg:w-12 lg:h-12'
              }`}>
                <svg className={`text-white transition-all duration-300 ${
                  isScrolled ? 'w-5 h-5' : 'w-6 h-6 lg:w-7 lg:h-7'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m6-4V9a6 6 0 10-12 0v6h12z" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" />
                </svg>
              </div>
              <span className={`font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all duration-300 group-hover:from-green-800 group-hover:to-green-600 ${
                isScrolled ? 'text-lg lg:text-xl' : 'text-xl lg:text-2xl'
              }`}>
                Unlokie
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`ml-8 flex items-center transition-all duration-300 ${
              isScrolled ? 'space-x-4' : 'space-x-6 lg:space-x-8'
            }`}>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-gray-700 hover:text-green-600 font-semibold transition-all duration-300 group ${
                    isScrolled 
                      ? 'px-2 py-2 text-sm' 
                      : 'px-3 py-2 text-sm lg:text-base'
                  }`}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToContact}
              size={isScrolled ? "sm" : "md"}
              className={`transition-all duration-300 shadow-lg hover:shadow-xl ${
                isScrolled 
                  ? 'px-3 py-1.5 text-sm' 
                  : 'px-4 py-2 text-sm lg:px-5 lg:py-2.5'
              }`}
            >
              Request Pilot
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-xl text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-all duration-300 ${
                isScrolled ? 'p-2' : 'p-3'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} transition-all duration-300 ${
                  isScrolled ? 'h-6 w-6' : 'h-7 w-7'
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ${
                  isScrolled ? 'h-6 w-6' : 'h-7 w-7'
                }`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-100">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-green-600 hover:bg-green-50 block px-4 py-3 text-lg font-semibold rounded-xl transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="w-full py-4 text-lg font-semibold shadow-lg"
            >
              Request Pilot
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
