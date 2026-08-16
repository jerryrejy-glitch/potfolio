"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Provident Real Estate",
    sub: "Dubai, UAE · Jan 2026–Present",
    tags: ["Real Estate", "Vacation Rentals", "Inspection", "Conveyancing"],
    bg: "linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)",
    size: "large",
    img: "/assets/images/work-provident.jpg",
  },
  {
    title: "Kell Signature Salon & Spa",
    sub: "Kerala, India · 2020–Dec 2025",
    tags: ["Salon & Spa", "40K+ Followers", "Viral Reels"],
    bg: "linear-gradient(135deg,#2d1b69 0%,#11998e 100%)",
    size: "small",
    img: "/assets/images/work-kell.jpg",
  },
  {
    title: "Modified Online — Founded & Scaled from 0",
    sub: "Founded 2014 (Dormant)",
    tags: ["Automotive", "185K+ Followers", "₹1Cr Revenue", "Founder"],
    bg: "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
    size: "full",
    img: "/assets/images/work-modified.jpg",
  },
];

const igPages = [
  { src: "/assets/ig/provident-estate.webp", handle: "@providentestate", label: "Main Brand" },
  { src: "/assets/ig/provident-secondary.webp", handle: "@provident.secondary", label: "Resale" },
  { src: "/assets/ig/property-boutique.webp", handle: "@provident.property.boutique", label: "Property Boutique" },
  { src: "/assets/ig/vacation-homes.webp", handle: "@provident.vacation.homes", label: "Vacation Homes" },
  { src: "/assets/ig/precision-inspection.webp", handle: "@precision.insp", label: "Precision Inspection" },
];

function RevealCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    if (ref.current) {
      obs.observe(ref.current);
      const r = ref.current.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setV(true);
    }
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
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
    <section id="work" className="px-5 py-16 md:px-12 md:py-[120px] bg-white">
      <div className="flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
        <RevealCard>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold tracking-[-1px] md:tracking-[-1.5px]">Featured Work</h2>
        </RevealCard>
        <RevealCard delay={100}>
          <a href="#contact" className="inline-flex items-center gap-2 text-[15px] md:text-[16px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] group transition-colors">
            Work with me <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealCard>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {projects.map((p, i) => (
          <RevealCard
            key={i}
            delay={i * 100}
            className={
              p.size === "large" ? "col-span-12 md:col-span-7" :
              p.size === "small" ? "col-span-12 md:col-span-5" :
              "col-span-12"
            }
          >
            <div
              className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${
                p.size === "large" ? "aspect-[7/5]" :
                p.size === "small" ? "aspect-square" :
                "aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/6]"
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
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-1.5 md:gap-2 flex-wrap mb-2 md:mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] md:text-[12px] font-medium px-2.5 py-[3px] md:px-3 md:py-1 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[clamp(17px,2.2vw,28px)] font-bold leading-snug tracking-tight">{p.title}</div>
                <div className="text-[12px] md:text-[14px] opacity-70 mt-1">{p.sub}</div>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>

      {/* IG accounts showcase */}
      <RevealCard className="mt-5">
        <div className="rounded-[20px] bg-[#F5F5F7] px-5 py-8 md:px-10 md:py-12 overflow-hidden">
          <div className="mb-8 md:mb-10">
            <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[#6E6E73]">
              Provident Real Estate · Instagram
            </span>
            <h3 className="text-[22px] md:text-[28px] font-bold tracking-[-0.5px] mt-2">
              The accounts I manage day-to-day
            </h3>
          </div>

          <div className="flex gap-5 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {igPages.map((p, i) => (
              <div key={p.handle} className="snap-center shrink-0 w-[200px] md:w-[230px] flex flex-col items-center gap-3">
                <div className="transition-transform duration-300 hover:-translate-y-1">
                  <Image
                    src={p.src}
                    alt={`${p.handle} Instagram page`}
                    width={640}
                    height={1319}
                    className="w-full h-auto"
                    style={{ filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.18)) drop-shadow(0 4px 10px rgba(0,0,0,0.10))" }}
                  />
                </div>
                <div className="text-center">
                  <div className="text-[13px] font-semibold text-[#1D1D1F]">{p.handle}</div>
                  <div className="text-[12px] text-[#6E6E73]">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealCard>
    </section>
  );
}
