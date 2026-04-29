"use client";
import { useState } from "react";
import Link from "next/link";
import { programs } from "@/lib/data";
import styles from "./page.module.css";

export default function EnrollPage({ params, searchParams }: { params: { program: string }; searchParams: { free?: string } }) {
  const isFree = searchParams?.free === "true" || params.program === "consultation";
  const program = programs.find((p) => p.slug === params.program);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", experience: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFree) { setSubmitted(true); return; }
    // 👉 Razorpay integration:
    // const razorpay = new (window as any).Razorpay({
    //   key: "YOUR_RAZORPAY_KEY",
    //   amount: program.price * 100,
    //   currency: "INR",
    //   name: "KPF Academy",
    //   description: program.title,
    //   handler: () => setSubmitted(true),
    // });
    // razorpay.open();
    setSubmitted(true); // Remove this line when Razorpay is connected
  };

  if (submitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successCard}>
          <span className={styles.successIcon}>🎉</span>
          <h1 className={styles.successTitle}>{isFree ? "CONSULTATION BOOKED!" : "ENROLLMENT CONFIRMED!"}</h1>
          <p className={styles.successSub}>
            {isFree
              ? "Thank you! Our team will contact you within 24 hours to schedule your free consultation."
              : `Welcome to ${program?.title}! Check your email for next steps and access details.`}
          </p>
          <Link href="/programs" className="btn-gold">Explore More Programs</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero" style={{ padding: "8rem 3rem 4rem" }}>
        <div className="page-hero-grid" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Link href={program ? `/programs/${program.slug}` : "/programs"} className={styles.back}>← Back</Link>
          <span className="section-label">{isFree ? "Free Consultation" : "Enrollment"}</span>
          <h1 className={styles.heroTitle}>
            {isFree ? "BOOK YOUR FREE\nCONSULTATION" : `ENROLL IN\n${program?.title.toUpperCase()}`}
          </h1>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>{isFree ? "BOOK FREE CONSULTATION" : "YOUR DETAILS"}</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className={styles.field}>
                <label>Phone *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" required
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div className={styles.field}>
              <label>Email *</label>
              <input type="email" placeholder="your@email.com" required
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className={styles.field}>
              <label>Your Primary Goal</label>
              <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
                <option value="">Select your goal...</option>
                <option>Lose weight / Fat loss</option>
                <option>Build muscle / Strength</option>
                <option>Improve overall fitness</option>
                <option>Learn nutrition science</option>
                <option>Become a fitness coach</option>
                <option>General wellness</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Current Experience Level</label>
              <select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}>
                <option value="">Select level...</option>
                <option>Complete beginner</option>
                <option>Some experience (1-2 years)</option>
                <option>Intermediate (2-5 years)</option>
                <option>Advanced (5+ years)</option>
              </select>
            </div>

            {!isFree && program && (
              <div className={styles.orderSummary}>
                <h3 className={styles.orderTitle}>ORDER SUMMARY</h3>
                <div className={styles.orderRow}>
                  <span>{program.title}</span>
                  <span>₹{program.price.toLocaleString()}</span>
                </div>
                <div className={styles.orderRow}>
                  <span style={{ color: "#4CAF50" }}>Discount</span>
                  <span style={{ color: "#4CAF50" }}>- ₹{(program.originalPrice - program.price).toLocaleString()}</span>
                </div>
                <div className={`${styles.orderRow} ${styles.orderTotal}`}>
                  <span>Total</span>
                  <span className={styles.totalPrice}>₹{program.price.toLocaleString()}</span>
                </div>
              </div>
            )}

            <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center", display: "block", fontSize: "0.9rem", padding: "1.1rem" }}>
              {isFree ? "Book Free Consultation →" : `Pay ₹${program?.price.toLocaleString()} & Enroll →`}
            </button>
            <p className={styles.note}>
              {isFree
                ? "✓ No credit card required · ✓ 100% free · ✓ No obligation"
                : "✓ Secure payment via Razorpay · ✓ Instant access · ✓ 7-day refund guarantee"}
            </p>
          </form>
        </div>

        <div className={styles.infoSection}>
          {program && (
            <div className={styles.programSummary}>
              <span className={styles.programIcon}>{program.icon}</span>
              <h3 className={styles.programName}>{program.title}</h3>
              <p className={styles.programDuration}>{program.duration} · {program.level}</p>
              <div className={styles.programHighlights}>
                {program.highlights.map((h) => (
                  <div key={h} className={styles.highlightItem}>
                    <span className={styles.check}>✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className={styles.trustBadges}>
            <div className={styles.badge}><span>🔒</span><span>Secure Payment</span></div>
            <div className={styles.badge}><span>↩️</span><span>7-Day Refund</span></div>
            <div className={styles.badge}><span>⚡</span><span>Instant Access</span></div>
            <div className={styles.badge}><span>🏆</span><span>17 Years Experience</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
