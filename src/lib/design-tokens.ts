// ============================================
// PROMOS INK - DESIGN SYSTEM TOKENS
// Extracted from brand logo and aligned with Figma
// ============================================

/**
 * BRAND COLORS
 * Derived from the Promos Ink rainbow logo
 */
export const brandColors = {
  // Rainbow Spectrum (from "PROMOS" letters)
  rainbow: {
    red: '#E53935',      // P
    orange: '#FB8C00',   // R  
    yellow: '#FDD835',   // O
    green: '#43A047',    // M
    cyan: '#00ACC1',     // O
    blue: '#1E88E5',     // S
    purple: '#8E24AA',   // Accent
  },
  
  // Core Brand Colors
  ink: {
    black: '#1A1A1A',    // Primary text, "INK" logo
    charcoal: '#2D2D2D', // Secondary backgrounds
    graphite: '#404040', // Muted text
    slate: '#6B7280',    // Subtle text
    silver: '#9CA3AF',   // Disabled states
    cloud: '#F3F4F6',    // Light backgrounds
    white: '#FFFFFF',    // Pure white
  },
  
  // Service Category Colors
  services: {
    screenPrint: '#1E88E5',  // Blue
    embroidery: '#8E24AA',   // Purple
    dtg: '#00ACC1',          // Cyan
    dtf: '#00897B',          // Teal
    fulfillment: '#43A047',  // Green
  },
  
  // Semantic Colors
  semantic: {
    success: '#43A047',
    warning: '#FB8C00',
    error: '#E53935',
    info: '#1E88E5',
  },
} as const;

/**
 * TYPOGRAPHY
 * Font families and scale
 */
export const typography = {
  fonts: {
    // Display font for headings (bold, impactful like "INK")
    display: '"Inter", "SF Pro Display", system-ui, sans-serif',
    // Body font for readable text
    body: '"Inter", "SF Pro Text", system-ui, sans-serif',
    // Monospace for prices and data
    mono: '"JetBrains Mono", "SF Mono", "Consolas", monospace',
  },
  
  // Type Scale (based on 16px base)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  // Font Weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Line Heights
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
  },
} as const;

/**
 * SPACING
 * Consistent spacing scale
 */
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  2: '0.5rem',      // 8px
  3: '0.75rem',     // 12px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  8: '2rem',        // 32px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
} as const;

/**
 * BORDER RADIUS
 */
export const radii = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

/**
 * SHADOWS
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  glow: {
    blue: '0 0 20px rgba(30, 136, 229, 0.3)',
    purple: '0 0 20px rgba(142, 36, 170, 0.3)',
    rainbow: '0 0 30px rgba(229, 57, 53, 0.2), 0 0 60px rgba(30, 136, 229, 0.2)',
  },
} as const;

/**
 * GRADIENTS
 */
export const gradients = {
  // Rainbow gradient matching logo
  rainbow: 'linear-gradient(90deg, #E53935, #FB8C00, #FDD835, #43A047, #00ACC1, #1E88E5, #8E24AA)',
  rainbowSubtle: 'linear-gradient(90deg, rgba(229,57,53,0.8), rgba(251,140,0,0.8), rgba(253,216,53,0.8), rgba(67,160,71,0.8), rgba(0,172,193,0.8), rgba(30,136,229,0.8), rgba(142,36,170,0.8))',
  
  // Dark gradients
  darkFade: 'linear-gradient(180deg, #1A1A1A 0%, #2D2D2D 100%)',
  darkRadial: 'radial-gradient(ellipse at center, #2D2D2D 0%, #1A1A1A 100%)',
  
  // Service gradients
  screenPrint: 'linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)',
  embroidery: 'linear-gradient(135deg, #8E24AA 0%, #6A1B9A 100%)',
  digital: 'linear-gradient(135deg, #00ACC1 0%, #00838F 100%)',
  fulfillment: 'linear-gradient(135deg, #43A047 0%, #2E7D32 100%)',
} as const;

/**
 * COMPONENT TOKENS
 * Pre-defined styles for common components
 */
export const components = {
  // Pricing Table
  pricingTable: {
    headerBg: brandColors.ink.charcoal,
    headerText: brandColors.ink.white,
    rowBg: brandColors.ink.white,
    rowAltBg: brandColors.ink.cloud,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    cellPadding: spacing[3],
  },
  
  // Section Header
  sectionHeader: {
    titleSize: typography.sizes['3xl'],
    subtitleSize: typography.sizes.lg,
    badgePadding: `${spacing[1]} ${spacing[3]}`,
  },
  
  // Cards
  card: {
    bg: brandColors.ink.white,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    radius: radii.xl,
    shadow: shadows.md,
    padding: spacing[6],
  },
  
  // Buttons
  button: {
    primary: {
      bg: brandColors.services.screenPrint,
      text: brandColors.ink.white,
      hoverBg: '#1565C0',
    },
    secondary: {
      bg: brandColors.ink.cloud,
      text: brandColors.ink.black,
      hoverBg: '#E5E7EB',
    },
  },
} as const;

// Export all tokens as a single object for convenience
export const designTokens = {
  colors: brandColors,
  typography,
  spacing,
  radii,
  shadows,
  gradients,
  components,
} as const;

export default designTokens;

