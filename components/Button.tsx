'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseClasses = `
      inline-flex items-center justify-center font-semibold rounded-pill 
      transition-all duration-300 ease-out transform
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
      disabled:opacity-50 disabled:cursor-not-allowed
      relative overflow-hidden group
      active:scale-95
    `
    
    const variantClasses = {
      primary: `
        bg-unlokieGreen text-white hover:bg-forestGreen 
        shadow-button hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5
        focus:ring-unlokieGreen
        before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-transparent before:via-white/20 before:to-transparent
        before:-translate-x-full hover:before:translate-x-full 
        before:transition-transform before:duration-700 before:ease-out
      `,
      secondary: `
        bg-white text-unlokieGreen border border-gray-300 
        hover:bg-unlokieGreen hover:text-white hover:border-unlokieGreen
        hover:shadow-lg hover:scale-[1.02] hover:-translate-y-0.5
        focus:ring-unlokieGreen
      `
    }
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm h-10',
      md: 'px-6 py-3 text-base h-12', 
      lg: 'px-8 py-4 text-lg h-14'
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
