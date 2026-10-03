# 💕 Ashmi & Jeffrin - Wedding Invitation Website

A modern, Korean-inspired pastel wedding invitation website built with Next.js 15, featuring chibi doll aesthetics, smooth animations, and mobile-first design.

## ✨ Features

- **Cinematic Intro Animation**: Beautiful entrance animation with couple initials
- **Korean Chibi Aesthetics**: Custom SVG chibi illustrations for bride and groom
- **Pastel Color Palette**: Romantic blush pink, lavender, ivory, peach, and gold tones
- **Smooth Animations**: Framer Motion powered animations with reduced motion support
- **Live Countdown**: Real-time countdown to the wedding date
- **Interactive Gallery**: Image gallery with lightbox functionality
- **Glassmorphism Design**: Modern frosted glass effect cards
- **Floating Decorations**: Animated petals and sparkle particles
- **Responsive Design**: Mobile-first approach optimized for WhatsApp sharing
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🎨 Design System

### Color Palette
- **Blush Pink** (#FFB6C1): Primary romantic accent
- **Lavender** (#B8B8D1): Secondary elegant tone
- **Ivory** (#FFF5E6): Soft background
- **Peach** (#FFDAB9): Warm accent
- **Gold** (#FFD700): Sparkle highlights

### Typography
- **Script Font**: Great Vibes (for romantic headings)
- **Serif Font**: Playfair Display (for elegant text)
- **Body Font**: Poppins (for readable content)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
sis_invitation/
├── public/
│   ├── illustrations/
│   │   ├── bride-chibi.svg
│   │   └── groom-chibi.svg
│   └── images/
│       └── gallery/
│           ├── couple-1.svg to couple-3.svg
│           ├── prewedding-1.svg to prewedding-3.svg
│           └── family-1.svg to family-3.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── animations/
│   │   │   ├── AnimationWrapper.tsx
│   │   │   ├── ChibiDoll.tsx
│   │   │   ├── FloatingPetal.tsx
│   │   │   └── SparkleParticle.tsx
│   │   ├── sections/
│   │   │   ├── IntroScreen.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CoupleSection.tsx
│   │   │   ├── CountdownSection.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── VenueSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── FamilySection.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── GlassCard.tsx
│   │       └── NavBar.tsx
│   ├── data/
│   │   └── wedding.ts
│   ├── hooks/
│   │   ├── useAudio.ts
│   │   ├── useCountdown.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollY.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   └── countdown.ts
│   └── types/
│       └── wedding.ts
├── next.config.ts
├── vercel.json
└── package.json
```

## 🎯 Key Sections

1. **Intro Screen**: Cinematic entrance with couple initials and heart animation
2. **Hero Section**: Main banner with names, date, and floating decorations
3. **Couple Section**: Bride and groom profiles with chibi illustrations
4. **Countdown Section**: Live countdown timer to wedding date
5. **Events Section**: Wedding event details with date and time
6. **Venue Section**: Location information with Google Maps integration
7. **Gallery Section**: Photo gallery with lightbox view
8. **Family Section**: Family member messages and tributes

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Great Vibes, Playfair Display, Poppins)

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interactions
- Optimized for WhatsApp sharing
- Fast loading with Next.js Image optimization
- Smooth scrolling and animations

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Proper ARIA labels
- Focus indicators

## 🎨 Customization

### Update Wedding Data

Edit `src/data/wedding.ts` to customize:
- Bride and groom information
- Wedding date and venue
- Event details
- Family members
- Gallery images

### Change Colors

Modify the color tokens in `src/app/globals.css`:
```css
@theme {
  --color-blush: #FFB6C1;
  --color-lavender: #B8B8D1;
  /* ... */
}
```

### Replace Chibi Illustrations

Replace the SVG files in `public/illustrations/`:
- `bride-chibi.svg`
- `groom-chibi.svg`

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is created for Ashmi SS & Jeffrin J's wedding. All rights reserved.

## 💝 Wedding Details

- **Bride**: Ashmi SS
- **Groom**: Jeffrin J
- **Date**: November 11, 2026
- **Venue**: Jannaki Ammal Thirumanamandapam, Colachel

---

Made with 💕 for Ashmi & Jeffrin
