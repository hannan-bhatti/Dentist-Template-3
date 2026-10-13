'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, MessageCircle, ChevronRight, HeartHandshake, ShieldCheck } from 'lucide-react';
import styles from './MobileNavigation.module.css';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const links = [
    { href: '/#specialties', label: 'Specialty Centers', desc: 'Family Medicine, Gynea, Dental, Physio, Labs & Cardio' },
    { href: '/#family-bundles', label: 'Family Bundles', desc: 'Custom Household Care Packages (Save 30%)' },
    { href: '/#maternal-tracker', label: 'Maternal Trimester Tracker', desc: 'Due-Date Calculator & Fetal Milestones' },
    { href: '/#doctors', label: 'Family Physicians', desc: 'Dedicated Pediatric & Adult Specialists' },
    { href: '/#reviews', label: 'Family Stories', desc: '2,150+ Happy Household Testimonials' },
    { href: '/services', label: 'Treatment Menu', desc: 'Full Departmental Directory' },
    { href: '/booking', label: 'Book Visit', desc: 'Coordinated Family Scheduling' }
  ];

  return (
    <div className={styles.mobileNavWrapper}>
      <a href="tel:+922135843320" className={styles.quickCallBtn} aria-label="Call Polyclinic">
        <Phone size={17} />
      </a>

      <Link href="/booking" className={styles.quickBookBtn}>
        <Calendar size={14} />
        <span>Book</span>
      </Link>

      <button 
        className={styles.hamburgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Navigation"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div 
              className={styles.drawer}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              <div className={styles.drawerHeader}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <HeartHandshake size={18} />
                  </div>
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading)' }}>Vitalis Family</strong>
                </div>
                <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </button>
              </div>

              <div className={styles.drawerBody}>
                <div className={styles.navLinksList}>
                  {links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className={styles.navItem}
                      onClick={() => setIsOpen(false)}
                    >
                      <div>
                        <div className={styles.navLabel}>{link.label}</div>
                        <div className={styles.navDesc}>{link.desc}</div>
                      </div>
                      <ChevronRight size={16} color="var(--primary)" />
                    </Link>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  <Link 
                    href="/booking" 
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Calendar size={16} />
                    <span>Book Family Appointment</span>
                  </Link>

                  <a 
                    href="https://wa.me/923006654320" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp" 
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={17} color="#ffffff" />
                    <span>WhatsApp Family Desk</span>
                  </a>
                </div>
              </div>

              <div className={styles.drawerFooter}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={14} color="var(--primary)" />
                  <span>PMDC Accredited Polyclinic</span>
                </div>
                <div>Khayaban-e-Shahbaz, Phase 6, DHA, Karachi</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
