"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  Calendar,
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

export default function ContactPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
     HANDLERS
  ============================================================ */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ============================================================
     DATA
  ============================================================ */
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+263 78 268 3726",
      description: "Mon – Fri · 8 AM – 5 PM",
      href: "tel:+263782683726",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@kavashsmartsystems.co.zw",
      description: "Replies within 24 hours",
      href: "mailto:info@kavashsmartsystems.co.zw",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Harare, Zimbabwe",
      description: "Nationwide service coverage",
      href: "#location",
    },
    {
      icon: Clock,
      title: "Emergency",
      details: "24/7 Support Line",
      description: "Always available",
      href: "tel:+263782683726",
    },
  ];

  const services = [
    "Smart Home Automation",
    "Fleet Management",
    "Video Surveillance & Security",
    "VOIP & Business Communication",
    "Automation & Access Control",
    "Mining & Industrial Solutions",
    "Other",
  ];

  const whatsappLink =
    "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

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
          HERO — split with quick-contact mini rail on right
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Contact1.webp')",
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

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-20 pt-32 md:px-10 lg:px-16 xl:px-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-16">
            {/* LEFT — text */}
            <div>
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
                  Contact Us
                </span>
              </motion.div>

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
                Let&apos;s Discuss
                <br />
                <span className="text-white/40">Your Next</span>
                <br />
                <span className="relative inline-block">
                  Project.
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

              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  delay: 0.4,
                  ease: EASE,
                }}
                className="mt-12 max-w-[560px] text-[15px] leading-8 text-white/70 md:text-base"
              >
                Get in touch with our team for a free consultation and quote.
                We&apos;re here to help with all your technology needs.
              </motion.p>
            </div>

            {/* RIGHT — quick-contact mini rail (actionable buttons) */}
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.35,
                ease: EASE,
              }}
              className="hidden lg:block"
            >
              <div className="rounded-[24px] border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.26em] text-white/40">
                  Quick contact
                </p>

                <div className="space-y-2.5">
                  <a
                    href="tel:+263782683726"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-[#F5A623]/60 hover:bg-white/[0.06]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                    >
                      <Phone size={16} style={{ color: ACCENT }} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white">
                        Call Us
                      </p>
                      <p className="text-[11px] text-white/50">
                        +263 78 268 3726
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#F5A623]"
                    />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-green-500/60 hover:bg-white/[0.06]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/15">
                      <WhatsAppIcon
                        size={16}
                        className="text-green-400"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white">
                        WhatsApp
                      </p>
                      <p className="text-[11px] text-white/50">
                        Instant reply
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-green-400"
                    />
                  </a>

                  <a
                    href="mailto:info@kavashsmartsystems.co.zw"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-[#F5A623]/60 hover:bg-white/[0.06]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                    >
                      <Mail size={16} style={{ color: ACCENT }} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold text-white">
                        Email
                      </p>
                      <p className="text-[11px] text-white/50">
                        Within 24 hours
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#F5A623]"
                    />
                  </a>
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    <p className="text-[11px] font-medium text-white/55">
                      Currently accepting new projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT INFO CARDS — light cards with amber circles
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            {...reveal}
            className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="h-[2px] w-10"
                  style={{ backgroundColor: ACCENT }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
                  Ways to reach us
                </p>
              </div>

              <h2 className="max-w-[820px] text-[clamp(2.4rem,4.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#14384d]">
                Four ways
                <br />
                <span className="text-[#14384d]/30">to connect.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#68757c] lg:justify-self-end">
              Pick whichever is easiest — we respond fast on every channel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease: EASE,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#14384d]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F5A623]/40 hover:shadow-[0_25px_70px_rgba(22,56,76,0.12)]"
                >
                  {/* Amber top hairline */}
                  <span
                    className="absolute left-0 top-0 h-[3px] w-10 transition-all duration-700 ease-out group-hover:w-full"
                    style={{ backgroundColor: ACCENT }}
                  />

                  {/* Number */}
                  <span className="mb-6 text-[11px] font-bold tracking-[0.24em] text-[#14384d]/30 transition-colors duration-500 group-hover:text-[#F5A623]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-500"
                    style={{ backgroundColor: "rgba(245,166,35,0.10)" }}
                  >
                    <Icon size={20} style={{ color: ACCENT }} />
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#14384d]">
                    {info.title}
                  </h3>

                  <p className="mt-2 break-words text-[14px] font-medium text-[#3a4a54]">
                    {info.details}
                  </p>

                  <p className="mt-1 text-[12px] text-[#68757c]">
                    {info.description}
                  </p>

                  <ArrowRight
                    size={16}
                    className="mt-6 text-[#14384d]/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#F5A623]"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          FORM + LOCATION
      ======================================================== */}
      <section
        id="location"
        className="relative z-20 overflow-hidden bg-[#102f42] py-24 md:py-32 lg:py-40"
      >
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
                  Send a Message
                </p>
              </div>

              <h2 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
                Tell Us About
                <br />
                <span style={{ color: ACCENT }}>Your Project.</span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-white/45 lg:justify-self-end">
              Fill in the form and our team will get back to you within 24
              hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                ease: EASE,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 md:p-10"
            >
              <span
                className="absolute left-0 top-0 h-[3px] w-20"
                style={{ backgroundColor: ACCENT }}
              />

              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(245,166,35,0.15)" }}
                  >
                    <CheckCircle2 size={32} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                    Message received.
                  </h3>
                  <p className="mx-auto mb-8 max-w-md text-[15px] leading-7 text-white/55">
                    Thank you for reaching out. Our team will be in touch within
                    24 hours. For urgent matters, call us directly or message us
                    on WhatsApp.
                  </p>

                  <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/wa relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-green-500 px-6 py-3 text-sm font-bold transition-all duration-500"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-green-400 transition-colors duration-500 group-hover/wa:text-white">
                        <WhatsAppIcon size={16} />
                        WhatsApp Us
                      </span>
                      <span className="absolute inset-0 origin-left scale-x-0 bg-green-500 transition-transform duration-500 ease-out group-hover/wa:scale-x-100" />
                    </a>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/45"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#F5A623]/70 focus:bg-white/[0.06]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/45"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#F5A623]/70 focus:bg-white/[0.06]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/45"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+263 ..."
                        className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#F5A623]/70 focus:bg-white/[0.06]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/45"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[15px] text-white outline-none transition-all duration-300 focus:border-[#F5A623]/70 focus:bg-white/[0.06]"
                      >
                        <option value="" className="bg-[#102f42]">
                          Select a service
                        </option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-[#102f42]"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/45"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-[#F5A623]/70 focus:bg-white/[0.06]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-[#0d2838] transition-transform duration-500 hover:-translate-y-0.5"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  </button>

                  <p className="text-center text-[12px] text-white/35">
                    We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* SIDE PANEL — location + extras */}
            <motion.div
              initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.9,
                delay: 0.1,
                ease: EASE,
              }}
              className="flex flex-col gap-5"
            >
              {/* Location card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 md:p-8">
                <span
                  className="absolute left-0 top-0 h-[3px] w-16"
                  style={{ backgroundColor: ACCENT }}
                />

                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                >
                  <MapPin size={18} style={{ color: ACCENT }} />
                </div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                  Our Location
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  Harare, Zimbabwe
                </h3>
                <p className="mt-2 text-[14px] leading-7 text-white/55">
                  Based in Harare, we provide technology integration services
                  across the entire country.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Coverage
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Nationwide
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                      Response
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      &lt; 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgent contact card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 md:p-8">
                <span
                  className="absolute left-0 top-0 h-[3px] w-16"
                  style={{ backgroundColor: ACCENT }}
                />

                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                >
                  <Calendar size={18} style={{ color: ACCENT }} />
                </div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                  Need it urgently?
                </p>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  Reach us instantly.
                </h3>
                <p className="mt-2 mb-5 text-[14px] leading-7 text-white/55">
                  For emergencies or time-critical requests, skip the form and
                  contact us directly.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+263782683726"
                    className="group/btn flex items-center justify-between rounded-full border-2 px-5 py-3 text-sm font-bold transition-all duration-500"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    <span className="flex items-center gap-2 transition-colors duration-500 group-hover/btn:text-[#0d2838]">
                      <Phone size={15} />
                      Call Now
                    </span>
                    <ArrowRight
                      size={15}
                      className="transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:text-[#0d2838]"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 -z-10 origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover/btn:scale-x-100"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center justify-between overflow-hidden rounded-full border-2 border-green-500 px-5 py-3 text-sm font-bold text-green-400 transition-all duration-500"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover/btn:text-white">
                      <WhatsAppIcon size={15} />
                      WhatsApp
                    </span>
                    <ArrowRight
                      size={15}
                      className="relative z-10 transition-all duration-500 group-hover/btn:translate-x-1 group-hover/btn:text-white"
                    />
                    <span className="absolute inset-0 origin-left scale-x-0 bg-green-500 transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}