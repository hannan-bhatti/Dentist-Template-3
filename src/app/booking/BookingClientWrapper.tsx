'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './booking.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  FileText, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Shield, 
  Clock, 
  UserCheck, 
  Check,
  CalendarCheck,
  HeartHandshake
} from 'lucide-react';

export function BookingClientWrapper() {
  const searchParams = useSearchParams();

  const initialDept = searchParams.get('department') || 'family-phy';
  const initialDoctor = searchParams.get('doctor') || 'any';

  const [selectedDept, setSelectedDept] = useState(initialDept);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor);

  const upcomingDays = useMemo(() => {
    const days = [];
    const base = new Date();
    let count = 0;
    let offset = 0;

    while (count < 5) {
      const d = new Date(base);
      d.setDate(base.getDate() + offset);
      const dayOfWeek = d.getDay();
      if (dayOfWeek !== 0) {
        days.push({
          dateObj: d,
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-US', { month: 'short' }),
          fullDateString: d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
        });
        count++;
      }
      offset++;
    }
    return days;
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [familyRelation, setFamilyRelation] = useState('self');
  const [healthNotes, setHealthNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const deptNames: Record<string, string> = {
    'family-phy': 'Family Medicine & Primary Care',
    'gynea': 'Obstetrics & Maternal Wellness',
    'dental': 'Gentle Family & Pediatric Dental',
    'physiotherapy': 'Physiotherapy & Rehabilitation',
    'cardiology': 'Preventive Cardiology & Heart Health',
    'labs': 'Family Diagnostic Blood Panels'
  };

  const doctorNames: Record<string, string> = {
    'dr-zainab': 'Dr. Zainab Hashim (Lead Family Physician)',
    'dr-ayesha': 'Dr. Ayesha Munir (Consultant Obstetrician)',
    'dr-saad': 'Dr. Saad Khurram (Pediatric Dental Surgeon)',
    'dr-hira': 'Dr. Hira Tariq (Physical Therapy Lead)',
    'dr-asif': 'Dr. Asif Jamil (Preventive Cardiologist)',
    'any': 'First Available Family Consultant'
  };

  const selectedDay = upcomingDays[selectedDayIndex] || upcomingDays[0];

  return (
    <>
      <section className={styles.bookingHero}>
        <div className="container">
          <span className="section-tag">Direct Family Scheduling</span>
          <h1 className="section-title">Schedule Family Consultation</h1>
          <p className="section-subtitle">
            Reserve synchronized appointments for yourself, children, or elderly parents with our family physicians.
          </p>

          <div className={styles.stepBar}>
            <div className={styles.stepItem}>
              <div className={styles.stepNum}>1</div>
              <span>Select Department &amp; Time</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div className={styles.stepNum} style={{ background: isSubmitted ? 'var(--accent-emerald)' : 'var(--primary)' }}>2</div>
              <span>Digital Family Intake</span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>&rarr;</div>
            <div className={styles.stepItem}>
              <div 
                className={styles.stepNum}
                style={{ 
                  background: isSubmitted ? 'var(--accent-emerald)' : 'var(--bg-subtle)',
                  color: isSubmitted ? '#ffffff' : 'var(--text-muted)',
                  border: isSubmitted ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                ✓
              </div>
              <span style={{ color: isSubmitted ? 'var(--accent-emerald)' : 'inherit' }}>Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.portalContainer}>
            {/* Step 1 */}
            <motion.div 
              className={styles.bookingCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 1: Choose Specialty Slot</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Zero Waiting Room Stress</span>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Clinical Department</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="family-phy">Family Medicine &amp; Primary Care</option>
                  <option value="gynea">Obstetrics, Gynea &amp; Maternal</option>
                  <option value="dental">Gentle Family &amp; Pediatric Dental</option>
                  <option value="physiotherapy">Physiotherapy &amp; Rehabilitation</option>
                  <option value="cardiology">Preventive Cardiology &amp; Heart Health</option>
                  <option value="labs">Family Diagnostic Blood Panels</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Consultant Specialist</label>
                <select 
                  className={styles.customSelect}
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  <option value="any">First Available Family Consultant</option>
                  <option value="dr-zainab">Dr. Zainab Hashim (Family &amp; Pediatrics)</option>
                  <option value="dr-ayesha">Dr. Ayesha Munir (Obstetrics &amp; Gynea)</option>
                  <option value="dr-saad">Dr. Saad Khurram (Pediatric Dental)</option>
                  <option value="dr-hira">Dr. Hira Tariq (Physiotherapy)</option>
                  <option value="dr-asif">Dr. Asif Jamil (Cardiology)</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Select Consultation Date</label>
                <div className={styles.dateStrip}>
                  {upcomingDays.map((day, idx) => {
                    const isActive = selectedDayIndex === idx;
                    return (
                      <button
                        key={day.dayName + day.dayNum}
                        type="button"
                        className={`${styles.datePill} ${isActive ? styles.datePillActive : ''}`}
                        onClick={() => setSelectedDayIndex(idx)}
                      >
                        <span className={styles.dateDay}>{day.dayName}</span>
                        <span className={styles.dateNum}>{day.dayNum}</span>
                        <span className={styles.dateMonth}>{day.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.slotsContainer}>
                <div className={styles.slotPeriodTitle}>Morning Windows (9 AM – 1 PM)</div>
                <div className={styles.slotGrid}>
                  {['09:00 AM', '10:00 AM', '11:15 AM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <div className={styles.slotPeriodTitle}>After-School &amp; Evening (2 PM – 7 PM)</div>
                <div className={styles.slotGrid}>
                  {['02:30 PM', '04:00 PM', '05:30 PM'].map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        className={`${styles.slotBtn} ${isActive ? styles.slotBtnActive : ''}`}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {isActive && <Check size={14} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.selectedSummary}>
                <div>
                  <div className={styles.summaryDoc}>
                    {doctorNames[selectedDoctor] || 'Family Consultant'}
                  </div>
                  <div className={styles.summaryTime}>
                    {deptNames[selectedDept]} &bull; {selectedDay.fullDateString} at {selectedSlot}
                  </div>
                </div>
                <CheckCircle2 size={22} color="var(--primary)" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className={styles.intakeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <FileText size={24} />
                </div>
                <div>
                  <h2 className={styles.cardTitle}>Step 2: Digital Family Pre-Checkin</h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>Zero Paperwork Waiting</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleIntakeSubmit}>
                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Who is this appointment for?</label>
                        <select 
                          className={styles.customSelect}
                          value={familyRelation}
                          onChange={(e) => setFamilyRelation(e.target.value)}
                        >
                          <option value="self">Myself</option>
                          <option value="child">Child / Infant</option>
                          <option value="spouse">Spouse / Partner</option>
                          <option value="parent">Elderly Parent / Grandparent</option>
                        </select>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Patient Legal Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Aayan Chaudhry"
                          className={styles.formInput}
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </div>

                      <div className={styles.twoCol}>
                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Parent/Contact Phone *</label>
                          <input 
                            type="tel" 
                            required
                            placeholder="+92 300 5544332"
                            className={styles.formInput}
                            value={patientPhone}
                            onChange={(e) => setPatientPhone(e.target.value)}
                          />
                        </div>

                        <div className={styles.fieldGroup}>
                          <label className={styles.fieldLabel}>Email Address *</label>
                          <input 
                            type="email" 
                            required
                            placeholder="family@example.com"
                            className={styles.formInput}
                            value={patientEmail}
                            onChange={(e) => setPatientEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className={styles.fieldGroup}>
                        <label className={styles.fieldLabel}>Health Concerns or Pediatric Notes</label>
                        <textarea 
                          rows={3}
                          placeholder="e.g. Routine vaccination milestone; mild cough for 3 days; child is nervous about dental check..."
                          className={styles.formTextarea}
                          value={healthNotes}
                          onChange={(e) => setHealthNotes(e.target.value)}
                        />
                      </div>

                      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        <Shield size={18} />
                        <span>{isSubmitting ? 'Confirming Family Slot...' : 'Confirm Family Appointment'}</span>
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                        <Shield size={12} color="var(--primary)" />
                        <span>Confidential Household Medical Record &bull; PMDC Standards</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="confirmation"
                    className={styles.confirmationContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={styles.confirmIconBox}>
                      <CalendarCheck size={32} />
                    </div>
                    <h3 className={styles.confirmTitle}>Family Visit Reserved!</h3>
                    <p className={styles.confirmSub}>
                      Thank you, <strong>{patientName || 'Guest'}</strong>. Your appointment has been scheduled at Vitalis Family Polyclinic.
                    </p>

                    <div className={styles.confirmDetailCard}>
                      <div className={styles.confirmDetailRow}>
                        <span>Department:</span>
                        <span>{deptNames[selectedDept]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Specialist:</span>
                        <span>{doctorNames[selectedDoctor]}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Date &amp; Time:</span>
                        <span>{selectedDay.fullDateString} at {selectedSlot}</span>
                      </div>
                      <div className={styles.confirmDetailRow}>
                        <span>Pavilion:</span>
                        <span>Khayaban-e-Shahbaz, Phase 6, DHA, Karachi</span>
                      </div>
                    </div>

                    <div className={styles.confirmActions}>
                      <a 
                        href={`https://wa.me/923006654320?text=Hello%20Vitalis%20Family%20Health,%20I%20just%20reserved%20an%20appointment%20for%20${encodeURIComponent(deptNames[selectedDept])}%20on%20${encodeURIComponent(selectedDay.fullDateString)}%20at%20${encodeURIComponent(selectedSlot)}.%20Looking%20forward%20to%20our%20family%20visit.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <MessageCircle size={16} color="#ffffff" />
                        <span>Open WhatsApp Family Desk</span>
                      </a>

                      <button 
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIsSubmitted(false)}
                        style={{ justifyContent: 'center' }}
                      >
                        Book for Another Family Member
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
