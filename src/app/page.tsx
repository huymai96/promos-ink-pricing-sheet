'use client';

import { CoverPage } from '@/components/CoverPage';
import { PricingTable } from '@/components/PricingTable';
import { SectionHeader } from '@/components/SectionHeader';
import { NotesCard } from '@/components/NotesCard';
import { FulfillmentSection } from '@/components/FulfillmentSection';
import { 
  screenPrintingPrices, 
  embroideryPrices, 
  digitalPrices,
  fulfillmentPrices 
} from '@/lib/tokens';

export default function PricingSheet() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      {/* ===== COVER PAGE ===== */}
      <CoverPage />
      
      {/* ===== SCREEN PRINTING ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="🖨️"
            title={screenPrintingPrices.title}
            subtitle={screenPrintingPrices.subtitle}
            description={screenPrintingPrices.description}
            accentColor="#3b82f6"
          />
          
          <PricingTable
            headers={screenPrintingPrices.headers}
            rows={screenPrintingPrices.rows}
            accentColor="#3b82f6"
          />
          
          <NotesCard 
            notes={screenPrintingPrices.notes} 
            accentColor="#3b82f6" 
          />
          
          {/* Visual decoration */}
          <div className="mt-12 p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
                💡
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Pro Tip</h4>
                <p className="text-white/50 text-sm">
                  Orders of 500+ pieces qualify for our best rates. Contact us for custom quotes on large orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== EMBROIDERY ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#0f0f1a]">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="🧵"
            title={embroideryPrices.title}
            subtitle={embroideryPrices.subtitle}
            description={embroideryPrices.description}
            accentColor="#8b5cf6"
          />
          
          <PricingTable
            headers={embroideryPrices.headers}
            rows={embroideryPrices.rows}
            accentColor="#8b5cf6"
          />
          
          <NotesCard 
            notes={embroideryPrices.notes} 
            accentColor="#8b5cf6" 
          />
          
          {/* Stitch count guide */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { range: 'Up to 5K', desc: 'Simple logos, small text', example: 'Left chest logo' },
              { range: '5K - 10K', desc: 'Detailed logos, medium designs', example: 'Back yoke design' },
              { range: '10K+', desc: 'Complex artwork, large fills', example: 'Full back embroidery' },
            ].map((guide, i) => (
              <div key={i} className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/5">
                <div className="text-purple-400 font-mono font-bold mb-2">{guide.range}</div>
                <div className="text-white/70 text-sm mb-1">{guide.desc}</div>
                <div className="text-white/40 text-xs">Example: {guide.example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ===== DIGITAL PRINTING ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="🎯"
            title={digitalPrices.title}
            subtitle={digitalPrices.subtitle}
            description={digitalPrices.description}
            accentColor="#06b6d4"
          />
          
          <PricingTable
            headers={digitalPrices.headers}
            rows={digitalPrices.rows}
            accentColor="#06b6d4"
          />
          
          <NotesCard 
            notes={digitalPrices.notes} 
            accentColor="#06b6d4" 
          />
          
          {/* DTG vs DTF comparison */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  DTG
                </div>
                <h4 className="font-semibold text-white">Direct to Garment</h4>
              </div>
              <p className="text-white/50 text-sm mb-3">
                Best for 100% cotton garments. Prints directly on fabric for a soft, breathable feel.
              </p>
              <div className="text-cyan-400 text-xs font-medium">✓ Soft hand feel • ✓ Eco-friendly inks</div>
            </div>
            
            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  DTF
                </div>
                <h4 className="font-semibold text-white">Direct to Film</h4>
              </div>
              <p className="text-white/50 text-sm mb-3">
                Works on all fabric types including polyester. Vibrant colors with excellent durability.
              </p>
              <div className="text-cyan-400 text-xs font-medium">✓ Any fabric type • ✓ Vibrant colors</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== FULFILLMENT ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#0a1a0f]">
        {/* Background decoration */}
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="📦"
            title={fulfillmentPrices.title}
            subtitle={fulfillmentPrices.subtitle}
            description={fulfillmentPrices.description}
            accentColor="#22c55e"
          />
          
          <FulfillmentSection accentColor="#22c55e" />
          
          <NotesCard 
            notes={fulfillmentPrices.notes} 
            accentColor="#22c55e" 
          />
          
          {/* Integration badges */}
          <div className="mt-12 p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
            <h4 className="font-semibold text-white mb-4">Supported Integrations</h4>
            <div className="flex flex-wrap gap-3">
              {['Shopify', 'WooCommerce', 'BigCommerce', 'Magento', 'Custom API'].map((platform, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-lg bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== CONTACT / FOOTER ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-[#0d0d0d]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Rainbow line */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full mb-12" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            Contact our team for custom quotes, volume discounts, or to set up your contract account.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-3xl mb-3">📧</div>
              <div className="text-white/40 text-sm mb-1">Email</div>
              <div className="text-white font-medium">contracts@promosink.com</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-3xl mb-3">📞</div>
              <div className="text-white/40 text-sm mb-1">Phone</div>
              <div className="text-white font-medium">(555) 123-4567</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-3xl mb-3">🌐</div>
              <div className="text-white/40 text-sm mb-1">Website</div>
              <div className="text-white font-medium">www.promosink.com</div>
            </div>
          </div>
          
          {/* Legal */}
          <div className="text-white/30 text-xs">
            <p className="mb-2">
              Prices effective January 1, 2025. Subject to change without notice.
            </p>
            <p>
              © 2025 Promos Ink. All rights reserved. | Terms & Conditions apply.
            </p>
          </div>
        </div>
      </section>
      
      {/* Print Button (hidden in print) */}
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Export PDF
        </button>
      </div>
    </main>
  );
}
