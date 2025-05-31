// Animation durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// Form validation
export const VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minLength: 5,
    maxLength: 255,
  },
} as const;

// API endpoints (to be implemented)
export const API_ENDPOINTS = {
  newsletter: '/api/newsletter',
  waitlist: '/api/waitlist',
  contact: '/api/contact',
} as const;

// External links
export const EXTERNAL_LINKS = {
  social: {
    instagram: 'https://instagram.com/molequles',
    twitter: 'https://twitter.com/molequles',
    facebook: 'https://facebook.com/molequles',
    youtube: 'https://youtube.com/molequles',
  },
} as const;

// Company info
export const COMPANY_INFO = {
  name: 'Molequles',
  email: 'hello@molequles.com',
  phone: '+44 123 456 789',
  location: 'London, United Kingdom',
} as const;

// Product info
export const PRODUCT_INFO = {
  ingredientCount: '4,000+',
  bottleSize: '100ml (3.4oz)',
  satisfactionGuaranteeDays: 30,
} as const;

// Header configuration
export const HEADER_CONFIG = {
  stickyOffset: 80, // pixels
} as const;

// Image paths
export const IMAGES = {
  hero: '/images/hero_image.webp',
  sampleBottle: '/images/sample_bottle.png',
  vitruvianMan: '/images/vitruvian_man.png',
  logo: '/logo/molequles_logo.svg',
} as const;

// SEO metadata
export const SEO = {
  title: 'Molequles | AI-Powered Personalized Perfumes',
  description: 'Molequles leverages AI to create personalized perfumes based on your unique skin chemistry.',
  keywords: [
    'personalized perfume',
    'AI fragrance',
    'skin chemistry',
    'custom scent',
    'bespoke fragrance',
  ],
} as const;

// Feature flags (for future use)
export const FEATURES = {
  enableNewsletterSignup: true,
  enableWaitlistModal: true,
  enableSkinAnalysis: false, // Coming soon
} as const; 