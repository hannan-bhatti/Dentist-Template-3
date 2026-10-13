'use client';

import React from 'react';
import styles from './services.module.css';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Flower2, 
  Sparkles, 
  Activity, 
  Microscope, 
  HeartPulse, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  'family-phy': HeartHandshake,
  'gynea': Flower2,
  'dental': Sparkles,
  'physiotherapy': Activity,
  'cardiology': HeartPulse,
  'labs': Microscope,
};

export function ServicesClientWrapper({ specialtiesData }: any) {
  return (
    <>
      <section className={styles.servicesHero}>
        <div className="container">
          <span className="section-tag">Family Clinical Directory</span>
          <h1 className={styles.heroTitle}>Comprehensive Multi-Generational Services</h1>
          <p className={styles.heroSub}>
            Discover our six family-centered clinical departments. Designed with warm hospitality, gentle pediatric rooms, and coordinated visits for the whole household.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          {specialtiesData.map((spec: any) => {
            const Icon = iconMap[spec.id] || Sparkles;
            return (
              <div key={spec.id} id={spec.id} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h2 className={styles.categoryTitle}>{spec.title}</h2>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{spec.tagline}</div>
                    </div>
                  </div>
                  <div className={styles.categoryLead}>Led by {spec.leadDoctor}</div>
                </div>

                <motion.div 
                  className={styles.specialtyCardExtended}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <span className="section-tag" style={{ background: '#ffffff', marginBottom: '0.85rem' }}>
                      {spec.badge}
                    </span>
                    <p style={{ color: 'var(--text-body)', lineHeight: 1.7, fontSize: '1rem', marginBottom: '1.25rem' }}>
                      {spec.description}
                    </p>

                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Core Family Procedures:
                    </div>
                    <div className={styles.procedurePills}>
                      {spec.keyProcedures.map((proc: string, pIdx: number) => (
                        <div key={pIdx} className={styles.procPill}>
                          <CheckCircle2 size={13} color="var(--primary)" />
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.actionPanel}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Family Consultation Fee
                    </div>
                    <div className={styles.feeTag}>{spec.priceFrom}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                      <Clock size={14} />
                      <span>{spec.duration}</span>
                    </div>

                    <Link 
                      href={`/booking?department=${spec.id}`}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <Calendar size={16} />
                      <span>Schedule Family Visit</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
