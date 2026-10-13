'use client';

import React, { useState, useMemo } from 'react';
import { HeartHandshake, Check, Sparkles, MessageCircle, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { familyBundles } from '@/lib/mockData';
import styles from './FamilyPlanBuilder.module.css';

interface ModuleOption {
  id: string;
  name: string;
  category: string;
  price: number;
}

const optionalModules: ModuleOption[] = [
  { id: 'kids-fluoride', name: 'Kids Preventive Dental Fluoride & Sealant', category: 'Pediatric Dental', price: 6500 },
  { id: 'senior-home-phleb', name: 'Quarterly Doorstep Blood Draw Fleet', category: 'Diagnostic Labs', price: 5000 },
  { id: 'postnatal-physio', name: 'Postnatal Pelvic Floor & Core Rehab (2 sessions)', category: 'Physiotherapy', price: 7500 },
  { id: 'annual-cardio', name: 'Preventive 3D Echocardiogram for Parents', category: 'Cardiology', price: 8500 }
];

export function FamilyPlanBuilder() {
  const [selectedBundleId, setSelectedBundleId] = useState<string>('young-family-bundle');
  const [selectedModules, setSelectedModules] = useState<string[]>(['kids-fluoride']);

  const activeBundle = familyBundles.find(b => b.id === selectedBundleId) || familyBundles[0];

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(item => item !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const { totalPrice, emiMonthly } = useMemo(() => {
    let total = activeBundle.price;
    selectedModules.forEach(mId => {
      const match = optionalModules.find(m => m.id === mId);
      if (match) total += match.price;
    });
    const emi = Math.round(total / 6);
    return { totalPrice: total, emiMonthly: emi };
  }, [activeBundle, selectedModules]);

  const whatsappMsg = encodeURIComponent(
    `Hello Vitalis Family Polyclinic! I built a family plan based on "${activeBundle.name}" with ${selectedModules.length} customized household modules (Estimated Total: Rs. ${totalPrice.toLocaleString()}). I would like to register our family.`
  );

  return (
    <div className={styles.builderSection} id="family-bundles">
      <div className={styles.builderHeader}>
        <span className="section-tag">
          <HeartHandshake size={14} style={{ display: 'inline', marginRight: 4 }} />
          Family Health Plans
        </span>
        <h2 className="section-title">Customize Your Family Health Plan</h2>
        <p className="section-subtitle">
          Choose a plan for your household below, add any extra care you need, and see your transparent pricing instantly.
        </p>
      </div>

      <div className={styles.builderGrid}>
        <div className={styles.bundlesCard}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
            1. Select Base Family Care Package
          </div>

          <div className={styles.bundleList}>
            {familyBundles.map((bundle) => {
              const isSelected = selectedBundleId === bundle.id;
              return (
                <button
                  key={bundle.id}
                  type="button"
                  className={`${styles.bundleBtn} ${isSelected ? styles.bundleBtnActive : ''}`}
                  onClick={() => setSelectedBundleId(bundle.id)}
                >
                  <div>
                    <div className={styles.bundleName}>
                      {bundle.name}
                      <span style={{ marginLeft: 8, fontSize: '0.72rem', color: 'var(--accent-amber)', fontWeight: 700 }}>
                        [{bundle.savingsText}]
                      </span>
                    </div>
                    <div className={styles.bundleTarget}>{bundle.target}</div>
                  </div>
                  <div className={styles.bundlePrice}>
                    Rs. {bundle.price.toLocaleString()}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '2rem 0 1rem' }}>
            2. Add Optional Care Modules for Dependents
          </div>

          <div className={styles.moduleList}>
            {optionalModules.map((mod) => {
              const isChecked = selectedModules.includes(mod.id);
              return (
                <button
                  key={mod.id}
                  type="button"
                  className={`${styles.moduleItem} ${isChecked ? styles.moduleItemActive : ''}`}
                  onClick={() => toggleModule(mod.id)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                    <div style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      border: '1px solid var(--border-subtle)',
                      background: isChecked ? 'var(--primary)' : '#ffffff',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isChecked && <Check size={14} />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-heading)' }}>{mod.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{mod.category}</div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>
                    +Rs. {mod.price.toLocaleString()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.summaryCard}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.85rem', borderRadius: 9999, background: 'rgba(255,255,255,0.15)', color: '#fde68a', fontSize: '0.78rem', fontWeight: 700, marginBottom: '1.25rem' }}>
            <Sparkles size={14} />
            <span>Family Care Plan Summary</span>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#a7f3d0', marginBottom: '0.35rem' }}>
            Consolidated Family Investment
          </div>
          <div className={styles.totalPrice}>
            Rs. {totalPrice.toLocaleString()}
          </div>
          <div className={styles.emiText}>
            Or 6 monthly payments of <strong>Rs. {emiMonthly.toLocaleString()} / mo</strong> (0% markup)
          </div>

          <div className={styles.inclusionsList}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fde68a', textTransform: 'uppercase' }}>
              Bundle Inclusions:
            </div>
            {activeBundle.includes.map((inc, i) => (
              <div key={i} className={styles.inclusionItem}>
                <CheckCircle2 size={16} color="#fde68a" style={{ flexShrink: 0 }} />
                <span>{inc}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <Link 
              href={`/booking?bundle=${activeBundle.id}`}
              className="btn-amber"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} />
              <span>Enroll Household Online</span>
            </Link>

            <a 
              href={`https://wa.me/923006654320?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              <MessageCircle size={16} color="#22c55e" />
              <span>Chat with Family Coordinator</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', fontSize: '0.75rem', color: '#a7f3d0', marginTop: '1.25rem' }}>
            <ShieldCheck size={14} color="#fde68a" />
            <span>Coordinated Back-to-Back Family Scheduling</span>
          </div>
        </div>
      </div>
    </div>
  );
}
