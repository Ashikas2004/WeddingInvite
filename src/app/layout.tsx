import type { Metadata } from 'next';
import { Great_Vibes, Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';

/* ── Google Fonts ──────────────────────────────────────────────────────────
   Each font injects a CSS variable that globals.css @theme picks up.
   Variable names MUST match what @theme references:
     --font-script  → Great Vibes
     --font-serif   → Playfair Display
     --font-body    → Poppins
─────────────────────────────────────────────────────────────────────────── */
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashmi & Jeffrin — Wedding Invitation',
  description:
    'Join us in celebrating the wedding of Ashmi SS and Jeffrin J on 11 November 2026',
  keywords: ['wedding', 'invitation', 'Ashmi', 'Jeffrin', 'marriage'],
  authors: [{ name: 'Ashmi & Jeffrin' }],
  openGraph: {
    title: 'Ashmi & Jeffrin — Wedding Invitation',
    description: 'Join us in celebrating our special day on 11 November 2026',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfairDisplay.variable} ${poppins.variable} scroll-smooth`}
    >
      {/* bg-ivory uses the --color-ivory token defined in @theme */}
      <body className="min-h-screen bg-ivory text-[#4a3728] antialiased">
        {children}
      </body>
    </html>
  );
}
