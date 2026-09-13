"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const ACCENT = "#F5A623";
const DEEP_BLUE = "#0d2838";

const services = [
  {
    image: "/images/services/optimized/smart-home.webp",
    title: "Smart Home Automation",
    description:
      "Custom smart home solutions for lighting, security, access, entertainment, and appliances.",
    href: "/services/smart-home",
  },
  {
    image: "/images/services/optimized/fleet-management.webp",
    title: "Vehicle Technology & Fleet Management",
    description:
      "GPS tracking and fleet management for businesses with vehicles.",
    href: "/services/fleet-management",
  },
  {
    image: "/images/services/optimized/video-surveillance.webp",
    title: "Video Surveillance & Security",
    description:
      "Surveillance systems for homes, businesses, and industrial sites.",
    href: "/services/security",
  },
  {
    image: "/images/services/optimized/VOIP.webp",
    title: "VOIP & Business Communication",
    description:
      "Professional phone systems for businesses and organizations.",
    href: "/services/voip",
  },
  {
    image: "/images/services/optimized/access-control.webp",
    title: "Automation & Access Control",
    description:
      "Systems that control who enters properties and restricted areas.",
    href: "/services/access-control",
  },
  {
    image: "/images/services/optimized/mining-industries.webp",
    title: "Mining & Industrial Solutions",
    description:
      "Integrated technology for mining and industrial operations.",
    href: "/services/mining",
  },
];

