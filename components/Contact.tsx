"use client";
import { useRef, useEffect, useState } from "react";

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
      transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="px-12 py-[140px] bg-[#1D1D1F] flex flex-col items-center text-center gap-8"
      >
        <Reveal>
          <h2 className="text-[clamp(44px,6vw,88px)] font-bold tracking-[-3px] leading-none text-white max-w-[800px]">
            Let&apos;s grow<br />your brand.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[18px] text-white/50 max-w-[480px] leading-[1.65]">
            Whether you need a full social media strategy, viral content, or lead
            generation automation — I&apos;d love to hear about your project.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <a
              href="mailto:jerryrejy@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-[#1D1D1F] px-8 py-4 rounded-full text-[16px] font-semibold hover:opacity-90 hover:-translate-y-px transition-all duration-200"
            >
              ✉️ jerryrejy@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/jerryvrejy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] font-medium text-white/60 hover:text-white inline-flex items-center gap-2 group transition-colors"
            >
              LinkedIn <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-[14px] text-white/30">Based in Dubai, UAE · Available globally</p>
        </Reveal>
      </section>

      <footer className="px-12 py-8 bg-[#1D1D1F] border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
        <span className="text-[15px] font-semibold text-white">Jerry V Rejy</span>
        <ul className="flex gap-7 list-none">
          {[
            { label: "Email", href: "mailto:jerryrejy@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/in/jerryvrejy" },
            { label: "Work", href: "#work" },
          ].map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[14px] text-white/40 hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-[13px] text-white/30">© 2026 Jerry V Rejy</span>
      </footer>
    </>
  );
}
