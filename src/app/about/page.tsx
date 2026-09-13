"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";

const ACCENT = "#F5A623";
const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------
   DATA
------------------------------------------------------------------ */

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We operate with honesty and transparency in everything we do.",
    Icon: Shield,
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "We strive for the highest quality in every project we deliver.",
    Icon: Award,
  },
  {
    number: "03",
    title: "Customer Focus",
    description:
      "Our clients' needs and satisfaction are at the center of our work.",
    Icon: Users,
  },
  {
    number: "04",
    title: "Innovation",
    description:
      "We embrace new technology to provide cutting-edge solutions.",
    Icon: Compass,
  },
];

const whyChooseUs = [
  {
    number: "01",
    title: "Integrated Solutions",
    description:
      "We don't just install individual systems — we connect them all for seamless operation.",
  },
  {
    number: "02",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance for all installations.",
  },
  {
    number: "03",
    title: "Expert Installation",
    description:
      "Professional installation by certified technicians with years of experience.",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "Tailored technology solutions designed for your specific needs and budget.",
  },
  {
    number: "05",
    title: "Quality Products",
    description:
      "We only use premium, reliable products from trusted manufacturers.",
  },
  {
    number: "06",
    title: "Future-Ready",
    description:
      "Scalable systems that grow with your needs and adapt to new technology.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation & Assessment",
    description:
      "We meet with you to understand your needs, assess your property, and identify the best solutions.",
  },
  {
    number: "02",
    title: "Design & Proposal",
    description:
      "We create a customized system design and provide a detailed proposal with transparent pricing.",
  },
  {
    number: "03",
    title: "Installation & Integration",
    description:
      "Our certified technicians install and integrate all components professionally and efficiently.",
  },
  {
    number: "04",
    title: "Support & Maintenance",
    description:
      "We provide ongoing support, maintenance, and upgrades to keep your systems running perfectly.",
  },
];

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------ */

