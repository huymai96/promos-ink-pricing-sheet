'use client';

import React from 'react';

interface PricingRow {
  qty: string;
  prices: string[];
}

interface PricingTableProps {
  headers: string[];
  rows: PricingRow[];
  accentColor: string;
}

export function PricingTable({ headers, rows, accentColor }: PricingTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#252525]">
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`px-3 py-4 text-xs font-bold uppercase tracking-wider ${
                  i === 0 
                    ? 'text-left pl-5' 
                    : 'text-center'
                }`}
                style={{ 
                  background: i === 0 ? accentColor : 'rgba(45,45,45,0.8)',
                  color: 'white'
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className="border-t border-white/5 transition-colors hover:bg-white/5"
            >
              <td 
                className="py-3 pl-5 pr-3 font-semibold text-white/90"
                style={{ borderLeft: `3px solid ${accentColor}` }}
              >
                {row.qty}
              </td>
              {row.prices.map((price, priceIndex) => (
                <td 
                  key={priceIndex}
                  className={`py-3 px-3 text-center font-mono text-sm ${
                    price === 'Quote' 
                      ? 'text-amber-400 font-medium' 
                      : 'text-white/80'
                  }`}
                >
                  {price}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

