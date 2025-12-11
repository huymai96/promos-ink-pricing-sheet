// ============================================
// PROMOS INK - DESIGN TOKENS
// REAL Contract Pricing Data - Effective February 10, 2025
// Source: Actual PDF contract price sheets
// ============================================

export const colors = {
  ink: {
    black: '#0d0d0d',
    charcoal: '#1a1a1a',
    graphite: '#2d2d2d',
    slate: '#404040',
    silver: '#9ca3af',
    cloud: '#f4f4f5',
    white: '#ffffff',
  },
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
  services: {
    screenPrint: '#3b82f6',
    embroidery: '#8b5cf6',
    digital: '#06b6d4',
    fulfillment: '#22c55e',
  },
} as const;

// ============================================
// SCREEN PRINTING - ACTUAL PRICING
// From: 2025 Screen Printing Contract Pricing.pdf
// ============================================

export const screenPrintingPrices = {
  title: 'Screen Printing',
  subtitle: 'Contract Pricing 2025',
  description: 'Flat Goods Pricing (Max 14.5" x 16.5") - Per piece, per design & quantity per set-up',
  headers: ['Colors', '24-48', '49-143', '144-575', '576-1727', '1728+'],
  rows: [
    { qty: '1 Color', prices: ['$2.01', '$1.38', '$1.04', '$0.75', '$0.63'] },
    { qty: '2 Colors', prices: ['$2.59', '$1.73', '$1.21', '$0.92', '$0.75'] },
    { qty: '3 Colors', prices: ['$3.16', '$2.07', '$1.32', '$1.09', '$0.86'] },
    { qty: '4 Colors', prices: ['$3.74', '$2.42', '$1.55', '$1.27', '$0.98'] },
    { qty: '5 Colors', prices: ['$4.31', '$2.76', '$1.78', '$1.44', '$1.09'] },
    { qty: '6 Colors', prices: ['$4.89', '$3.11', '$2.01', '$1.61', '$1.21'] },
  ],
  setupCharges: [
    { type: 'Spot Color', price: '$15/color/location', notes: 'Standard setup fee' },
    { type: 'CMYK/Process', price: '$25/color/location', notes: 'Min 144 pieces required' },
    { type: 'Art Charges', price: '$40/hour', notes: 'Minimum ½ hour' },
  ],
  notes: [
    'Dark items require under base white + $0.15/flash + 1 set-up',
    'Custom color matching (PMS match) - $15.00 per color not on Standard Ink Sheet',
    'Special imprint location (pocket, sleeve, leg, hem, seam) - $0.35 ea. per print location',
    'Synthetic fabric (Nylon, Polyester, DriFit, Performance) - $0.35 ea. per print location',
    'Reflective, Glow-in-the-dark, Water based Ink - add $1.00 per print per location',
    'Vinyl Numbers - $4.00 single / $5.00 double digits (1-color standard font)',
    'Vinyl Names - $5.50 up to 12" wide 1-line, add $2.00 per additional line',
    'FREE pick up at Staton & AlphaBroder | Free freight at SanMar (PSST) - S&S Activewear',
    'Oversize prints 15x17 - 16x22 available',
  ],
};

// ============================================
// EMBROIDERY - ACTUAL PRICING
// From: 2025 Embroidery Contract Pricing.pdf
// ============================================

export const embroideryPrices = {
  title: 'Embroidery',
  subtitle: 'Contract Pricing 2025',
  description: 'All minimums are per design, per location, per order',
  headers: ['Stitch Count', '12-47', '48-144', '145-576', '577-2000', '2001-5000', '5001-7000'],
  rows: [
    { qty: 'Up to 5,000', prices: ['$4.77', '$3.91', '$3.39', '$2.76', '$2.53', '$2.07'] },
    { qty: '5,001-7,999', prices: ['$5.06', '$4.20', '$3.68', '$3.05', '$2.82', '$2.30'] },
    { qty: '8,000-9,999', prices: ['$5.64', '$4.77', '$4.26', '$3.34', '$3.16', '$2.70'] },
    { qty: '10,000-11,999', prices: ['$6.44', '$5.35', '$4.83', '$3.80', '$3.39', '$2.88'] },
    { qty: '3-D Puff Add', prices: ['$2.30', '$2.01', '$1.73', '$1.32', '$1.27', '$0.92'] },
  ],
  capPricing: {
    title: 'Cap Sides and Backs',
    headers: ['Stitch Count', '12-47', '48-144', '145-576', '577-2000', '2001-5000', '5001-7000'],
    rows: [
      { qty: '3,000 or Less', prices: ['$2.76', '$2.53', '$2.24', '$1.78', '-', '-'] },
      { qty: 'Per Additional 1,000', prices: ['$0.52', '$0.46', '$0.40', '$0.29', '-', '-'] },
    ],
  },
  notes: [
    'Digitizing - $8.50 per 1K stitches - minimum $35.00 (excludes complex designs, includes sew out)',
    'Thread Color Change - $3.00 ea. per color',
    'Each sew out revision - $10.00',
    'Special Backing/Topping (Fleece, Polyester, DriFit, Performance, Thin Woven) - $0.45 ea.',
    'Bulk Items (Zippered, Jacket, Heavy Bag, Bath Towel, Blanket) - $0.75 each per item',
    'Metallic and Neon Thread - additional $0.35 per 1K stitches',
    'Personalization: $6.50 per name up to 4" wide, $7.50 up to 8" wide, $3.50 per additional line',
    'Individual folding and bagging - $0.45 per garment',
    'All orders less than 12 pcs are charged for 12 pcs minimum',
    'Proof/Mockup and 1st Revision at No Charge, $10.00 per revision thereafter',
  ],
};

