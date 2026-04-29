import Link from "next/link";
import { programs } from "@/lib/data";
import styles from "./page.module.css";

export default function ProgramsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">All Programs</span>
          <h1 className={styles.heroTitle}>TRANSFORM WITH<br /><span className={styles.gold}>THE RIGHT PROGRAM</span></h1>
          <p className={styles.heroSub}>6 science-backed programs designed by Shraddha Gadit with 17 years of expertise. Each one built to deliver real, lasting results.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.grid}>
          {programs.map((p) => (
            <Link href={`/programs/${p.slug}`} key={p.slug} className={styles.card}>
              <div className={styles.cardBorder} style={{ background: p.color }} />
              <div className={styles.cardTop}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={styles.tag} style={{ borderColor: `${p.color}55`, color: p.color }}>{p.tag}</span>
              </div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardSub}>{p.subtitle}</p>
              <p className={styles.cardDesc}>{p.description.slice(0, 120)}...</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>⏱ {p.duration}</span>
                <span className={styles.metaItem}>📊 {p.level}</span>
              </div>
              <div className={styles.cardFooter}>
                <div>
                  <span className={styles.price}>₹{p.price.toLocaleString()}</span>
                  <span className={styles.originalPrice}>₹{p.originalPrice.toLocaleString()}</span>
                </div>
                <span className={styles.cta} style={{ color: p.color }}>View Program →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <h2 className={styles.ctaTitle}>NOT SURE WHICH PROGRAM?</h2>
        <p className={styles.ctaSub}>Book a free 15-minute consultation and we&apos;ll find the perfect fit for your goals.</p>
        <Link href="/enroll/consultation" className="btn-gold">Book Free Consultation</Link>
      </section>
    </>
  );
}
