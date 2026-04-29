import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={`${styles.heroTag} anim-1`}>Mumbai · 17 Years of Excellence</p>
          <h1 className={`${styles.heroHeadline} anim-2`}>
            KINETIC PRO<br />
            <span className={styles.heroNeon}>FITNESS</span><br />
            ACADEMY
          </h1>
          <p className={`${styles.heroSub} anim-3`}>
            Excellence in Fitness Education. Transforming how India learns nutrition, fitness and wellness — through science, not trends.
          </p>
          <div className={`${styles.heroActions} anim-4`}>
            <Link href="/programs" className="btn-gold">Explore Programs</Link>
            <Link href="/coach" className="btn-outline">Meet Shraddha →</Link>
          </div>
          <p className={`${styles.heroMotto} anim-5`}>Nutrition · Fitness · Wellness · Science &gt; Trends</p>
        </div>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeNum}>17+</span>
          <span className={styles.heroBadgeLabel}>Years Experience</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={styles.marqueeBar}>
        <div className={styles.marqueeInner}>
          {["STRENGTH", "NUTRITION", "FAT LOSS", "WELLNESS", "MINDSET", "SCIENCE > TRENDS", "MUMBAI", "KPF ACADEMY", "STRENGTH", "NUTRITION", "FAT LOSS", "WELLNESS", "MINDSET", "SCIENCE > TRENDS", "MUMBAI", "KPF ACADEMY"].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item} <span className={styles.marqueeDot}>✦</span></span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className={styles.statsBar}>
        {[["17+", "Years Experience"], ["1000+", "Lives Transformed"], ["6", "Program Types"], ["100%", "Science Backed"]].map(([v, l]) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statNum}>{v}</span>
            <span className={styles.statLabel}>{l}</span>
          </div>
        ))}
      </div>

      {/* PROGRAMS PREVIEW */}
<section className={styles.section}>
  <div className={styles.sectionHeader}>
    <div>
      <span className="section-label">What we offer</span>
      <h2 className={styles.sectionTitle}>OUR PROGRAMS</h2>
    </div>
    <Link href="/programs" className="btn-outline">View All →</Link>
  </div>

  <div className={styles.programsGrid}>
    {programs
      .filter((p) =>
        p.slug === "fitness-education-course" ||
        p.slug === "nutrition-mastery"
      )
      .map((p) => (
        <Link href={`/programs/${p.slug}`} key={p.slug} className={styles.programCard}>
          <div className={styles.programTop}>
            <span className={styles.programIcon}>{p.icon}</span>
            <span
              className={styles.programTag}
              style={{ borderColor: p.color, color: p.color }}
            >
              {p.tag}
            </span>
          </div>

          <h3 className={styles.programTitle}>{p.title}</h3>
          <p className={styles.programDesc}>
            {p.description.slice(0, 110)}...
          </p>

          <div className={styles.programMeta}>
            <span>{p.duration}</span>
            <span>{p.level}</span>
            <span className={styles.programPrice}>
              ₹{p.price.toLocaleString()}
            </span>
          </div>
        </Link>
      ))}
  </div>
</section>

      {/* ABOUT STRIP */}
      <section className={styles.aboutStrip}>
        <div>
          <h2 className={styles.aboutTitle}>NOT JUST FITNESS.<br /><span className={styles.neon}>EDUCATION.</span></h2>
        </div>
        <div>
          <span className="section-label">Our philosophy</span>
          <p className={styles.aboutText}>KPF Academy was founded by <strong>Shraddha Gadit</strong> with a single mission — to transform how India learns nutrition and fitness. With over <strong>17 years of experience</strong>, every program is built on evidence, not trends.</p>
          <Link href="/coach" className="btn-gold">Meet Shraddha →</Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialCard}>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;KPF Academy didn&apos;t just give me a program — they gave me the knowledge to transform my life. Shraddha&apos;s approach is unlike anything else in India.&rdquo;
          </blockquote>
          <p className={styles.testimonialAuthor}>Priya Sharma · Mumbai · Fat Loss Transformation</p>
        </div>
        <Link href="/results" className="btn-outline" style={{ marginTop: "3rem", display: "inline-block" }}>See All Results →</Link>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaWatermark}>KPF</div>
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>Start today</span>
        <h2 className={styles.ctaTitle}>READY TO TRANSFORM?</h2>
        <p className={styles.ctaSub}>Join 1000+ people who&apos;ve transformed their bodies and minds with KPF Academy.</p>
        <div className={styles.ctaActions}>
          <Link href="/pricing" className="btn-gold">View Pricing</Link>
          <Link href="/programs" className="btn-outline">Browse Programs</Link>
        </div>
      </section>
    </>
  );
}