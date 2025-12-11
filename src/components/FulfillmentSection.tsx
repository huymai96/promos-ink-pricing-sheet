'use client';

import React from 'react';
import { fulfillmentPrices } from '@/lib/tokens';

interface FulfillmentSectionProps {
  accentColor: string;
}

export function FulfillmentSection({ accentColor }: FulfillmentSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fulfillmentPrices.services.map((category, catIndex) => (
        <div 
          key={catIndex}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#252525] overflow-hidden"
        >
          <div 
            className="px-5 py-3 font-bold text-sm uppercase tracking-wider"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {category.category}
          </div>
          <div className="p-4">
            {category.items.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className={`flex justify-between items-center py-3 ${
                  itemIndex !== category.items.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <span className="text-white/70 text-sm">{item.service}</span>
                <span 
                  className="font-mono text-sm font-medium"
                  style={{ color: accentColor }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

