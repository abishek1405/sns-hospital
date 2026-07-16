export const HOSPITAL_INFO = {
  name: "SNS Hospital",
  tagline: "Commitment • Trust • Dedication",
  accreditation: "NABH Accredited Hospital",
  address: "88, 89, Sri Ram Nagar, (Opp. Neyveli Arch Gate) Vadakuthu, Kurinjipadi-Tk, Cuddalore Dist, Tamil Nadu - 607308",
  phone1: "944 44 108 11",
  phone2: "04142 - 21 34 34",
  phone3: "9042 608 113",
  email: "info@snshospital.org",
  emailAlt: "snshospital31@gmail.com",
  website: "www.snshospital.org",
  established: 1981,
};


import sheeba from '../assets/Sheeba.png';
import Ashwin from '../assets/Ashwin.png';
import Vrinda from '../assets/Vrinda.jpg';

export const DOCTORS = [

  {
    id: "dr-sheeba",
    name: "Dr. Sheeba Jayaraman",
    title: "Director & Consultant in Reproductive Medicine",
    qualifications: "M.B.B.S., M.S (OG), DGO, DNB (OG), DRM (Germany), MNAMS, FMAS",
    specialty: "Reproductive Medicine & Advanced Gynecological Surgery",
    experience: "15+ Years",
    image: sheeba,
    intro: "Renowned fertility specialist trained in Germany, leading the Fortius IVF team with exceptional success rates."
  },
  {
    id: "dr-ashwin",
    name: "Dr. Ashwin Rao",
    title: "Consultant in Reproductive Medicine",
    qualifications: "M.S, FRM, FMAS, FCG, PGDMLS",
    specialty: "Male Infertility, Andrology & Laparoscopic Surgery",
    experience: "12+ Years",
    image: Ashwin,
    intro: "Specialist in advanced surgical retrieval, ICSI, and complex reproductive interventions."
  },
  {
    id: "dr-vrinda",
    name: "Dr. Vrinda Andrew",
    title: "Consultant in Reproductive Medicine",
    qualifications: "MRCOG (UK), DNB (OG), FRM, DRM (Germany), FMAS",
    specialty: "Fetal Medicine, High-Risk Obstetrics & IVF",
    experience: "10+ Years",
    image: Vrinda,
    intro: "International expert certified in UK and Germany, specializing in personalized fertility protocols."
  }
];

export const IVF_SERVICES = [
  {
    title: "In Vitro Fertilization (IVF)",
    desc: "Advanced assisted reproduction protocols customizing treatment plans to maximize success rates.",
    icon: "Dna"
  },
  {
    title: "Intracytoplasmic Sperm Injection (ICSI)",
    desc: "Specialized procedure injecting a single premium sperm into an egg, overcoming male factor infertility.",
    icon: "Microscope"
  },
  {
    title: "Pre-implantation Genetic Testing (PGT)",
    desc: "Screening embryos for chromosomal abnormalities (PGT-A) & single gene disorders (PGT-M) prior to implantation.",
    icon: "ShieldCheck"
  },
  {
    title: "Fertility Preservation",
    desc: "Egg, sperm, and embryo cryopreservation for medical or personal delay of parenthood.",
    icon: "Snowflake"
  },
  {
    title: "Advanced Laparoscopy & Hysteroscopy",
    desc: "Minimally invasive operative procedures for fibroids, endometriosis, and uterine anomalies.",
    icon: "Activity"
  },
  {
    title: "Embryology & Andrology Support",
    desc: "State-of-the-art laboratory with continuous laminar airflow and strict environmental controls.",
    icon: "Sparkles"
  }
];

export const IVF_TIMELINE = [
  { step: "01", title: "Consultation & Diagnostics", desc: "Comprehensive clinical assessment and hormone screening." },
  { step: "02", title: "Ovarian Stimulation", desc: "Tailored medication to foster healthy follicle development." },
  { step: "03", title: "Egg Retrieval & Fertilization", desc: "Precise minimally invasive retrieval and ICSI/IVF in our lab." },
  { step: "04", title: "Embryo Culture & PGT", desc: "Advanced monitoring and optional genetic screening." },
  { step: "05", title: "Embryo Transfer", desc: "Painless transfer into the uterus with ultrasound guidance." },
  { step: "06", title: "Confirmation of Pregnancy", desc: "Compassionate ongoing prenatal checkups and support." }
];

export const STATS = [
  { value: 45, label: "Years of Legacy", suffix: "+" },
  { value: 15000, label: "Successful IVF & Deliveries", suffix: "+" },
  { value: 25, label: "Specialist Doctors", suffix: "+" },
  { value: 100, label: "Hospital Beds", suffix: "+" },
  { value: 98, label: "Patient Satisfaction Rate", suffix: "%" }
];