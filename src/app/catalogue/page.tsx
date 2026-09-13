"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ShoppingCart, X } from "lucide-react";

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

export default function CataloguePage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  /* Body scroll lock for modal */
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
  const products = [
    {
      image: "/images/products/image1.webp",
      name: "Home Assistant Green",
      category: "Smart Home & Security",
      description:
        "A compact smart home hub designed to centralize and control all your smart devices seamlessly.",
    },
    {
      image: "/images/products/image2.webp",
      name: "TP-Link Tapo Smart WiFi Bulb",
      category: "Smart Lighting",
      description:
        "A multicolor, energy-efficient smart bulb controlled remotely via WiFi with adjustable brightness.",
    },
    {
      image: "/images/products/image3.webp",
      name: "Semi-Auto Smart Door Lock",
      category: "Smart Home & Security",
      description:
        "Durable smart lock with fingerprint, RFID card, PIN code, and Tuya App cloud control.",
    },
    {
      image: "/images/products/image4.webp",
      name: "Fully Automatic Smart Lock",
      category: "Smart Home & Security",
      description:
        "3D face recognition, biometric fingerprint, and WiFi HD camera for real-time monitoring.",
    },
    {
      image: "/images/products/image5.webp",
      name: "Tuya WiFi Peephole Smart Lock",
      category: "Smart Home & Security",
      description:
        "Smart lock with built-in camera and high-resolution display for remote viewing.",
    },
    {
      image: "/images/products/image6.webp",
      name: "12V LED Smart Bulb MR16",
      category: "Smart Lighting",
      description:
        "RGBCW smart bulb with full color control and WiFi connectivity for 12V GU5.3 sockets.",
    },
    {
      image: "/images/products/image7.webp",
      name: "Temperature & Humidity Sensor",
      category: "Sensors & Management",
      description:
        "Wireless Zigbee sensor for real-time temperature and humidity monitoring.",
    },
    {
      image: "/images/products/image8.webp",
      name: '32" Portable 4K Touch TV',
      category: "Sensors & Management",
      description:
        "Premium portable 4K UHD touch-screen smart display on a sleek wheeled stand.",
    },
    {
      image: "/images/products/image9.webp",
      name: '32" Portable 4K Touch TV',
      category: "Sensors & Management",
      description:
        "Premium portable 4K UHD touch-screen smart display on a sleek wheeled stand.",
    },
    {
      image: "/images/products/image10.webp",
      name: "Smart Room Booking Panel",
      category: "Sensors & Management",
      description:
        "Anti-glare Android tablet for conference room booking and scheduling.",
    },
    {
      image: "/images/products/image11.webp",
      name: "12W Anti-Glare COB Spotlight",
      category: "Smart Lighting",
      description:
        "Adjustable recessed downlight with 2700K-6500K and Zigbee connectivity.",
    },
    {
      image: "/images/products/image12.webp",
      name: "Motion Sensor LED Bulb",
      category: "Smart Lighting",
      description:
        "Auto-dimming motion sensor bulb with adjustable daylight and multi-color.",
    },
    {
      image: "/images/products/image13.webp",
      name: "Decorative Filament LED Bulb",
      category: "Smart Lighting",
      description:
        "Dimming filament bulb with irregular shape in smoky grey or amber glass.",
    },
    {
      image: "/images/products/image14.webp",
      name: "12W LED Motion Sensor Bulb",
      category: "Smart Lighting",
      description:
        "Energy-efficient motion-sensing bulb for E27 and B22 holders.",
    },
    {
      image: "/images/products/image15.webp",
      name: "Electric Curtain System",
      category: "Smart Curtains",
      description:
        "Motorized curtains controlled via remote or Tuya Smart Home App.",
    },
  ];

  const allProducts = [
    ...products,
    {
      name: "WiFi Smart IR Remote Controller",
      category: "Smart Home & Security",
      description:
        "Universal remote using WiFi to control IR-enabled home appliances from your smartphone.",
    },
    {
      name: "New LR K9 TT App Cloud Fingerprint Smart Lock",
      category: "Smart Home & Security",
      description:
        "Grade C security certified lock with Wi-Fi, fingerprint sensor, and remote management.",
    },
    {
      name: "Dalton DH-88 Smart Lock",
      category: "Smart Home & Security",
      description:
        "Premium smart lock with symmetrical design, WiFi, and Tuya app integration.",
    },
    {
      name: "12W/15W/18W/20W LED Motion Sensor Emergency Bulb",
      category: "Smart Lighting",
      description:
        "Universal E27/B22 bulb with motion sensor and rechargeable battery for power outages.",
    },
    {
      name: "KYOK Smart Electric Curtain Rail",
      category: "Smart Curtains",
      description:
        "Motorized curtain rail with Matter support for Apple Home, Google Home, and Alexa.",
    },
    {
      name: "DIY Smart Tuya Zigbee Motorized Curtain Driver",
      category: "Smart Curtains",
      description:
        "Retrofittable smart driver that automates existing curtain rails.",
    },
    {
      name: "A-OK Smart Roller Blinds Tubular Motor",
      category: "Smart Curtains",
      description:
        "Rechargeable smart tubular motor for modern indoor roller blinds.",
    },
    {
      name: "R-GD200 Outdoor Garden Speaker",
      category: "Audio Systems",
      description:
        "Durable ABS outdoor speaker with waterproof design for gardens and patios.",
    },
    {
      name: "CS166II Waterproof Outdoor Speaker",
      category: "Audio Systems",
      description:
        "40-watt IP65 waterproof speaker with 5-inch driver for clear sound.",
    },
    {
      name: "V 15W Ground Mounted Garden Speaker",
      category: "Audio Systems",
      description:
        "Weatherproof ground-mounted speaker with 3-inch full-range driver.",
    },
    {
      name: "6.5 Inch PA System Ceiling Speaker",
      category: "Audio Systems",
      description:
        "High-performance ceiling speaker with coaxial design for commercial spaces.",
    },
    {
      name: "BT814 Wireless Bluetooth Ceiling Speaker System",
      category: "Audio Systems",
      description:
        "Set of four ceiling speakers with Bluetooth for wireless stereo sound.",
    },
    {
      name: "5.25 Inch Passive HiFi Ceiling/Wall Speaker",
      category: "Audio Systems",
      description:
        "Compact passive speaker for flush-mount installation in ceilings or walls.",
    },
    {
      name: "Savia Outdoor LED Spotlight 6W",
      category: "Outdoor & Garden",
      description:
        "Durable aluminum landscape spotlight with IP65 rating and adjustable spike mount.",
    },
    {
      name: "Haozee Smart Watering Timer",
      category: "Outdoor & Garden",
      description:
        "Intelligent irrigation controller for garden, lawn, and drip irrigation.",
    },
    {
      name: "Smart Temperature and Humidity Sensor",
      category: "Sensors & Management",
      description:
        "Wireless sensor for continuous environmental monitoring.",
    },
    {
      name: "SONOFF SNZB-02D Zigbee Smart Sensor",
      category: "Sensors & Management",
      description:
        "Zigbee-enabled sensor with LCD display, compatible with Alexa and Google Home.",
    },
  ];

  const categories = [
    "All",
    "Smart Home & Security",
    "Smart Lighting",
    "Smart Curtains",
    "Sensors & Management",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const whatsappLink =
    "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%27m%20interested%20in%20your%20products.";

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
          HERO — editorial, bottom-anchored
      ======================================================== */}
      <section className="relative min-h-screen overflow-hidden bg-[#07141d]">
        {/* Parallax image */}
        <div
          ref={bgRef}
          className="fixed left-0 top-[-120px] h-[calc(100vh+120px)] w-full bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Catalogue1.webp')",
            backgroundPosition: "center 30%",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Left-weighted cinematic overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(3,13,20,0.94)_0%,rgba(4,18,27,0.85)_38%,rgba(4,18,27,0.55)_70%,rgba(4,18,27,0.35)_100%)]" />

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
                Our Products
              </span>
            </div>
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.28em] text-white/35 md:inline">
              {allProducts.length} Products Available
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
            className="max-w-[1180px] text-[clamp(3rem,8.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-white"
          >
            Product
            <br />
            <span className="relative inline-block">
              Catalogue.
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
              Browse our range of premium technology products. Request a quote
              for any item and our team will get back to you.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { value: "31", label: "Products" },
                { value: "05", label: "Categories" },
                { value: "24/7", label: "Support" },
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
          CATEGORY FILTER — clean, brand-consistent
      ======================================================== */}
      <section className="relative z-20 border-b border-[#14384d]/10 bg-[#f4f3ee] py-8">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-[#F5A623] bg-[#F5A623] text-[#0d2838]"
                      : "border-[#14384d]/20 bg-transparent text-[#14384d] hover:border-[#F5A623]/60 hover:text-[#0d2838]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          PRODUCTS GRID
      ======================================================== */}
      <section className="relative z-20 overflow-hidden bg-[#f4f3ee] py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Count line */}
          <motion.div
            {...reveal}
            className="mb-10 flex items-center justify-between gap-4"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#173d52]">
              {activeCategory === "All" ? "All Products" : activeCategory}
              <span className="ml-3 text-[#14384d]/35">
                {filteredProducts.length} items
              </span>
            </p>

            <div
              className="h-[2px] flex-1"
              style={{
                background: `linear-gradient(90deg, ${ACCENT}40, transparent)`,
              }}
            />
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${product.name}-${index}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : (index % 3) * 0.06,
                  ease: EASE,
                }}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#14384d]/10 bg-white shadow-[0_10px_40px_rgba(22,56,76,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F5A623]/40 hover:shadow-[0_25px_70px_rgba(22,56,76,0.12)]">
                  {/* Amber top hairline */}
                  <span
                    className="absolute left-0 top-0 z-10 h-[3px] w-10 transition-all duration-700 ease-out group-hover:w-full"
                    style={{ backgroundColor: ACCENT }}
                  />

                  {/* Image panel */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#f8f7f4] p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
                    />

                    {/* Category chip */}
                    <span className="absolute left-4 top-4 rounded-full border border-[#14384d]/15 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#14384d] backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="line-clamp-2 text-lg font-bold leading-tight tracking-[-0.02em] text-[#14384d] transition-colors duration-300 group-hover:text-[#0d2838]">
                      {product.name}
                    </h3>

                    <p className="mt-3 line-clamp-3 flex-grow text-sm leading-6 text-[#5d6870]">
                      {product.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-6 flex gap-2 border-t border-[#14384d]/10 pt-5">
                      <Link
                        href="/contact"
                        className="group/quote relative inline-flex flex-1 items-center justify-center overflow-hidden rounded-full border-2 border-[#14384d] px-3 py-2.5 text-xs font-bold transition-all duration-300 hover:border-[#F5A623]"
                      >
                        <span className="relative z-10 flex items-center gap-1.5 text-[#14384d] transition-colors duration-300 group-hover/quote:text-[#0d2838]">
                          <ShoppingCart size={14} />
                          Request
                        </span>
                        <span
                          className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/quote:scale-x-100"
                          style={{ backgroundColor: ACCENT }}
                        />
                      </Link>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/whatsapp relative inline-flex flex-1 items-center justify-center overflow-hidden rounded-full border-2 border-green-600 px-3 py-2.5 text-xs font-bold transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center gap-1.5 text-green-700 transition-colors duration-300 group-hover/whatsapp:text-white">
                          <WhatsAppIcon size={14} />
                          WhatsApp
                        </span>
                        <span className="absolute inset-0 origin-left scale-x-0 bg-green-600 transition-transform duration-500 ease-out group-hover/whatsapp:scale-x-100" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Products */}
          <motion.div
            {...reveal}
            className="mt-16 text-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-[#102f42] shadow-[0_14px_35px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-1"
              style={{ backgroundColor: ACCENT }}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 flex items-center">
                View All {allProducts.length} Products
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          MODAL — All products
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
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex flex-shrink-0 items-center justify-between border-b border-[#14384d]/10 bg-[#f4f3ee] px-6 py-5 md:px-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#173d52]/60">
                    Complete Inventory
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-[-0.02em] text-[#14384d]">
                    All Products
                    <span className="ml-3 text-base font-medium text-[#14384d]/45">
                      ({allProducts.length})
                    </span>
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
              <div className="flex-1 overflow-y-auto p-5 md:p-8">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {allProducts.map((product, index) => (
                    <div
                      key={`${product.name}-${index}`}
                      className="group relative flex items-start gap-4 rounded-2xl border border-transparent bg-[#f4f3ee] p-5 transition-all duration-300 hover:border-[#F5A623]/40 hover:bg-white hover:shadow-md"
                    >
                      {/* Amber left accent on hover */}
                      <span
                        className="absolute bottom-4 left-0 top-4 w-[2px] origin-bottom scale-y-0 rounded-r-full transition-transform duration-500 group-hover:scale-y-100"
                        style={{ backgroundColor: ACCENT }}
                      />

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                          <h4 className="text-sm font-bold leading-tight text-[#14384d]">
                            {product.name}
                          </h4>
                          <span className="shrink-0 rounded-full bg-[#14384d]/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#173d52]">
                            {product.category}
                          </span>
                        </div>

                        <p className="mb-4 text-xs leading-6 text-[#5d6870]">
                          {product.description}
                        </p>

                        <div className="flex gap-2">
                          <Link
                            href="/contact"
                            onClick={() => setIsModalOpen(false)}
                            className="group/quote relative inline-flex items-center overflow-hidden rounded-full border-2 border-[#14384d] px-3 py-1.5 text-[11px] font-bold transition-all duration-300 hover:border-[#F5A623]"
                          >
                            <span className="relative z-10 flex items-center gap-1 text-[#14384d] transition-colors duration-300 group-hover/quote:text-[#0d2838]">
                              <ShoppingCart size={11} />
                              Quote
                            </span>
                            <span
                              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/quote:scale-x-100"
                              style={{ backgroundColor: ACCENT }}
                            />
                          </Link>

                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/whatsapp relative inline-flex items-center overflow-hidden rounded-full border-2 border-green-600 px-3 py-1.5 text-[11px] font-bold transition-all duration-300"
                          >
                            <span className="relative z-10 flex items-center gap-1 text-green-700 transition-colors duration-300 group-hover/whatsapp:text-white">
                              <WhatsAppIcon size={11} />
                              WhatsApp
                            </span>
                            <span className="absolute inset-0 origin-left scale-x-0 bg-green-600 transition-transform duration-500 ease-out group-hover/whatsapp:scale-x-100" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          FLOATING WHATSAPP BUTTON
      ======================================================== */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-8 right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-[0_15px_40px_rgba(34,197,94,0.35)] transition-all duration-300 hover:scale-110 hover:bg-green-600 md:h-16 md:w-16"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
        <WhatsAppIcon
          size={28}
          className="relative z-10 text-white md:size-8"
        />
      </a>

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
                    Looking for Something{" "}
                    <span className="relative inline-block">
                      Specific?
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
                    We supply a wide range of technology products. Contact us
                    with your requirements and we&apos;ll source it for you.
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
                        Request a Quote
                        <ArrowRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1"
                        />
                      </span>
                    </Link>

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
                        Chat on WhatsApp
                        <ArrowUpRight
                          size={18}
                          className="ml-2 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
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