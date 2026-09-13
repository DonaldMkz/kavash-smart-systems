"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Headphones,
  Clock,
  Wrench,
  Zap,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  X,
  ShieldCheck,
} from "lucide-react";

const ACCENT = "#F5A623";
const EASE = [0.16, 1, 0.3, 1] as const;

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function SupportPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
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

  /* Modal body lock */
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  /* ============================================================
     DATA
  ============================================================ */
  const supportPlans = [
    {
      title: "Basic Support",
      description: "Essential support for your technology systems.",
      features: [
        "Business hours support",
        "Remote troubleshooting",
        "Software updates",
        "Email support",
      ],
      highlighted: false,
    },
    {
      title: "Premium Support",
      description: "Comprehensive support with priority response.",
      features: [
        "24/7 emergency support",
        "On-site visits",
        "Priority response",
        "Regular maintenance",
        "Hardware support",
        "Phone support",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise Support",
      description: "Full-scale support for large organizations.",
      features: [
        "Dedicated support team",
        "24/7 monitoring",
        "Quarterly maintenance",
        "Custom SLAs",
        "Training included",
        "Immediate response",
      ],
      highlighted: false,
    },
  ];

  const supportServices = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert technical assistance for all your systems.",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and alerts.",
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Regular maintenance to keep systems running perfectly.",
    },
    {
      icon: Zap,
      title: "System Upgrades",
      description: "Stay current with the latest technology upgrades.",
    },
  ];

  const heroChannels = [
    { label: "Phone", value: "+263 78 268 3726" },
    { label: "WhatsApp", value: "24/7 Available" },
    { label: "Email", value: "info@kavashsmartsystems.co.zw" },
    { label: "On-Site", value: "Harare & Nationwide" },
  ];

  const whatsappLink =
    "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%27m%20interested%20in%20support%20plans.";

  const openModal = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

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
          HERO — editorial, bottom-anchored, with channels rail
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Support1.webp')",
            backgroundPosition: "center 30%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Cinematic overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(3,13,20,0.94)_0%,rgba(4,18,27,0.86)_40%,rgba(4,18,27,0.55)_72%,rgba(4,18,27,0.35)_100%)]" />
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
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-16">
            {/* LEFT — text */}
            <div>
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
                  Support &amp; Maintenance
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
                className="max-w-[820px] text-[clamp(3rem,7.5vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white"
              >
                We&apos;re Here,
                <br />
                <span className="text-white/40">When You</span>
                <br />
                <span className="relative inline-block">
                  Need Us.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: reduceMotion ? 0 : 1,
                      delay: 0.9,
                      ease: EASE,
                    }}
                    className="absolute -bottom-3 left-0 h-[3px] w-[42%] origin-left"
                    style={{ backgroundColor: ACCENT }}
                  />
                </span>
              </motion.h1>

              {/* Description + pills */}
              <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: 0.4,
                  ease: EASE,
                }}
                className="mt-12"
              >
                <p className="max-w-[560px] text-[15px] leading-8 text-white/70 md:text-base">
                  Our team provides ongoing support and maintenance to ensure
                  your technology systems always perform at their best.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { value: "24/7", label: "Emergency" },
                    { value: "03", label: "Support Tiers" },
                    { value: "ZW", label: "Nationwide" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2"
                    >
                      <span className="text-base font-semibold tracking-[-0.02em] text-white">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — channels rail */}
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.35,
                ease: EASE,
              }}
              className="hidden border-l border-white/15 pl-8 lg:block"
            >
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/35">
                  How to reach us
                </p>
              </div>

              {heroChannels.map((channel, index) => (
                <div
                  key={channel.label}
                  className="group flex flex-col gap-1.5 border-t border-white/10 py-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-semibold text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
                        {channel.label}
                      </span>
                    </div>
                    <span
                      className="h-1.5 w-1.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </div>
                  <p className="pl-7 text-[13px] font-semibold text-white/85">
                    {channel.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SUPPORT SERVICES — dark section with glassy cards
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#102f42] py-24 md:py-32 lg:py-40">
        {/* Amber + white glows */}
        <div
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] opacity-[0.06]"
          style={{
            background: `radial-gradient(circle, ${ACCENT}, transparent 70%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
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
                  Our Services
                </p>
              </div>

              <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                How We
                <br />
                <span style={{ color: ACCENT }}>Support You.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-white/45 lg:justify-self-end">
              Four ways we keep your systems running — from the first
              installation to long-term reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : (index % 4) * 0.06,
                    ease: EASE,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                >
                  {/* Amber top hairline */}
                  <span
                    className="absolute left-0 top-0 h-[3px] w-10 transition-all duration-700 ease-out group-hover:w-full"
                    style={{ backgroundColor: ACCENT }}
                  />

                  {/* Number */}
                  <span className="mb-8 text-[11px] font-bold tracking-[0.24em] text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] transition-colors duration-500 group-hover:border-[#F5A623]/60">
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-white/50">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SUPPORT PLANS — light section, dark featured card
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-52 top-1/3 h-[460px] w-[460px] rounded-full bg-[#204860]/[0.06] blur-[120px]" />
          <div
            className="absolute -right-40 top-10 h-[380px] w-[380px] rounded-full opacity-[0.07] blur-[120px]"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
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
                  Support Plans
                </p>
              </div>

              <h2 className="max-w-[820px] text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#14384d]">
                Choose Your
                <br />
                <span className="text-[#14384d]/30">Support Level.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              Three tiers designed to match how much uptime, response speed, and
              on-site coverage your systems need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
            {supportPlans.map((plan, index) => {
              const isFeatured = plan.highlighted;
              return (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: EASE,
                  }}
                  className={`relative h-full ${
                    isFeatured ? "md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[28px] p-8 transition-all duration-500 md:p-9 ${
                      isFeatured
                        ? "bg-[#153a50] shadow-[0_30px_80px_rgba(14,44,62,0.28)]"
                        : "border border-[#14384d]/10 bg-white shadow-[0_10px_40px_rgba(22,56,76,0.05)] hover:-translate-y-1.5 hover:border-[#F5A623]/40 hover:shadow-[0_25px_70px_rgba(22,56,76,0.12)]"
                    }`}
                  >
                    {/* Amber top hairline */}
                    <span
                      className="absolute left-0 top-0 h-[3px] w-10 transition-all duration-700 ease-out group-hover:w-full"
                      style={{ backgroundColor: ACCENT }}
                    />

                    {/* Featured glow + Popular chip */}
                    {isFeatured && (
                      <>
                        <div
                          className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full opacity-[0.20] blur-[100px]"
                          style={{ backgroundColor: ACCENT }}
                        />
                        <span
                          className="absolute right-6 top-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                          style={{
                            backgroundColor: ACCENT,
                            color: "#0d2838",
                          }}
                        >
                          Popular
                        </span>
                      </>
                    )}

                    {/* Header */}
                    <div className="relative mb-6">
                      <p
                        className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${
                          isFeatured ? "text-white/45" : "text-[#173d52]/55"
                        }`}
                      >
                        Plan {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3
                        className={`text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem] ${
                          isFeatured ? "text-white" : "text-[#14384d]"
                        }`}
                      >
                        {plan.title}
                      </h3>

                      <p
                        className={`mt-3 text-[14px] leading-7 ${
                          isFeatured ? "text-white/60" : "text-[#68757c]"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div
                      className={`mb-6 h-px w-full ${
                        isFeatured ? "bg-white/10" : "bg-[#14384d]/10"
                      }`}
                    />

                    {/* Features */}
                    <div className="mb-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0"
                            style={{ color: ACCENT }}
                          />
                          <span
                            className={`text-sm ${
                              isFeatured ? "text-white/85" : "text-[#3a4a54]"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => openModal(plan.title)}
                      className={`group/btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-500 ${
                        isFeatured
                          ? "text-[#0d2838]"
                          : "border-2 border-[#14384d] text-[#14384d]"
                      }`}
                      style={
                        isFeatured
                          ? { backgroundColor: ACCENT }
                          : { backgroundColor: "transparent" }
                      }
                    >
                      {isFeatured ? (
                        <>
                          <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
                          <span className="relative z-10 flex items-center gap-2">
                            Get Started
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-500 group-hover/btn:translate-x-1"
                            />
                          </span>
                        </>
                      ) : (
                        <>
                          <span
                            className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100"
                            style={{ backgroundColor: ACCENT }}
                          />
                          <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover/btn:text-[#0d2838]">
                            Get Started
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-500 group-hover/btn:translate-x-1"
                            />
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          MODAL — Get Started
      ======================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-[#07141d]/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between border-b border-[#14384d]/10 bg-[#f4f3ee] px-6 py-5 md:px-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#173d52]/60">
                    Get Started
                  </p>
                  <h3 className="mt-1 text-xl font-bold tracking-[-0.02em] text-[#14384d]">
                    {selectedPlan} Plan
                  </h3>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-300 hover:bg-[#F5A623] hover:text-[#0d2838]"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal body */}
              <div className="p-6 md:p-8">
                <p className="mb-8 text-center text-sm leading-7 text-[#5d6870]">
                  Choose how you&apos;d like to get started with our{" "}
                  <span className="font-semibold text-[#14384d]">
                    {selectedPlan}
                  </span>{" "}
                  plan.
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/wa relative flex items-center justify-center overflow-hidden rounded-full border-2 border-green-600 px-6 py-3.5 text-sm font-bold transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-green-700 transition-colors duration-500 group-hover/wa:text-white">
                      <WhatsAppIcon size={18} />
                      Chat on WhatsApp
                    </span>
                    <span className="absolute inset-0 origin-left scale-x-0 bg-green-600 transition-transform duration-500 ease-out group-hover/wa:scale-x-100" />
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setIsModalOpen(false)}
                    className="group/mail relative flex items-center justify-center overflow-hidden rounded-full border-2 border-[#14384d] px-6 py-3.5 text-sm font-bold transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-[#14384d] transition-colors duration-500 group-hover/mail:text-[#0d2838]">
                      <Mail size={18} />
                      Contact Us
                    </span>
                    <span
                      className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/mail:scale-x-100"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.6,
                      delay: 0.1,
                      ease: EASE,
                    }}
                    className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07]"
                  >
                    <ShieldCheck size={20} style={{ color: ACCENT }} />
                  </motion.div>

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
                    Need Immediate{" "}
                    <span className="relative inline-block">
                      Support?
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
                    Our team is available 24/7 for emergency support. Contact us
                    now and we&apos;ll respond right away.
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
                    <a
                      href="tel:+263782683726"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-[#102f42] shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                      <span className="relative z-10 flex items-center">
                        <Phone size={18} className="mr-2" />
                        Call Support
                      </span>
                    </a>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
                        <WhatsAppIcon size={18} className="mr-2" />
                        WhatsApp Us
                      </span>
                    </a>
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