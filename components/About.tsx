"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const skills = [
  "Content Strategy", "Organic Growth", "Paid Social",
  "Influencer Marketing", "Analytics & Reporting",
  "Team Leadership", "Project Management", "Visual Storytelling",
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
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
    <section id="about" className="px-12 py-[120px] bg-white grid md:grid-cols-2 gap-20 items-center">
      {/* Photo */}
      <Reveal>
        <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-[#F5F5F7] max-w-[480px]">
          <Image
            src="/assets/images/jerry-about.jpg"
            alt="Jerry V Rejy at work"
            fill
            className="object-cover object-center"
          />
        </div>
      </Reveal>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <Reveal delay={80}>
          <span className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#6E6E73]">About</span>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="text-[clamp(32px,3vw,44px)] font-bold tracking-[-1.5px] leading-[1.1]">
            I build communities.<br />Numbers follow.
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="text-[17px] leading-[1.7] text-[#6E6E73]">
            Based in Dubai, I&apos;m a Social Media Manager with 8+ years turning brand accounts
            into growth engines. I started by building Modified Online — an automotive community —
            from zero to 185K+ followers and ₹1Cr+ in revenue, all organically.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="text-[17px] leading-[1.7] text-[#6E6E73]">
            Today I lead social media strategy and content production across 7 brand accounts for
            Provident Real Estate in Dubai, while continuing to work with select clients globally.
            Google Certified Project Manager · HubSpot Social Media Marketing Certified.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((s) => (
              <span
                key={s}
                className="text-[13px] font-medium px-4 py-[6px] rounded-full border border-[#E8E8ED] text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white hover:border-[#1D1D1F] transition-all duration-200 cursor-default"
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
