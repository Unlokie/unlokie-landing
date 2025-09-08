'use client'

import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'
import { ScrollAnimation, StaggeredAnimation } from '@/components/ScrollAnimation'
import { FloatingElements, GeometricShapes, GradientMesh } from '@/components/FloatingElements'


export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen overflow-hidden bg-hero-mesh" style={{ paddingTop: '120px' }}>
        {/* Enhanced background elements - more visible */}
        <GradientMesh />
        <FloatingElements count={6} className="opacity-60" />
        <GeometricShapes />
        
        {/* Enhanced animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-unlokieGreen/8 via-sageGreen/4 to-mintGreen/6 animate-gradient-shift bg-[length:400%_400%]"></div>
        
        {/* More visible grid pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 animate-grid-fade"></div>
        
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-unlokieGreen/10 via-transparent to-transparent"></div>
        
        {/* Main hero content container */}
        <div className="relative z-10 flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 120px)' }}>
          
          {/* Main content area */}
          <div className="flex-1 flex items-center justify-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-pill bg-unlokieGreen/10 border border-unlokieGreen/20 mb-6">
                  <span className="w-2 h-2 bg-unlokieGreen rounded-full animate-pulse-glow mr-3"></span>
                  <span className="text-sm font-medium text-unlokieGreen">Now in pilot phase</span>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <h1 className="text-hero font-bold text-charcoal mb-6 leading-tight tracking-tight">
                  Smart sports gear,{' '}
                  <span className="text-unlokieGreen relative">
                    right where you play.
                    <div className="absolute -inset-1 bg-unlokieGreen/10 blur-lg rounded-lg -z-10 animate-pulse-glow"></div>
                  </span>
                </h1>
              </div>
              
              <div className="animate-slide-up-delayed">
                <p className="text-subhead text-slateGray mb-12 max-w-2xl mx-auto leading-relaxed">
                  Unlokie places shared equipment in smart lockers at courts and fields—unlocked with a tap.
                </p>
              </div>
              
              <div className="animate-fade-in-delayed">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Request Pilot Program
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section with tagline and scroll indicator */}
          <div className="pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-scale-in">
                <div className="mb-8">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-unlokieGreen mb-6 tracking-wide animate-float relative inline-block">
                    Play. Share. Repeat.
                    <div className="absolute inset-0 bg-unlokieGreen/5 blur-2xl rounded-lg -z-10 animate-pulse-glow"></div>
                  </div>
                  <div className="w-24 h-2 bg-unlokie-gradient mx-auto rounded-pill mb-8 animate-float-delayed"></div>
                </div>
                
                {/* Enhanced scroll indicator */}
                <div className="flex justify-center w-full">
                  <button 
                    onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                    aria-label="Scroll down to learn more"
                  >
                    <p className="text-sm text-coolGray mb-3 group-hover:text-unlokieGreen transition-colors font-medium">Discover how it works</p>
                    <div className="relative">
                      <div className="absolute inset-0 bg-unlokieGreen/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <svg className="w-8 h-8 text-unlokieGreen group-hover:text-forestGreen transition-colors animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Gradient fade to encourage scrolling */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>
      </section>

      {/* Product Section */}
      <section id="product" className="pt-32 pb-16 lg:pb-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-section-glow"></div>
        <FloatingElements count={4} className="opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Product Overview */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-charcoal mb-4">
                Smart Lockers + Intuitive App
              </h2>
              <p className="text-subhead text-slateGray max-w-2xl mx-auto">
                The complete solution for shared sports equipment access
              </p>
            </div>
          </ScrollAnimation>

          {/* Product Demo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollAnimation animation="slide-right" delay={200}>
              <div className="order-2 lg:order-1">
                <div className="bg-surface-secondary rounded-xl p-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-unlokieGreen/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-center relative z-10">
                    <div className="relative">
                      <img 
                        src="/hero_render_green.png" 
                        alt="Unlokie Smart Locker - Three plexiglass doors with green accents, outdoor-ready design"
                        className="w-full max-w-md mx-auto rounded-xl shadow-hero transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute -inset-4 bg-unlokieGreen/10 blur-2xl rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>
                    <div className="text-base text-slateGray mt-6 font-medium">Smart Locker System</div>
                    <div className="text-sm text-coolGray">Contactless access, weather-resistant design</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <div className="order-1 lg:order-2">
              <StaggeredAnimation staggerDelay={150}>
                <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-unlokieGreen rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Contactless Unlock</h3>
                  <p className="text-lg text-slateGray leading-relaxed">Tap your phone to access gear instantly—no keys, no hassle</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-forestGreen rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Real-time Availability</h3>
                  <p className="text-lg text-slateGray leading-relaxed">See what's available before you head out to play</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-unlokieGreen rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Built to Last</h3>
                  <p className="text-lg text-slateGray leading-relaxed">Weather-resistant with UV-stable materials for years of use</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-forestGreen rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Simple Operations</h3>
                  <p className="text-lg text-slateGray leading-relaxed">Easy maintenance with remote monitoring and battery alerts</p>
                </div>
              </div>
                </div>
              </StaggeredAnimation>
            </div>
          </div>

          {/* How It Works */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mb-20">
              <div className="text-center mb-16">
                <h3 className="text-heading font-bold text-charcoal mb-4">
                  How It Works
                </h3>
                <p className="text-xl text-slateGray">
                  Four simple steps from discovery to play
                </p>
              </div>

              <StaggeredAnimation staggerDelay={200}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-unlokieGreen text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-unlokieGreen rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <span className="relative z-10">1</span>
                    </div>
                    <h4 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-unlokieGreen transition-colors duration-300">Find</h4>
                    <p className="text-base text-slateGray leading-relaxed">Locate nearby lockers at schools, clubs, or parks</p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-forestGreen text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-forestGreen rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <span className="relative z-10">2</span>
                    </div>
                    <h4 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-unlokieGreen transition-colors duration-300">Unlock</h4>
                    <p className="text-base text-slateGray leading-relaxed">Tap your phone to open and access gear</p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-unlokieGreen text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-unlokieGreen rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <span className="relative z-10">3</span>
                    </div>
                    <h4 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-unlokieGreen transition-colors duration-300">Play</h4>
                    <p className="text-base text-slateGray leading-relaxed">Enjoy your game with quality shared equipment</p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="w-16 h-16 bg-forestGreen text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-forestGreen rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <span className="relative z-10">4</span>
                    </div>
                    <h4 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-unlokieGreen transition-colors duration-300">Return</h4>
                    <p className="text-base text-slateGray leading-relaxed">Put gear back and help others play too</p>
                  </div>
                </div>
              </StaggeredAnimation>
            </div>
          </ScrollAnimation>

        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="pt-32 pb-16 lg:pb-24 bg-mint-gradient relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 animate-grid-fade"></div>
        <FloatingElements count={5} className="opacity-40" />
        <GeometricShapes />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-display font-bold text-charcoal mb-4">
                Perfect for Every Community
              </h2>
              <p className="text-subhead text-slateGray max-w-2xl mx-auto">
                From city parks to university campuses, Unlokie activates spaces where people play
              </p>
            </div>
          </ScrollAnimation>

          <StaggeredAnimation staggerDelay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200 ease-out hover:animate-card-hover">
              <div className="text-4xl mb-6">🏞️</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Municipal Parks</h3>
              <p className="text-lg text-slateGray mb-6 leading-relaxed">Increase park utilization and community engagement with accessible shared equipment</p>
              <ul className="space-y-3">
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Higher foot traffic
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community activation
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced maintenance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200 ease-out hover:animate-card-hover">
              <div className="text-4xl mb-6">🎓</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Schools & Universities</h3>
              <p className="text-lg text-slateGray mb-6 leading-relaxed">Provide students instant access to sports gear without the storage hassles</p>
              <ul className="space-y-3">
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Student engagement
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Space efficiency
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipment security
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200 ease-out hover:animate-card-hover">
              <div className="text-4xl mb-6">⚽</div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Sports Clubs</h3>
              <p className="text-lg text-slateGray mb-6 leading-relaxed">Enhance member experience with convenient equipment access and sharing</p>
              <ul className="space-y-3">
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Member convenience
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipment optimization
                </li>
                <li className="flex items-center text-base text-slateGray">
                  <svg className="w-5 h-5 text-unlokieGreen mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  New revenue streams
                </li>
              </ul>
            </div>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="pt-32 pb-16 lg:pb-24 bg-mintGreen/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-charcoal mb-4">
              Built for Impact
            </h2>
            <p className="text-subhead text-slateGray max-w-2xl mx-auto">
              Creating more accessible, sustainable communities through smart equipment sharing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-lg text-gray-700">Lower barriers to recreation and community participation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Activation</h3>
              <p className="text-lg text-gray-700">Transform underused spaces into vibrant activity hubs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipment Reuse</h3>
              <p className="text-lg text-gray-700">Maximize utilization and extend equipment lifecycle</p>
            </div>
          </div>

        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="pt-32 pb-16 lg:pb-24 bg-lightGray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-charcoal mb-4">
              Building Momentum
            </h2>
            <p className="text-subhead text-slateGray">
              Early validation and strategic progress
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">✓</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prototype Complete</h3>
              <p className="text-gray-700">Hardware and software integration tested</p>
            </div>

            <div className="text-center bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pilot Discussions</h3>
              <p className="text-gray-700">Active conversations with potential partners</p>
            </div>

            <div className="text-center bg-green-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">Q1</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Field Testing</h3>
              <p className="text-gray-700">Planned deployment for user validation</p>
            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="pt-32 pb-16 lg:pb-24 bg-sageGreen/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-charcoal mb-4">
              The Team
            </h2>
            <p className="text-subhead text-slateGray">
              Domain expertise meets execution focus
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/roko.png" 
                  alt="Roko Gligora - Co-founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Roko Gligora</h3>
              <p className="text-green-600 font-medium">Co-founder</p>
            </div>

            <div className="text-center bg-white rounded-xl p-6 shadow-sm">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="/ian.png" 
                  alt="Ian - Co-founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Ian Balen</h3>
              <p className="text-green-600 font-medium">Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 pb-16 lg:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display font-bold text-charcoal mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-subhead text-slateGray">
              Ready to activate your community spaces with smart equipment sharing?
            </p>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Unlokie</h3>
            <p className="text-slateGray leading-relaxed">
              Smart sports equipment sharing. Play anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-charcoal mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#product" className="text-slateGray hover:text-unlokieGreen transition-colors duration-200">Product</a></li>
              <li><a href="#use-cases" className="text-slateGray hover:text-unlokieGreen transition-colors duration-200">Use Cases</a></li>
              <li><a href="#impact" className="text-slateGray hover:text-unlokieGreen transition-colors duration-200">Impact</a></li>
              <li><a href="#team" className="text-slateGray hover:text-unlokieGreen transition-colors duration-200">Team</a></li>
              <li><a href="#contact" className="text-slateGray hover:text-unlokieGreen transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-charcoal mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="text-slateGray">
                <a href="mailto:info@unlokie.com" className="hover:text-unlokieGreen transition-colors duration-200">
                  info@unlokie.com
                </a>
              </p>
              <p className="text-coolGray text-sm">
                General inquiries and partnerships
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-coolGray text-sm">
            © 2025 Unlokie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
