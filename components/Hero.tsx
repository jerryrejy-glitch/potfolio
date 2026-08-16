"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const socialIcons = [
  {
    src: "/assets/icons/instagram.png", alt: "Instagram",
    size: 76, pos: { top: "7%", left: "-16%" }, from: { x: 120, y: 90 },
    rotate: -12, front: true, delay: 1.0, floatDur: 4.4,
  },
  {
    src: "/assets/icons/youtube.png", alt: "YouTube",
    size: 68, pos: { top: "15%", right: "-17%" }, from: { x: -110, y: 80 },
    rotate: 10, front: false, delay: 1.15, floatDur: 5.2,
  },
  {
    src: "/assets/icons/linkedin.png", alt: "LinkedIn",
    size: 58, pos: { top: "44%", left: "-21%" }, from: { x: 130, y: 0 },
    rotate: -8, front: false, delay: 1.3, floatDur: 4.8,
  },
  {
    src: "/assets/icons/tiktok.png", alt: "TikTok",
    size: 62, pos: { top: "30%", right: "-9%" }, from: { x: -100, y: 10 },
    rotate: 12, front: true, delay: 1.2, floatDur: 5.6,
  },
  {
    src: "/assets/icons/facebook.png", alt: "Facebook",
    size: 54, pos: { top: "68%", left: "-11%" }, from: { x: 90, y: -60 },
    rotate: 8, front: true, delay: 1.4, floatDur: 4.2,
  },
  {
    src: "/assets/icons/snapchat.png", alt: "Snapchat",
    size: 56, pos: { top: "66%", right: "-7%" }, from: { x: -100, y: -50 },
    rotate: -10, front: false, delay: 1.5, floatDur: 5.0,
  },
];

const skillsList = [
  "Instagram", "Facebook", "LinkedIn", "YouTube", "Google My Business",
  "Reels & Short-form Video", "AI Video Generation", "Paid Ads",
  "Content Strategy", "Lead Generation", "Community Building"
];

export default function Hero() {
  const playPopSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Web Audio Synthesized Pop (Instant 0ms latency)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const now = ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.07);

      // Layered with MP3 sample
      const sound = new Audio("/assets/bubble.mp3");
      sound.volume = 0.35;
      sound.play().catch(() => {});
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Schedule pop sound for EACH social icon as it appears
    socialIcons.forEach((ic) => {
      const t = setTimeout(() => {
        playPopSound();
      }, ic.delay * 1000);
      timers.push(t);
    });

    // Interaction listeners to unlock audio context on browser policies
    const unlockAudio = () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("scroll", unlockAudio, { once: true });

    return () => {
      timers.forEach((t) => clearTimeout(t));
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-white pt-24 md:pt-16"
    >
      <div className="grid md:grid-cols-[1fr_auto_1fr] items-end gap-x-8 lg:gap-x-12 px-6 md:px-12 w-full max-w-[1600px] mx-auto">
        {/* Left — headline */}
        <div className="order-1 flex flex-col items-center md:items-start text-center md:text-left justify-end pb-4 md:pb-24 z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="flex items-center gap-2 text-[13px] md:text-[14px] text-[#6E6E73] mb-4 md:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#34C759] pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.38 }}
            className="text-[clamp(30px,3.6vw,58px)] font-bold leading-[1.08] md:leading-[1.05] tracking-[-1.2px] md:tracking-[-2px]"
          >
            Growing brands through{" "}
            <em className="not-italic text-[#6E6E73]">strategic</em>{" "}
            social media
          </motion.h1>
        </div>

        {/* Center — photo */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="order-3 md:order-2 relative mx-auto w-[min(78vw,330px)] md:w-[clamp(300px,28vw,430px)] mt-8 md:mt-0"
        >
          {/* Arch backdrop */}
          <div className="absolute inset-x-[-8%] bottom-0 top-[14%] rounded-t-full bg-[#F5F5F7]" />

          {/* Floating 3D social icons */}
          {socialIcons.map((ic) => (
            <motion.div
              key={ic.alt}
              initial={{ opacity: 0, x: ic.from.x, y: ic.from.y, scale: 0.3, rotate: 0 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: ic.rotate }}
              transition={{ duration: 1.1, ease, delay: ic.delay }}
              onMouseEnter={playPopSound}
              onClick={playPopSound}
              className={`absolute hidden md:block cursor-pointer transition-transform duration-200 hover:scale-110 ${ic.front ? "z-20" : "z-[1]"}`}
              style={{ ...ic.pos, width: ic.size }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: ic.floatDur, repeat: Infinity, ease: "easeInOut", delay: ic.delay + 1.1 }}
              >
                <Image
                  src={ic.src}
                  alt={ic.alt}
                  width={160}
                  height={160}
                  sizes="100px"
                  quality={85}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          ))}
          <Image
            src="/assets/images/jerry-cutout.png"
            alt="Jerry V Rejy"
            width={1080}
            height={1444}
            priority
            sizes="(max-width: 768px) 78vw, (max-width: 1200px) 380px, 430px"
            quality={90}
            className="relative z-10 w-full h-auto"
          />
        </motion.div>

        {/* Right — subtext + CTAs */}
        <div className="order-2 md:order-3 flex flex-col items-center md:items-start text-center md:text-left justify-end pb-0 md:pb-24 z-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
            className="text-[15px] md:text-[17px] leading-[1.65] text-[#6E6E73] max-w-[400px]"
          >
            8+ years crafting organic growth strategies that drive real results:
            400K+ organically grown followers, ₹1Cr+ in e-commerce revenue through paid social and influencer campaigns,
            and content that&apos;s gone viral on national media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="mt-7 md:mt-8 flex items-center gap-3 md:gap-4 flex-wrap justify-center md:justify-start"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white px-6 py-3 text-[15px] md:px-7 md:py-[14px] md:text-[16px] rounded-full font-medium hover:opacity-80 hover:-translate-y-px transition-all duration-200"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[15px] md:text-[16px] font-medium text-[#1D1D1F] group px-1 py-2"
            >
              Get in touch{" "}
              <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Skills ticker */}
      <div className="w-full border-t border-[#E8E8ED] py-4 mt-12 bg-white overflow-hidden">
        <div className="ticker-animate flex w-max items-center gap-8 text-[12px] md:text-[13px] font-semibold text-[#6E6E73] tracking-[1.5px] uppercase">
          {[...skillsList, ...skillsList, ...skillsList].map((skill, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{skill}</span>
              <span className="text-[#E8E8ED]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
