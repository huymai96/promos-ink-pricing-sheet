'use client';

import React from 'react';
import { companyInfo } from '@/lib/tokens';

export function CoverPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0d0d0d]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#0d0d0d]" />
      
      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16">
        {/* Logo area */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-3xl">🎨</span>
            </div>
          </div>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {companyInfo.name}
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
            {companyInfo.tagline}
          </p>
        </div>
        
        {/* Contract Pricing Badge */}
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-50" />
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl px-12 py-8 text-center">
            <div className="text-xs font-bold tracking-[0.3em] text-white/40 mb-2">
              CONTRACT PRICING
            </div>
            <div className="text-7xl md:text-9xl font-black text-white tracking-tighter">
              2025
            </div>
          </div>
        </div>
        
        {/* Service pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { name: 'Screen Printing', color: '#3b82f6', icon: '🖨️' },
            { name: 'Embroidery', color: '#8b5cf6', icon: '🧵' },
            { name: 'DTG/DTF Digital', color: '#06b6d4', icon: '🎯' },
            { name: 'Fulfillment', color: '#22c55e', icon: '📦' },
          ].map((service, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-5 py-3 rounded-full border transition-all hover:scale-105"
              style={{ 
                backgroundColor: `${service.color}15`,
                borderColor: `${service.color}30`,
              }}
            >
              <span>{service.icon}</span>
              <span 
                className="text-sm font-semibold"
                style={{ color: service.color }}
              >
                {service.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {companyInfo.features.map((feature, i) => (
            <div 
              key={i}
              className="px-4 py-2 rounded-lg border border-white/10 bg-white/[0.02] text-white/50 text-sm"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
        
        {/* Bottom info */}
        <div className="text-center text-white/30 text-sm">
          <p className="mb-2">Effective {companyInfo.effectiveDate}</p>
          <p className="mb-2">{companyInfo.address}, {companyInfo.city}</p>
          <p>{companyInfo.tollFree} (toll free) | {companyInfo.office} (office)</p>
        </div>
      </div>
      
      {/* Free Freight Banner */}
      <div className="relative z-10 py-4 px-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border-t border-white/5">
        <p className="text-center text-green-400/80 text-sm">
          ⭐ {companyInfo.freeFreight}
        </p>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent pointer-events-none" />
    </div>
  );
}
