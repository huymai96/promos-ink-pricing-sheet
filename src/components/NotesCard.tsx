'use client';

import React from 'react';

interface NotesCardProps {
  notes: string[];
  accentColor: string;
}

export function NotesCard({ notes, accentColor }: NotesCardProps) {
  return (
    <div 
      className="mt-6 p-5 rounded-xl border border-white/10 bg-white/[0.02]"
    >
      <h4 
        className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
        style={{ color: accentColor }}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Important Notes
      </h4>
      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
            <span style={{ color: accentColor }} className="mt-1">•</span>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
}

