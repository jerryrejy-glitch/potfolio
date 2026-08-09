"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Provident Real Estate",
    sub: "Dubai, UAE · Jan 2026–Present",
    tags: ["Real Estate", "7 Brands", "Lead Automation"],
    bg: "linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)",
    size: "large",
    img: "/assets/images/work-provident.jpg",
  },
  {
    title: "Kell Signature Salon & Spa",
    sub: "Kerala, India · 2020–Present",
    tags: ["Salon & Spa", "40K+ Followers", "Viral Reels"],
    bg: "linear-gradient(135deg,#2d1b69 0%,#11998e 100%)",
    size: "small",
    img: "/assets/images/work-kell.jpg",
  },
  {
    title: "Modified Online — Founded & Scaled from 0",
    sub: "India (Remote) · 2014–Present",
    tags: ["Automotive", "185K+ Followers", "₹1Cr Revenue", "Founder"],
    bg: "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
    size: "full",
    img: "/assets/images/work-modified.jpg",
  },
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-12 py-[120px] bg-white">
      <div className="flex items-end justify-between mb-14">
        <RevealCard>
          <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold tracking-[-1.5px]">Featured Work</h2>
        </RevealCard>
        <RevealCard delay={100}>
          <a href="#contact" className="inline-flex items-center gap-2 text-[16px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] group transition-colors">
            Work with me <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealCard>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {projects.map((p, i) => (
          <RevealCard key={i} delay={i * 100}>
            <div
              className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${
                p.size === "large" ? "col-span-12 md:col-span-7 aspect-[7/5]" :
                p.size === "small" ? "col-span-12 md:col-span-5 aspect-square" :
                "col-span-12 aspect-[16/6]"
              }`}
              style={{ background: p.bg }}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[12px] font-medium px-3 py-1 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[clamp(20px,2.2vw,28px)] font-bold leading-snug tracking-tight">{p.title}</div>
                <div className="text-[14px] opacity-70 mt-1">{p.sub}</div>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
