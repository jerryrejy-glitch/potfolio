"use client";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    icon: "📈",
    title: "Social Media Strategy",
    desc: "Full-funnel strategy across Instagram, Facebook, LinkedIn & YouTube — built around your brand goals and audience behavior.",
    tools: ["Meta Business Suite", "Analytics", "Content Calendar"],
    highlight: false,
  },
  {
    icon: "🎬",
    title: "Content Creation & Reels",
    desc: "Shot, edited, and delivered. 3M+ views on a single video. Produced multiple viral reels, including one featured by Mathrubhumi, a leading regional newspaper.",
    tools: ["Canva", "Adobe Photoshop", "Premiere Pro", "AI Video Generation"],
    highlight: true,
  },
  {
    icon: "🎯",
    title: "Paid Ads & Lead Gen",
    desc: "Facebook & Instagram ad campaigns optimized for lead generation and conversions, with full tracking and weekly reporting.",
    tools: ["Facebook Ads", "Instagram Ads", "GMB"],
    highlight: false,
  },
  {
    icon: "🏢",
    title: "Multi-Brand Management",
    desc: "Managing multiple brand accounts simultaneously with coordinated campaigns, unified reporting, and cross-team execution.",
    tools: ["Asana", "Monday.com", "ClickUp"],
    highlight: false,
  },
  {
    icon: "⭐",
    title: "Google My Business",
    desc: "Optimize your GMB profile and implement review-generation systems that consistently grow monthly review volume.",
    tools: ["GMB Optimization", "Review Strategy"],
    highlight: false,
  },
  {
    icon: "🤖",
    title: "Social Media Automation",
    desc: "Lead collection, inquiry handling, and CRM automation that keeps your pipeline moving — even when you're offline.",
    tools: ["Lead Automation", "CRM Integration"],
    highlight: false,
  },
];

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-5 py-16 md:px-12 md:py-[120px] bg-[#F5F5F7]">
      <RevealCard>
        <p className="text-[clamp(22px,2.8vw,38px)] font-semibold leading-[1.3] md:leading-[1.25] tracking-[-0.5px] md:tracking-[-1px] max-w-[760px] mb-10 md:mb-16">
          Strategies that <span className="text-[#6E6E73]">drive growth,</span> content that{" "}
          <span className="text-[#6E6E73]">converts,</span> and communities that{" "}
          <span className="text-[#6E6E73]">stay.</span>
        </p>
      </RevealCard>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((s, i) => (
          <RevealCard key={i} delay={i * 80}>
            <div
              className={`rounded-[20px] p-6 md:p-9 flex flex-col gap-3 md:gap-4 h-full hover:-translate-y-1 transition-transform duration-300 ${
                s.highlight ? "bg-[#1D1D1F] text-white" : "bg-white text-[#1D1D1F]"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[22px] ${
                s.highlight ? "bg-white/10" : "bg-[#F5F5F7]"
              }`}>
                {s.icon}
              </div>
              <h3 className="text-[18px] md:text-[20px] font-bold tracking-[-0.5px]">{s.title}</h3>
              <p className={`text-[14px] md:text-[15px] leading-[1.65] ${s.highlight ? "text-white/60" : "text-[#6E6E73]"}`}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className={`text-[12px] font-medium px-3 py-1 rounded-full ${
                      s.highlight ? "bg-white/10 text-white/70" : "bg-[#F5F5F7] text-[#6E6E73]"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
