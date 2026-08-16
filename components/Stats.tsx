"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "400K+", label: "Combined followers across managed platforms" },
  { value: "8+ yrs", label: "Experience in social media & digital marketing" },
  { value: "₹1Cr+", label: "E-commerce revenue driven through paid social & influencer marketing" },
  { value: "100K+", label: "Average views achieved across managed accounts, up from a 4K–7K baseline" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-[#E8E8ED]"
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white px-5 py-8 md:px-10 md:py-12 flex flex-col gap-2 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transitionDelay: `${i * 80}ms`,
          }}
        >
          <div className="text-[clamp(30px,7.5vw,64px)] font-bold leading-none tracking-[-1.5px] md:tracking-[-2px]">
            {s.value}
          </div>
          <div className="text-[13px] md:text-[15px] text-[#6E6E73] leading-snug max-w-[200px]">
            {s.label}
          </div>
        </div>
      ))}
    </section>
  );
}
