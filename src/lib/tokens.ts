// ============================================
// PROMOS INK - DESIGN TOKENS
// TypeScript constants for consistent styling
// ============================================

export const colors = {
  // Brand Colors
  ink: {
    black: '#0d0d0d',
    charcoal: '#1a1a1a',
    graphite: '#2d2d2d',
    slate: '#404040',
    silver: '#9ca3af',
    cloud: '#f4f4f5',
    white: '#ffffff',
  },
  
  // Rainbow Spectrum
  spectrum: {
    red: '#ef4444',
    orange: '#f97316',
    amber: '#f59e0b',
    yellow: '#eab308',
    lime: '#84cc16',
    green: '#22c55e',
    teal: '#14b8a6',
    cyan: '#06b6d4',
    blue: '#3b82f6',
    indigo: '#6366f1',
    violet: '#8b5cf6',
    purple: '#a855f7',
    pink: '#ec4899',
    rose: '#f43f5e',
  },
  
  // Service Colors
  services: {
    screenPrint: '#3b82f6',
    embroidery: '#8b5cf6',
    digital: '#06b6d4',
    fulfillment: '#22c55e',
  },
} as const;

export const typography = {
  fonts: {
    display: '"Clash Display", "SF Pro Display", system-ui, sans-serif',
    body: '"Inter", "SF Pro Text", system-ui, sans-serif',
    mono: '"JetBrains Mono", "SF Mono", monospace',
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
} as const;

// ============================================
// PRICING DATA
// ============================================

export const screenPrintingPrices = {
  title: 'Screen Printing',
  subtitle: 'Contract Pricing 2025',
  description: 'Per-piece pricing based on quantity and number of print colors',
  headers: ['QTY', '1 Color', '2 Colors', '3 Colors', '4 Colors', '5 Colors', '6+ Colors'],
  rows: [
    { qty: '12-23', prices: ['$8.50', '$9.50', '$10.50', '$11.50', '$12.50', '$13.50'] },
    { qty: '24-47', prices: ['$5.50', '$6.50', '$7.50', '$8.50', '$9.50', '$10.50'] },
    { qty: '48-71', prices: ['$4.25', '$5.00', '$5.75', '$6.50', '$7.25', '$8.00'] },
    { qty: '72-143', prices: ['$3.50', '$4.15', '$4.80', '$5.45', '$6.10', '$6.75'] },
    { qty: '144-287', prices: ['$2.75', '$3.25', '$3.75', '$4.25', '$4.75', '$5.25'] },
    { qty: '288-499', prices: ['$2.25', '$2.65', '$3.05', '$3.45', '$3.85', '$4.25'] },
    { qty: '500-999', prices: ['$1.85', '$2.15', '$2.45', '$2.75', '$3.05', '$3.35'] },
    { qty: '1000+', prices: ['$1.50', '$1.75', '$2.00', '$2.25', '$2.50', '$2.75'] },
  ],
  notes: [
    'Prices are per piece, per location',
    'Additional locations: 75% of first location price',
    'Setup fee: $25 per color (waived on reorders)',
    'Rush orders (under 5 days): +20%',
    'Oversized prints (larger than 12"x14"): +$1.00/piece',
  ],
};

export const embroideryPrices = {
  title: 'Embroidery',
  subtitle: 'Contract Pricing 2025',
  description: 'Per-piece pricing based on stitch count and quantity',
  headers: ['QTY', 'Up to 5K', '5K-8K', '8K-10K', '10K-12K', '12K-15K', '15K+'],
  rows: [
    { qty: '12-23', prices: ['$8.00', '$9.50', '$11.00', '$12.50', '$14.00', 'Quote'] },
    { qty: '24-47', prices: ['$6.00', '$7.25', '$8.50', '$9.75', '$11.00', 'Quote'] },
    { qty: '48-71', prices: ['$5.00', '$6.00', '$7.00', '$8.00', '$9.00', 'Quote'] },
    { qty: '72-143', prices: ['$4.25', '$5.00', '$5.75', '$6.50', '$7.25', 'Quote'] },
    { qty: '144-287', prices: ['$3.50', '$4.10', '$4.70', '$5.30', '$5.90', 'Quote'] },
    { qty: '288-499', prices: ['$3.00', '$3.50', '$4.00', '$4.50', '$5.00', 'Quote'] },
    { qty: '500+', prices: ['$2.50', '$2.90', '$3.30', '$3.70', '$4.10', 'Quote'] },
  ],
  notes: [
    'Prices are per piece, per location',
    'Digitizing: $50 setup (one-time fee)',
    'Additional locations: 75% of first location price',
    'Left chest standard placement included',
    'Complex designs may require additional quote',
  ],
};

export const digitalPrices = {
  title: 'DTG & DTF Digital',
  subtitle: 'Contract Pricing 2025',
  description: 'Full-color digital printing with no color limits',
  headers: ['QTY', 'Small (5"x5")', 'Medium (8"x10")', 'Large (12"x14")', 'XL (14"x16")'],
  rows: [
    { qty: '1-11', prices: ['$12.00', '$15.00', '$18.00', '$22.00'] },
    { qty: '12-23', prices: ['$9.00', '$11.50', '$14.00', '$17.00'] },
    { qty: '24-47', prices: ['$7.50', '$9.50', '$11.50', '$14.00'] },
    { qty: '48-71', prices: ['$6.50', '$8.00', '$9.50', '$11.50'] },
    { qty: '72-143', prices: ['$5.50', '$6.75', '$8.00', '$9.50'] },
    { qty: '144-287', prices: ['$4.75', '$5.75', '$6.75', '$8.00'] },
    { qty: '288+', prices: ['$4.00', '$4.75', '$5.50', '$6.50'] },
  ],
  notes: [
    'Unlimited colors at no extra charge',
    'Photo-quality full-color prints',
    'No setup fees for digital prints',
    'Best for complex artwork and photographs',
    'White ink base included on dark garments',
  ],
};

export const fulfillmentPrices = {
  title: 'Fulfillment Services',
  subtitle: 'Contract Pricing 2025',
  description: 'Pick, pack, and ship services for your decorated apparel',
  services: [
    {
      category: 'Pick & Pack',
      items: [
        { service: 'Single item pick', price: '$1.50/item' },
        { service: 'Multi-item order (2-5 items)', price: '$1.25/item' },
        { service: 'Bulk order (6+ items)', price: '$1.00/item' },
        { service: 'Poly bag each item', price: '$0.35/item' },
        { service: 'Hang tag attachment', price: '$0.25/item' },
        { service: 'Custom packaging insert', price: '$0.15/insert' },
      ],
    },
    {
      category: 'Storage',
      items: [
        { service: 'Pallet storage (per month)', price: '$45/pallet' },
        { service: 'Shelf storage (per cubic ft/month)', price: '$2.50/cu ft' },
        { service: 'Climate-controlled storage', price: '+25%' },
      ],
    },
    {
      category: 'Shipping Integration',
      items: [
        { service: 'USPS First Class (under 1lb)', price: 'At cost + $0.50' },
        { service: 'USPS Priority', price: 'At cost + $0.50' },
        { service: 'UPS Ground', price: 'At cost + $0.75' },
        { service: 'FedEx Ground', price: 'At cost + $0.75' },
        { service: 'International shipping', price: 'Quote required' },
      ],
    },
    {
      category: 'Value-Added Services',
      items: [
        { service: 'Returns processing', price: '$3.00/return' },
        { service: 'Quality inspection', price: '$0.50/item' },
        { service: 'Kitting/assembly', price: '$2.00/kit' },
        { service: 'Custom branded packing slip', price: 'Free' },
      ],
    },
  ],
  notes: [
    'No minimum order requirements',
    'Same-day shipping on orders received by 2 PM EST',
    'Real-time inventory tracking via online portal',
    'API integration available for e-commerce platforms',
  ],
};

export const companyInfo = {
  name: 'PROMOS INK',
  tagline: 'Premium Contract Decoration Services',
  address: '123 Industry Way, Suite 100',
  city: 'Your City, State 12345',
  phone: '(555) 123-4567',
  email: 'contracts@promosink.com',
  website: 'www.promosink.com',
  year: 2025,
};

