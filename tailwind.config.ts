import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Unlokie Green Palette
        unlokieGreen: '#3CB878',    // Primary brand green
        forestGreen: '#2D8659',     // Dark green for depth
        sageGreen: '#52C882',       // Medium green for accents  
        mintGreen: '#A8E6C1',       // Light green for backgrounds
        
        // Neutral Grays
        charcoal: '#1F2937',        // Dark text
        slateGray: '#4B5563',       // Body text
        coolGray: '#9CA3AF',        // Subtle text
        lightGray: '#F3F4F6',       // Backgrounds
        white: '#FFFFFF',           // Clean contrast
        
        // Accent (minimal use)
        warningOrange: '#F59E0B',   // Alerts/CTAs
        successGreen: '#10B981',    // Success states
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Clamp responsive typography for bold Bolt-style headings
        'hero': 'clamp(2.625rem, 8vw, 4.5rem)', // 42-72px
        'display': 'clamp(2rem, 6vw, 3.5rem)',
        'heading': 'clamp(1.5rem, 4vw, 2.5rem)',
        'subhead': 'clamp(1.125rem, 3vw, 1.25rem)', // 18-20px
      },
      
      // Bolt radius scale
      borderRadius: {
        'sm': '8px',
        'md': '12px', 
        'lg': '16px',
        'xl': '24px',
        'pill': '9999px',
      },
      
      // Generous spacing scale tuned for whitespace
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '30': '7.5rem', // 120px
      },
      
      backgroundImage: {
        // Original gradients
        'unlokie-gradient': 'linear-gradient(180deg, #2D8659 0%, #3CB878 100%)',
        'unlokie-gradient-subtle': 'linear-gradient(180deg, rgba(45, 134, 89, 0.05) 0%, rgba(60, 184, 120, 0.05) 100%)',
        'sage-gradient': 'linear-gradient(180deg, #3CB878 0%, #52C882 100%)',
        'mint-gradient': 'linear-gradient(180deg, #A8E6C1 0%, #F3F4F6 100%)',
        
        // Sophisticated new backgrounds
        'hero-mesh': 'radial-gradient(circle at 25% 25%, rgba(60, 184, 120, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(45, 134, 89, 0.08) 0%, transparent 50%), linear-gradient(135deg, rgba(247, 248, 250, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
        'section-glow': 'radial-gradient(ellipse at center, rgba(60, 184, 120, 0.03) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 248, 250, 0.8) 100%)',
        'animated-gradient': 'linear-gradient(-45deg, rgba(60, 184, 120, 0.1), rgba(82, 200, 130, 0.08), rgba(168, 230, 193, 0.06), rgba(247, 248, 250, 0.1))',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(60, 184, 120, 0.08)' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-40'/%3E%3Cpath d='m40 40h-40l40-40'/%3E%3C/g%3E%3C/svg%3E")`,
        'dot-pattern': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgba(60, 184, 120, 0.08)' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      
      // Sophisticated animations with staggered timing and smooth easing
      animation: {
        // Entrance animations
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-delayed': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up-delayed': 'slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both',
        'slide-in-left': 'slideInLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Interactive animations
        'card-hover': 'cardHover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'button-press': 'buttonPress 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Ambient animations
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        
        // Background elements
        'blob-1': 'blob1 20s ease-in-out infinite',
        'blob-2': 'blob2 25s ease-in-out infinite',
        'grid-fade': 'gridFade 3s ease-in-out infinite',
      },
      
      keyframes: {
        // Entrance animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        
        // Interactive animations
        cardHover: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-8px) scale(1.02)' },
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Ambient animations
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        
        // Background blob animations
        blob1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-30px, 50px) scale(0.8)' },
          '66%': { transform: 'translate(20px, -20px) scale(1.2)' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
      },
      
      // Drop shadows matching Bolt style
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'button': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'hero': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
export default config
