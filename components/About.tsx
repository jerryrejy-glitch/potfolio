"use client";
import { useRef, useEffect, useState } from "react";

const skills = [
  "Content Strategy", "Organic Growth", "Paid Social",
  "Influencer Marketing", "Analytics & Reporting",
  "Team Leadership", "Project Management", "Visual Storytelling",
];

const highlights = [
  { stat: "8+", label: "Years Experience" },
  { stat: "185K+", label: "Followers Grown" },
  { stat: "₹1Cr+", label: "Revenue Generated" },
  { stat: "20+", label: "Brands Managed" },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
      transform: v ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

export default function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-12 md:py-[120px] bg-white grid md:grid-cols-2 gap-10 md:gap-20 items-center">
      {/* Numbers Highlight Block */}
      <Reveal>
        <div className="rounded-[24px] bg-[#F5F5F7] p-8 md:p-10 grid grid-cols-2 gap-5 max-w-[480px]">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] p-6 flex flex-col justify-center border border-[#E8E8ED] hover:shadow-sm transition-all duration-200"
            >
              <div className="text-[clamp(30px,2.8vw,40px)] font-bold text-[#1D1D1F] leading-none tracking-[-1.5px] mb-2">
                {h.stat}
              </div>
              <div className="text-[13px] font-medium text-[#6E6E73] uppercase tracking-[0.5px]">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <Reveal delay={80}>
          <span className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#6E6E73]">About</span>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="text-[clamp(26px,3vw,44px)] font-bold tracking-[-1px] md:tracking-[-1.5px] leading-[1.15] md:leading-[1.1]">
            I build communities. Numbers follow.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[#6E6E73]">
            Based in Dubai, I’m a Social Media Manager with 8+ years turning brand accounts into growth engines. I started by building Modified Online, an automotive community, growing it organically to 185K+ followers, while generating ₹1Cr+ in revenue through paid strategies.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[#6E6E73]">
            Today I lead social media strategy and content production across 7 brand accounts for Provident Real Estate in Dubai, while continuing to work with select clients globally. Google Certified Project Manager · HubSpot Social Media Marketing Certified.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[12px] md:text-[13px] font-medium px-3 md:px-4 py-[6px] rounded-full border border-[#E8E8ED] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white hover:border-[#1D1D1F] transition-all duration-200 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
