"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ACCENT = "#F5A623";
const EASE = [0.16, 1, 0.3, 1] as const;

const industries = [
  {
    number: "01",
    title: "Residential",
    description:
      "Smart homes, security, access control, and home automation for modern living.",
    features: [
      "Smart home automation",
      "Home security systems",
      "Access control",
      "Video doorbells",
    ],
    featured: false,
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Offices, retail, warehouses, and business premises with integrated technology.",
    features: [
      "Video surveillance",
      "Access control",
      "VOIP systems",
      "Automation",
    ],
    featured: false,
  },
  {
    number: "03",
    title: "Mining",
    description:
      "Site security, fleet management, access control, and communication for mines — built for the toughest environments.",
    features: [
      "Mine site security",
      "Fleet tracking",
      "Role-based access",
      "Communication systems",
    ],
    featured: true,
  },
  {
    number: "04",
    title: "Industrial",
    description:
      "Automation, surveillance, access control, and monitoring for industrial sites.",
    features: [
      "Equipment monitoring",
      "Industrial automation",
      "Security systems",
      "Remote monitoring",
    ],
    featured: false,
  },
  {
    number: "05",
    title: "Transport & Logistics",
    description:
      "Vehicle tracking and fleet management for transport operations.",
    features: [
      "GPS tracking",
      "Route optimization",
      "Driver monitoring",
      "Fleet reports",
    ],
    featured: false,
  },
  {
    number: "06",
    title: "Property Developers",
    description:
      "Smart technology for new developments and residential communities.",
    features: [
      "Smart building systems",
      "Security infrastructure",
      "Access control",
      "Communication",
    ],
    featured: false,
  },
  {
    number: "07",
    title: "Hospitality",
    description:
      "Hotels, lodges, and guest houses with smart technology solutions.",
    features: [
      "Guest room automation",
      "Security systems",
      "Access control",
      "Communication",
    ],
    featured: false,
  },
  {
    number: "08",
    title: "Institutions",
    description:
      "Schools, churches, offices, and organizations with integrated systems.",
    features: [
      "Security systems",
      "Access control",
      "Communication",
      "Automation",
    ],
    featured: false,
  },
];

