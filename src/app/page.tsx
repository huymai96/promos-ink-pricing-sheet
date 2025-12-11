'use client';

import React from 'react';
import Link from 'next/link';
import { brandColors, gradients } from '@/lib/design-tokens';
import { companyInfo, clientPricing } from '@/lib/pricing-data';

/**
 * Home Page
 * Landing page with links to different client contract pricing pages
 */
export default function HomePage() {
  const clients = [
    { slug: 'standard', name: 'Standard Pricing', description: 'Default contract rates' },
    { slug: 'tegra', name: 'Tegra Global', description: 'Custom pricing for Tegra' },
    { slug: 'customink', name: 'Custom Ink', description: 'Custom pricing for Custom Ink' },
    { slug: 'american', name: 'American', description: 'Custom pricing for American' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div 
              className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ 
                background: gradients.rainbow,
                boxShadow: '0 0 40px rgba(229, 57, 53, 0.3), 0 0 80px rgba(30, 136, 229, 0.2)',
              }}
            >
              <span className="text-4xl font-black text-white drop-shadow-lg">PI</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            <span 
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: gradients.rainbow }}
            >
              {companyInfo.name}
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-6">{companyInfo.tagline}</p>
          
          <div 
            className="h-1 w-32 mx-auto rounded-full mb-8"
            style={{ background: gradients.rainbow }}
          />
          
          <p className="text-gray-500 max-w-xl mx-auto">
            Select a client below to view their contract pricing sheet, or use the standard pricing for new partners.
          </p>
        </div>
        
        {/* Client Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {clients.map((client, i) => (
            <Link
              key={client.slug}
              href={`/contract-pricing/${client.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{client.description}</p>
                </div>
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ 
                    backgroundColor: `${Object.values(brandColors.services)[i % 4]}20`,
                    color: Object.values(brandColors.services)[i % 4],
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${Object.values(brandColors.services)[i % 4]}10 0%, transparent 50%)`,
                }}
              />
            </Link>
          ))}
        </div>
        
        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-300 mb-4">Quick Access</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contract-pricing/standard"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-colors"
            >
              View Standard Pricing
            </Link>
            <Link
              href="/contract-pricing/standard"
              className="px-6 py-3 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
            >
              Download PDF
            </Link>
          </div>
        </div>
        
        {/* Footer Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 text-gray-500 text-sm">
            <span>{companyInfo.tollFree}</span>
            <span>•</span>
            <span>{companyInfo.address}, {companyInfo.city}, {companyInfo.state}</span>
            <span>•</span>
            <span>{companyInfo.website}</span>
          </div>
          <p className="mt-4 text-gray-600 text-xs">
            © 2025 Promos Ink. All rights reserved. | Effective February 10, 2025
          </p>
        </div>
      </div>
    </main>
  );
}