// ============================================
// DIGITAL PRINTING - ACTUAL PRICING
// From: Contract Price Sheets
// ============================================

export const digitalPrices = {
  title: 'DTG & DTF Digital',
  subtitle: 'Contract Pricing 2025',
  description: 'NO SETUP FEES! Full-color digital printing',
  
  dtg: {
    title: 'DTG - Direct to Garment',
    subtitle: '100% Cotton | Softer Feel | Up to 12" x 14"',
    headers: ['Garment Type', '6-12', '13-36', '37-72', '73-99'],
    rows: [
      { qty: 'White Garments', prices: ['$6.75', '$6.25', '$5.75', '$5.25'] },
      { qty: 'Color Garments', prices: ['+$1.00', '+$1.00', '+$1.00', '+$1.00'] },
    ],
    notes: ['Oversize/Jumbo (up to 23" x 35"): Add $5.50'],
  },
  
  dtf: {
    title: 'DTF - Direct to Film',
    subtitle: 'Works on Most Fabrics | More Versatile | High Quality',
    headers: ['Imprint Size', '6-12', '13-49', '50-99', '100-149'],
    rows: [
      { qty: 'Up to 5x5', prices: ['$5.50', '$5.25', '$4.95', '$4.50'] },
      { qty: 'Up to 12x12', prices: ['$6.50', '$5.95', '$5.45', '$4.95'] },
      { qty: 'Up to 14x18', prices: ['$7.75', '$7.45', '$6.95', '$6.50'] },
    ],
    notes: ['Non-standard locations (sleeves, pockets, etc.): Add $1.00 each'],
  },
  
  notes: [
    '1-5 pieces: Add $2.00 to scheduled pricing',
    'Lead Time: 5-7 Business Days',
    'Preferred Art: Editable PDF, AI, EPS or PNG at 300 DPI',
    'DTG: Softer feel, 100% cotton only',
    'DTF: More versatile, works on any fabric type',
    'Full color prints at no extra charge',
    'Dark garments include white underbase',
  ],
};

// ============================================
// FULFILLMENT - ACTUAL PRICING
// From: 2025 Fulfillment.pdf
// ============================================

export const fulfillmentPrices = {
  title: 'Fulfillment Services',
  subtitle: 'Contract Pricing 2025',
  description: 'Warehousing, Kitting & Assembly, Drop Shipping, Inventory Management',
  
  pickPack: {
    title: 'Pick & Pack Pricing (by Monthly Order Volume)',
    headers: ['Service', '0-500', '501-1K', '1K-2.5K', '2.5K-5K', '5K+'],
    rows: [
      { service: 'First Item Pick', prices: ['$3.00', '$2.50', '$2.25', '$2.00', '$1.80'] },
      { service: 'Additional Items', prices: ['$0.75', '$0.50', '$0.50', '$0.40', '$0.35'] },
      { service: 'Promo Inserts', prices: ['$0.20', '$0.20', '$0.20', '$0.20', '$0.20'] },
    ],
  },
  
  storage: {
    title: 'Storage Pricing (Monthly)',
    items: [
      { service: 'Small Bin', price: '$1.00/mo' },
      { service: 'Medium Bin', price: '$2.00/mo' },
      { service: 'Large Bin', price: '$3.00/mo' },
      { service: 'X-Large Bin', price: '$4.00/mo' },
    ],
  },
  
  additional: [
    { service: 'Return Processing', price: '$2.00 + $0.50 per additional item' },
    { service: 'Custom fulfillment programs', price: 'Contact for quote' },
  ],
  
  notes: [
    'Custom fulfillment programs available - contact for quote',
    'Volume discounts available for high-volume partners',
    'API integration available for e-commerce platforms',
    'Real-time inventory tracking via online portal',
  ],
};

// ============================================
// COMPANY INFO
// ============================================

export const companyInfo = {
  name: 'PROMOS INK',
  tagline: 'Your Trusted Contract Decorator Partner',
  address: '14042 Distribution Way',
  city: 'Dallas, TX 75234',
  tollFree: '866-478-7298',
  office: '972-478-7298',
  fax: '972-478-2020',
  contacts: [
    { name: 'Christine', ext: '108', email: 'christine@promosink.com' },
    { name: 'Henry', ext: '107', email: 'henry@promosink.com' },
    { name: 'Kim', ext: '103', email: 'kim@promosink.com' },
    { name: 'Carla', ext: '102', email: 'carla@promosink.com' },
  ],
  effectiveDate: 'February 10, 2025',
  features: [
    '5-7 Day Lead Time',
    'NO SETUP Digital Fees',
    'FREE Inbound Freight*',
    '100% Quality Guaranteed',
  ],
  freeFreight: 'Free pickup at Staton & AlphaBroder | Free freight at SanMar (PSST) - S&S Activewear',
  productionTime: '7-12 BUSINESS DAYS (Normal)',
};
