'use client';

import React from 'react';
import { brandColors } from '@/lib/design-tokens';

interface Column {
  header: string;
  accessor: string;
  align?: 'left' | 'center' | 'right';
  format?: (value: unknown) => string;
}

interface PricingTableProps {
  title?: string;
  subtitle?: string;
  columns: Column[];
  data: Record<string, unknown>[];
  accentColor?: string;
  compact?: boolean;
  className?: string;
}

/**
 * Reusable Pricing Table Component
 * Follows Figma design tokens for consistent styling
 */
export function PricingTable({
  title,
  subtitle,
  columns,
  data,
  accentColor = brandColors.services.screenPrint,
  compact = false,
  className = '',
}: PricingTableProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Table Header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
      )}
      
      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={col.accessor}
                  className={`
                    ${compact ? 'px-3 py-2' : 'px-4 py-3'}
                    text-xs font-bold uppercase tracking-wider
                    ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                    ${i === 0 ? 'rounded-tl-xl' : ''}
                    ${i === columns.length - 1 ? 'rounded-tr-xl' : ''}
                  `}
                  style={{
                    backgroundColor: i === 0 ? accentColor : brandColors.ink.charcoal,
                    color: brandColors.ink.white,
                  }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  border-t border-gray-100
                  ${rowIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                  hover:bg-blue-50 transition-colors
                `}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={col.accessor}
                    className={`
                      ${compact ? 'px-3 py-2' : 'px-4 py-3'}
                      ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                      ${colIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-700'}
                      text-sm
                    `}
                    style={colIndex === 0 ? { borderLeft: `3px solid ${accentColor}` } : undefined}
                  >
                    {col.format 
                      ? col.format(row[col.accessor])
                      : String(row[col.accessor] ?? '-')
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Simple pricing table for flat data
 */
interface SimplePricingTableProps {
  headers: string[];
  rows: { label: string; values: (string | number)[] }[];
  accentColor?: string;
  className?: string;
}

export function SimplePricingTable({
  headers,
  rows,
  accentColor = brandColors.services.screenPrint,
  className = '',
}: SimplePricingTableProps) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`
                  px-4 py-3 text-xs font-bold uppercase tracking-wider
                  ${i === 0 ? 'text-left' : 'text-center'}
                `}
                style={{
                  backgroundColor: i === 0 ? accentColor : brandColors.ink.charcoal,
                  color: brandColors.ink.white,
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
              className={`
                border-t border-gray-100
                ${rowIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
                hover:bg-blue-50 transition-colors
              `}
            >
              <td
                className="px-4 py-3 font-medium text-gray-900 text-sm"
                style={{ borderLeft: `3px solid ${accentColor}` }}
              >
                {row.label}
              </td>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className="px-4 py-3 text-center text-sm font-mono text-gray-700"
                >
                  {typeof value === 'number' ? `$${value.toFixed(2)}` : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

