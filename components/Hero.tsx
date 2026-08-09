"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-2 items-end px-12 pb-20 pt-16 overflow-hidden bg-white"
    >
      {/* Left */}
      <div className="flex flex-col justify-end pb-2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="flex items-center gap-2 text-[14px] text-[#6E6E73] mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-[#34C759] pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.38 }}
          className="text-[clamp(42px,5.5vw,76px)] font-bold leading-[1.05] tracking-[-2.5px] max-w-[620px]"
        >
          Growing brands through{" "}
          <em className="not-italic text-[#6E6E73]">strategic</em>{" "}
          social media
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.55 }}
          className="mt-7 text-[17px] leading-[1.65] text-[#6E6E73] max-w-[420px]"
        >
          8+ years crafting organic growth strategies that drive real results —
          from 0 to 400K+ followers, ₹1Cr+ in e-commerce revenue, and viral
          content featured by major media.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-10 flex items-center gap-4 flex-wrap"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white px-7 py-[14px] rounded-full text-[16px] font-medium hover:opacity-80 hover:-translate-y-px transition-all duration-200"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[16px] font-medium text-[#1D1D1F] group"
          >
            Get in touch{" "}
            <span className="group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Right — photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.28 }}
        className="hidden md:flex items-end justify-center h-full"
      >
        <div className="relative w-full max-w-[520px] h-[85vh]">
          <Image
            src="/assets/images/jerry-hero.jpg"
            alt="Jerry V Rejy"
            fill
            priority
            className="object-cover object-top rounded-[24px_24px_0_0]"
          />
          {/* Fade bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[40%] rounded-[0_0_24px_24px]"
            style={{ background: "linear-gradient(to bottom, transparent, #fff)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
