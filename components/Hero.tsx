"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SOCIALS = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaGithub, href: "#", label: "GitHub" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const ROLES = ["DESIGNER", "DEVELOPER", "CREATOR"];

function TypewriterText({ singleLine }: { singleLine?: boolean }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }, 50);
    } else {
      if (currentText === currentRole) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, 150);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentRoleIndex]);

  if (singleLine) {
    return (
      <>
        <span>{currentText || "\u200B"}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[0.04em] h-[0.72em] bg-teal-400 ml-1 align-baseline"
        />
      </>
    );
  }

  const firstPart = currentText.slice(0, 5);
  const secondPart = currentText.slice(5);

  return (
    <>
      <span className="inline-block min-h-[0.82em]">{firstPart || "\u200B"}</span>
      <br />
      <span className="pl-[0.15em] inline-block min-h-[0.82em]">{secondPart || "\u200B"}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[0.08em] h-[0.72em] bg-teal-400 ml-1 align-baseline"
      />
    </>
  );
}

function DesktopHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent text-white">
      {/* Ambient glow behind subject */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[70%] w-[60%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.16),transparent_70%)] blur-2xl"
        aria-hidden
      />

      {/* Giant ghost watermark */}
      <div
        className="mt-20 pointer-events-none absolute inset-x-0 top-6 select-none text-center font-black uppercase leading-none tracking-tight text-[#0f2027]/70"
        style={{ fontSize: "clamp(4rem, 13vw, 11rem)" }}
        aria-hidden
      >
        PORTFOLIO
      </div>

      {/* Portrait – centered behind content */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className="relative h-[90%] w-[42%]">
          <Image
            src="/pasa-pp-transparent-new.png"
            alt="Portrait of the designer"
            fill
            priority
            sizes="30vw"
            className="object-contain object-bottom"
          />
        </div>
        {/* Radial vignette around the portrait */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_55%,transparent_30%,#050a10_100%)]" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050a10] via-[#050a10]/80 to-transparent" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-between px-16 pb-6 pt-20">
        {/* Top row: left copy (vertically centered) */}
        <div className="flex flex-1 flex-col justify-center gap-10">
          {/* Left column */}
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-md"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm font-medium tracking-[0.3em] text-teal-400"
            >
              I DESIGN
            </motion.p>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              className="mt-3 text-7xl font-black uppercase leading-[0.95] tracking-tight"
            >
              UX
              <br />
              UI
              <br />
              WEB
            </motion.h1>

            <motion.span
              custom={0.25}
              variants={fadeUp}
              className="mt-6 block h-px w-14 bg-teal-400"
            />

            <motion.p
              custom={0.3}
              variants={fadeUp}
              className="mt-6 max-w-xs text-base leading-relaxed text-white/60"
            >
              Crafting digital experiences that are intuitive, functional and
              beautiful.
            </motion.p>

            <motion.a
              custom={0.4}
              variants={fadeUp}
              href="#work"
              className="group mt-9 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-xs font-semibold tracking-[0.2em] transition-colors hover:border-teal-400 hover:text-teal-300"
            >
              VIEW MY WORK
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </motion.a>

            {/* Socials + scroll – below CTA */}
            <div className="mt-10 flex flex-row items-end gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-medium tracking-[0.3em] text-teal-400">
                  SOCIAL
                </span>
                <div className="flex items-center gap-4">
                  {SOCIALS.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="text-teal-400 transition-colors hover:text-teal-300 text-lg"
                    >
                      <s.icon />
                    </a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-7 w-4 items-start justify-center rounded-full border border-teal-400/70">
                  <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400"
                  />
                </span>
                <span className="text-[11px] font-medium leading-tight tracking-[0.2em] text-white/60">
                  SCROLL
                  <br />
                  TO EXPLORE
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: DESIGNER wordmark */}
        <div className="relative flex items-end justify-end gap-6 mt-0">
          {/* Right: I'M A + DESIGNER wordmark */}
          <div className="text-right mb-8 -translate-y-[160px]">
            <motion.p
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-3xl font-semibold tracking-wide text-teal-400 mb-1"
            >
              I&apos;M A
            </motion.p>
            <motion.h2
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0.35}
              className="select-none font-black uppercase leading-[0.82] tracking-tight text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              <TypewriterText />
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-transparent text-white flex flex-col pt-12 pb-4">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        {/* ColorBends background is now globally managed in app/layout.tsx to improve performance */}
      </div>

      {/* DESIGNER Watermark behind content */}
      <div className="absolute inset-x-0 top-40 flex justify-center z-0 pointer-events-none overflow-hidden opacity-5">
        <motion.h2
          initial="hidden" animate="show" variants={fadeUp} custom={0.5}
          className="text-[25vw] font-black uppercase leading-none tracking-tighter text-white select-none whitespace-nowrap"
        >
          <TypewriterText singleLine />
        </motion.h2>
      </div>

      {/* Image / Showcase - Top half (Relative) */}
      <div className="relative z-0 flex-1 w-full flex justify-center pointer-events-none mt-0">
        <div className="relative w-full h-full max-w-sm">
          <Image
            src="/pasa-pp-transparent-new.png"
            alt="Pasang Gole - UI/UX Designer and Frontend Developer Portrait"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* Main Content (Bottom Heavy) */}
      <div className="relative z-10 flex flex-col px-6 w-full pb-8 -mt-16">
        <motion.p
          custom={0}
          initial="hidden" animate="show" variants={fadeUp}
          className="text-[10px] font-medium tracking-[0.3em] text-teal-400 mb-2"
        >
          I DESIGN
        </motion.p>
        
        {/* Same line UX UI WEB */}
        <motion.h1
          custom={0.1}
          initial="hidden" animate="show" variants={fadeUp}
          className="text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight flex gap-3 sm:gap-4"
        >
          <span>UX</span>
          <span>UI</span>
          <span>WEB</span>
        </motion.h1>
        
        <motion.span
          custom={0.25}
          initial="hidden" animate="show" variants={fadeUp}
          className="mt-4 block h-px w-10 bg-teal-400"
        />

        <motion.p
          custom={0.3}
          initial="hidden" animate="show" variants={fadeUp}
          className="mt-4 max-w-[280px] text-xs leading-relaxed text-white/70"
        >
          Crafting digital experiences that are intuitive, functional and beautiful.
        </motion.p>
        
        <div className="flex items-end justify-between mt-8">
            <motion.a
            custom={0.4}
            initial="hidden" animate="show" variants={fadeUp}
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-teal-400/10 px-5 py-2.5 text-[10px] font-semibold tracking-[0.2em] transition-colors hover:border-teal-400 hover:bg-teal-400/20"
            >
            VIEW MY WORK
            <span>↗</span>
            </motion.a>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-4"
            >
                {SOCIALS.map((s, i) => (
                <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="text-teal-400 transition-colors hover:text-white text-[17px]"
                >
                    <s.icon />
                </a>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHero />
      </div>
      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </>
  );
}