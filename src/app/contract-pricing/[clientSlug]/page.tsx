'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { brandColors } from '@/lib/design-tokens';
import { 
  getClientPricing, 
  formatPrice,
  companyInfo,
} from '@/lib/pricing-data';
import { 
  ClientHeader, 
  SectionHeader,
  SimplePricingTable,
  FinePrint,
  ContactFooter,
  SurchargesCard,
} from '@/components/ui';

/**
 * Contract Pricing Page
 * Dynamic route: /contract-pricing/[clientSlug]
 * Shows pricing tables for screen print, embroidery, digital, and fulfillment
 */
export default function ContractPricingPage() {
  const params = useParams();
  const clientSlug = params?.clientSlug as string || 'standard';
  const pricing = getClientPricing(clientSlug);
  
  // Format data for tables
  const screenPrintHeaders = ['Colors', '24-48', '49-143', '144-575', '576-1727', '1728+'];
  const screenPrintRows = pricing.screenPrint.flatGoods.map(row => ({
    label: `${row.colors} Color${row.colors > 1 ? 's' : ''}`,
    values: row.priceBreaks.map(pb => pb.price),
  }));
  
  const embroideryHeaders = ['Stitch Count', '12-47', '48-144', '145-576', '577-2000', '2001-5000', '5001+'];
  const embroideryRows = pricing.embroidery.flatGoods.map(row => ({
    label: row.stitchCountMax 
      ? `${row.stitchCountMin.toLocaleString()}-${row.stitchCountMax.toLocaleString()}`
      : `${row.stitchCountMin.toLocaleString()}+`,
    values: row.priceBreaks.map(pb => pb.price),
  }));
  
  const dtgHeaders = ['Garment Type', '6-12', '13-36', '37-72', '73+'];
  const dtgRows = pricing.digital.dtg.map(row => ({
    label: row.size,
    values: row.priceBreaks.map(pb => pb.price),
  }));
  
  const dtfHeaders = ['Imprint Size', '6-12', '13-49', '50-99', '100+'];
  const dtfRows = pricing.digital.dtf.map(row => ({
    label: row.size,
    values: row.priceBreaks.map(pb => pb.price),
  }));
  
  const fulfillmentHeaders = ['Service', '0-500', '501-1K', '1K-2.5K', '2.5K-5K', '5K+'];
  const fulfillmentRows = pricing.fulfillment.pickPack.map(row => ({
    label: row.service,
    values: row.priceBreaks.map(pb => pb.price),
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <ClientHeader 
        clientName={pricing.clientName !== 'Standard Contract Pricing' ? pricing.clientName : undefined}
        effectiveDate={pricing.effectiveDate}
      />
      
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-3 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Contract Pricing for <span className="font-medium text-gray-900">{pricing.clientName}</span>
          </div>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / PDF
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* ===== SCREEN PRINTING ===== */}
        <section className="mb-16">
          <SectionHeader
            icon="🖨️"
            title="Screen Printing"
            subtitle="Flat Goods Pricing"
            description='Max print size: 14.5" x 16.5" | Per piece pricing based on quantity and color count'
            accentColor={brandColors.services.screenPrint}
          />
          
          <SimplePricingTable
            headers={screenPrintHeaders}
            rows={screenPrintRows}
            accentColor={brandColors.services.screenPrint}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SurchargesCard
              title="Setup Charges"
              items={pricing.screenPrint.setupCharges}
              accentColor={brandColors.services.screenPrint}
            />
            <SurchargesCard
              title="Additional Charges"
              items={pricing.screenPrint.additionalCharges.slice(0, 6)}
              accentColor={brandColors.services.screenPrint}
            />
          </div>
        </section>
        
        {/* ===== EMBROIDERY ===== */}
        <section className="mb-16">
          <SectionHeader
            icon="🧵"
            title="Embroidery"
            subtitle="Flat Goods & Cap Fronts"
            description="All minimums per design, per location, per order"
            accentColor={brandColors.services.embroidery}
          />
          
          <SimplePricingTable
            headers={embroideryHeaders}
            rows={embroideryRows}
            accentColor={brandColors.services.embroidery}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SurchargesCard
              title="Digitizing"
              items={pricing.embroidery.digitizing}
              accentColor={brandColors.services.embroidery}
            />
            <SurchargesCard
              title="Additional Charges"
              items={pricing.embroidery.additionalCharges.slice(0, 6)}
              accentColor={brandColors.services.embroidery}
            />
          </div>
        </section>
        
        {/* ===== DIGITAL PRINTING ===== */}
        <section className="mb-16">
          <SectionHeader
            icon="🎯"
            title="DTG & DTF Digital"
            subtitle="NO SETUP FEES!"
            description="Full-color digital printing with unlimited colors"
            accentColor={brandColors.services.dtg}
            badge="NO SETUP"
          />
          
          {/* DTG */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span 
                className="px-3 py-1 rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: brandColors.services.dtg }}
              >
                DTG
              </span>
              <span className="text-gray-700 font-medium">Direct to Garment</span>
              <span className="text-gray-400 text-sm">| 100% Cotton | Softer Feel</span>
            </div>
            <SimplePricingTable
              headers={dtgHeaders}
              rows={dtgRows}
              accentColor={brandColors.services.dtg}
            />
          </div>
          
          {/* DTF */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span 
                className="px-3 py-1 rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: brandColors.services.dtf }}
              >
                DTF
              </span>
              <span className="text-gray-700 font-medium">Direct to Film</span>
              <span className="text-gray-400 text-sm">| Any Fabric | More Versatile</span>
            </div>
            <SimplePricingTable
              headers={dtfHeaders}
              rows={dtfRows}
              accentColor={brandColors.services.dtf}
            />
          </div>
          
          <SurchargesCard
            title="Additional Charges"
            items={pricing.digital.additionalCharges}
            accentColor={brandColors.services.dtg}
          />
        </section>
        
        {/* ===== FULFILLMENT ===== */}
        <section className="mb-16">
          <SectionHeader
            icon="📦"
            title="Fulfillment Services"
            subtitle="Pick & Pack Pricing"
            description="By monthly order volume | Warehousing, kitting, drop shipping"
            accentColor={brandColors.services.fulfillment}
          />
          
          <SimplePricingTable
            headers={fulfillmentHeaders}
            rows={fulfillmentRows}
            accentColor={brandColors.services.fulfillment}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <SurchargesCard
              title="Storage (Monthly)"
              items={pricing.fulfillment.storage}
              accentColor={brandColors.services.fulfillment}
            />
            <SurchargesCard
              title="Additional Services"
              items={pricing.fulfillment.additionalServices}
              accentColor={brandColors.services.fulfillment}
            />
          </div>
        </section>
        
        {/* ===== TERMS & CONDITIONS ===== */}
        <FinePrint 
          terms={pricing.terms} 
          notes={pricing.notes}
          className="mb-12"
        />
        
        {/* ===== CONTACT FOOTER ===== */}
        <ContactFooter />
      </div>
    </main>
  );
}