export default function AboutPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const reduceMotion = useReducedMotion();

  /* Parallax — rAF-throttled */
  useEffect(() => {
    const updateParallax = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.15;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* Shared reveal */
  const reveal = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      ease: EASE,
    },
  };

  return (
    <>
      {/* ========================================================
          HERO — editorial / magazine cover layout
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/About1.webp')",
            backgroundPosition: "center 30%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Bottom-heavy cinematic overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(4,14,22,0.35)_0%,rgba(4,16,24,0.55)_38%,rgba(4,16,24,0.88)_78%,rgba(2,9,14,0.98)_100%)]" />

        {/* Left-side darkening for the headline block */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(3,13,20,0.72)_0%,rgba(4,18,27,0.35)_45%,transparent_70%)]" />

        {/* Fine grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Amber glow — low-left, near headline */}
        <div
          className="pointer-events-none absolute left-[-100px] bottom-[20%] h-[460px] w-[460px] opacity-[0.10]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 68%)`,
          }}
        />

        {/* Rotated vertical spine on the right edge */}
        <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 lg:block xl:right-8">
          <div className="flex items-center gap-6 rotate-180 [writing-mode:vertical-rl]">
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-white/30">
              Harare · Zimbabwe
            </span>
            <span
              className="h-24 w-px"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.42em] text-white/30">
              Since 2019
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-16 pt-40 md:px-10 lg:px-16 xl:px-20">
          {/* Eyebrow row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: EASE,
            }}
            className="mb-8 flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <span
                className="h-[2px] w-12"
                style={{ backgroundColor: ACCENT }}
              />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
                About Kavash
              </span>
            </div>

            <span className="hidden text-[11px] font-bold uppercase tracking-[0.28em] text-white/35 md:inline">
              Chapter 01 — Who We Are
            </span>
          </motion.div>

          {/* Oversized stacked headline */}
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 56 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.05,
              delay: 0.1,
              ease: EASE,
            }}
            className="max-w-[1180px] text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-white"
          >
            <span className="block">A team of</span>
            <span className="block text-white/40">technology</span>
            <span className="block">
              integrators
              <span
                className="ml-4 inline-block h-[0.14em] w-[0.14em] translate-y-[-0.15em] rounded-full align-middle"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
          </motion.h1>

          {/* Supporting line + buttons */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.45,
              ease: EASE,
            }}
            className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-[520px] text-[15px] leading-8 text-white/70 md:text-base">
              Kavash Smart Systems designs, supplies, installs, and supports
              smart automation, security, fleet technology, communication, and
              access control solutions for residential, commercial, and
              industrial clients across Zimbabwe.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end lg:gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-white px-7 py-4 font-semibold text-[#123448] shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-1"
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="relative z-10 flex items-center transition-colors duration-500">
                  Get in Touch
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-500 group-hover:translate-x-1.5"
                  />
                </span>
              </Link>

              <Link
                href="/services"
                className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-full border-2 px-7 py-4 font-semibold transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderColor: ACCENT,
                  backgroundColor: "transparent",
                  color: ACCENT,
                }}
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0d2838]">
                  Our Services
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Docked stats bar */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: 0.75,
              ease: EASE,
            }}
            className="mt-14 border-t border-white/12 pt-8"
          >
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
              {[
                { value: "06", label: "Service Disciplines" },
                { value: "24/7", label: "Technical Support" },
                { value: "100%", label: "End-to-End Delivery" },
                { value: "ZW", label: "Harare-Based Team" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 md:px-8 md:first:pl-0 md:last:pr-0 ${
                    index !== 0 ? "md:border-l md:border-white/12" : ""
                  }`}
                >
                  <span className="text-[1.6rem] font-semibold leading-none tracking-[-0.04em] text-white md:text-[2rem]">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          WHO WE ARE — split panel + image
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...reveal}
            className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
                  Who We Are
                </p>
              </div>

              <h2 className="max-w-[800px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#14384d]">
                More Than
                <br />
                <span className="text-[#14384d]/30">Just Installers.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              We are a technology integration company that connects different
              systems so everything works together seamlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT — narrative card */}
            <motion.div
              {...reveal}
              className="relative overflow-hidden rounded-[32px] bg-[#153a50] p-8 md:p-12 lg:p-14"
            >
              <div
                className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full opacity-[0.18] blur-[120px]"
                style={{ backgroundColor: ACCENT }}
              />
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="relative">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-white/40">
                  Company Overview
                </p>

                <h3 className="max-w-[540px] text-[clamp(1.6rem,2.4vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.035em] text-white">
                  Integrating security, gates, lights, phones, and tracking
                  into one seamless system.
                </h3>

                <div className="mt-8 space-y-5 text-[15px] leading-7 text-white/65">
                  <p>
                    Based in Harare, Zimbabwe, we serve residential,
                    commercial, and industrial clients with cutting-edge
                    technology solutions that enhance security, efficiency, and
                    control.
                  </p>
                  <p>
                    Every system we deliver is designed, installed, and
                    supported end-to-end — so you deal with one trusted
                    partner, not five.
                  </p>
                </div>

                <div className="mt-10 space-y-3 border-t border-white/10 pt-8">
                  {[
                    "Residential smart home solutions",
                    "Commercial security and automation",
                    "Industrial and mining technology",
                    "Fleet management and tracking",
                    "Business communication systems",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : index * 0.06,
                        ease: EASE,
                      }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0"
                        style={{ color: ACCENT }}
                      />
                      <span className="text-sm text-white/75">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — image + mission/vision cards */}
            <div className="flex flex-col gap-6">
              <motion.div
                {...reveal}
                className="relative min-h-[260px] overflow-hidden rounded-[32px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
                  alt="Technology Integration"
                  loading="lazy"
                  className="h-full w-full min-h-[260px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/70 via-[#071923]/10 to-transparent" />
              </motion.div>

              {/* Mission */}
              <motion.div
                {...reveal}
                className="group relative overflow-hidden rounded-[32px] border border-[#14384d]/10 bg-white p-8 md:p-10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/10">
                    <Target size={18} style={{ color: ACCENT }} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
                    Our Mission
                  </span>
                </div>

                <p className="text-[15px] leading-7 text-[#3a4a54] md:text-base">
                  To deliver world-class smart technologies and digital
                  solutions that elevate operational excellence, strengthen
                  security, and create transformative value for businesses,
                  institutions, and communities.
                </p>

                <span
                  className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </motion.div>

              {/* Vision */}
              <motion.div
                {...reveal}
                className="group relative overflow-hidden rounded-[32px] border border-[#14384d]/10 bg-white p-8 md:p-10"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/10">
                    <Compass size={18} style={{ color: ACCENT }} />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
                    Our Vision
                  </span>
                </div>

                <p className="text-[15px] leading-7 text-[#3a4a54] md:text-base">
                  To become Africa&apos;s leading authority in smart
                  technology integration, renowned for innovation, technical
                  mastery, and sustainable digital advancement.
                </p>

                <span
                  className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          VALUES — bento grid
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#102f42] py-24 md:py-32 lg:py-40">
        <div
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] opacity-[0.06]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
          }}
        />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...reveal}
            className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/45">
                  Our Values
                </p>
              </div>

              <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                What Drives
                <br />
                <span style={{ color: ACCENT }}>Everything We Do.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-white/45 lg:justify-self-end">
              Four principles guide every project, every installation, and every
              client relationship.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.Icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : (index % 2) * 0.08,
                    ease: EASE,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-xs font-bold tracking-[0.2em] transition-colors duration-500"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {value.number}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors duration-500 group-hover:border-[#F5A623]/60">
                      <Icon size={18} style={{ color: ACCENT }} />
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em] text-white md:text-[1.75rem]">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-md text-[15px] leading-7 text-white/50">
                    {value.description}
                  </p>

                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY CHOOSE US — bordered grid
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...reveal}
            className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
                  Why Choose Us
                </p>
              </div>

              <h2 className="max-w-[800px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#14384d]">
                Built Around
                <br />
                <span className="text-[#14384d]/30">Reliability.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              Six reasons clients across Zimbabwe trust us with their systems.
            </p>
          </motion.div>

          <div className="grid border-l border-t border-[#14384d]/10 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                  ease: EASE,
                }}
                className="group relative min-h-[260px] border-b border-r border-[#14384d]/10 p-7 md:p-8 lg:p-9"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#14384d]/30 transition-colors duration-500 group-hover:text-[#F5A623]">
                      {item.number}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#14384d]/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]"
                    />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#14384d] md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#68757c] md:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PROCESS — numbered timeline
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#0c293a] py-24 md:py-32 lg:py-40">
        <div
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] opacity-[0.06]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
          }}
        />

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...reveal}
            className="mb-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/45">
                  Our Process
                </p>
              </div>

              <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                How We
                <br />
                <span style={{ color: ACCENT }}>Deliver Projects.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-white/45 lg:justify-self-end">
              From first conversation to ongoing support, every step is clear
              and deliberate.
            </p>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-white/10 lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease: EASE,
                  }}
                  className="relative"
                >
                  <div className="mb-6 flex items-center gap-4 lg:block">
                    <div
                      className="relative flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold"
                      style={{
                        borderColor: ACCENT,
                        backgroundColor: "#0c293a",
                        color: ACCENT,
                      }}
                    >
                      <span className="relative z-10">{step.number}</span>
                      <span
                        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-white/50">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-52 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#204860]/[0.06] blur-[120px]" />
          <div
            className="absolute -right-40 top-10 h-[380px] w-[380px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: EASE,
            }}
            className="mx-auto max-w-6xl"
          >
            <div className="relative overflow-hidden rounded-[36px] bg-[#153a50] shadow-[0_35px_100px_rgba(14,44,62,0.18)] md:rounded-[44px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
              <div
                className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full opacity-[0.18] blur-[100px]"
                style={{ backgroundColor: ACCENT }}
              />
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div
                className="absolute left-[8%] right-[8%] top-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
                }}
              />

              <div className="relative px-7 py-14 md:px-12 md:py-20 lg:px-20 lg:py-24">
                <div className="mx-auto max-w-4xl text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: 0.15,
                      ease: EASE,
                    }}
                    className="text-balance text-[clamp(2.2rem,5vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.045em] text-white"
                  >
                    Let&apos;s Work Together on{" "}
                    <span className="relative inline-block">
                      Something Great.
                      <span
                        className="absolute -bottom-1 left-0 h-[3px] w-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: 0.25,
                      ease: EASE,
                    }}
                    className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
                  >
                    Ready to experience the power of integrated technology
                    solutions? Let&apos;s design something that fits your world.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: 0.35,
                      ease: EASE,
                    }}
                    className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
                  >
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-[#102f42] shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 flex items-center">
                        Get in Touch
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>

                    <Link
                      href="/services"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 px-8 py-4 font-bold transition-all duration-500 hover:-translate-y-1"
                      style={{
                        borderColor: ACCENT,
                        backgroundColor: "transparent",
                        color: ACCENT,
                      }}
                    >
                      <span
                        className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span className="relative z-10 flex items-center transition-colors duration-500 group-hover:text-[#0d2838]">
                        Our Services
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.8,
                      delay: 0.45,
                      ease: EASE,
                    }}
                    className="mt-14 border-t border-white/10 pt-8"
                  >
                    <div className="flex flex-col items-center justify-center gap-5 text-sm text-white/55 sm:flex-row sm:gap-8">
                      <div className="flex items-center gap-2.5">
                        <Shield size={16} style={{ color: ACCENT }} />
                        <span>Certified Professionals</span>
                      </div>
                      <div className="hidden h-4 w-px bg-white/15 sm:block" />
                      <div className="flex items-center gap-2.5">
                        <Clock size={16} style={{ color: ACCENT }} />
                        <span>24/7 Support</span>
                      </div>
                      <div className="hidden h-4 w-px bg-white/15 sm:block" />
                      <div className="flex items-center gap-2.5">
                        <Award size={16} style={{ color: ACCENT }} />
                        <span>Quality Guaranteed</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}