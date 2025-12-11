'use client';

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { brandColors } from '@/lib/design-tokens';
import { 
  ContractPricing, 
  companyInfo, 
  formatPrice,
  formatQtyRange,
} from '@/lib/pricing-data';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_0.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_0.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_0.woff2', fontWeight: 700 },
  ],
});

// PDF Styles - Matching Figma design tokens
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    padding: 40,
    backgroundColor: '#FFFFFF',
  },
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: brandColors.ink.charcoal,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBox: {
    width: 40,
    height: 40,
    backgroundColor: brandColors.services.screenPrint,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 700,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 700,
    color: brandColors.ink.black,
  },
  tagline: {
    fontSize: 8,
    color: brandColors.ink.slate,
  },
  headerRight: {
    textAlign: 'right',
  },
  effectiveDate: {
    fontSize: 10,
    fontWeight: 600,
    color: brandColors.ink.black,
  },
  contactInfo: {
    fontSize: 8,
    color: brandColors.ink.slate,
  },
  
  // Section
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  sectionBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    fontSize: 7,
    fontWeight: 700,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: brandColors.ink.black,
  },
  sectionSubtitle: {
    fontSize: 8,
    color: brandColors.ink.slate,
    marginBottom: 8,
  },
  
  // Table
  table: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: brandColors.ink.charcoal,
  },
  tableHeaderCell: {
    padding: 8,
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  tableHeaderCellFirst: {
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  tableRowAlt: {
    backgroundColor: '#F9FAFB',
  },
  tableCell: {
    padding: 8,
    fontSize: 9,
    textAlign: 'center',
    color: brandColors.ink.graphite,
  },
  tableCellFirst: {
    textAlign: 'left',
    fontWeight: 600,
    color: brandColors.ink.black,
  },
  
  // Surcharges
  surchargeBox: {
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 6,
    marginTop: 10,
  },
  surchargeTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: brandColors.ink.black,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  surchargeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  surchargeName: {
    fontSize: 8,
    color: brandColors.ink.graphite,
  },
  surchargePrice: {
    fontSize: 8,
    fontWeight: 600,
    color: brandColors.ink.black,
  },
  
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerText: {
    fontSize: 7,
    color: brandColors.ink.slate,
  },
  
  // Rainbow bar
  rainbowBar: {
    height: 3,
    marginVertical: 15,
    flexDirection: 'row',
  },
  rainbowSegment: {
    flex: 1,
  },
});

interface ContractPricingPdfProps {
  pricing: ContractPricing;
}

/**
 * Contract Pricing PDF Document
 * Generates a printable PDF matching the web layout
 */
