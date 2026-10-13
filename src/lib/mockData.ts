export const clinicConfig = {
  name: "Vitalis Family Health",
  tagline: "Integrative Polyclinic & Multi-Generational Medical Care",
  phone: "+92 (21) 3584-3320",
  emergencyPhone: "+92 (21) 3584-3300",
  whatsappNumber: "+923006654320",
  address: "Vitalis Wellness Pavilion, Khayaban-e-Shahbaz, Phase 6, DHA, Karachi",
  lahoreBranch: "Sector Y, Phase 3, DHA, Lahore",
  hours: "Mon – Sat: 8:30 AM – 8:30 PM | Priority Family Care Desk: 24/7",
  calComLink: "https://cal.com/vitalis-family/appointment",
  googleRating: "4.97",
  reviewCount: "2,150+"
};

export const heroData = {
  headline: "Compassionate Healthcare Designed for Every Generation.",
  subheadline: "Your family's trusted medical home in DHA Karachi & Lahore. Bringing together Family Medicine, Maternal Gynecology, Gentle Dentistry, Physiotherapy, Diagnostic Labs, and Preventive Cardiology under one caring roof.",
  badge: "🌿 Welcoming New Families • Same-Day Priority Pediatric & Adult Visits",
  primaryCtaText: "Book Family Consultation",
  secondaryCtaText: "Build Your Family Care Plan",
  ratingText: "4.97/5 Rating from 2,150+ Families Across Karachi, Lahore & Overseas"
};

export const specialtiesData = [
  {
    id: "family-phy",
    title: "Family Medicine & Primary Care",
    shortTitle: "Family Medicine",
    leadDoctor: "Dr. Zainab Hashim, MBBS, MRCGP (UK), DCH (Pediatrics)",
    tagline: "Dedicated Primary Care Doctors for Children, Parents & Grandparents",
    description: "From routine childhood fever triage and pediatric immunizations to chronic diabetes, thyroid management, and adult wellness checks, we care for your whole household.",
    keyProcedures: [
      "Annual Multi-Generational Family Physical",
      "Pediatric Immunization & Growth Tracking",
      "Metabolic Disease & Diabetes Stewardship",
      "Acute Respiratory & Seasonal Fever Triage"
    ],
    duration: "30-40 min comprehensive consultation",
    priceFrom: "Rs. 4,500",
    badge: "Primary Healthcare Anchor"
  },
  {
    id: "gynea",
    title: "Obstetrics, Gynea & Maternal Health",
    shortTitle: "Gynecology",
    leadDoctor: "Dr. Ayesha Munir, MBBS, FCPS, MRCOG (London)",
    tagline: "Gentle Prenatal Care, 4D Fetal Scans & Well-Woman Longevity",
    description: "Warm, unhurried gynecological care supporting expectant mothers through every trimester, comprehensive postnatal recovery, PCOS hormonal balance, and gentle menopause care.",
    keyProcedures: [
      "Gentle Prenatal Care & Trimester Navigation",
      "High-Definition 4D Fetal Anomaly Ultrasound",
      "PCOS, Irregular Cycles & Hormone Care",
      "Well-Woman Cervical & Breast Screening"
    ],
    duration: "45 min private consultation",
    priceFrom: "Rs. 6,500",
    badge: "Maternal Wellness Center"
  },
  {
    id: "dental",
    title: "Gentle Family & Pediatric Dentistry",
    shortTitle: "Family Dental",
    leadDoctor: "Dr. Saad Khurram, BDS, MSc Pediatric Dentistry (UK)",
    tagline: "Zero-Fear Dentistry, Cavity Prevention & Clear Smile Aligners",
    description: "Designed specifically to end childhood dental anxiety with sensory-friendly rooms, gentle laser diagnostics, painless air-abrasion, and invisible teeth alignment for teens and adults.",
    keyProcedures: [
      "Zero-Fear Pediatric Dental Visits & Fluoride",
      "Gentle Ultrasonic Biofilm Cleaning",
      "Clear Invisible Aligners for Teens & Adults",
      "Natural Cosmetic Composite Bonding"
    ],
    duration: "40 min gentle appointment",
    priceFrom: "Rs. 5,000",
    badge: "Sensory-Friendly Clinic"
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Family Rehabilitation",
    shortTitle: "Physiotherapy",
    leadDoctor: "Dr. Hira Tariq, DPT, MS Neurological & Posture Rehab",
    tagline: "Postnatal Core Recovery, Ergonomic Spine Therapy & Senior Balance",
    description: "Restoring active mobility across all life stages—from postnatal pelvic floor and core re-education to desk-strain spinal release, sports recovery, and senior balance therapy.",
    keyProcedures: [
      "Postnatal Core & Pelvic Floor Recovery",
      "Ergonomic Neck & Lumbar Decompression",
      "Senior Mobility & Fall-Prevention Therapy",
      "Sports Injury Myotherapy & Dry Needling"
    ],
    duration: "50 min active therapy",
    priceFrom: "Rs. 4,500",
    badge: "Dedicated Rehab Studio"
  },
  {
    id: "cardiology",
    title: "Preventive Cardiology & Heart Health",
    shortTitle: "Cardiology",
    leadDoctor: "Dr. Asif Jamil, MBBS, FCPS (Cardiology), Dip. Echocardiography",
    tagline: "Protecting the Family's Heart Health with Early Detection",
    description: "Personalized heart health evaluations focusing on early detection of hypertension, 3D echocardiography, cholesterol subfraction optimization, and family cardiovascular risk prevention.",
    keyProcedures: [
      "Preventive Color Doppler 3D Echocardiogram",
      "Resting 12-Lead Digital ECG Analysis",
      "Family Cardiovascular Risk Profiling",
      "Hypertension & Lifestyle Prescription"
    ],
    duration: "45 min cardiac examination",
    priceFrom: "Rs. 7,500",
    badge: "Early Detection Center"
  },
  {
    id: "labs",
    title: "Family Diagnostic Labs & Phlebotomy",
    shortTitle: "Diagnostic Labs",
    leadDoctor: "Dr. Nuzhat Parveen, MBBS, MPhil (Chemical Pathology)",
    tagline: "Automated Routine Bloodwork with Doorstep Family Phlebotomy",
    description: "Child-friendly blood sample collection, senior home sample visits, rapid 3-hour digital turnaround, and preventative annual wellness panels tailored to your household.",
    keyProcedures: [
      "Complete Family Health Screening Panel",
      "Pediatric Allergy & Micronutrient Battery",
      "Senior Comprehensive Metabolic & Lipid Screen",
      "Gentle Doorstep Home Phlebotomy Dispatch"
    ],
    duration: "Reports within 3-4 hours via portal",
    priceFrom: "Rs. 3,500",
    badge: "ISO 15189 Accredited"
  }
];

