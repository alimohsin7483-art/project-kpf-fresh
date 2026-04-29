import Link from "next/link";
import { pricingPlans, programs } from "@/lib/data";
import styles from "./page.module.css";

export default function PricingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Pricing</span>
          <h1 className={styles.heroTitle}>SIMPLE.<br /><span className={styles.gold}>TRANSPARENT.</span><br />PRICING.</h1>
          <p className={styles.heroSub}>No hidden fees. No lock-in contracts. Just world-class coaching at a price that makes sense.</p>
        </div>
      </div>

      {/* PLANS */}
      <section className={styles.plansSection}>
        <div className={styles.plansGrid}>
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`${styles.planCard} ${plan.highlight ? styles.highlighted : ""}`}>
              {plan.highlight && <div className={styles.popularBadge}>MOST POPULAR</div>}
              <div className={styles.planTop}>
                <h2 className={styles.planName}>{plan.name}</h2>
                <p className={styles.planDesc}>{plan.desc}</p>
              </div>
              <div className={styles.planPrice}>
                <span className={styles.price}>₹{plan.price.toLocaleString()}</span>
                <span className={styles.period}>/ {plan.period}</span>
              </div>
              <div className={styles.features}>
                {plan.features.map((f) => (
                  <div key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href={`/enroll/${plan.name.toLowerCase()}`} className={plan.highlight ? "btn-gold" : "btn-outline"} style={{ width: "100%", textAlign: "center", display: "block" }}>
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>
        <p className={styles.note}>All prices in INR · GST applicable · 7-day money-back guarantee on all plans</p>
      </section>

      {/* INDIVIDUAL PROGRAMS */}
      <section className={styles.individualSection}>
        <div className={styles.individualHeader}>
          <span className="section-label">Individual Programs</span>
          <h2 className={styles.individualTitle}>OR PICK A SINGLE PROGRAM</h2>
          <p className={styles.individualSub}>Prefer to start with one program? All programs available individually.</p>
        </div>
        <div className={styles.programsList}>
          {programs.map((p) => (
            <div key={p.slug} className={styles.programRow}>
              <div className={styles.programLeft}>
                <span className={styles.programIcon}>{p.icon}</span>
                <div>
                  <h3 className={styles.programName}>{p.title}</h3>
                  <p className={styles.programMeta}>{p.duration} · {p.level}</p>
                </div>
              </div>
              <div className={styles.programRight}>
                <span className={styles.programOriginal}>₹{p.originalPrice.toLocaleString()}</span>
                <span className={styles.programPrice}>₹{p.price.toLocaleString()}</span>
                <Link href={`/enroll/${p.slug}`} className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.65rem 1.4rem" }}>
                  Enroll →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <span className="section-label">FAQ</span>
        <h2 className={styles.faqTitle}>COMMON QUESTIONS</h2>
        <div className={styles.faqGrid}>
          {[
            { q: "Can I access programs from outside India?", a: "Yes! All KPF Academy programs are available worldwide. Content is online and accessible 24/7 from any device." },
            { q: "What is the refund policy?", a: "We offer a 7-day money-back guarantee on all programs. If you're not satisfied, contact us and we'll process a full refund — no questions asked." },
            { q: "How long do I have access to the programs?", a: "Lifetime access to all purchased programs, including any future updates to the content." },
            { q: "Is the 1-on-1 coaching online or in-person?", a: "Coaching sessions are conducted via Zoom/Google Meet. Shraddha works with clients across India and internationally." },
            { q: "Do I need equipment?", a: "Most programs can be adapted for gym or home. Equipment requirements are listed in each program description." },
            { q: "How do I pay?", a: "We accept all major payment methods via Razorpay — UPI, net banking, credit/debit cards and EMI options available." },
          ].map((faq) => (
            <div key={faq.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{faq.q}</h3>
              <p className={styles.faqA}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FREE CTA */}
      <section className={styles.freeCta}>
        <h2 className={styles.freeCtaTitle}>NOT SURE WHERE TO START?</h2>
        <p className={styles.freeCtaSub}>Book a free 15-minute consultation with our team. We&apos;ll help you find the right program for your goals and budget.</p>
        <Link href="/enroll/consultation" className="btn-gold">Book Free Consultation →</Link>
      </section>
    </>
  );
}
