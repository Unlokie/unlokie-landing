# Unlokie Landing Page

A production-ready, responsive landing page for Unlokie targeting investors and incubators. Built with Next.js 16, Tailwind CSS, and TypeScript.

## 🎯 Project Overview

**Unlokie**: Smart sports gear, right where you play.
**Tagline**: Play. Share. Repeat.
**Target Audience**: Investors and incubators
**Stage**: Pre-seed

This landing page communicates value and credibility while maintaining confidentiality—no precise metrics, contracts, or IP specifics are disclosed.

## 🎨 Brand & Design System

### Brand Identity
- **Name**: Unlokie
- **Tagline**: Play. Share. Repeat.
- **Personality**: Sleek, play-full, modern, sustainable

### Color Palette

#### Primary Green Palette
- **Unlokie Green**: `#3CB878` (Primary brand green)
- **Forest Green**: `#2D8659` (Dark green for depth)
- **Sage Green**: `#52C882` (Medium green for accents)
- **Mint Green**: `#A8E6C1` (Light green for backgrounds)

#### Neutral Grays
- **Charcoal**: `#1F2937` (Dark text/headings)
- **Slate Gray**: `#4B5563` (Body text)
- **Cool Gray**: `#9CA3AF` (Subtle text/elements)
- **Light Gray**: `#F3F4F6` (Light backgrounds)
- **White**: `#FFFFFF` (Clean contrast)

#### Accent Colors (Minimal use)
- **Warning Orange**: `#F59E0B` (Alerts/CTAs)
- **Success Green**: `#10B981` (Success states)

### Typography
- **Font**: Montserrat (via Google Fonts)
- **Headings**: Semibold (600)
- **Body**: Regular (400)

### UI Principles
- Minimal, high contrast design
- Generous white space
- Rounded corners
- Simple, line-based icons
- Padlock + play icon motif

## 🚀 Quick Start

### Prerequisites
- Node.js 24
- pnpm 10

### Installation

```bash
# Clone or navigate to the project
cd landingpage

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:3000` to view the landing page.

### Build & Deploy

```bash
# Build for production
pnpm run build

# Start production server
pnpm run start

# Type check
pnpm run typecheck
```

### Self-Hosted Docker Runtime

```bash
# Build image
docker build -t unlokie-landing .

# Run container
docker run --rm -p 3000:3000 unlokie-landing
```

For production rollout and rollback, use `/SELF_HOST_CUTOVER.md`.

## 📁 Project Structure

```
landingpage/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # Reusable React components
│   ├── Button.tsx         # Button component variants
│   ├── ContactForm.tsx    # Investor contact form
│   └── Navigation.tsx     # Sticky navigation with mobile menu
├── public/               # Static assets
│   ├── favicon.svg       # Custom Unlokie favicon
│   ├── favicon.ico      # Standard favicon
│   └── ASSETS.md        # Asset requirements & guidelines
├── tailwind.config.js   # Tailwind config with brand tokens
├── postcss.config.js    # PostCSS configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies & scripts
```

## 🧩 Page Sections

1. **Navigation**: Sticky header with anchor links and CTA
2. **Hero**: Value proposition with primary/secondary CTAs
3. **Product**: Locker + app overview with key features
4. **How It Works**: 4-step user journey
5. **Use Cases**: 6 target markets (parks, schools, clubs, etc.)
6. **Impact & Sustainability**: Environmental and social benefits
7. **Why Now**: Market timing and macro trends
8. **Traction**: Confidential-safe progress indicators
9. **Team**: Founder profiles with domain expertise
10. **Contact**: Investor contact form with deck request
11. **Footer**: Brand info, legal links, color swatches

## 🎯 Content Strategy

### Confidentiality Guidelines
- ✅ **Safe**: Generalized claims, placeholder content
- ❌ **Confidential**: Customer names, revenue, unit economics
- ✅ **Example**: "Pilot interest from municipalities (details under NDA)"
- ❌ **Avoid**: "City of Austin signed $50k pilot contract"

### Investor-Focused Messaging
- Emphasizes market opportunity and timing
- Demonstrates traction without revealing specifics  
- Focuses on team expertise and execution capability
- Highlights technology readiness and scalability

