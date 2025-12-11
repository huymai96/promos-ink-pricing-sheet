// ============================================
// PROMOS INK - CONTRACT PRICING DATA MODEL
// Supports multiple clients, services, and volume breaks
// ============================================

/**
 * TYPE DEFINITIONS
 */

export interface PriceBreak {
  minQty: number;
  maxQty: number | null; // null = unlimited
  price: number;
}

export interface ServicePricing {
  name: string;
  description?: string;
  priceBreaks: PriceBreak[];
}

export interface ScreenPrintPricing {
  colors: number;
  priceBreaks: PriceBreak[];
}

export interface EmbroideryPricing {
  stitchCountMin: number;
  stitchCountMax: number | null;
  priceBreaks: PriceBreak[];
}

export interface DigitalPricing {
  type: 'DTG' | 'DTF';
  size: string;
  priceBreaks: PriceBreak[];
}

export interface FulfillmentPricing {
  service: string;
  priceBreaks: PriceBreak[];
}

export interface Surcharge {
  name: string;
  description: string;
  price: number | string; // string for "Quote" or percentage
  unit?: string;
}

export interface ContractPricing {
  clientId: string;
  clientName: string;
  clientLogo?: string;
  effectiveDate: string;
  expirationDate?: string;
  
  screenPrint: {
    flatGoods: ScreenPrintPricing[];
    setupCharges: Surcharge[];
    additionalCharges: Surcharge[];
  };
  
  embroidery: {
    flatGoods: EmbroideryPricing[];
    capPricing?: EmbroideryPricing[];
    digitizing: Surcharge[];
    additionalCharges: Surcharge[];
  };
  
  digital: {
    dtg: DigitalPricing[];
    dtf: DigitalPricing[];
    additionalCharges: Surcharge[];
  };
  
  fulfillment: {
    pickPack: FulfillmentPricing[];
    storage: Surcharge[];
    additionalServices: Surcharge[];
  };
  
  terms: string[];
  notes: string[];
}

/**
 * COMPANY INFO
 */
export const companyInfo = {
  name: 'PROMOS INK',
  tagline: 'Your Trusted Contract Decorator Partner',
  address: '14042 Distribution Way',
  city: 'Dallas',
  state: 'TX',
  zip: '75234',
  tollFree: '866-478-7298',
  office: '972-478-7298',
  fax: '972-478-2020',
  website: 'www.promosink.com',
  
  contacts: [
    { name: 'Christine', ext: '108', email: 'christine@promosink.com' },
    { name: 'Henry', ext: '107', email: 'henry@promosink.com' },
    { name: 'Kim', ext: '103', email: 'kim@promosink.com' },
    { name: 'Carla', ext: '102', email: 'carla@promosink.com' },
  ],
  
  features: [
    '5-7 Day Lead Time',
    'NO SETUP Digital Fees',
    'FREE Inbound Freight*',
    '100% Quality Guaranteed',
  ],
  
  freeFreightNote: 'Free pickup at Staton & AlphaBroder | Free freight at SanMar (PSST) - S&S Activewear',
};

/**
 * DEFAULT CONTRACT PRICING (Standard Rates)
 * From actual 2025 Contract Price Sheets
 */
