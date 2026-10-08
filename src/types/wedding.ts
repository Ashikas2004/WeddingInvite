import type { ReactNode } from 'react';

// ============================================
// WEDDING COLOR PALETTE
// ============================================

export type PastelColor =
  | 'blush-pink'    // #f8d7e3
  | 'lavender'      // #dce8d6
  | 'sage-green'    // #dce8d6
  | 'forest-green'  // #365d43
  | 'ivory'         // #fffaf2
  | 'soft-peach'    // #ffd8c2
  | 'light-gold';   // #f6d37a

// ============================================
// DATA MODELS
// ============================================

export interface Person {
  name: string;
  qualification?: string;
  parents?: string;
  address?: string;
  role: string; // e.g. 'Bride', 'Groom', 'Sister of the Bride'
}

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  iconName: string; // Lucide icon name, e.g. 'Gem', 'Heart'
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'couple portrait' | 'pre-wedding shoot' | 'family moment';
  width: number;
  height: number;
  blurDataURL?: string; // Base64 blur placeholder for Next.js Image
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WeddingData {
  bride: Person;
  groom: Person;
  weddingDate: string;        // ISO 8601: '2026-11-11T10:30:00+05:30'
  weddingDateDisplay: string; // '11 November 2026 | Wednesday'
  weddingTimeDisplay: string; // '10:30 AM – 11:30 AM'
  venue: string;
  mapsUrl: string;
  events: WeddingEvent[];
  familyMembers: Person[];
  gallery: GalleryImage[];
  navLinks: NavLink[];
}

// ============================================
// COUNTDOWN TYPES
// ============================================

export interface CountdownResult {
  days: string;    // Zero-padded, e.g. '07'
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
}

export interface CountdownUnit {
  label: 'Days' | 'Hours' | 'Minutes' | 'Seconds';
  value: string; // Zero-padded two-digit string, e.g. '07'
}

export interface CountdownState {
  units: CountdownUnit[];
  isPast: boolean; // true when target date has passed
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
  padding?: 'none' | 'sm' | 'default' | 'lg';
}

export interface FloatingPetalProps {
  color: 'blush' | 'lavender' | 'peach' | 'ivory' | 'gold';
  delay?: number;     // Delay before animation starts in seconds
  duration?: number;  // Animation duration in seconds
  left: number;       // Position % within container (0-100)
}

export interface SparkleParticleProps {
  top: number;        // Position % within container (0-100)
  left: number;       // Position % within container (0-100)
  delay?: number;     // Delay before animation starts in seconds
  size?: number;      // Size in pixels
}

export interface ChibiDollProps {
  src: string;          // Path to chibi illustration
  alt: string;          // Alt text for accessibility
  size?: number;        // Size in pixels
  floatDelay?: number;  // Delay before float animation starts
  className?: string;
}

export interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export interface AnimationWrapperProps {
  children: ReactNode;
  variants?: any;       // Framer Motion variants object
  initial?: string;     // Initial animation state
  animate?: string;     // Target animation state
  delay?: number;       // seconds
  duration?: number;    // seconds (overridden to 0 when reduced motion)
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down'; // For SlideIn
  staggerIndex?: number; // For BounceIn stagger
}
