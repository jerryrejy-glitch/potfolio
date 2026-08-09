"use client";
import { useEffect, useState } from "react";

const links = ["Work", "Services", "About", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <a href="#" className="text-[17px] font-semibold tracking-tight text-[#1D1D1F]">
        Jerry V Rejy
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className="text-[15px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:jerryrejy@gmail.com"
        className="bg-[#1D1D1F] text-white px-[22px] py-[10px] rounded-full text-[14px] font-medium hover:opacity-80 transition-opacity duration-200"
      >
        Let's Talk
      </a>
    </nav>
  );
}