## 🛠 Technical Features

### Performance & SEO
- **Next.js 16** with App Router
- **Standalone runtime** ready for self-hosted deployment
- **SEO optimized** with meta tags, OpenGraph, Twitter cards
- **Lighthouse 95+** performance target
- **Core Web Vitals** optimized

### Accessibility (WCAG AA+)
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Skip-to-content link
- High contrast ratios

### Responsive Design
- **Mobile-first** approach (320px+)
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **One-handed mobile** navigation

### Interactive Features
- Smooth scroll navigation
- Intersection Observer animations
- Form validation with error states
- Mobile menu with overlay
- Hover effects and micro-interactions

## 🎨 Design System Usage

### Custom Tailwind Classes

```css
/* Buttons */
.btn-primary          /* Primary gradient button */
.btn-secondary        /* Secondary outline button */

/* Layout */
.section-padding      /* Consistent section spacing */
.card                 /* Card component styling */

/* Animations */
.animate-on-scroll    /* Scroll-triggered animations */
.text-gradient        /* Brand gradient text */
```

### Component API

```tsx
// Button component
<Button variant="primary|secondary" size="sm|md|lg">
  Button Text
</Button>

// Navigation (auto-renders)
<Navigation />

// Contact form (auto-renders)
<ContactForm />
```

## 📱 Form Integration

The contact form is ready for backend integration:

```tsx
// In ContactForm.tsx - replace the placeholder
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Recommended Form Backends
- **Vercel**: Built-in form handling
- **Netlify**: Form submissions
- **Formspree**: External form service
- **Custom API**: Your own endpoint

## 🚦 Quality Checklist

- ✅ **Performance**: Lighthouse 95+ (with real images)
- ✅ **Accessibility**: WCAG AA compliant
- ✅ **SEO**: Meta tags, structured data
- ✅ **Mobile**: Responsive 320px+
- ✅ **Security**: No exposed secrets/credentials  
- ✅ **Confidentiality**: NDA-safe content only
- ✅ **Brand**: Consistent design system
- ✅ **Conversion**: Clear CTAs and value props

## 🔧 Development

### Available Scripts

```bash
pnpm run dev          # Development server (http://localhost:3000)
pnpm run build        # Production build
pnpm run start        # Production server
pnpm run typecheck    # TypeScript check
pnpm run lint         # ESLint code checking
```

### Environment Setup

No environment variables required for basic functionality. For form integration, add:

```env
# .env.local (not included in repo)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
CONTACT_EMAIL=your-contact-email
```

### Code Style
- **TypeScript** strict mode enabled
- **ESLint** configured with Next.js rules
- **Tailwind** utility-first approach
- **Component-based** architecture
- **Accessible** by default

## 📄 Asset Requirements

See `/public/ASSETS.md` for detailed asset specifications.

### Priority Assets Needed
1. **Locker renders** (product visualization)
2. **App screenshots** (UX demonstration)  
3. **OpenGraph image** (social sharing)
4. **Apple touch icon** (iOS bookmark)

All assets should follow brand guidelines and maintain confidentiality.

## 🚀 Deployment Options

### Static Hosting (Legacy)
- **Vercel**: `vercel --prod`
- **Netlify**: Connect GitHub repo
- **AWS S3 + CloudFront**: Upload build output
- **GitHub Pages**: Enable in repository settings

### Server Hosting (Recommended)
- **Docker + reverse proxy**: Nginx/Caddy/Traefik
- **Vercel**: Full Next.js support
- **Railway**: Node.js deployment
- **DigitalOcean**: App platform
- **AWS**: Elastic Beanstalk or ECS

## 🔒 Privacy & Analytics

The page is configured for privacy-first analytics:

- ✅ **No cookies** used
- ✅ **No tracking pixels**
- ✅ **Privacy-friendly** analytics ready (Plausible, Umami)
- ✅ **GDPR/CCPA** compliant
- ✅ **User consent** respected

## 📞 Support & Contact

For technical questions about this landing page:
- Review this documentation
- Check component code comments
- Test responsive behavior
- Validate accessibility features

For business inquiries, use the contact form on the live site.

---

**Built with** ❤️ **for Unlokie**  
*Play. Share. Repeat.*