export const familyBundles = [
  {
    id: "young-family-bundle",
    name: "Young Family Wellness Bundle",
    target: "Parents with Young Children (2 Adults + 2 Kids)",
    price: 35000,
    savingsText: "Save 30% vs Individual Visits",
    includes: [
      "Pediatric Checkup & Vaccinations (2 Kids)",
      "Gentle Pediatric Dental Cleanings & Sealants",
      "Maternal Well-Woman & Hormonal Consultation",
      "Executive Physical & Lab Screen for Both Parents",
      "Unlimited 24/7 WhatsApp Family Care Coordinator Access"
    ]
  },
  {
    id: "maternal-newborn-bundle",
    name: "Complete Maternal & Newborn Care",
    target: "Expectant Mothers & Newborns (Full Pregnancy to 6 Months)",
    price: 48000,
    savingsText: "Most Popular for Mothers",
    includes: [
      "3 Trimester Comprehensive Consultations & 4D Scans",
      "Complete Prenatal Blood Panels & Glucose Tolerance",
      "Postnatal Pelvic Floor & Core Physiotherapy (3 Sessions)",
      "Newborn Pediatric Examination & Growth Registry",
      "Direct Priority Hotline to Dr. Ayesha Munir"
    ]
  },
  {
    id: "senior-parents-bundle",
    name: "Golden Years Senior Care Plan",
    target: "Senior Parents & Grandparents (Age 60+)",
    price: 42000,
    savingsText: "Comprehensive Senior Protection",
    includes: [
      "Cardiology: 3D Echocardiogram & ECG Review",
      "Physio: Senior Balance & Joint Mobility Assessment",
      "Labs: Comprehensive Metabolic & Bone Health Battery",
      "Family Medicine: Medication Audit & Chronic Disease Stewardship",
      "Quarterly Doorstep Home Sample Collection Included"
    ]
  }
];

