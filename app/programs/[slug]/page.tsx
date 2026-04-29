import Link from "next/link";
import { programs } from "@/lib/data";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default function ProgramDetail({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <>
      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <Link href="/programs" className={styles.back}>← All Programs</Link>
          <div className={styles.heroTop}>
            <span className={styles.icon}>{program.icon}</span>
            <span className={styles.tag} style={{ borderColor: `${program.color}55`, color: program.color }}>{program.tag}</span>
          </div>
          <h1 className={styles.heroTitle}>{program.title}</h1>
          <p className={styles.heroSub}>{program.subtitle}</p>
          <div className={styles.heroMeta}>
            <span>⏱ {program.duration}</span>
            <span>📊 {program.level}</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.body}>
        <div className={styles.left}>
          {/* About */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>ABOUT THIS PROGRAM</h2>
            <p className={styles.bodyText}>{program.description}</p>
          </div>

          {/* Curriculum */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>CURRICULUM</h2>
            <div className={styles.curriculum}>
              {program.curriculum.map((c, i) => (
                <div key={i} className={styles.week}>
                  <div className={styles.weekNum}>{c.week}</div>
                  <div>
                    <h3 className={styles.weekTitle}>{c.title}</h3>
                    <p className={styles.weekDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className={styles.testimonialBlock}>
            <p className={styles.testimonialQuote}>&ldquo;{program.testimonial.quote}&rdquo;</p>
            <div className={styles.testimonialAttr}>
              <span className={styles.testimonialName}>{program.testimonial.name}</span>
              <span className={styles.testimonialResult} style={{ color: program.color }}>{program.testimonial.result}</span>
            </div>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className={styles.sidebar}>
          <div className={styles.enrollCard}>
            <div className={styles.enrollPrice}>
              <span className={styles.price}>₹{program.price.toLocaleString()}</span>
              <span className={styles.originalPrice}>₹{program.originalPrice.toLocaleString()}</span>
              <span className={styles.savings}>Save ₹{(program.originalPrice - program.price).toLocaleString()}</span>
            </div>

            <div className={styles.highlights}>
              {program.highlights.map((h) => (
                <div key={h} className={styles.highlight}>
                  <span className={styles.check}>✓</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <Link href={`/enroll/${program.slug}`} className="btn-gold" style={{ width: "100%", textAlign: "center", display: "block", marginBottom: "1rem" }}>
              Enroll Now →
            </Link>
            <Link href={`/enroll/${program.slug}?free=true`} className="btn-outline" style={{ width: "100%", textAlign: "center", display: "block" }}>
              Book Free Consultation
            </Link>

            <p className={styles.enrollNote}>✓ Secure payment · ✓ Instant access · ✓ 7-day refund</p>
          </div>

          <div className={styles.coachCard}>
            <span className={styles.coachLabel}>Your Coach</span>
            <div className={styles.coachName}>Shraddha Gadit</div>
            <p className={styles.coachBio}>17+ years experience · Mumbai · Fitness Educator</p>
            <Link href="/coach" className={styles.coachLink}>View full profile →</Link>
          </div>
        </div>
      </div>

      {/* OTHER PROGRAMS */}
      <section className={styles.otherSection}>
        <h2 className={styles.otherTitle}>EXPLORE OTHER PROGRAMS</h2>
        <div className={styles.otherGrid}>
          {programs.filter((p) => p.slug !== program.slug).slice(0, 3).map((p) => (
            <Link href={`/programs/${p.slug}`} key={p.slug} className={styles.otherCard}>
              <span className={styles.otherIcon}>{p.icon}</span>
              <h3 className={styles.otherCardTitle}>{p.title}</h3>
              <span className={styles.otherPrice}>₹{p.price.toLocaleString()}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
