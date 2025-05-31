// Common form types
export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

// Navigation types
export interface NavigationItem {
  readonly name: string;
  readonly href: string;
  readonly external?: boolean;
}

// Social media types
export interface SocialLink {
  readonly name: string;
  readonly href: string;
  readonly icon: React.ReactNode;
  readonly label: string;
}

// Product types
export interface PricingTier {
  readonly id: string;
  readonly title: string;
  readonly price: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly isPopular?: boolean;
}

export interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly content: string;
  readonly rating: number;
  readonly date?: string;
}

// Component variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'success' | 'warning' | 'error';

// Utility types
export type PropsWithClassName<P = Record<string, unknown>> = P & {
  className?: string;
};

export type PropsWithChildren<P = Record<string, unknown>> = P & {
  children?: React.ReactNode;
};
