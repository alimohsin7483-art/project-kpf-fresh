import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/funnel/WhatsAppButton";

export const metadata: Metadata = {
  title: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
  description: "India's premier fitness education academy. Programs in fat loss, strength, nutrition & fitness certification. 17 years experience. 1000+ lives transformed.",
  keywords: "fitness academy Mumbai, nutrition course, personal trainer certification, fat loss program, KPF academy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}