const whyKavash = [
  {
    number: "01",
    title: "Integrated Solutions",
    description:
      "We connect security, gates, lights, phones, and tracking into one seamless system.",
  },
  {
    number: "02",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance for all our installations.",
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

const railItems = [
  "Automation",
  "Security",
  "Fleet Technology",
  "Communication",
  "Access Control",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  /* ============================================================
     PARALLAX — rAF-throttled (updates once per frame)
  ============================================================ */
  useEffect(() => {
    const updateParallax = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.15;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ============================================================
     SHARED REVEAL — one easing for every section header
  ============================================================ */
  const reveal = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      ease: smoothEase,
    },
  };

  return (
    <>
      {/* ========================================================
          HERO — left text, right information rail
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Home1.webp')",
            backgroundPosition: "center 20%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Cinematic overlay — darker on the left so the text pops */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(3,13,20,0.96)_0%,rgba(4,18,27,0.90)_38%,rgba(4,18,27,0.64)_68%,rgba(4,18,27,0.45)_100%)]" />

        {/* Vertical vignette for legibility at the top and bottom */}
        <div className="fixed inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.08)_55%,rgba(3,14,21,0.70)_100%)]" />

        {/* Fine grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Amber atmospheric glow (left) */}
        <div
          className="pointer-events-none absolute -left-40 top-[35%] h-[420px] w-[420px] opacity-[0.09]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 68%)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-20 pt-32 md:px-10 lg:px-16 xl:px-20">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_320px] lg:items-end">
            {/* LEFT — hero content */}
            <div className="max-w-[960px]">
              {/* Accent eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.7,
                  ease: smoothEase,
                }}
                className="mb-8 flex items-center gap-4"
              >
                <span
                  className="h-[2px] w-12"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/60">
                  Kavash Smart Systems
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 46 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1,
                  delay: 0.08,
                  ease: smoothEase,
                }}
                className="max-w-[1050px] text-[clamp(3.5rem,7vw,7.4rem)] font-semibold leading-[0.89] tracking-[-0.06em] text-white"
              >
                Smart Technology.
                <br />
                <span className="text-white/48">Connected Systems.</span>
                <br />
                <span className="relative inline-block">
                  Better Control.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 1,
                      delay: 0.9,
                      ease: smoothEase,
                    }}
                    className="absolute -bottom-3 left-0 h-[3px] w-[38%] origin-left"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: 0.32,
                  ease: smoothEase,
                }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-base leading-8 text-white/66 md:text-lg">
                  Kavash Smart Systems designs, supplies, installs, and supports
                  smart automation, security, fleet technology, communication,
                  and access control solutions for residential, commercial, and
                  industrial clients.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: 0.5,
                  ease: smoothEase,
                }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                {/* Primary — solid white, hover amber fill */}
                <Link
                  href="/services"
                  className="group relative inline-flex min-w-[190px] items-center justify-center overflow-hidden rounded-full bg-white px-7 py-4 font-semibold text-[#123448] shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-1"
                >
                  <span
                    className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    style={{ backgroundColor: ACCENT }}
                  />

                  <span className="relative z-10 flex items-center transition-colors duration-500">
                    Explore Services
                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-500 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>

                {/* "Get a Quote" — amber text at rest, amber fill + deep blue text on hover */}
                <Link
                  href="/contact"
                  className="group relative inline-flex min-w-[190px] items-center justify-center overflow-hidden rounded-full border-2 px-7 py-4 font-semibold transition-all duration-500 hover:-translate-y-1"
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
                    Get a Quote
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — information rail */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: 0.35,
                ease: smoothEase,
              }}
              className="hidden border-l border-white/15 pl-8 lg:block"
            >
              <div className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/32">
                  What we integrate
                </p>
              </div>

              {railItems.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-t border-white/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-semibold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-white/65 transition-colors duration-300 group-hover:text-white">
                      {item}
                    </span>
                  </div>

                  <span
                    className="h-1.5 w-1.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: ACCENT }}
                  />
                </div>
              ))}

              <div className="mt-10 border-t border-white/10 pt-7">
                <div className="text-[2.8rem] font-semibold leading-none tracking-[-0.05em] text-white">
                  24/7
                </div>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                  Technical Support
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f7f7f4] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -right-24 top-20 h-[380px] w-[380px] rounded-full opacity-[0.06] blur-[110px]"
            style={{ backgroundColor: ACCENT }}
          />

          <div className="absolute -left-32 bottom-20 h-[400px] w-[400px] rounded-full bg-[#204860]/[0.06] blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#204860 1px, transparent 1px), linear-gradient(90deg, #204860 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          {/* Heading */}
          <motion.div
            {...reveal}
            className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-[2px] w-9 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#204860] md:text-sm">
                  Our Services
                </p>
              </div>

              <h2 className="text-[clamp(2.3rem,5vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[#16384c]">
                Complete Technology
                <span className="block text-[#16384c]/55">Solutions</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-[#5d6870] md:text-right md:text-lg">
              Six disciplines, one integrated system. Explore what we build,
              install, and support.
            </p>
          </motion.div>

          {/* Service grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: smoothEase,
                }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[30px] border border-[#16384c]/[0.08] bg-white shadow-[0_16px_60px_rgba(22,56,76,0.07)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-[#F5A623]/30 hover:shadow-[0_30px_80px_rgba(22,56,76,0.14)]"
                >
                  <div className="relative h-[255px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071923]/80 via-[#071923]/10 to-transparent" />

                    <div
                      className="absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-30"
                      style={{ backgroundColor: ACCENT }}
                    />

                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="rounded-full border border-white/25 bg-[#061721]/55 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <h3 className="max-w-[95%] text-xl font-bold leading-tight tracking-[-0.025em] text-[#173b50] md:text-[1.4rem]">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-[#69747b]">
                      {service.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-[#16384c]/10 pt-5">
                        <span className="text-sm font-bold text-[#173b50] transition-colors duration-300 group-hover:text-[#102c3d]">
                          Learn More
                        </span>

                        <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#16384c]/15 text-[#173b50] transition-all duration-500 group-hover:border-transparent group-hover:text-[#102c3d]">
                          <span
                            className="absolute inset-0 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-100"
                            style={{ backgroundColor: ACCENT }}
                          />

                          <ArrowRight
                            size={17}
                            className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>

                    <span
                      className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-700 ease-out group-hover:w-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY KAVASH
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#102f42] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[100px]" />

          <div
            className="absolute bottom-[-200px] left-[10%] h-[500px] w-[500px] rounded-full opacity-[0.1] blur-[150px]"
            style={{ backgroundColor: ACCENT }}
          />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            {...reveal}
            className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="h-[2px] w-9 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65 md:text-sm">
                  Why Choose Kavash
                </p>
              </div>

              <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white">
                Why We&apos;re{" "}
                <span className="relative inline-block">
                  Different
                  <span
                    className="absolute -bottom-1 left-0 h-[3px] w-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-white/55 md:text-right md:text-lg">
              We&apos;re not just installers — we&apos;re technology integration
              experts who connect systems for seamless control.
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {whyKavash.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                  ease: smoothEase,
                }}
                className="group relative overflow-hidden border-b border-white/10"
              >
                <div className="absolute inset-0 origin-left scale-x-0 bg-white/[0.035] transition-transform duration-700 ease-out group-hover:scale-x-100" />

                <span
                  className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ backgroundColor: ACCENT }}
                />

                <div className="relative grid grid-cols-1 items-center gap-5 py-8 transition-transform duration-500 ease-out group-hover:translate-x-2 md:grid-cols-[110px_1fr_auto] md:gap-8 md:py-10">
                  <span
                    className="text-4xl font-black tracking-[-0.06em] md:text-5xl"
                    style={{
                      WebkitTextStroke: "1px rgba(255,255,255,0.18)",
                      color: "transparent",
                    }}
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.02em] text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:border-[#F5A623] group-hover:text-[#102f42]">
                      <span
                        className="absolute inset-0 scale-0 rounded-full transition-transform duration-500 group-hover:scale-100"
                        style={{ backgroundColor: ACCENT }}
                      />

                      <ArrowRight
                        size={17}
                        className="relative z-10 transition-transform duration-500 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: 0.2,
              ease: smoothEase,
            }}
            className="mt-10"
          >
            <div className="flex items-start gap-3 text-sm leading-6 text-white/45">
              <Shield
                size={16}
                className="mt-1 shrink-0"
                style={{ color: ACCENT }}
              />

              <span>
                Backed by years of industry expertise and certified technical
                knowledge
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          CTA
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f7f7f4] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-52 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#204860]/[0.06] blur-[120px]" />

          <div
            className="absolute -right-40 top-10 h-[380px] w-[380px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: smoothEase,
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
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: 0.15,
                      ease: smoothEase,
                    }}
                    className="text-balance text-[clamp(2.2rem,5vw,4.4rem)] font-bold leading-[1.03] tracking-[-0.045em] text-white"
                  >
                    Ready to Transform Your Property with{" "}
                    <span className="relative inline-block">
                      Smart Technology?
                      <span
                        className="absolute -bottom-1 left-0 h-[3px] w-full"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: 0.25,
                      ease: smoothEase,
                    }}
                    className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
                  >
                    Let&apos;s discuss how our integrated solutions can enhance
                    security, efficiency, and control for your home or business.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: 0.35,
                      ease: smoothEase,
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
                        Get a Consultation
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

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.8,
                      delay: 0.45,
                      ease: smoothEase,
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