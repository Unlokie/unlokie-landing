'use client'

import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/Button'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  return (
    <>
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section id="main-content" className="relative min-h-screen overflow-hidden bg-lightGray" style={{ paddingTop: '120px' }}>
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <div className="absolute inset-0 bg-unlokie-gradient-subtle"></div>
        {/* Gradient fade to encourage scrolling */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold text-charcoal mb-6">
              Smart sports gear,
              <br />
              <span className="text-unlokieGreen">right where you play.</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-slateGray mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlokie places shared equipment in smart lockers at courts and fields—unlocked with a tap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Pilot Program
              </Button>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-unlokieGreen mb-6 tracking-wide">
              Play. Share. Repeat.
            </div>
            <div className="w-24 h-2 bg-unlokie-gradient mx-auto rounded-full mb-8"></div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center w-full">
              <button 
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex flex-col items-center animate-bounce hover:animate-none transition-all duration-300 group cursor-pointer"
                aria-label="Scroll down to learn more"
              >
              <p className="text-sm text-coolGray mb-2 group-hover:text-unlokieGreen transition-colors">Discover how it works</p>
              <svg className="w-6 h-6 text-unlokieGreen group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="pt-32 pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Overview */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Smart Lockers + Intuitive App
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              The complete solution for shared sports equipment access
            </p>
          </div>

          {/* Product Demo */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src="/hero_render_green.png" 
                    alt="Unlokie Smart Locker - Three plexiglass doors with green accents, outdoor-ready design"
                    className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                  />
                  <div className="text-base text-gray-600 mt-4">Smart Locker System</div>
                  <div className="text-sm text-gray-500">Contactless access, weather-resistant design</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contactless Unlock</h3>
                  <p className="text-lg text-gray-700">Tap your phone to access gear instantly—no keys, no hassle</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Availability</h3>
                  <p className="text-lg text-gray-700">See what's available before you head out to play</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Built to Last</h3>
                  <p className="text-lg text-gray-700">Weather-resistant with UV-stable materials for years of use</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple Operations</h3>
                  <p className="text-lg text-gray-700">Easy maintenance with remote monitoring and battery alerts</p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                How It Works
              </h3>
              <p className="text-xl text-gray-700">
                Four simple steps from discovery to play
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Find</h4>
                <p className="text-lg text-gray-600">Locate nearby lockers at schools, clubs, or parks</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Unlock</h4>
                <p className="text-lg text-gray-600">Tap your phone to open and access gear</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Play</h4>
                <p className="text-lg text-gray-600">Enjoy your game with quality shared equipment</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Return</h4>
                <p className="text-lg text-gray-600">Put gear back and help others play too</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="pt-32 pb-16 lg:pb-24 bg-mint-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Perfect for Every Community
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              From city parks to university campuses, Unlokie activates spaces where people play
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-4">🏞️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Municipal Parks</h3>
              <p className="text-lg text-gray-700 mb-4">Increase park utilization and community engagement with accessible shared equipment</p>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Higher foot traffic
                </li>
                <li className="flex items-center text-base text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community activation
                </li>
                <li className="flex items-center text-base text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced maintenance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Schools & Universities</h3>
              <p className="text-lg text-gray-700 mb-4">Provide students instant access to sports gear without the storage hassles</p>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Student engagement
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Space efficiency
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipment security
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-4">⚽</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sports Clubs</h3>
              <p className="text-gray-700 mb-4">Enhance member experience with convenient equipment access and sharing</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Member convenience
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipment optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  New revenue streams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="pt-32 pb-16 lg:pb-24 bg-mintGreen/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Built for Impact
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
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
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Building Momentum
            </h2>
            <p className="text-2xl text-gray-700">
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
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              The Team
            </h2>
            <p className="text-2xl text-gray-700">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-2xl text-gray-700">
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Unlokie</h3>
            <p className="text-gray-400">
              Smart sports equipment sharing. Play anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#traction" className="text-gray-400 hover:text-white transition-colors">Traction</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a href="mailto:info@unlokie.com" className="hover:text-white transition-colors">
                  info@unlokie.com
                </a>
              </p>
              <p className="text-gray-400">
                General inquiries and partnerships
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Unlokie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}
