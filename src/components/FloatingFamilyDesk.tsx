'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, X, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import styles from './FloatingFamilyDesk.module.css';

export function FloatingFamilyDesk() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.deskContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.deskCard}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b' }} />
                <div>
                  <div className={styles.cardTitle}>Family Care Desk</div>
                  <div className={styles.cardSubtitle}>DHA Karachi &amp; Lahore Polyclinics</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                <X size={15} />
              </button>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.actionList}>
                <a 
                  href="https://wa.me/923006654320?text=Hello%20Vitalis%20Family%20Health%2C%20I%20would%20like%20to%20inquire%20about%20a%20family%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: '#ecfdf5', color: '#16a34a' }}>
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>WhatsApp Care Coordinator</div>
                    <div className={styles.btnSub}>Fast replies for kids &amp; parents</div>
                  </div>
                </a>

                <Link 
                  href="/booking" 
                  onClick={() => setIsOpen(false)}
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>Book Family Slot</div>
                    <div className={styles.btnSub}>Pediatrics, Gynea, Dental &amp; Labs</div>
                  </div>
                </Link>

                <a 
                  href="tel:+922135843320"
                  className={styles.actionBtn}
                >
                  <div className={styles.actionIcon} style={{ background: '#fef3c7', color: '#b45309' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className={styles.btnTitle}>Direct Desk: (021) 3584-3320</div>
                    <div className={styles.btnSub}>Reception &amp; Appointment Desk</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.floatingTrigger}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Family Care Desk"
      >
        <div className={styles.pulseEffect} />
        {isOpen ? <X size={22} /> : <HeartHandshake size={24} />}
      </motion.button>
    </div>
  );
}
