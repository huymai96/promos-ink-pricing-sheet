'use client';

import React from 'react';
import { brandColors, gradients } from '@/lib/design-tokens';
import { companyInfo } from '@/lib/pricing-data';

interface ClientHeaderProps {
  clientName?: string;
  clientLogo?: string;
  effectiveDate: string;
  variant?: 'hero' | 'compact';
}

/**
 * Client Header Component
 * Displays company branding and client info
 * Used at top of pricing pages and PDFs
 */
export function ClientHeader({
  clientName,
  effectiveDate,
  variant = 'hero',
}: ClientHeaderProps) {
  if (variant === 'compact') {
    return (
      <div className="flex items-center justify-between py-4 px-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4">
          <RainbowLogo size="sm" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">{companyInfo.name}</h1>
            {clientName && (
              <p className="text-sm text-gray-500">Contract Pricing for {clientName}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">Effective: {effectiveDate}</p>
          <p className="text-xs text-gray-500">{companyInfo.tollFree}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo & Title */}
          <div className="flex items-center gap-6">
            <RainbowLogo size="lg" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: gradients.rainbow }}
                >
                  {companyInfo.name}
                </span>
              </h1>
              <p className="text-lg text-gray-400 mt-1">{companyInfo.tagline}</p>
            </div>
          </div>
          
          {/* Contract Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Contract Pricing
              </p>
              <p className="text-5xl font-black text-white">2025</p>
              {clientName && (
                <p className="text-sm text-gray-300 mt-2">
                  Prepared for <span className="font-semibold text-white">{clientName}</span>
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                Effective {effectiveDate}
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mt-8">
          {companyInfo.features.map((feature, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
            >
              ✓ {feature}
            </span>
          ))}
        </div>
        
        {/* Rainbow Bar */}
        <div 
          className="h-1 w-full mt-8 rounded-full"
          style={{ background: gradients.rainbow }}
        />
      </div>
    </div>
  );
}

/**
 * Rainbow Logo Component
 * Matches the Promos Ink brand logo style
 */
function RainbowLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  };

  return (
    <div 
      className={`${sizes[size]} rounded-2xl flex items-center justify-center shadow-lg`}
      style={{ 
        background: gradients.rainbow,
        boxShadow: '0 0 30px rgba(229, 57, 53, 0.3), 0 0 60px rgba(30, 136, 229, 0.2)',
      }}
    >
      <span className="font-black text-white drop-shadow-lg">PI</span>
    </div>
  );
}

/**
 * Section Header Component
 */
interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  accentColor: string;
  badge?: string;
}

export function SectionHeader({
  icon,
  title,
  subtitle,
  description,
  accentColor,
  badge = '2025 RATES',
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-3">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
          style={{ 
            backgroundColor: `${accentColor}15`,
            color: accentColor,
          }}
        >
          {icon}
        </div>
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-1"
            style={{ 
              backgroundColor: `${accentColor}15`,
              color: accentColor,
            }}
          >
            {badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        </div>
      </div>
      {(subtitle || description) && (
        <p className="text-gray-500 max-w-2xl">
          {subtitle && <span className="font-medium text-gray-700">{subtitle}</span>}
          {subtitle && description && ' — '}
          {description}
        </p>
      )}
    </div>
  );
}

