'use client'

import { useState, useEffect } from 'react'
import { Button } from './Button'
import { useScrollProgress } from '@/hooks/useParallax'
import { useLanguage } from '@/contexts/LanguageContext'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollProgress = useScrollProgress()
  const { language, setLanguage, t } = useLanguage()

  const navigationItems = [
    { name: t.nav.product, href: '#product' },
    { name: t.nav.useCases, href: '#use-cases' },
    { name: t.nav.impact, href: '#impact' },
    { name: t.nav.traction, href: '#traction' },
    { name: t.nav.team, href: '#team' },
    { name: t.nav.contact, href: '#contact' },
  ]

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
        ? 'bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20 lg:h-24'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="/Unlokie_logo.png" 
                alt="Unlokie Logo"
                className={`transition-all duration-300 object-contain ${
                  isScrolled ? 'h-12' : 'h-16 lg:h-20'
                }`}
              />
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
                  className={`relative text-charcoal hover:text-unlokieGreen font-medium transition-all duration-200 ease-out group ${
                    isScrolled 
                      ? 'px-2 py-2 text-sm' 
                      : 'px-3 py-2 text-sm lg:text-base'
                  }`}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-unlokieGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'hr' ? 'en' : 'hr')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-unlokieGreen/20 hover:border-unlokieGreen/40 transition-all duration-200 group ${
                isScrolled ? 'text-sm' : 'text-sm lg:text-base'
              }`}
            >
              <span className={`font-semibold transition-colors ${
                language === 'hr' ? 'text-unlokieGreen' : 'text-coolGray'
              }`}>HR</span>
              <span className="text-coolGray">/</span>
              <span className={`font-semibold transition-colors ${
                language === 'en' ? 'text-unlokieGreen' : 'text-coolGray'
              }`}>EN</span>
            </button>
            <Button 
              onClick={scrollToContact}
              size={isScrolled ? "sm" : "md"}
              className={`transition-all duration-300 shadow-lg hover:shadow-xl ${
                isScrolled 
                  ? 'px-3 py-1.5 text-sm' 
                  : 'px-4 py-2 text-sm lg:px-5 lg:py-2.5'
              }`}
            >
              {t.nav.cta}
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

      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/50">
        <div 
          className="h-full bg-gradient-to-r from-unlokieGreen to-sageGreen transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
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
          <div className="pt-4 space-y-3">
            <button
              onClick={() => setLanguage(language === 'hr' ? 'en' : 'hr')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-unlokieGreen/20 hover:border-unlokieGreen/40 transition-all duration-200 text-lg font-semibold"
            >
              <span className="text-unlokieGreen">{language === 'hr' ? 'Switch to English' : 'Prebaci na Hrvatski'}</span>
              <svg className="w-5 h-5 text-unlokieGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="w-full py-4 text-lg font-semibold shadow-lg"
            >
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
