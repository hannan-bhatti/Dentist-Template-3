'use client';

import React, { useState } from 'react';
import { Flower2, Check, ArrowRight, Calendar, MessageCircle, HeartPulse, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from './MaternalRoadmapCalculator.module.css';

interface TrimesterData {
  title: string;
  weeks: string;
  scans: string;
  labs: string;
  physioNote: string;
  doctorAdvice: string;
}

const trimesterInfo: Record<string, TrimesterData> = {
  t1: {
    title: 'First Trimester Milestone (Early Care)',
    weeks: 'Weeks 1 – 12',
    scans: 'Early Fetal Viability & Dating Ultrasound (6–8 Wks) + Nuchal Translucency Scan (11–13 Wks)',
    labs: 'Complete Blood Count (CBC), Blood Group/Rh, Rubella, Thyroid Profile (TSH), Blood Sugar & Ferritin',
    physioNote: 'Gentle breathing ergonomics and safe prenatal walking posture.',
    doctorAdvice: 'Establish baseline maternal health, begin folic acid supplementation, and review morning sickness strategies in a calm, private setting.'
  },
  t2: {
    title: 'Second Trimester Milestone (Golden Window)',
    weeks: 'Weeks 13 – 27',
    scans: 'High-Definition 4D Detailed Fetal Anomaly Scan (18–22 Wks) + Cervical Length & Placenta Mapping',
    labs: 'Oral Glucose Tolerance Test (OGTT at 24–28 Wks), Hemoglobin re-check, Urine microscopy',
    physioNote: 'Pelvic girdle stabilization exercises and round ligament stretch relief.',
    doctorAdvice: 'Evaluate fetal anatomical development in high-resolution 4D and monitor maternal blood pressure and gestational nutrition.'
  },
  t3: {
    title: 'Third Trimester Milestone (Birth Preparation)',
    weeks: 'Weeks 28 – 40',
    scans: 'Fetal Growth & Doppler Umbilical Blood Flow Ultrasound (32 & 36 Wks) + Biophysical Profile',
    labs: 'Coagulation Profile (PT/APTT), Repeat CBC, GBS Screening & Liver Enzymes if itching present',
    physioNote: 'Postnatal perineal prep, birth positioning re-education, and pelvic floor activation.',
    doctorAdvice: 'Finalize birth preferences, newborn pediatric registration, and ensure fetal growth trajectories remain optimal.'
  }
};

export function MaternalRoadmapCalculator() {
  const [selectedTrimester, setSelectedTrimester] = useState<'t1' | 't2' | 't3'>('t2');

  const current = trimesterInfo[selectedTrimester];

  return (
    <div className={styles.maternalCard} id="maternal-tracker">
      <div className={styles.header}>
        <span className="section-tag">
          <Flower2 size={14} style={{ display: 'inline', marginRight: 4 }} />
          Mother &amp; Baby Care
        </span>
        <h2 className="section-title">Your Step-by-Step Pregnancy Guide</h2>
        <p className="section-subtitle">
          Select your pregnancy stage below to see recommended checkups, ultrasound scans, and friendly advice from our maternity team.
        </p>
      </div>

      <div className={styles.trimesterToggle}>
        <button
          type="button"
          className={`${styles.trimesterBtn} ${selectedTrimester === 't1' ? styles.trimesterBtnActive : ''}`}
          onClick={() => setSelectedTrimester('t1')}
        >
          <div className={styles.trimesterTitle}>1st Trimester</div>
          <div className={styles.trimesterWeeks}>Weeks 1 – 12 (Foundations)</div>
        </button>

        <button
          type="button"
          className={`${styles.trimesterBtn} ${selectedTrimester === 't2' ? styles.trimesterBtnActive : ''}`}
          onClick={() => setSelectedTrimester('t2')}
        >
          <div className={styles.trimesterTitle}>2nd Trimester</div>
          <div className={styles.trimesterWeeks}>Weeks 13 – 27 (4D Anomaly)</div>
        </button>

        <button
          type="button"
          className={`${styles.trimesterBtn} ${selectedTrimester === 't3' ? styles.trimesterBtnActive : ''}`}
          onClick={() => setSelectedTrimester('t3')}
        >
          <div className={styles.trimesterTitle}>3rd Trimester</div>
          <div className={styles.trimesterWeeks}>Weeks 28 – 40 (Birth Prep)</div>
        </button>
      </div>

      <div className={styles.roadmapContent}>
        <div className={styles.milestoneList}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            {current.title}
          </div>

          <div className={styles.milestoneItem}>
            <div className={styles.checkCircle}><Check size={14} /></div>
            <div>
              <div className={styles.milestoneTitle}>Recommended Ultrasound Mapping:</div>
              <div className={styles.milestoneDesc}>{current.scans}</div>
            </div>
          </div>

          <div className={styles.milestoneItem}>
            <div className={styles.checkCircle}><Check size={14} /></div>
            <div>
              <div className={styles.milestoneTitle}>Essential Laboratory Blood Profiles:</div>
              <div className={styles.milestoneDesc}>{current.labs}</div>
            </div>
          </div>

          <div className={styles.milestoneItem}>
            <div className={styles.checkCircle}><Check size={14} /></div>
            <div>
              <div className={styles.milestoneTitle}>Maternal Physiotherapy &amp; Ergonomics:</div>
              <div className={styles.milestoneDesc}>{current.physioNote}</div>
            </div>
          </div>

          <div className={styles.milestoneItem}>
            <div className={styles.checkCircle}><Check size={14} /></div>
            <div>
              <div className={styles.milestoneTitle}>Clinical Guidance:</div>
              <div className={styles.milestoneDesc}>{current.doctorAdvice}</div>
            </div>
          </div>
        </div>

        <div className={styles.doctorActionBox}>
          <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <Flower2 size={26} />
          </div>
          <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', marginBottom: '0.25rem' }}>
            Dr. Ayesha Munir
          </h4>
          <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
            MRCOG (London) • Lead Obstetrician
          </div>
          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
            Private 45-minute consultation in our dedicated women&apos;s wellness suite with 4D ultrasound screening.
          </p>

          <Link 
            href="/booking?department=gynea&doctor=dr-ayesha"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
          >
            <Calendar size={15} />
            <span>Book Prenatal Session</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
