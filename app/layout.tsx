import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unlokie - Smart Sports Gear, Right Where You Play',
  description: 'Unlokie places shared equipment in smart lockers at courts and fields—unlocked with a tap. Play. Share. Repeat.',
  keywords: 'smart lockers, sports equipment, sharing economy, outdoor recreation, community activation',
  authors: [{ name: 'Unlokie Team' }],
  creator: 'Unlokie',
  publisher: 'Unlokie',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unlokie.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Unlokie - Smart Sports Gear, Right Where You Play',
    description: 'Unlock shared sports gear. Play. Share. Repeat.',
    url: 'https://unlokie.com',
    siteName: 'Unlokie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Unlokie - Smart Sports Lockers',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlokie - Smart Sports Gear, Right Where You Play',
    description: 'Unlock shared sports gear. Play. Share. Repeat.',
    images: ['/og-image.jpg'],
    creator: '@unlokie',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification - add real code when needed
  // verification: {
  //   google: 'your-actual-verification-code-here',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3CB878" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
