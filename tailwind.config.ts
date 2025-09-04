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
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'unlokie-gradient': 'linear-gradient(180deg, #2D8659 0%, #3CB878 100%)',           // Forest to Unlokie green
        'unlokie-gradient-subtle': 'linear-gradient(180deg, rgba(45, 134, 89, 0.05) 0%, rgba(60, 184, 120, 0.05) 100%)',  // Subtle green gradient
        'sage-gradient': 'linear-gradient(180deg, #3CB878 0%, #52C882 100%)',             // Unlokie to sage green
        'mint-gradient': 'linear-gradient(180deg, #A8E6C1 0%, #F3F4F6 100%)',             // Mint to light gray
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
