"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Shield,
  Clock,
  Award,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      image: "/images/services/optimized/smart-home.webp",
      title: "Smart Home Automation",
      description: "Custom smart home solutions for lighting, security, access, entertainment, and appliances.",
      href: "/services/smart-home",
    },
    {
      image: "/images/services/optimized/fleet-management.webp",
      title: "Vehicle Technology & Fleet Management",
      description: "GPS tracking and fleet management for businesses with vehicles.",
      href: "/services/fleet-management",
    },
    {
      image: "/images/services/optimized/video-surveillance.webp",
      title: "Video Surveillance & Security",
      description: "Surveillance systems for homes, businesses, and industrial sites.",
      href: "/services/security",
    },
    {
      image: "/images/services/optimized/VOIP.webp",
      title: "VOIP & Business Communication",
      description: "Professional phone systems for businesses and organizations.",
      href: "/services/voip",
    },
    {
      image: "/images/services/optimized/access-control.webp",
      title: "Automation & Access Control",
      description: "Systems that control who enters properties and restricted areas.",
      href: "/services/access-control",
    },
    {
      image: "/images/services/optimized/mining-industries.webp",
      title: "Mining & Industrial Solutions",
      description: "Integrated technology for mining and industrial operations.",
      href: "/services/mining",
    },
  ];

  const whyKavash = [
    {
      number: "01",
      title: "Integrated Solutions",
      description: "We connect security, gates, lights, phones, and tracking into one seamless system.",
    },
    {
      number: "02",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all our installations.",
    },
    {
      number: "03",
      title: "Expert Installation",
      description: "Professional installation by certified technicians with years of experience.",
    },
    {
      number: "04",
      title: "Custom Solutions",
      description: "Tailored technology solutions designed for your specific needs and budget.",
    },
    {
      number: "05",
      title: "Quality Products",
      description: "We only use premium, reliable products from trusted manufacturers.",
    },
    {
      number: "06",
      title: "Future-Ready",
      description: "Scalable systems that grow with your needs and adapt to new technology.",
    },
  ];

  // Parallax background ref
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          ref={bgRef}
          className="fixed top-[-120px] left-0 w-full h-[calc(100vh+120px)] bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Home1.webp')",
            backgroundPosition: "center 20%",
          }}
        />

        <div className="fixed inset-0 bg-gradient-to-b from-deep-blue-dark via-deep-blue-dark/70 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-8 pb-32">
          <div style={{ marginTop: "130px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Smart Technology. Connected Systems. Better Control.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-10 max-w-2xl mx-auto border border-white/20">
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: "#E8E6E3" }}
                >
                  Kavash Smart Systems designs, supplies, installs, and supports smart automation,
                  security, fleet technology, communication, and access control solutions for
                  residential, commercial, and industrial clients.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-5 justify-center -translate-y-4"
              >
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
                >
                  <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue">
                    Explore Services
                    <ArrowRight
                      className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      size={20}
                    />
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
                >
                  <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue">
                    Get a Quote
                  </span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION — Image cards design */}
      <section className="relative z-20 py-24 md:py-36 bg-off-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-deep-blue" />
                <p className="text-deep-blue font-semibold tracking-wider text-sm uppercase">
                  Our Services
                </p>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-deep-blue max-w-xl leading-tight">
                Complete Technology Solutions
              </h2>
            </div>

            <p className="text-charcoal-gray-light max-w-sm text-base md:text-lg leading-relaxed md:text-right">
              Six disciplines, one integrated system. Explore what we build,
              install, and support.
            </p>
          </motion.div>

          {/* Services Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href={service.href}
                  className="group relative block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark/80 via-deep-blue-dark/20 to-transparent" />

                    {/* Number Badge */}
                    <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-3 group-hover:text-deep-blue-dark transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-charcoal-gray-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center text-deep-blue font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight
                        size={16}
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY KAVASH SECTION — Clean numbered list design */}
      <section className="relative z-20 py-24 md:py-36 bg-off-white-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-off-white-dark via-off-white to-off-white-dark" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-charcoal-gray/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-10 bg-deep-blue" />
                    <p className="text-deep-blue font-semibold tracking-wider text-sm uppercase">
                      Why Choose Kavash
                    </p>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-deep-blue max-w-xl leading-tight">
                    Why We're{" "}
                    <span className="relative inline-block">
                      Different
                      <span className="absolute bottom-2 left-0 w-full h-3 bg-deep-blue/10 -z-10" />
                    </span>
                  </h2>
                </div>

                <p className="text-charcoal-gray-light max-w-sm text-base md:text-lg leading-relaxed md:text-right">
                  We're not just installers — we're technology integration
                  experts who connect systems for seamless control.
                </p>
              </motion.div>

              <div className="border-t border-charcoal-gray/15">
                {whyKavash.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 md:py-10 border-b border-charcoal-gray/15 transition-all duration-500 hover:bg-white/50 hover:pl-4"
                  >
                    <span className="text-4xl md:text-5xl font-black text-deep-blue/15 group-hover:text-deep-blue/30 transition-colors duration-500 shrink-0 w-16 md:w-20">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-2 group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>

                      <p className="text-charcoal-gray-light leading-relaxed text-sm md:text-base max-w-2xl">
                        {item.description}
                      </p>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-charcoal-gray/25 shrink-0 transition-all duration-500 group-hover:bg-deep-blue group-hover:border-deep-blue group-hover:scale-110">
                      <ArrowRight
                        size={18}
                        className="text-deep-blue transition-colors duration-500 group-hover:text-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 text-center"
              >
                <p className="text-sm text-charcoal-gray-light inline-flex items-center gap-2">
                  <Shield size={14} className="text-deep-blue" />
                  Backed by years of industry expertise and certified technical knowledge
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-off-white via-off-white-dark to-off-white" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-deep-blue/10">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-deep-blue via-deep-blue-light to-charcoal-gray" />

                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #204860 1px, transparent 1px),
                                      radial-gradient(circle at 75% 75%, #204860 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                  }}
                />

                <div className="absolute top-6 right-8 opacity-5 select-none pointer-events-none">
                  <Zap
                    size={200}
                    strokeWidth={0.5}
                    className="text-deep-blue"
                  />
                </div>

                <div className="relative p-8 md:p-14 lg:p-16">
                  <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-3xl md:text-5xl font-bold text-deep-blue mb-6 leading-tight"
                    >
                      Ready to Transform Your Property with{" "}
                      <span className="relative inline-block">
                        Smart Technology?
                        <span className="absolute bottom-2 left-0 w-full h-3 bg-deep-blue/10 -z-10" />
                      </span>
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-charcoal-gray-light text-lg md:text-xl mb-10 leading-relaxed"
                    >
                      Let's discuss how our integrated solutions can enhance security, efficiency,
                      and control for your home or business.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-col sm:flex-row gap-5 justify-center"
                    >
                      <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center text-lg px-8 py-4 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue"
                      >
                        <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white">
                          Get a Consultation
                          <ArrowRight
                            className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
                            size={20}
                          />
                        </span>

                        <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>

                      <Link
                        href="/services"
                        className="group relative inline-flex items-center justify-center text-lg px-8 py-4 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue"
                      >
                        <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white">
                          View Our Services
                          <ArrowRight
                            className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
                            size={20}
                          />
                        </span>

                        <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mt-12 pt-8 border-t border-charcoal-gray/10"
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                        <div className="flex items-center gap-2">
                          <Shield size={16} className="text-deep-blue" />
                          <span className="text-sm text-charcoal-gray-light">
                            Certified Professionals
                          </span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-charcoal-gray/20" />

                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-deep-blue" />
                          <span className="text-sm text-charcoal-gray-light">
                            24/7 Support
                          </span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-charcoal-gray/20" />

                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-deep-blue" />
                          <span className="text-sm text-charcoal-gray-light">
                            Quality Guaranteed
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-blue/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-deep-blue/10 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}