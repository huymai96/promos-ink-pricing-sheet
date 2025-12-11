'use client';

import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badgeText?: string;
}

export function SectionHeader({ 
  icon, 
  title, 
  subtitle, 
  description, 
  accentColor,
  badgeText = '2025 RATES'
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          {icon}
        </div>
        <div>
          <div 
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest mb-1"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {badgeText}
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>
      </div>
      <p className="text-white/50 text-sm max-w-2xl">
        {subtitle} — {description}
      </p>
    </div>
  );
}

