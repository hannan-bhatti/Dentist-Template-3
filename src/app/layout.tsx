import type { Metadata } from 'next';
import './globals.css';
import { VitalisLogo } from '@/components/VitalisLogo';
import { MobileNavigation } from '@/components/MobileNavigation';
import { Phone, Calendar, Clock, MapPin, ArrowRight, HeartHandshake, ShieldCheck, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Vitalis Family Health | Integrative Polyclinic & Multi-Generational Care",
  description: "Caring for every generation under one roof in DHA Karachi & Lahore. Centers of excellence in Family Medicine, Maternal Gynecology, Gentle Pediatric Dental, Physiotherapy, Diagnostic Labs, and Preventive Cardiology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Top Announcement Bar */}
        <div className="top-banner">
          <div className="container top-banner-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={14} color="#f59e0b" />
              <span><strong>Welcoming New Families:</strong> Same-Day Appointments for Kids, Parents &amp; Seniors</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span>Family Care Desk: <strong>+92 (21) 3584-3320</strong></span>
              <a href="https://wa.me/923006654320" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#25d366', fontWeight: 600 }}>
                <MessageCircle size={14} color="#25d366" />
                <span style={{ color: '#25d366' }}>WhatsApp Care Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Site Header */}
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/">
              <VitalisLogo />
            </Link>

            <nav className="nav-links">
              <Link href="/#specialties" className="nav-link">Specialties</Link>
              <Link href="/#family-bundles" className="nav-link">Family Plans</Link>
              <Link href="/#maternal-tracker" className="nav-link">Mother &amp; Baby</Link>
              <Link href="/#doctors" className="nav-link">Our Doctors</Link>
              <Link href="/services" className="nav-link">All Services</Link>
              <Link href="/#reviews" className="nav-link">Reviews</Link>
            </nav>

            <div className="nav-actions">
              <a href="tel:+922135843320" className="header-phone">
                <Phone size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>(021) 3584-3320</span>
              </a>
              <Link href="/booking" className="btn-primary" style={{ padding: '0.65rem 1.45rem', fontSize: '0.875rem' }}>
                <Calendar size={15} style={{ flexShrink: 0 }} />
                <span>Book Appointment</span>
              </Link>
            </div>

            <MobileNavigation />
          </div>
        </header>

        <main>{children}</main>

        {/* Botanical Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
                  <VitalisLogo variant="light" />
                </Link>
                <p style={{ maxWidth: '340px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.925rem' }}>
                  Your neighborhood&apos;s trusted healthcare home. Dedicated to gentle pediatric dentistry, maternal obstetrics, senior mobility physiotherapy, and preventive family medicine.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    <ShieldCheck size={13} color="#f59e0b" /> PMDC Registered
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    ISO 15189 Lab Partner
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.75rem', borderRadius: '6px' }}>
                    4.97 ★ Google Top Family Center
                  </span>
                </div>
              </div>

              <div className="footer-col">
                <h4>Specialties</h4>
                <ul>
                  <li><Link href="/services#family-phy">Family Medicine &amp; Primary Care</Link></li>
                  <li><Link href="/services#gynea">Obstetrics &amp; Maternal Wellness</Link></li>
                  <li><Link href="/services#dental">Gentle Family Dental &amp; Aligners</Link></li>
                  <li><Link href="/services#physiotherapy">Postnatal &amp; Senior Physiotherapy</Link></li>
                  <li><Link href="/services#cardiology">Preventive Heart &amp; Blood Pressure</Link></li>
                  <li><Link href="/services#labs">Family Diagnostic Blood Panels</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Family Navigation</h4>
                <ul>
                  <li><Link href="/#family-bundles">Family Health Care Bundles</Link></li>
                  <li><Link href="/#maternal-tracker">Maternal Trimester Roadmap</Link></li>
                  <li><Link href="/#doctors">Dedicated Family Physicians</Link></li>
                  <li><Link href="/booking">Real-Time Booking Portal</Link></li>
                  <li><Link href="/#reviews">Patient &amp; Family Stories</Link></li>
                  <li><Link href="/#faq">Family Billing &amp; FAQs</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Pavilion Locations</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <MapPin size={18} color="#a7f3d0" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>Vitalis Wellness Pavilion, Khayaban-e-Shahbaz<br/>Phase 6, DHA, Karachi, Pakistan</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Clock size={16} color="#a7f3d0" style={{ flexShrink: 0 }} />
                    <span>Mon – Sat: 8:30 AM – 8:30 PM (Priority Desk 24/7)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Phone size={16} color="#a7f3d0" style={{ flexShrink: 0 }} />
                    <span>Direct Desk: +92 (21) 3584-3320</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/booking" className="btn-amber" style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem 1rem' }}>
                      Book Family Slot Online <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; {new Date().getFullYear()} Vitalis Family Health. All rights reserved. Compassionate Multi-Generational Healthcare.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#family-charter">Family Charter</a>
                <a href="#patient-rights">Patient Rights</a>
                <a href="#child-safety">Child Protection Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
