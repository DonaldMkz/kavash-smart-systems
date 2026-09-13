"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const ACCENT = "#F5A623";
const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    image: "/images/services/optimized/smart-home.webp",
    title: "Smart Home Automation",
    description:
      "Custom smart home solutions for lighting, security, access, entertainment, and appliances.",
    href: "/services/smart-home",
    features: [
      "Smart lighting and switches",
      "Facial recognition locks",
      "Video doorbells",
      "Automated gates",
      "Climate control",
    ],
  },
  {
    image: "/images/services/optimized/fleet-management.webp",
    title: "Vehicle Technology & Fleet Management",
    description:
      "GPS tracking and fleet management for businesses with vehicles — real-time tracking, trip history, geofencing, and driver behavior monitoring.",
    href: "/services/fleet-management",
    features: [
      "Real-time GPS tracking",
      "Geofencing alerts",
      "Driver behavior monitoring",
      "Fleet reporting",
      "Maintenance reminders",
    ],
  },
  {
    image: "/images/services/optimized/video-surveillance.webp",
    title: "Video Surveillance & Security",
    description:
      "Surveillance systems for homes, businesses, and industrial sites — IP CCTV, HD cameras, night vision, PTZ, and remote viewing.",
    href: "/services/security",
    features: [
      "IP CCTV cameras",
      "Night vision capability",
      "PTZ cameras",
      "Remote viewing",
      "Video storage solutions",
    ],
  },
  {
    image: "/images/services/optimized/VOIP.webp",
    title: "VOIP & Business Communication",
    description:
      "Professional phone systems for businesses and organizations — IP phone systems, extensions, call routing, and conferencing.",
    href: "/services/voip",
    features: [
      "IP phone systems",
      "Internal extensions",
      "Call routing",
      "Conference calling",
      "Remote extensions",
    ],
  },
  {
    image: "/images/services/optimized/access-control.webp",
    title: "Automation & Access Control",
    description:
      "Systems that control who enters properties, buildings, and restricted areas — fingerprint, facial recognition, RFID, and smart locks.",
    href: "/services/access-control",
    features: [
      "Fingerprint systems",
      "Facial recognition",
      "RFID card access",
      "Smart locks",
      "Visitor management",
    ],
  },
  {
    image: "/images/services/optimized/mining-industries.webp",
    title: "Mining & Industrial Solutions",
    description:
      "Integrated technology for mining and industrial operations — site security, access, fleet, and communication systems.",
    href: "/services/mining",
    features: [
      "Mine site security",
      "Role-based access control",
      "Fleet management",
      "Mining communication",
      "Industrial automation",
    ],
  },
];

export default function ServicesPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const reduceMotion = useReducedMotion();

  /* ============================================================
     PARALLAX — rAF-throttled
  ============================================================ */
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

  /* ============================================================
     SHARED REVEAL
  ============================================================ */
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
          HERO
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Services1.webp')",
            backgroundPosition: "center 30%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Left-weighted cinematic overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(3,13,20,0.96)_0%,rgba(4,18,27,0.88)_40%,rgba(4,18,27,0.55)_70%,rgba(4,18,27,0.35)_100%)]" />

        {/* Vertical legibility */}
        <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.08)_50%,rgba(3,14,21,0.80)_100%)]" />

        {/* Fine grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Amber glow */}
        <div
          className="pointer-events-none absolute -left-40 top-[30%] h-[460px] w-[460px] opacity-[0.10]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 68%)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-end px-6 pb-20 pt-40 md:px-10 lg:px-16 xl:px-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: EASE,
            }}
            className="mb-8 flex items-center gap-4"
          >
            <span
              className="h-[2px] w-12"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
              Our Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 1.05,
              delay: 0.1,
              ease: EASE,
            }}
            className="max-w-[1100px] text-[clamp(3rem,8.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white"
          >
            Complete
            <br />
            <span className="text-white/40">Technology</span>
            <br />
            <span className="relative inline-block">
              Solutions.
              <span
                className="absolute -bottom-3 left-0 h-[3px] w-[42%] origin-left"
                style={{ backgroundColor: ACCENT }}
              />
            </span>
          </motion.h1>

          {/* Description + stat pills */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.45,
              ease: EASE,
            }}
            className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <p className="max-w-[520px] text-[15px] leading-8 text-white/70 md:text-base">
              We design, supply, install, and support integrated technology
              solutions that connect different systems for seamless control.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { value: "06", label: "Core Services" },
                { value: "24/7", label: "Support" },
                { value: "ZW", label: "Nationwide" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2"
                >
                  <span className="text-base font-semibold tracking-[-0.02em] text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SERVICES — alternating fixed-height cards
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Section heading */}
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
                  What We Offer
                </p>
              </div>

              <h2 className="max-w-[820px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#14384d]">
                Six Core
                <br />
                <span className="text-[#14384d]/30">Services.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              Each service works independently or as part of a fully integrated
              system.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    delay: reduceMotion ? 0 : (index % 2) * 0.06,
                    ease: EASE,
                  }}
                >
                  <Link
                    href={service.href}
                    className={`group relative block overflow-hidden rounded-[28px] bg-[#153a50] shadow-[0_20px_60px_rgba(14,44,62,0.14)] transition-shadow duration-500 hover:shadow-[0_40px_100px_rgba(14,44,62,0.22)] lg:flex lg:h-[380px] ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image panel — fixed 380px on lg */}
                    <div className="relative h-64 overflow-hidden lg:h-full lg:w-2/5">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      />

                      {/* Direction-aware gradient into the card body */}
                      <div
                        className={`absolute inset-0 hidden lg:block ${
                          isEven
                            ? "bg-gradient-to-r from-transparent via-transparent to-[#153a50]"
                            : "bg-gradient-to-l from-transparent via-transparent to-[#153a50]"
                        }`}
                      />

                      {/* Mobile gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#153a50] via-transparent to-transparent lg:hidden" />

                      {/* Index badge */}
                      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#061721]/60 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Amber glow on hover */}
                      <div
                        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-40"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </div>

                    {/* Body panel — fixed 380px on lg */}
                    <div className="relative flex flex-1 flex-col justify-center p-8 md:p-12 lg:h-full lg:p-14">
                      <div>
                        {/* Amber hairline */}
                        <div
                          className="mb-6 h-[2px] w-10 transition-all duration-500 group-hover:w-16"
                          style={{ backgroundColor: ACCENT }}
                        />

                        <h3 className="max-w-[480px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] text-white md:text-3xl">
                          {service.title}
                        </h3>

                        <p className="mt-4 max-w-[560px] text-[15px] leading-7 text-white/65">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-2.5"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0"
                                style={{ color: ACCENT }}
                              />
                              <span className="text-sm text-white/75">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer link — pinned to bottom of the fixed panel */}
                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="text-sm font-bold text-white transition-colors duration-500 group-hover:text-[#F5A623]">
                          Learn More
                        </span>

                        <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 text-white transition-all duration-500 group-hover:border-transparent group-hover:text-[#102f42]">
                          <span
                            className="absolute inset-0 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <ArrowUpRight
                            size={17}
                            className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </Link>
                </motion.div>
              );
            })}
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
                    Not Sure Which Solution{" "}
                    <span className="relative inline-block">
                      You Need?
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
                    Our team can assess your needs and recommend the perfect
                    integrated technology solution for your home or business.
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
                        Get a Free Consultation
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>

                    <Link
                      href="/catalogue"
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
                        Browse Catalogue
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
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