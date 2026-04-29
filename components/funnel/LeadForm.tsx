"use client";
import { useState } from "react";
import styles from "./LeadForm.module.css";

const WA_NUMBER = "917208299269";

// 🔥 PUT YOUR GOOGLE SCRIPT WEB APP URL HERE
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzqvvpZvlGCc2lMyNRq6ietiseXpgoWPVM3JzJwXQ_i3cNCs9oVuPnZtiaqYgQiZ4q5Mw/exec";

interface LeadFormProps {
  onSuccess?: () => void;
  source?: string;
}

export default function LeadForm({ onSuccess, source = "landing" }: LeadFormProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    course: "",
    timeline: "",
    seriousness: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // 🔥 UPDATED GOALS (career angle)
  const goals = [
    { value: "become-trainer", label: "🏋️ Become Trainer", desc: "Start career in fitness" },
    { value: "nutrition-coach", label: "🥗 Nutrition Coach", desc: "Learn diet coaching" },
    { value: "both", label: "🔥 Both Skills", desc: "Trainer + Nutrition expert" },
    { value: "exploring", label: "🤔 Exploring", desc: "Just checking options" },
  ];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter valid number";
    if (!formData.goal) e.goal = "Select your goal";
    if (!formData.course) e.course = "Select course";
    if (!formData.timeline) e.timeline = "Select timeline";
    if (!formData.seriousness) e.seriousness = "Select seriousness";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });
    } catch (err) {
      console.log("Sheet error", err);
    }

    setLoading(false);
    setStep("success");
    onSuccess?.();
  };

  const goToWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I just filled the KPF career form.

Name: ${formData.name}
Goal: ${formData.goal}
Course: ${formData.course}
Timeline: ${formData.timeline}

Please guide me to start my fitness career.`
    );

    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  if (step === "success") {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h3 className={styles.successTitle}>
          YOU'RE IN, {formData.name.split(" ")[0].toUpperCase()}!
        </h3>

        <p className={styles.successSub}>
          Your Career Blueprint is ready. Connect on WhatsApp to get it instantly.
        </p>

        <div className={styles.urgency}>
          ⚡ Limited seats for upcoming batch
        </div>

        <button onClick={goToWhatsApp} className={styles.waBtn}>
          Get Career Plan on WhatsApp
        </button>

        <p className={styles.successNote}>No spam. Only serious guidance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>

      {/* NAME */}
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      {/* PHONE */}
      <div className={styles.field}>
        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={formData.phone}
          onChange={e =>
            setFormData({
              ...formData,
              phone: e.target.value.replace(/\D/g, "").slice(0, 10),
            })
          }
          className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      {/* GOAL */}
      <div className={styles.field}>
        <p className={styles.goalLabel}>What do you want?</p>
        <div className={styles.goals}>
          {goals.map(g => (
            <button
              key={g.value}
              type="button"
              className={`${styles.goalBtn} ${formData.goal === g.value ? styles.goalSelected : ""}`}
              onClick={() => setFormData({ ...formData, goal: g.value })}
            >
              <span>{g.label}</span>
              <span className={styles.goalDesc}>{g.desc}</span>
            </button>
          ))}
        </div>
        {errors.goal && <span className={styles.error}>{errors.goal}</span>}
      </div>

      {/* COURSE */}
      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.course}
          onChange={e => setFormData({ ...formData, course: e.target.value })}
        >
          <option value="">Select Course</option>
          <option value="pt">Personal Trainer Certification</option>
          <option value="nutrition">Nutrition Course</option>
          <option value="both">Both</option>
        </select>
        {errors.course && <span className={styles.error}>{errors.course}</span>}
      </div>

      {/* TIMELINE */}
      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.timeline}
          onChange={e => setFormData({ ...formData, timeline: e.target.value })}
        >
          <option value="">When will you join?</option>
          <option value="immediately">Immediately</option>
          <option value="1-month">Within 1 Month</option>
          <option value="later">Later</option>
        </select>
        {errors.timeline && <span className={styles.error}>{errors.timeline}</span>}
      </div>

      {/* SERIOUSNESS */}
      <div className={styles.field}>
        <select
          className={styles.input}
          value={formData.seriousness}
          onChange={e => setFormData({ ...formData, seriousness: e.target.value })}
        >
          <option value="">How serious are you?</option>
          <option value="fully-committed">Fully Committed</option>
          <option value="somewhat-serious">Somewhat Serious</option>
          <option value="just-exploring">Just Exploring</option>
        </select>
        {errors.seriousness && <span className={styles.error}>{errors.seriousness}</span>}
      </div>

      <button type="submit" className={styles.submit} disabled={loading}>
        {loading ? <span className={styles.spinner} /> : "Get My Career Plan →"}
      </button>

      <p className={styles.privacy}>🔒 No spam. Only serious applicants.</p>
    </form>
  );
}