import Link from "next/link";
import styles from "./page.module.css";

const services = [
  { icon: "🥗", title: "Personalised Nutrition Plans", desc: "Custom macro and calorie targets based on your body composition, goals and lifestyle. Updated monthly based on your progress." },
  { icon: "📊", title: "Macro Coaching", desc: "Learn to track and optimise your macronutrient intake for fat loss, muscle gain or performance. Science-based, flexible approach." },
  { icon: "🧬", title: "Metabolic Assessment", desc: "Deep dive into your metabolic rate, hormonal health and nutritional deficiencies to build a truly personalised plan." },
  { icon: "🛒", title: "Meal Planning & Prep", desc: "Weekly meal plans, grocery lists and prep guides that fit your food preferences, budget and schedule." },
  { icon: "💊", title: "Supplement Guidance", desc: "Evidence-based supplement recommendations. We only recommend what the science supports — nothing more." },
  { icon: "🍽️", title: "Intuitive Eating Program", desc: "Move beyond calorie counting. Learn to understand your body&apos;s hunger signals and build a healthy relationship with food." },
];

const facts = [
  { stat: "80%", desc: "of body composition results come from nutrition" },
  { stat: "95%", desc: "of diets fail long-term — ours don't" },
  { stat: "6 Weeks", desc: "average time to see measurable results" },
  { stat: "Science", desc: "every recommendation is evidence-based" },
];

export default function NutritionPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Nutrition Services</span>
          <h1 className={styles.heroTitle}>FUEL YOUR<br /><span className={styles.gold}>TRANSFORMATION</span></h1>
          <p className={styles.heroSub}>Evidence-based nutrition coaching that goes beyond calorie counting. Learn the science of food and build habits that last a lifetime.</p>
          <div className={styles.heroActions}>
            <Link href="/programs/nutrition-mastery" className="btn-gold">Nutrition Mastery Program</Link>
            <Link href="/enroll/consultation" className="btn-outline">Free Consultation →</Link>
          </div>
        </div>
      </div>

      {/* FACTS */}
      <div className={styles.factsRow}>
        {facts.map((f) => (
          <div key={f.stat} className={styles.fact}>
            <span className={styles.factStat}>{f.stat}</span>
            <span className={styles.factDesc}>{f.desc}</span>
          </div>
        ))}
      </div>

      {/* SERVICES */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <span className="section-label">What we offer</span>
          <h2 className={styles.servicesTitle}>NUTRITION SERVICES</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((s) => (
            <div key={s.title} className={styles.serviceCard}>
              <span className={styles.serviceIcon}>{s.icon}</span>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyLeft}>
          <span className="section-label">Our Approach</span>
          <h2 className={styles.philosophyTitle}>SCIENCE &gt;<br /><span className={styles.gold}>TRENDS.</span></h2>
        </div>
        <div className={styles.philosophyRight}>
          <p className={styles.philosophyText}>In an industry full of fad diets, detox teas and miracle supplements, KPF Academy takes a radically different approach. Every nutrition recommendation we make is grounded in peer-reviewed research and adapted to your unique physiology.</p>
          <p className={styles.philosophyText}>We don&apos;t follow trends. We follow evidence. And the evidence shows that sustainable fat loss, optimal performance and lasting health all come from the same place: understanding how your body works and fuelling it accordingly.</p>
          <Link href="/programs/nutrition-mastery" className="btn-gold">Start Nutrition Mastery →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>READY TO MASTER YOUR NUTRITION?</h2>
        <p className={styles.ctaSub}>Book a free consultation and let&apos;s build your personalised nutrition strategy.</p>
        <div className={styles.ctaActions}>
          <Link href="/enroll/consultation" className="btn-gold">Book Free Consultation</Link>
          <Link href="/programs" className="btn-outline">Browse All Programs →</Link>
        </div>
      </section>
    </>
  );
}
