'use client'

import { useEffect } from 'react'

// Privacy-friendly analytics placeholder
// Replace with Plausible, Umami, or similar when ready
export function Analytics() {
  useEffect(() => {
    // Example: Plausible analytics
    // if (typeof window !== 'undefined' && window.plausible) {
    //   window.plausible('pageview')
    // }
    
    // Example: Simple conversion tracking
    const trackConversion = (event: string) => {
      console.log('Conversion tracked:', event)
      // Replace with your analytics provider
    }

    // Track button clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.textContent?.includes('Request Pilot')) {
        trackConversion('pilot-request-click')
      }
      if (target.textContent?.includes('Investor Intro Deck')) {
        trackConversion('deck-request-click')
      }
    })

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null // No visual component
}

// Environment variables for production
export const ANALYTICS_CONFIG = {
  // Add your analytics provider config here
  PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
}
