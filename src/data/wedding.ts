import type { Person } from '@/types/wedding';
import { assetPath } from '@/lib/assetPath';

// Extended Person interface for bride and groom with bio
interface PersonWithBio extends Person {
  bio: string;
}

export interface ExtendedWeddingData {
  bride: PersonWithBio;
  groom: PersonWithBio;
  date: string;
  venue: {
    name: string;
    address: string;
    city: string;
    /** Google Maps embed src URL */
    mapEmbedUrl: string;
    /** Google Maps directions URL */
    directionsUrl: string;
  };
  events: Array<{
    name: string;
    date: string;
    /** Pre-formatted display string — never use new Date() in components */
    dateDisplay: string;
    time: string;
    venue: string;
    description: string;
  }>;
  family: Array<{
    name: string;
    relation: string;
    message: string;
  }>;
  gallery: Array<{
    src: string;
    alt: string;
    category: string;
  }>;
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

const VENUE_NAME    = 'Janaki Ammal Kalyana Mandapam Complex';
const VENUE_ADDRESS = 'Colachel Main Road, Colachel';
const VENUE_FULL    = `${VENUE_NAME}, ${VENUE_ADDRESS}`;

export const weddingData: ExtendedWeddingData = {
  bride: {
    name: 'Ashmi SS',
    qualification: 'M.Sc., B.Ed',
    parents: 'A Siva Kumar & D Santhi',
    address: 'South Kaliyadappu, Sasthankarai, Colachel (P.O)',
    role: 'Bride',
    bio: 'A beautiful soul with a passion for teaching and learning. Her warmth and kindness light up every room she enters.',
  },
  groom: {
    name: 'Jeffrin J',
    qualification: 'B.Tech',
    parents: 'Javin Amaladhas & Raja Kumari',
    address: 'Kodumutty, Bethelpuram',
    role: 'Groom',
    bio: 'A dedicated professional with a heart of gold. His caring nature and strong values make him the perfect partner.',
  },

  // Wedding ceremony date (used by countdown)
  date: '2026-11-11T10:30:00+05:30',

  venue: {
    name: VENUE_NAME,
    address: VENUE_ADDRESS,
    city: '',
    // Google Maps embed — searches for the venue by name + address
    mapEmbedUrl:
      `https://maps.google.com/maps?q=${encodeURIComponent(VENUE_FULL)}&output=embed&z=16`,
    directionsUrl:
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(VENUE_FULL)}`,
  },

  events: [
    {
      name: 'Engagement & Reception',
      date: '2026-11-10T16:00:00+05:30',
      dateDisplay: '10 November 2026 · Tuesday',
      time: '4:00 PM onwards',
      venue: VENUE_FULL,
      description:
        'Join us for the engagement ceremony followed by a grand reception. Witness the exchange of rings and celebrate with dinner and entertainment.',
    },
    {
      name: 'Wedding Ceremony',
      date: '2026-11-11T10:30:00+05:30',
      dateDisplay: '11 November 2026 · Wednesday',
      time: '10:30 AM – 11:30 AM',
      venue: VENUE_FULL,
      description:
        'The sacred wedding ceremony where two souls unite as one. Be part of this blessed moment as we exchange our vows.',
    },
  ],

  family: [
    {
      name: 'Ashika SS',
      relation: 'Sister of the Bride',
      message:
        'My dearest sister, watching you find your soulmate fills my heart with joy. Wishing you both a lifetime of love and happiness.',
    },
    {
      name: 'Jershiha',
      relation: 'Sister of the Groom',
      message:
        'To my wonderful brother and his beautiful bride, may your journey together be filled with endless love, laughter, and cherished memories.',
    },
  ],

  gallery: [
    { src: assetPath('/images/gallery/couple-1.svg'),     alt: 'Ashmi and Jeffrin – Couple Portrait',  category: 'Couple'      },
    { src: assetPath('/images/gallery/couple-2.svg'),     alt: 'Ashmi and Jeffrin – Romantic Moment', category: 'Couple'      },
    { src: assetPath('/images/gallery/couple-3.svg'),     alt: 'Ashmi and Jeffrin – Together Forever', category: 'Couple'      },
    { src: assetPath('/images/gallery/prewedding-1.svg'), alt: 'Pre-Wedding Photoshoot',               category: 'Pre-Wedding' },
    { src: assetPath('/images/gallery/prewedding-2.svg'), alt: 'Pre-Wedding Celebration',              category: 'Pre-Wedding' },
    { src: assetPath('/images/gallery/prewedding-3.svg'), alt: 'Pre-Wedding Memories',                 category: 'Pre-Wedding' },
    { src: assetPath('/images/gallery/family-1.svg'),      alt: 'Family Gathering',                     category: 'Family'      },
    { src: assetPath('/images/gallery/family-2.svg'),     alt: 'Family Celebration',                   category: 'Family'      },
    { src: assetPath('/images/gallery/family-3.svg'),     alt: 'Family Moments',                        category: 'Family'      },
  ],

  navLinks: [
    { label: 'Home',    href: '#home'    },
    { label: 'Couple',  href: '#couple'  },
    { label: 'Events',  href: '#events'  },
    { label: 'Venue',   href: '#venue'   },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Family',  href: '#family'  },
  ],
};
