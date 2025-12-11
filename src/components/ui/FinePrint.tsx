'use client';

import React from 'react';
import { brandColors } from '@/lib/design-tokens';
import { companyInfo } from '@/lib/pricing-data';

interface FinePrintProps {
  terms: string[];
  notes: string[];
  className?: string;
}

/**
 * Fine Print / Terms Section Component
 * Displays terms, conditions, and notes at bottom of pricing pages
 */
export function FinePrint({ terms, notes, className = '' }: FinePrintProps) {
  return (
    <div className={`bg-gray-50 rounded-2xl p-6 border border-gray-200 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Terms */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Terms & Conditions
          </h4>
          <ul className="space-y-2">
            {terms.map((term, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                {term}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Notes */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Notes
          </h4>
          <ul className="space-y-2">
            {notes.map((note, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-blue-500 mt-1">★</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**
 * Contact Footer Component
 */
interface ContactFooterProps {
  className?: string;
}

export function ContactFooter({ className = '' }: ContactFooterProps) {
  return (
    <div className={`bg-gray-900 text-white rounded-2xl p-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Rainbow bar */}
        <div 
          className="h-1 w-24 mx-auto rounded-full mb-8"
          style={{ 
            background: `linear-gradient(90deg, ${brandColors.rainbow.red}, ${brandColors.rainbow.orange}, ${brandColors.rainbow.yellow}, ${brandColors.rainbow.green}, ${brandColors.rainbow.blue}, ${brandColors.rainbow.purple})` 
          }}
        />
        
        <h3 className="text-2xl font-bold text-center mb-2">Ready to Partner?</h3>
        <p className="text-gray-400 text-center mb-8">
          {companyInfo.tagline}
        </p>
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <div className="text-2xl mb-2">📞</div>
            <p className="text-gray-400 text-xs mb-1">Phone</p>
            <p className="font-medium">{companyInfo.tollFree}</p>
            <p className="text-gray-400 text-sm">{companyInfo.office}</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <div className="text-2xl mb-2">📍</div>
            <p className="text-gray-400 text-xs mb-1">Address</p>
            <p className="font-medium">{companyInfo.address}</p>
            <p className="text-gray-400 text-sm">{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <div className="text-2xl mb-2">📠</div>
            <p className="text-gray-400 text-xs mb-1">Fax</p>
            <p className="font-medium">{companyInfo.fax}</p>
            <p className="text-gray-400 text-sm">{companyInfo.website}</p>
          </div>
        </div>
        
        {/* Team Contacts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {companyInfo.contacts.map((contact, i) => (
            <div key={i} className="text-center p-3 bg-white/5 rounded-lg">
              <p className="font-medium text-sm">{contact.name}</p>
              <p className="text-gray-400 text-xs">Ext. {contact.ext}</p>
              <p className="text-blue-400 text-xs truncate">{contact.email}</p>
            </div>
          ))}
        </div>
        
        {/* Legal */}
        <div className="text-center text-gray-500 text-xs">
          <p className="mb-1">© 2025 Promos Ink. All rights reserved.</p>
          <p>This is a pricing guide. Final pricing determined after artwork and materials received.</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Surcharges Card Component
 */
interface SurchargesCardProps {
  title: string;
  items: { name: string; description?: string; price: number | string; unit?: string }[];
  accentColor: string;
  className?: string;
}

export function SurchargesCard({ title, items, accentColor, className = '' }: SurchargesCardProps) {
  return (
    <div 
      className={`rounded-xl border p-5 ${className}`}
      style={{ 
        backgroundColor: `${accentColor}08`,
        borderColor: `${accentColor}20`,
      }}
    >
      <h4 
        className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2"
        style={{ color: accentColor }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        {title}
      </h4>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex justify-between items-start gap-4 pb-3 border-b border-gray-200 last:border-0 last:pb-0"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              {item.description && (
                <p className="text-xs text-gray-500">{item.description}</p>
              )}
            </div>
            <p 
              className="text-sm font-mono font-semibold whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
              {item.unit && <span className="text-gray-400 font-normal">{item.unit}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

