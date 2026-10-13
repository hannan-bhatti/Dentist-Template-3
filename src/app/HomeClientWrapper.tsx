'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  Flower2, 
  Sparkles, 
  Activity, 
  Microscope, 
  HeartPulse, 
  Star, 
  ArrowRight, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Award,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { TiltCard } from '@/components/TiltCard';
import { FamilyPlanBuilder } from '@/components/FamilyPlanBuilder';
import { MaternalRoadmapCalculator } from '@/components/MaternalRoadmapCalculator';
import { FloatingFamilyDesk } from '@/components/FloatingFamilyDesk';

const iconMap: Record<string, any> = {
  'family-phy': HeartHandshake,
  'gynea': Flower2,
  'dental': Sparkles,
  'physiotherapy': Activity,
  'cardiology': HeartPulse,
  'labs': Microscope,
};

export function HomeClientWrapper({
  heroData,
  specialtiesData,
  doctorsData,
  trustSignals,
  faqData
}: any) {
  const [selectedDept, setSelectedDept] = useState('family-phy');
  const [selectedDoctor, setSelectedDoctor] = useState('any');
  const [selectedTime, setSelectedTime] = useState('morning');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div 
              className={styles.heroContent}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.heroBadge}>
                <span className={styles.pulseDot}></span>
                <span>{heroData.badge}</span>
              </div>

              <h1 className={styles.heroHeadline}>
                Compassionate Care for{' '}
                <span className={styles.heroHeadlineGradient}>Every Generation of Your Family.</span>
              </h1>

              <p className={styles.heroSubheadline}>
                {heroData.subheadline}
              </p>

              <div className={styles.heroActions}>
                <Link href="/booking" className="btn-primary">
                  <span>{heroData.primaryCtaText}</span>
                  <ArrowRight size={17} />
                </Link>

                <a href="#family-bundles" className="btn-secondary">
                  <span>{heroData.secondaryCtaText}</span>
                </a>
              </div>

              <div className={styles.ratingSnippet}>
                <div className={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <span><strong>4.97/5 Rating</strong> from 2,150+ Families Across Karachi, Lahore &amp; Overseas</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.floatingCardTop}>
                <div className={styles.floatingCardIcon}>
                  <Users size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Coordinated Family Visits</div>
                  <div className={styles.floatingCardSub}>Back-to-Back Kids &amp; Parents Slots</div>
                </div>
              </div>

              <div className={styles.heroImageFrame}>
                <div className={styles.visualInner}>
                  <span className={styles.visualPill}>
                    <HeartHandshake size={13} />
                    Integrative Family Polyclinic
                  </span>
                  <h3 style={{ fontSize: '1.75rem', lineHeight: 1.3 }}>
                    Lifelong Healthcare Stewardship Under One Caring Roof
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#a7f3d0', maxWidth: 360 }}>
                    Family Medicine • Gentle Pediatric Dental • Maternal Obstetrics • Rehabilitation Physio • Diagnostic Blood Panels • Preventive Cardiology
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 9999, background: 'rgba(255,255,255,0.1)' }}>
                      Zero Waiting Room Stress
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem', borderRadius: 9999, background: 'rgba(255,255,255,0.1)' }}>
                      Child-Friendly Suites
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCardBottom}>
                <div className={styles.floatingCardIcon} style={{ background: '#fef3c7', color: '#b45309' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div className={styles.floatingCardTitle}>Royal College &amp; Pediatric Fellows</div>
                  <div className={styles.floatingCardSub}>Trusted Family Physicians</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. HERO QUICK-BOOKING BAR */}
      <section className={styles.bookingBarWrapper}>
        <div className="container">
          <motion.div 
            className={styles.bookingBar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <HeartHandshake size={13} /> Clinical Department
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                <option value="family-phy">Family Medicine &amp; Primary Care</option>
                <option value="gynea">Obstetrics, Gynea &amp; Maternal</option>
                <option value="dental">Gentle Family &amp; Pediatric Dental</option>
                <option value="physiotherapy">Physiotherapy &amp; Rehabilitation</option>
                <option value="cardiology">Preventive Cardiology &amp; Heart</option>
                <option value="labs">Diagnostic Labs &amp; Phlebotomy</option>
              </select>
            </div>

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Award size={13} /> Family Physician
              </label>
              <select 
                className={styles.fieldSelect}
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

            <div className={styles.bookingField}>
              <label className={styles.fieldLabel}>
                <Clock size={13} /> Preferred Window
              </label>
              <select 
                className={styles.fieldSelect}
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="morning">Morning Family Slot (9:00 AM – 1:00 PM)</option>
                <option value="afternoon">After-School &amp; Work Slot (2:00 PM – 5:30 PM)</option>
                <option value="evening">Evening Private Session (6:00 PM – 8:30 PM)</option>
              </select>
            </div>

            <div>
              <Link 
                href={`/booking?department=${selectedDept}&doctor=${selectedDoctor}&time=${selectedTime}`}
                className="btn-amber"
                style={{ padding: '0.85rem 1.75rem', width: '100%' }}
              >
                <Calendar size={16} />
                <span>Check Live Calendar</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MULTI-GENERATIONAL SPECIALTIES */}
      <section id="specialties" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Integrated Family Care</span>
            <h2 className="section-title">Six Comprehensive Specialty Centers</h2>
            <p className="section-subtitle">
              From newborn milestone checkups to maternal health and senior mobility, our departments work collaboratively for your household&apos;s peace of mind.
            </p>
          </div>

          <div className={styles.specialtiesGrid}>
            {specialtiesData.map((spec: any, i: number) => {
              const Icon = iconMap[spec.id] || Sparkles;
              return (
                <TiltCard key={spec.id} maxTilt={6} scale={1.02}>
                  <motion.div 
                    className={styles.specialtyCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div>
                      <div className={styles.specialtyHeader}>
                        <div className={styles.specialtyIconBox}>
                          <Icon size={26} />
                        </div>
                        <span className={styles.specialtyBadge}>{spec.badge}</span>
                      </div>

                      <h3 className={styles.specialtyTitle}>{spec.title}</h3>
                      <div className={styles.specialtyDoctor}>Led by: {spec.leadDoctor}</div>
                      <p className={styles.specialtyDesc}>{spec.description}</p>

                      <div className={styles.procedureList}>
                        {spec.keyProcedures.map((proc: string, pIdx: number) => (
                          <div key={pIdx} className={styles.procedureItem}>
                            <CheckCircle2 size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                            <span>{proc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.specialtyFooter}>
                      <div>
                        <div className={styles.priceLabel}>Consultation From</div>
                        <div className={styles.priceValue}>{spec.priceFrom}</div>
                      </div>
                      <Link 
                        href={`/booking?department=${spec.id}`}
                        className="btn-primary"
                        style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
                      >
                        Book Slot
                      </Link>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FAMILY HEALTH PLAN BUILDER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <FamilyPlanBuilder />
        </div>
      </section>

      {/* 5. INTERACTIVE MATERNAL ROADMAP TRACKER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <MaternalRoadmapCalculator />
        </div>
      </section>

      {/* 6. DOCTORS / FAMILY PHYSICIANS */}
      <section id="doctors" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Dedicated Practitioners</span>
            <h2 className="section-title">Meet Your Family Care Doctors</h2>
            <p className="section-subtitle">
              Experienced, gentle clinicians who listen with compassion, explain with clarity, and care for your loved ones as their own.
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            {doctorsData.map((doc: any, i: number) => (
              <TiltCard key={doc.id} maxTilt={6} scale={1.02}>
                <motion.div 
                  className={styles.doctorCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div>
                    <div className={styles.doctorHeader}>
                      <div className={styles.doctorAvatar}>
                        {doc.name.replace('Dr. ', '').split(' ')[0][0]}
                        {doc.name.split(' ').slice(-1)[0][0]}
                      </div>
                      <div>
                        <h3 className={styles.doctorName}>{doc.name}</h3>
                        <div className={styles.doctorSpecialty}>{doc.specialty}</div>
                      </div>
                    </div>

                    <div className={styles.doctorCredentials}>{doc.credentials}</div>
                    <p className={styles.doctorBio}>{doc.bio}</p>
                  </div>

                  <Link 
                    href={`/booking?doctor=${doc.id}&department=${doc.department}`}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                  >
                    <Calendar size={15} />
                    <span>Consult with {doc.name.split(',')[0]}</span>
                  </Link>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAMILY STORIES */}
      <section id="reviews" className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Warm Testimonials</span>
            <h2 className="section-title">Stories from Our Registered Families</h2>
            <p className="section-subtitle">
              Read how parents, mothers, and senior grandparents experience stress-free, compassionate care at Vitalis.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {trustSignals.map((review: any, i: number) => (
              <motion.div 
                key={i}
                className={styles.reviewCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                    {[...Array(review.rating || 5)].map((_, r) => (
                      <Star key={r} size={16} fill="#f59e0b" stroke="#f59e0b" />
                    ))}
                  </div>
                  <p className={styles.reviewQuote}>&ldquo;{review.reviewText}&rdquo;</p>
                </div>

                <div className={styles.reviewerMeta}>
                  <div>
                    <div className={styles.reviewerName}>{review.author}</div>
                    <div className={styles.reviewerLoc}>{review.location}</div>
                  </div>
                  <div className={styles.reviewerDept}>{review.specialty}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Helpful Details</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Answers regarding our family bundles, coordinated visits, and doorstep pediatric blood draws.
            </p>
          </div>

          <div className={styles.faqContainer}>
            {faqData.map((faq: any, index: number) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} color="var(--primary)" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswer}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. VIP FAMILY ENROLLMENT BANNER */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div 
            className={styles.vipBanner}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.visualPill} style={{ marginBottom: '1rem' }}>
              <HeartHandshake size={14} color="#fde68a" />
              Neighborhood Family Care
            </span>
            <h2 className={styles.vipTitle}>Give Your Entire Family the Care They Deserve.</h2>
            <p className={styles.vipSub}>
              Register your household with Vitalis Family Polyclinic today. Priority coordinated appointments across DHA Karachi and Lahore.
            </p>
            <div className={styles.vipActions}>
              <Link href="/booking" className="btn-amber">
                <Calendar size={17} />
                <span>Enroll Your Household Online</span>
              </Link>
              <a href="tel:+922135843320" className="btn-secondary" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
                <Phone size={16} />
                <span>Call Coordinator: (021) 3584-3320</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. FLOATING FAMILY CARE DESK */}
      <FloatingFamilyDesk />
    </>
  );
}