export const doctorsData = [
  {
    id: "dr-zainab",
    name: "Dr. Zainab Hashim",
    specialty: "Lead Family Physician & Pediatric Health Consultant",
    department: "family-phy",
    credentials: "MBBS • MRCGP (UK) • Diploma in Child Health (DCH, London)",
    experience: "16+ Years Family Healthcare",
    bio: "Passionate about longitudinal family care, Dr. Zainab has cared for three generations of families, emphasizing preventive nutrition, child development, and proactive adult screening.",
    image: "/images/dr-zainab.jpg"
  },
  {
    id: "dr-ayesha",
    name: "Dr. Ayesha Munir",
    specialty: "Consultant Obstetrician & Gynecologist",
    department: "gynea",
    credentials: "MBBS • FCPS (Obs & Gynae) • MRCOG (Royal College London)",
    experience: "18+ Years Maternal Medicine",
    bio: "Known for her reassuring and respectful approach, Dr. Ayesha guides women through normal and high-risk pregnancies with the latest in 4D ultrasound fetal imaging.",
    image: "/images/dr-ayesha.jpg"
  },
  {
    id: "dr-saad",
    name: "Dr. Saad Khurram",
    specialty: "Family & Pediatric Dental Surgeon",
    department: "dental",
    credentials: "BDS • MSc Pediatric Dentistry (UK) • Invisalign Certified",
    experience: "12+ Years Child & Family Dentistry",
    bio: "Dr. Saad creates a delightful, fear-free environment for young children and provides discreet clear orthodontic aligners for busy parents.",
    image: "/images/dr-saad.jpg"
  },
  {
    id: "dr-hira",
    name: "Dr. Hira Tariq",
    specialty: "Head of Physical Therapy & Posture Science",
    department: "physiotherapy",
    credentials: "DPT • Certified Postnatal Rehabilitation • MS OMPT",
    experience: "11+ Years Rehabilitation",
    bio: "Specializing in postnatal pelvic floor restoration and chronic spinal desk strain, Dr. Hira empowers patients to regain core strength and effortless posture.",
    image: "/images/dr-hira.jpg"
  },
  {
    id: "dr-asif",
    name: "Dr. Asif Jamil",
    specialty: "Consultant Cardiologist & Heart Health Lead",
    department: "cardiology",
    credentials: "MBBS • FCPS (Cardiology) • Member Pakistan Cardiac Society",
    experience: "17+ Years Cardiac Care",
    bio: "Dr. Asif combines compassionate counseling with state-of-the-art non-invasive 3D echocardiography to keep parents and seniors healthy and active.",
    image: "/images/dr-asif.jpg"
  }
];

export const trustSignals = [
  {
    author: "Sana & Bilal Chaudhry",
    location: "DHA Phase 6, Karachi",
    specialty: "Family Care & Pediatrics",
    rating: 5,
    reviewText: "Vitalis has become our entire family's second home. Both our kids actually look forward to visiting Dr. Saad for their dental checks, and Dr. Zainab manages my mother's diabetes with so much care. No stressful waiting rooms, just true family medicine.",
    source: "Verified Family Review"
  },
  {
    author: "Marium Tariq",
    location: "DHA Phase 3, Lahore",
    specialty: "Maternal Care & Gynea",
    rating: 5,
    reviewText: "Dr. Ayesha Munir guided me through my first pregnancy with unhurried warmth. The 4D ultrasound pictures were breathtaking and the postnatal physiotherapy with Dr. Hira restored my core within weeks. Could not recommend Vitalis more.",
    source: "Verified Mother Review"
  },
  {
    author: "Capt. (R) Tariq Niazi",
    location: "Bait-us-Salam, DHA Phase 8",
    specialty: "Cardiology & Labs",
    rating: 5,
    reviewText: "At 68 years old, visiting crowded clinics is exhausting. At Vitalis, their phlebotomist comes straight to my home for routine blood samples, and Dr. Asif reviews my ECG in a quiet, dignified setting. Excellent institution.",
    source: "Verified Senior Patient"
  }
];

export const faqData = [
  {
    question: "Can multiple family members be seen in one coordinated appointment slot?",
    answer: "Yes! Our Family Scheduling Coordinator specializes in coordinating back-to-back or concurrent visits (for example, pediatric checkups while parents receive their dental cleaning or cardiology review), minimizing travel and waiting time for busy households."
  },
  {
    question: "How does the Family Wellness Plan subscription work?",
    answer: "Our Family Bundles allow households to combine pediatric care, maternal checkups, dental cleanings, and routine laboratory tests with bundled savings of 25% to 35% and 0% interest 6-month installment plans."
  },
  {
    question: "Do you offer doorstep home blood sample collection for infants and seniors?",
    answer: "Yes. Our pediatric and geriatric certified phlebotomy nurses provide gentle doorstep sample collection across DHA Karachi and Lahore. We use ultra-fine pediatric needles to ensure virtually painless blood draws."
  },
  {
    question: "How do we contact the clinic for urgent out-of-hours family medical queries?",
    answer: "Every registered Vitalis family has direct access to our 24/7 WhatsApp Medical Care Desk (+92 300 6654320). A medical triage officer reviews questions and coordinates priority same-day consultations."
  }
];