export default function IndustriesPage() {
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
          HERO — right-aligned headline + numbered sidebar
          Overlay is lighter on the right so the image reads.
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Industries1.webp')",
            backgroundPosition: "center 30%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Light cinematic overlay — left darker, right lighter so image shows */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(4,18,27,0.85)_0%,rgba(4,18,27,0.60)_28%,rgba(4,18,27,0.30)_60%,rgba(4,18,27,0.15)_100%)]" />

        {/* Vertical legibility — soft top, medium bottom */}
        <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(3,14,21,0.45)_0%,rgba(3,14,21,0.15)_40%,rgba(3,14,21,0.55)_100%)]" />

        {/* Fine grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Amber glow — right side */}
        <div
          className="pointer-events-none absolute -right-40 top-[30%] h-[460px] w-[460px] opacity-[0.10]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 68%)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-24 md:px-10 lg:px-16 xl:px-20">
          <div className="grid w-full gap-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20">
            {/* LEFT — vertical numbered index */}
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.2,
                ease: EASE,
              }}
              className="hidden lg:block"
            >
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                Sectors
              </p>

              <div className="space-y-3">
                {["Residential", "Commercial", "Mining", "Industrial"].map(
                  (sector, index) => (
                    <div key={sector} className="group flex items-center gap-4">
                      <span
                        className="text-[10px] font-bold tracking-[0.24em]"
                        style={{ color: ACCENT }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                        {sector}
                      </span>
                    </div>
                  )
                )}
                <div className="pt-3">
                  <span className="text-sm font-medium text-white/45">
                    + four more
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — headline block */}
            <div className="lg:text-right">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  ease: EASE,
                }}
                className="mb-8 flex items-center gap-4 lg:justify-end"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                  Industries We Serve
                </span>
                <span
                  className="h-[2px] w-12"
                  style={{ backgroundColor: ACCENT }}
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: reduceMotion ? 0 : 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.05,
                  delay: 0.1,
                  ease: EASE,
                }}
                className="text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white"
              >
                Solutions for
                <br />
                <span className="text-white/45">Every</span>{" "}
                <span className="relative inline-block">
                  Sector.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1,
                      delay: 0.9,
                      ease: EASE,
                    }}
                    className="absolute -bottom-3 left-0 h-[3px] w-[42%] origin-right"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: 0.4,
                  ease: EASE,
                }}
                className="mt-12 ml-auto max-w-[560px] text-base leading-8 text-white/80 md:text-lg"
              >
                From residential homes to mining operations, we provide
                integrated technology solutions for every industry across
                Zimbabwe.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INDUSTRIES GRID — uniform 3-column, featured Mining card
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
                  Our Sectors
                </p>
              </div>

              <h2 className="max-w-[820px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#14384d]">
                Eight Industries.
                <br />
                <span className="text-[#14384d]/30">One Partner.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              Specialized technology solutions tailored to the unique needs of
              each sector.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const isFeatured = industry.featured;

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : (index % 3) * 0.06,
                    ease: EASE,
                  }}
                  className="h-full"
                >
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 transition-all duration-500 md:p-9 ${
                      isFeatured
                        ? "bg-[#153a50] shadow-[0_25px_70px_rgba(14,44,62,0.22)]"
                        : "border border-[#14384d]/10 bg-white shadow-[0_10px_40px_rgba(22,56,76,0.05)] hover:-translate-y-1.5 hover:border-[#F5A623]/40 hover:shadow-[0_25px_70px_rgba(22,56,76,0.12)]"
                    }`}
                  >
                    {/* Amber top hairline */}
                    <span
                      className="absolute left-0 top-0 h-[3px] w-10 transition-all duration-700 ease-out group-hover:w-full"
                      style={{ backgroundColor: ACCENT }}
                    />

                    {/* Amber glow on featured card */}
                    {isFeatured && (
                      <div
                        className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full opacity-[0.20] blur-[100px]"
                        style={{ backgroundColor: ACCENT }}
                      />
                    )}

                    {/* Number chip + Featured tag */}
                    <div className="relative mb-6 flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold tracking-[0.06em] ${
                          isFeatured
                            ? "border border-white/25 text-white"
                            : "border border-[#14384d]/15 text-[#14384d]"
                        }`}
                      >
                        {industry.number}
                      </span>

                      {isFeatured && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.24em]"
                          style={{ color: ACCENT }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3
                      className={`relative max-w-[280px] text-2xl font-semibold leading-[1.08] tracking-[-0.03em] ${
                        isFeatured ? "text-white" : "text-[#14384d]"
                      }`}
                    >
                      {industry.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`relative mt-4 text-[15px] leading-7 ${
                        isFeatured ? "text-white/70" : "text-[#68757c]"
                      }`}
                    >
                      {industry.description}
                    </p>

                    {/* Features — bottom, with clear breathing room above and below */}
                    <div
                      className={`relative mt-8 border-t pt-6 ${
                        isFeatured ? "border-white/10" : "border-[#14384d]/10"
                      }`}
                      style={{ marginTop: "auto", paddingTop: "1.5rem" }}
                    >
                      <div className="grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                        {industry.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0"
                              style={{ color: ACCENT }}
                            />
                            <span
                              className={`text-[13.5px] font-medium ${
                                isFeatured
                                  ? "text-white/85"
                                  : "text-[#3a4a54]"
                              }`}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent bar (non-featured) */}
                    {!isFeatured && (
                      <span
                        className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    )}
                  </div>
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
                    Don&apos;t See Your Industry{" "}
                    <span className="relative inline-block">
                      Listed?
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
                    We work with businesses across all sectors. Contact us to
                    discuss your specific technology needs.
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
                        Contact Us Today
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
                        View Our Services
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