export const standardPricing: ContractPricing = {
  clientId: 'standard',
  clientName: 'Standard Contract Pricing',
  effectiveDate: '2025-02-10',
  
  screenPrint: {
    flatGoods: [
      { colors: 1, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 2.01 },
        { minQty: 49, maxQty: 143, price: 1.38 },
        { minQty: 144, maxQty: 575, price: 1.04 },
        { minQty: 576, maxQty: 1727, price: 0.75 },
        { minQty: 1728, maxQty: null, price: 0.63 },
      ]},
      { colors: 2, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 2.59 },
        { minQty: 49, maxQty: 143, price: 1.73 },
        { minQty: 144, maxQty: 575, price: 1.21 },
        { minQty: 576, maxQty: 1727, price: 0.92 },
        { minQty: 1728, maxQty: null, price: 0.75 },
      ]},
      { colors: 3, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 3.16 },
        { minQty: 49, maxQty: 143, price: 2.07 },
        { minQty: 144, maxQty: 575, price: 1.32 },
        { minQty: 576, maxQty: 1727, price: 1.09 },
        { minQty: 1728, maxQty: null, price: 0.86 },
      ]},
      { colors: 4, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 3.74 },
        { minQty: 49, maxQty: 143, price: 2.42 },
        { minQty: 144, maxQty: 575, price: 1.55 },
        { minQty: 576, maxQty: 1727, price: 1.27 },
        { minQty: 1728, maxQty: null, price: 0.98 },
      ]},
      { colors: 5, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 4.31 },
        { minQty: 49, maxQty: 143, price: 2.76 },
        { minQty: 144, maxQty: 575, price: 1.78 },
        { minQty: 576, maxQty: 1727, price: 1.44 },
        { minQty: 1728, maxQty: null, price: 1.09 },
      ]},
      { colors: 6, priceBreaks: [
        { minQty: 24, maxQty: 48, price: 4.89 },
        { minQty: 49, maxQty: 143, price: 3.11 },
        { minQty: 144, maxQty: 575, price: 2.01 },
        { minQty: 576, maxQty: 1727, price: 1.61 },
        { minQty: 1728, maxQty: null, price: 1.21 },
      ]},
    ],
    setupCharges: [
      { name: 'Spot Color Setup', description: 'Per color, per location', price: 15, unit: '/color' },
      { name: 'CMYK/Process Setup', description: 'Min 144 pieces required', price: 25, unit: '/color' },
      { name: 'Art Charges', description: 'Minimum ½ hour', price: 40, unit: '/hour' },
    ],
    additionalCharges: [
      { name: 'Dark Items Flash', description: 'Under base white required', price: 0.15, unit: '/piece' },
      { name: 'PMS Color Match', description: 'Custom color not on standard sheet', price: 15, unit: '/color' },
      { name: 'Special Location', description: 'Pocket, sleeve, leg, hem, seam', price: 0.35, unit: '/location' },
      { name: 'Synthetic Fabric', description: 'Nylon, Polyester, DriFit, Performance', price: 0.35, unit: '/location' },
      { name: 'Specialty Ink', description: 'Reflective, Glow, Water based', price: 1.00, unit: '/print' },
      { name: 'Vinyl Numbers', description: 'Single digit, 1-color standard', price: 4.00, unit: '/piece' },
      { name: 'Vinyl Numbers (Double)', description: 'Double digit, 1-color standard', price: 5.00, unit: '/piece' },
      { name: 'Vinyl Names', description: 'Up to 12" wide, 1-line', price: 5.50, unit: '/piece' },
    ],
  },
  
  embroidery: {
    flatGoods: [
      { stitchCountMin: 0, stitchCountMax: 5000, priceBreaks: [
        { minQty: 12, maxQty: 47, price: 4.77 },
        { minQty: 48, maxQty: 144, price: 3.91 },
        { minQty: 145, maxQty: 576, price: 3.39 },
        { minQty: 577, maxQty: 2000, price: 2.76 },
        { minQty: 2001, maxQty: 5000, price: 2.53 },
        { minQty: 5001, maxQty: null, price: 2.07 },
      ]},
      { stitchCountMin: 5001, stitchCountMax: 7999, priceBreaks: [
        { minQty: 12, maxQty: 47, price: 5.06 },
        { minQty: 48, maxQty: 144, price: 4.20 },
        { minQty: 145, maxQty: 576, price: 3.68 },
        { minQty: 577, maxQty: 2000, price: 3.05 },
        { minQty: 2001, maxQty: 5000, price: 2.82 },
        { minQty: 5001, maxQty: null, price: 2.30 },
      ]},
      { stitchCountMin: 8000, stitchCountMax: 9999, priceBreaks: [
        { minQty: 12, maxQty: 47, price: 5.64 },
        { minQty: 48, maxQty: 144, price: 4.77 },
        { minQty: 145, maxQty: 576, price: 4.26 },
        { minQty: 577, maxQty: 2000, price: 3.34 },
        { minQty: 2001, maxQty: 5000, price: 3.16 },
        { minQty: 5001, maxQty: null, price: 2.70 },
      ]},
      { stitchCountMin: 10000, stitchCountMax: 11999, priceBreaks: [
        { minQty: 12, maxQty: 47, price: 6.44 },
        { minQty: 48, maxQty: 144, price: 5.35 },
        { minQty: 145, maxQty: 576, price: 4.83 },
        { minQty: 577, maxQty: 2000, price: 3.80 },
        { minQty: 2001, maxQty: 5000, price: 3.39 },
        { minQty: 5001, maxQty: null, price: 2.88 },
      ]},
    ],
    capPricing: [
      { stitchCountMin: 0, stitchCountMax: 3000, priceBreaks: [
        { minQty: 12, maxQty: 47, price: 2.76 },
        { minQty: 48, maxQty: 144, price: 2.53 },
        { minQty: 145, maxQty: 576, price: 2.24 },
        { minQty: 577, maxQty: null, price: 1.78 },
      ]},
    ],
    digitizing: [
      { name: 'Digitizing', description: 'Per 1K stitches, min $35', price: 8.50, unit: '/1K stitches' },
      { name: 'Sew Out Revision', description: 'Per revision', price: 10.00, unit: '/revision' },
      { name: 'DST File Edit', description: 'Edit supplied file', price: 30.00, unit: '/edit' },
    ],
    additionalCharges: [
      { name: 'Thread Color Change', description: 'Per color', price: 3.00, unit: '/color' },
      { name: 'Special Backing/Topping', description: 'Fleece, Polyester, DriFit', price: 0.45, unit: '/piece' },
      { name: 'Bulk Items', description: 'Zippered, Jacket, Blanket', price: 0.75, unit: '/piece' },
      { name: 'Metallic/Neon Thread', description: 'Per 1K stitches', price: 0.35, unit: '/1K' },
      { name: 'Personalization (4")', description: 'Per name up to 4" wide', price: 6.50, unit: '/name' },
      { name: 'Personalization (8")', description: 'Per name up to 8" wide', price: 7.50, unit: '/name' },
      { name: 'Folding & Bagging', description: 'Individual', price: 0.45, unit: '/piece' },
    ],
  },
  
  digital: {
    dtg: [
      { type: 'DTG', size: 'Standard (12x14)', priceBreaks: [
        { minQty: 6, maxQty: 12, price: 6.75 },
        { minQty: 13, maxQty: 36, price: 6.25 },
        { minQty: 37, maxQty: 72, price: 5.75 },
        { minQty: 73, maxQty: null, price: 5.25 },
      ]},
    ],
    dtf: [
      { type: 'DTF', size: 'Up to 5x5', priceBreaks: [
        { minQty: 6, maxQty: 12, price: 5.50 },
        { minQty: 13, maxQty: 49, price: 5.25 },
        { minQty: 50, maxQty: 99, price: 4.95 },
        { minQty: 100, maxQty: null, price: 4.50 },
      ]},
      { type: 'DTF', size: 'Up to 12x12', priceBreaks: [
        { minQty: 6, maxQty: 12, price: 6.50 },
        { minQty: 13, maxQty: 49, price: 5.95 },
        { minQty: 50, maxQty: 99, price: 5.45 },
        { minQty: 100, maxQty: null, price: 4.95 },
      ]},
      { type: 'DTF', size: 'Up to 14x18', priceBreaks: [
        { minQty: 6, maxQty: 12, price: 7.75 },
        { minQty: 13, maxQty: 49, price: 7.45 },
        { minQty: 50, maxQty: 99, price: 6.95 },
        { minQty: 100, maxQty: null, price: 6.50 },
      ]},
    ],
    additionalCharges: [
      { name: 'Color Garments (DTG)', description: 'Add to white garment price', price: 1.00, unit: '/piece' },
      { name: 'Oversize/Jumbo', description: 'Up to 23" x 35"', price: 5.50, unit: '/piece' },
      { name: 'Non-Standard Location', description: 'Sleeves, pockets, etc.', price: 1.00, unit: '/location' },
      { name: 'Small Qty Surcharge', description: '1-5 pieces', price: 2.00, unit: '/piece' },
    ],
  },
  
  fulfillment: {
    pickPack: [
      { service: 'First Item Pick', priceBreaks: [
        { minQty: 0, maxQty: 500, price: 3.00 },
        { minQty: 501, maxQty: 1000, price: 2.50 },
        { minQty: 1001, maxQty: 2500, price: 2.25 },
        { minQty: 2501, maxQty: 5000, price: 2.00 },
        { minQty: 5001, maxQty: null, price: 1.80 },
      ]},
      { service: 'Additional Items', priceBreaks: [
        { minQty: 0, maxQty: 500, price: 0.75 },
        { minQty: 501, maxQty: 1000, price: 0.50 },
        { minQty: 1001, maxQty: 2500, price: 0.50 },
        { minQty: 2501, maxQty: 5000, price: 0.40 },
        { minQty: 5001, maxQty: null, price: 0.35 },
      ]},
      { service: 'Promo Inserts', priceBreaks: [
        { minQty: 0, maxQty: null, price: 0.20 },
      ]},
    ],
    storage: [
      { name: 'Small Bin', description: 'Monthly', price: 1.00, unit: '/month' },
      { name: 'Medium Bin', description: 'Monthly', price: 2.00, unit: '/month' },
      { name: 'Large Bin', description: 'Monthly', price: 3.00, unit: '/month' },
      { name: 'X-Large Bin', description: 'Monthly', price: 4.00, unit: '/month' },
    ],
    additionalServices: [
      { name: 'Return Processing', description: 'Plus $0.50 per additional item', price: 2.00, unit: '/return' },
      { name: 'Custom Programs', description: 'Contact for quote', price: 'Quote' },
    ],
  },
  
  terms: [
    'All minimums are per design, per location, per order.',
    'Prices are per piece unless otherwise noted.',
    'Proof/Mockup and 1st Revision at No Charge, $10.00 per revision thereafter.',
    'Normal production time 7-12 business days.',
    'Orders less than 12 pcs are charged for 12 pcs minimum.',
    'Promos Ink is not responsible for goods left over 30 days.',
    'Allow 3% spoilage during production.',
  ],
  
  notes: [
    'Free pickup at Staton & AlphaBroder | Free freight at SanMar (PSST) - S&S Activewear',
    'This is a pricing guide, final pricing determined after artwork and materials received.',
    'Prices subject to change without notice.',
  ],
};

