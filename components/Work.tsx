"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Provident Real Estate",
    sub: "Dubai, UAE · Jan 2026–Present",
    tags: ["Real Estate", "Vacation Rentals", "Inspection", "Conveyancing"],
    img: "/assets/work/provident-thumb.png",
    video: "/assets/work/provident.mp4",
    link: "https://www.instagram.com/providentestate",
    desc: "Managing 5 Instagram accounts for Provident's full Dubai portfolio — from luxury vacation homes to property inspection, driving organic reach and lead generation.",
    num: "01",
  },
  {
    title: "Kell Signature Salon & Spa",
    sub: "Kerala, India · 2020–Dec 2025",
    tags: ["Salon & Spa", "40K+ Followers", "Viral Reels"],
    img: "/assets/work/kell-thumb.png",
    video: "/assets/work/kell.mp4",
    link: "https://www.instagram.com/kellsalon",
    desc: "Grew Kell from scratch to 40K+ organic followers with viral reels — including a Vishu reel featured on Mathrubhumi national news.",
    num: "02",
  },
  {
    title: "Modified Online",
    sub: "Founded 2014 (Dormant)",
    tags: ["Automotive", "185K+ Followers", "₹1Cr Revenue", "Founder"],
    img: "/assets/work/modified-thumb.png",
    video: "/assets/work/modified.mp4",
    link: "https://www.instagram.com/modified_online",
    desc: "Founded and scaled an automotive media brand to 185K+ organic followers and ₹1Cr+ in e-commerce revenue — built entirely from zero with no paid ads.",
    num: "03",
  },
];

const igPages = [
  { src: "/assets/ig/provident-estate.webp", handle: "@providentestate", label: "Main Brand" },
  { src: "/assets/ig/provident-secondary.webp", handle: "@provident.secondary", label: "Resale" },
  { src: "/assets/ig/property-boutique.webp", handle: "@provident.property.boutique", label: "Property Boutique" },
  { src: "/assets/ig/vacation-homes.webp", handle: "@provident.vacation.homes", label: "Vacation Homes" },
  { src: "/assets/ig/precision-inspection.webp", handle: "@precision.insp", label: "Precision Inspection" },
];

type Project = typeof projects[0];

const n = projects.length;
// Each card transition occupies an equal slice of scrollYProgress.
// We add 0.5 extra "slots" of scroll so the last card stays visible before leaving.
const SECTION_VH = n * 100 + 60; // e.g. 360vh for 3 cards

function sliceRange(i: number) {
  // card i slides in at: [i/n - gap, i/n]
  // card i text fades at: [(i+1)/n - gap, (i+1)/n]
  const gap = 0.12;
  return {
    slideIn:  [Math.max(0, i / n - gap), i / n] as [number, number],
    textFade: [(i + 1) / n - gap, (i + 1) / n] as [number, number],
  };
}

function Card({
  p,
  index,
  scrollYProgress,
}: {
  p: Project;
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const { slideIn, textFade } = sliceRange(index);

  // Slide up from bottom (first card already visible)
  const y = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : slideIn,
    index === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  // Content fades out as next card covers this one (last card stays opaque)
  const contentOpacity = useTransform(
    scrollYProgress,
    index === n - 1 ? [0, 1] : textFade,
    index === n - 1 ? [1, 1] : [1, 0]
  );

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  };
  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };

  return (
    <motion.div
      style={{ y, zIndex: index + 1 }}
      className="absolute inset-0 flex border-t border-[#E8E8ED] bg-white"
    >
      {/* ── Left: clean white panel with content ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="w-full md:w-[52%] bg-[#FAFAFC] border-r border-[#E8E8ED] flex flex-col justify-between px-8 md:px-16 pt-28 pb-12 md:pt-32 md:pb-16"
      >
        {/* Top row: section label + number */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[2px] uppercase text-[#86868B]">
            Featured Work
          </span>
          <span className="text-[12px] font-bold tracking-[2px] text-[#1D1D1F]">
            {p.num} / {String(n).padStart(2, "0")}
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[12px] font-medium px-3.5 py-1 rounded-full border border-[#E8E8ED] bg-white text-[#1D1D1F]"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-[clamp(26px,3.5vw,48px)] font-bold tracking-[-1.5px] leading-[1.08] text-[#1D1D1F]">
            {p.title}
          </h3>
          <p className="text-[13px] md:text-[14px] text-[#86868B] font-medium -mt-2">{p.sub}</p>

          <p className="text-[15px] md:text-[16px] leading-[1.65] text-[#6E6E73] max-w-[440px]">
            {p.desc}
          </p>

          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium mt-3 w-fit rounded-full px-6 py-3 bg-[#1D1D1F] text-white hover:bg-[#333336] hover:-translate-y-px transition-all duration-200"
          >
            View Project ↗
          </a>
        </div>

        {/* Bottom label */}
        <p className="text-[11px] text-[#86868B] tracking-widest uppercase font-medium">
          Scroll to explore
        </p>
      </motion.div>

      {/* ── Right: white panel with logo / video ── */}
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex w-[48%] bg-white items-center justify-center relative overflow-hidden cursor-pointer"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* Logo on white */}
        <div
          className="absolute inset-0 flex items-center justify-center p-16 transition-opacity duration-500 z-10"
          style={{ opacity: hovered ? 0 : 1 }}
        >
          <div className="relative w-full max-w-[300px] aspect-square">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* Video overlay on hover */}
        <video
          ref={videoRef}
          src={p.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Hover hint */}
        <div
          className="absolute bottom-8 right-8 text-[11px] font-semibold tracking-widest uppercase transition-opacity duration-300 z-20"
          style={{ color: "#1D1D1F", opacity: hovered ? 0 : 0.3 }}
        >
          Hover to play ▶
        </div>
      </a>
    </motion.div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  return (
    <>
      {/* ── Stacking full-screen cards ── */}
      <div
        ref={sectionRef}
        id="work"
        style={{ height: `${SECTION_VH}vh` }}
        className="relative"
      >
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {projects.map((p, i) => (
            <Card key={i} p={p} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>

      {/* ── IG accounts showcase (outside sticky) ── */}
      <section className="px-5 py-16 md:px-12 md:py-20 bg-white">
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
            {igPages.map((p) => (
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
      </section>
    </>
  );
}
