import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <div className="page-hero" style={{ padding: "8rem 3rem 4rem" }}>
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <Link href="/blog" className={styles.back}>← Back to Blog</Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <p className={styles.heroExcerpt}>{post.excerpt}</p>
          <div className={styles.author}>
            <span className={styles.authorName}>Shraddha Gadit</span>
            <span className={styles.authorRole}>Founder, KPF Academy</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <article className={styles.article}>
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}

          <div className={styles.articleCta}>
            <h3 className={styles.articleCtaTitle}>READY TO PUT THIS INTO ACTION?</h3>
            <p className={styles.articleCtaSub}>Explore KPF Academy&apos;s science-backed programs and start your transformation today.</p>
            <Link href="/programs" className="btn-gold">Browse Programs →</Link>
          </div>
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.authorCard}>
            <span className={styles.authorCardLabel}>Written by</span>
            <h3 className={styles.authorCardName}>Shraddha Gadit</h3>
            <p className={styles.authorCardBio}>Founder of KPF Academy · 17+ years experience · Fitness Educator & Nutrition Expert based in Mumbai.</p>
            <Link href="/coach" className={styles.authorLink}>View Profile →</Link>
          </div>

          <div className={styles.relatedSection}>
            <h3 className={styles.relatedTitle}>MORE ARTICLES</h3>
            {related.map((r) => (
              <Link href={`/blog/${r.slug}`} key={r.slug} className={styles.relatedCard}>
                <span className={styles.relatedCategory}>{r.category}</span>
                <p className={styles.relatedTitle2}>{r.title}</p>
                <span className={styles.relatedRead}>{r.readTime}</span>
              </Link>
            ))}
          </div>

          <div className={styles.ctaCard}>
            <h3 className={styles.ctaCardTitle}>START YOUR JOURNEY</h3>
            <p className={styles.ctaCardSub}>Transform your body and mind with KPF Academy.</p>
            <Link href="/pricing" className="btn-gold" style={{ display: "block", textAlign: "center", fontSize: "0.78rem" }}>
              View Programs →
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
