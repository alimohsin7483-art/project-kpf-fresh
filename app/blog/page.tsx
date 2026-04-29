import Link from "next/link";
import { blogPosts } from "@/lib/data";
import styles from "./page.module.css";

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Knowledge Hub</span>
          <h1 className={styles.heroTitle}>FITNESS &<br /><span className={styles.gold}>NUTRITION</span><br />INSIGHTS</h1>
          <p className={styles.heroSub}>Science-backed articles on nutrition, training, wellness and performance. No fluff — just evidence.</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.grid}>
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className={`${styles.card} ${i === 0 ? styles.featured : ""}`}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardBottom}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.readMore}>Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.newsletter}>
        <span className="section-label">Stay Updated</span>
        <h2 className={styles.newsletterTitle}>GET WEEKLY INSIGHTS</h2>
        <p className={styles.newsletterSub}>Science-backed nutrition and fitness tips straight to your inbox. No spam, ever.</p>
        <div className={styles.newsletterForm}>
          <input type="email" placeholder="your@email.com" className={styles.newsletterInput} />
          <button className="btn-gold">Subscribe →</button>
        </div>
      </section>
    </>
  );
}
