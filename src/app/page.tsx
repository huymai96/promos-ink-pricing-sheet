'use client';

import { CoverPage } from '@/components/CoverPage';
import { PricingTable } from '@/components/PricingTable';
import { SectionHeader } from '@/components/SectionHeader';
import { NotesCard } from '@/components/NotesCard';
import { 
  screenPrintingPrices, 
  embroideryPrices, 
  digitalPrices,
  fulfillmentPrices,
  companyInfo
} from '@/lib/tokens';

export default function PricingSheet() {
  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      {/* ===== COVER PAGE ===== */}
      <CoverPage />
      
      {/* ===== SCREEN PRINTING ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
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
          
          {/* Setup Charges */}
          <div className="mt-8 p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">
              Set-Up Charges
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {screenPrintingPrices.setupCharges.map((charge, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white font-medium">{charge.type}</span>
                  <span className="text-blue-400 font-mono text-lg">{charge.price}</span>
                  <span className="text-white/40 text-xs">{charge.notes}</span>
                </div>
              ))}
            </div>
          </div>
          
          <NotesCard 
            notes={screenPrintingPrices.notes} 
            accentColor="#3b82f6" 
          />
        </div>
      </section>
      
      {/* ===== EMBROIDERY ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#0f0f1a]">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="🧵"
            title={embroideryPrices.title}
            subtitle={embroideryPrices.subtitle}
            description={embroideryPrices.description}
            accentColor="#8b5cf6"
          />
          
          <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">
            Flat Goods & Cap Fronts
          </h4>
          <PricingTable
            headers={embroideryPrices.headers}
            rows={embroideryPrices.rows}
            accentColor="#8b5cf6"
          />
          
          {/* Cap Sides & Backs */}
          <div className="mt-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-4">
              {embroideryPrices.capPricing.title}
            </h4>
            <PricingTable
              headers={embroideryPrices.capPricing.headers}
              rows={embroideryPrices.capPricing.rows}
              accentColor="#8b5cf6"
            />
          </div>
          
          <NotesCard 
            notes={embroideryPrices.notes} 
            accentColor="#8b5cf6" 
          />
        </div>
      </section>
      
      {/* ===== DIGITAL PRINTING ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="🎯"
            title={digitalPrices.title}
            subtitle={digitalPrices.subtitle}
            description={digitalPrices.description}
            accentColor="#06b6d4"
            badgeText="NO SETUP FEES!"
          />
          
          {/* DTG Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-sm">
                DTG
              </div>
              <h4 className="text-white font-semibold">{digitalPrices.dtg.title}</h4>
            </div>
            <p className="text-white/40 text-sm mb-4">{digitalPrices.dtg.subtitle}</p>
            <PricingTable
              headers={digitalPrices.dtg.headers}
              rows={digitalPrices.dtg.rows}
              accentColor="#06b6d4"
            />
            <p className="text-cyan-400/70 text-sm mt-2">{digitalPrices.dtg.notes[0]}</p>
          </div>
          
          {/* DTF Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-sm">
                DTF
              </div>
              <h4 className="text-white font-semibold">{digitalPrices.dtf.title}</h4>
            </div>
            <p className="text-white/40 text-sm mb-4">{digitalPrices.dtf.subtitle}</p>
            <PricingTable
              headers={digitalPrices.dtf.headers}
              rows={digitalPrices.dtf.rows}
              accentColor="#06b6d4"
            />
            <p className="text-cyan-400/70 text-sm mt-2">{digitalPrices.dtf.notes[0]}</p>
          </div>
          
          {/* DTG vs DTF comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
              <div className="text-cyan-400 font-bold mb-2">DTG - Direct to Garment</div>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Softer feel on fabric</li>
                <li>✓ Best for 100% cotton</li>
                <li>✓ Eco-friendly inks</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5">
              <div className="text-cyan-400 font-bold mb-2">DTF - Direct to Film</div>
              <ul className="text-white/60 text-sm space-y-1">
                <li>✓ Works on any fabric type</li>
                <li>✓ More vibrant colors</li>
                <li>✓ Better for polyester</li>
              </ul>
            </div>
          </div>
          
          <NotesCard 
            notes={digitalPrices.notes} 
            accentColor="#06b6d4" 
          />
        </div>
      </section>
      
      {/* ===== FULFILLMENT ===== */}
      <section className="page-break print-dark-bg min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#0a1a0f]">
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px]" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            icon="📦"
            title={fulfillmentPrices.title}
            subtitle={fulfillmentPrices.subtitle}
            description={fulfillmentPrices.description}
            accentColor="#22c55e"
          />
          
          {/* Pick & Pack */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">
              {fulfillmentPrices.pickPack.title}
            </h4>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] to-[#252525]">
              <table className="w-full">
                <thead>
                  <tr>
                    {fulfillmentPrices.pickPack.headers.map((header, i) => (
                      <th
                        key={i}
                        className={`px-4 py-4 text-xs font-bold uppercase tracking-wider ${
                          i === 0 ? 'text-left bg-green-600' : 'text-center bg-[#2d2d2d]'
                        } text-white`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {fulfillmentPrices.pickPack.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-white/5">
                      <td className="py-3 px-4 font-semibold text-white/90 border-l-[3px] border-green-500">
                        {row.service}
                      </td>
                      {row.prices.map((price, priceIndex) => (
                        <td key={priceIndex} className="py-3 px-4 text-center font-mono text-sm text-white/80">
                          {price}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Storage */}
          <div className="mb-10">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">
              {fulfillmentPrices.storage.title}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fulfillmentPrices.storage.items.map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-green-500/20 bg-green-500/5 text-center">
                  <div className="text-white font-medium mb-1">{item.service}</div>
                  <div className="text-green-400 font-mono text-lg font-bold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="mb-8 p-5 rounded-xl border border-green-500/20 bg-green-500/5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-green-400 mb-4">
              Additional Services
            </h4>
            <div className="space-y-3">
              {fulfillmentPrices.additional.map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-white/70">{item.service}</span>
                  <span className="text-green-400 font-mono">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <NotesCard 
            notes={fulfillmentPrices.notes} 
            accentColor="#22c55e" 
          />
        </div>
      </section>
      
      {/* ===== CONTACT / FOOTER ===== */}
      <section className="py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-[#0d0d0d]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full mb-12" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Partner?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            {companyInfo.tagline}
          </p>
          
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-3xl mb-3">📞</div>
              <div className="text-white/40 text-sm mb-1">Phone</div>
              <div className="text-white font-medium">{companyInfo.tollFree} (toll free)</div>
              <div className="text-white/60">{companyInfo.office} (office)</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="text-3xl mb-3">📍</div>
              <div className="text-white/40 text-sm mb-1">Address</div>
              <div className="text-white font-medium">{companyInfo.address}</div>
              <div className="text-white/60">{companyInfo.city}</div>
            </div>
          </div>
          
          {/* Team Contacts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {companyInfo.contacts.map((contact, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="text-white font-medium">{contact.name}</div>
                <div className="text-white/40 text-xs">Ext. {contact.ext}</div>
                <div className="text-blue-400 text-xs truncate">{contact.email}</div>
              </div>
            ))}
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {companyInfo.features.map((feature, i) => (
              <span 
                key={i}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/70 text-sm"
              >
                ✓ {feature}
              </span>
            ))}
          </div>
          
          {/* Free Freight Note */}
          <p className="text-green-400/70 text-sm mb-8">
            * {companyInfo.freeFreight}
          </p>
          
          {/* Legal */}
          <div className="text-white/30 text-xs">
            <p className="mb-2">
              Effective {companyInfo.effectiveDate}. Prices subject to change without notice.
            </p>
            <p className="mb-2">
              Normal Production Time: {companyInfo.productionTime}
            </p>
            <p>
              © 2025 Promos Ink. All rights reserved. | This is a pricing guide, final pricing determined after artwork and materials received.
            </p>
          </div>
        </div>
      </section>
      
      {/* Print Button */}
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
