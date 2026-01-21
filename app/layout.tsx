import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Unlokie - Smart lockers that make sports gear available anywhere',
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
    title: 'Unlokie - Smart lockers that make sports gear available anywhere',
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
    title: 'Unlokie - Smart lockers that make sports gear available anywhere',
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
  verification: {
   google: 'uThXOnPpb1a6jyTDaMFe9Gp2nnC3sz1u3tc0HYCSH5Q',
  },
}

const siteUrl = 'https://unlokie.com/'

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Unlokie',
    url: siteUrl,
    logo: `${siteUrl}Unlokie_logo.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@unlokie.com',
        areaServed: 'HR',
        availableLanguage: ['en', 'hr'],
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Unlokie',
    url: siteUrl,
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/icon-48.png" sizes="48x48" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#3CB878" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