/**
 * CLIENT-SPECIFIC PRICING
 * Override standard pricing for specific partners
 */
export const clientPricing: Record<string, Partial<ContractPricing>> = {
  tegra: {
    clientId: 'tegra',
    clientName: 'Tegra Global',
    effectiveDate: '2025-02-10',
    // Tegra gets standard pricing
  },
  customink: {
    clientId: 'customink',
    clientName: 'Custom Ink',
    effectiveDate: '2025-02-10',
    // Custom Ink gets standard pricing
  },
  american: {
    clientId: 'american',
    clientName: 'American',
    effectiveDate: '2025-02-10',
    // American gets standard pricing  
  },
};

/**
 * Get pricing for a specific client
 */
export function getClientPricing(clientId: string): ContractPricing {
  const clientOverrides = clientPricing[clientId];
  if (clientOverrides) {
    return {
      ...standardPricing,
      ...clientOverrides,
    };
  }
  return standardPricing;
}

/**
 * Format price for display
 */
export function formatPrice(price: number | string): string {
  if (typeof price === 'string') return price;
  return `$${price.toFixed(2)}`;
}

/**
 * Format quantity range for display
 */
export function formatQtyRange(min: number, max: number | null): string {
  if (max === null) return `${min}+`;
  return `${min}-${max}`;
}