export function ContractPricingPdf({ pricing }: ContractPricingPdfProps) {
  const qtyHeaders = ['24-48', '49-143', '144-575', '576-1727', '1728+'];
  
  return (
    <Document>
      {/* Cover / Screen Printing Page */}
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>PI</Text>
            </View>
            <View>
              <Text style={styles.companyName}>{companyInfo.name}</Text>
              <Text style={styles.tagline}>{companyInfo.tagline}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.effectiveDate}>2025 Contract Pricing</Text>
            <Text style={styles.contactInfo}>{companyInfo.tollFree}</Text>
            <Text style={styles.contactInfo}>{companyInfo.address}</Text>
          </View>
        </View>
        
        {/* Rainbow Bar */}
        <View style={styles.rainbowBar}>
          {Object.values(brandColors.rainbow).map((color, i) => (
            <View key={i} style={[styles.rainbowSegment, { backgroundColor: color }]} />
          ))}
        </View>
        
        {/* Screen Printing Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionBadge, { backgroundColor: brandColors.services.screenPrint }]}>
              <Text>SCREEN PRINTING</Text>
            </View>
            <Text style={styles.sectionTitle}>Flat Goods Pricing</Text>
          </View>
          <Text style={styles.sectionSubtitle}>Max print size: 14.5" x 16.5" | Per piece pricing</Text>
          
          {/* Pricing Table */}
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.tableHeaderCellFirst, { flex: 1 }]}>Colors</Text>
              {qtyHeaders.map((h, i) => (
                <Text key={i} style={[styles.tableHeaderCell, { flex: 1 }]}>{h}</Text>
              ))}
            </View>
            {pricing.screenPrint.flatGoods.map((row, rowIndex) => (
              <View 
                key={rowIndex} 
                style={[styles.tableRow, rowIndex % 2 === 1 && styles.tableRowAlt]}
              >
                <Text style={[styles.tableCell, styles.tableCellFirst, { flex: 1 }]}>
                  {row.colors} Color{row.colors > 1 ? 's' : ''}
                </Text>
                {row.priceBreaks.map((pb, i) => (
                  <Text key={i} style={[styles.tableCell, { flex: 1 }]}>
                    {formatPrice(pb.price)}
                  </Text>
                ))}
              </View>
            ))}
          </View>
          
          {/* Setup Charges */}
          <View style={styles.surchargeBox}>
            <Text style={styles.surchargeTitle}>Setup Charges</Text>
            {pricing.screenPrint.setupCharges.map((charge, i) => (
              <View key={i} style={styles.surchargeItem}>
                <Text style={styles.surchargeName}>{charge.name} - {charge.description}</Text>
                <Text style={styles.surchargePrice}>{formatPrice(charge.price)}{charge.unit}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Effective {pricing.effectiveDate} | Prices subject to change
          </Text>
          <Text style={styles.footerText}>
            © 2025 Promos Ink | {companyInfo.website}
          </Text>
        </View>
      </Page>
      
      {/* Embroidery Page */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <View style={[styles.logoBox, { backgroundColor: brandColors.services.embroidery }]}>
              <Text style={styles.logoText}>PI</Text>
            </View>
            <View>
              <Text style={styles.companyName}>{companyInfo.name}</Text>
              <Text style={styles.tagline}>Contract Pricing 2025</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionBadge, { backgroundColor: brandColors.services.embroidery }]}>
              <Text>EMBROIDERY</Text>
            </View>
            <Text style={styles.sectionTitle}>Flat Goods & Cap Fronts</Text>
          </View>
          <Text style={styles.sectionSubtitle}>All minimums per design, per location, per order</Text>
          
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.tableHeaderCellFirst, { flex: 1.5 }]}>Stitch Count</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>12-47</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>48-144</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>145-576</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>577-2000</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>2001+</Text>
            </View>
            {pricing.embroidery.flatGoods.map((row, rowIndex) => (
              <View 
                key={rowIndex} 
                style={[styles.tableRow, rowIndex % 2 === 1 && styles.tableRowAlt]}
              >
                <Text style={[styles.tableCell, styles.tableCellFirst, { flex: 1.5 }]}>
                  {row.stitchCountMax ? `${row.stitchCountMin.toLocaleString()}-${row.stitchCountMax.toLocaleString()}` : `${row.stitchCountMin.toLocaleString()}+`}
                </Text>
                {row.priceBreaks.slice(0, 5).map((pb, i) => (
                  <Text key={i} style={[styles.tableCell, { flex: 1 }]}>
                    {formatPrice(pb.price)}
                  </Text>
                ))}
              </View>
            ))}
          </View>
          
          <View style={styles.surchargeBox}>
            <Text style={styles.surchargeTitle}>Digitizing & Additional Charges</Text>
            {pricing.embroidery.digitizing.map((charge, i) => (
              <View key={i} style={styles.surchargeItem}>
                <Text style={styles.surchargeName}>{charge.name}</Text>
                <Text style={styles.surchargePrice}>{formatPrice(charge.price)}{charge.unit}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Effective {pricing.effectiveDate}</Text>
          <Text style={styles.footerText}>© 2025 Promos Ink</Text>
        </View>
      </Page>
      
      {/* Digital Printing Page */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <View style={[styles.logoBox, { backgroundColor: brandColors.services.dtg }]}>
              <Text style={styles.logoText}>PI</Text>
            </View>
            <View>
              <Text style={styles.companyName}>{companyInfo.name}</Text>
              <Text style={styles.tagline}>Contract Pricing 2025</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionBadge, { backgroundColor: brandColors.services.dtg }]}>
              <Text>DTG & DTF DIGITAL</Text>
            </View>
            <Text style={styles.sectionTitle}>NO SETUP FEES!</Text>
          </View>
          
          {/* DTG */}
          <Text style={[styles.sectionSubtitle, { fontWeight: 600, marginTop: 10 }]}>DTG - Direct to Garment (100% Cotton)</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.tableHeaderCellFirst, { flex: 1.5 }]}>Garment</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>6-12</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>13-36</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>37-72</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>73+</Text>
            </View>
            {pricing.digital.dtg.map((row, i) => (
              <View key={i} style={[styles.tableRow, i % 2 === 1 && styles.tableRowAlt]}>
                <Text style={[styles.tableCell, styles.tableCellFirst, { flex: 1.5 }]}>{row.size}</Text>
                {row.priceBreaks.map((pb, j) => (
                  <Text key={j} style={[styles.tableCell, { flex: 1 }]}>{formatPrice(pb.price)}</Text>
                ))}
              </View>
            ))}
          </View>
          
          {/* DTF */}
          <Text style={[styles.sectionSubtitle, { fontWeight: 600, marginTop: 15 }]}>DTF - Direct to Film (Any Fabric)</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.tableHeaderCellFirst, { flex: 1.5 }]}>Size</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>6-12</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>13-49</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>50-99</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>100+</Text>
            </View>
            {pricing.digital.dtf.map((row, i) => (
              <View key={i} style={[styles.tableRow, i % 2 === 1 && styles.tableRowAlt]}>
                <Text style={[styles.tableCell, styles.tableCellFirst, { flex: 1.5 }]}>{row.size}</Text>
                {row.priceBreaks.map((pb, j) => (
                  <Text key={j} style={[styles.tableCell, { flex: 1 }]}>{formatPrice(pb.price)}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Effective {pricing.effectiveDate}</Text>
          <Text style={styles.footerText}>© 2025 Promos Ink</Text>
        </View>
      </Page>
      
      {/* Fulfillment Page */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <View style={[styles.logoBox, { backgroundColor: brandColors.services.fulfillment }]}>
              <Text style={styles.logoText}>PI</Text>
            </View>
            <View>
              <Text style={styles.companyName}>{companyInfo.name}</Text>
              <Text style={styles.tagline}>Contract Pricing 2025</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionBadge, { backgroundColor: brandColors.services.fulfillment }]}>
              <Text>FULFILLMENT</Text>
            </View>
            <Text style={styles.sectionTitle}>Pick & Pack Services</Text>
          </View>
          
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.tableHeaderCellFirst, { flex: 1.5 }]}>Service</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>0-500</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>501-1K</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>1K-2.5K</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>2.5K-5K</Text>
              <Text style={[styles.tableHeaderCell, { flex: 1 }]}>5K+</Text>
            </View>
            {pricing.fulfillment.pickPack.map((row, i) => (
              <View key={i} style={[styles.tableRow, i % 2 === 1 && styles.tableRowAlt]}>
                <Text style={[styles.tableCell, styles.tableCellFirst, { flex: 1.5 }]}>{row.service}</Text>
                {row.priceBreaks.map((pb, j) => (
                  <Text key={j} style={[styles.tableCell, { flex: 1 }]}>{formatPrice(pb.price)}</Text>
                ))}
              </View>
            ))}
          </View>
          
          <View style={styles.surchargeBox}>
            <Text style={styles.surchargeTitle}>Storage (Monthly)</Text>
            {pricing.fulfillment.storage.map((item, i) => (
              <View key={i} style={styles.surchargeItem}>
                <Text style={styles.surchargeName}>{item.name}</Text>
                <Text style={styles.surchargePrice}>{formatPrice(item.price)}{item.unit}</Text>
              </View>
            ))}
          </View>
        </View>
        
        {/* Terms */}
        <View style={[styles.surchargeBox, { marginTop: 20 }]}>
          <Text style={styles.surchargeTitle}>Terms & Conditions</Text>
          {pricing.terms.slice(0, 5).map((term, i) => (
            <Text key={i} style={[styles.surchargeName, { marginBottom: 3 }]}>• {term}</Text>
          ))}
        </View>
        
        {/* Contact Footer */}
        <View style={{ marginTop: 20, padding: 15, backgroundColor: brandColors.ink.charcoal, borderRadius: 8 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 700, textAlign: 'center', marginBottom: 5 }}>
            Ready to Partner?
          </Text>
          <Text style={{ color: '#9CA3AF', fontSize: 8, textAlign: 'center' }}>
            {companyInfo.tollFree} | {companyInfo.office} | {companyInfo.address}, {companyInfo.city}, {companyInfo.state} {companyInfo.zip}
          </Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Effective {pricing.effectiveDate} | Prices subject to change</Text>
          <Text style={styles.footerText}>© 2025 Promos Ink | {companyInfo.website}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default ContractPricingPdf;

