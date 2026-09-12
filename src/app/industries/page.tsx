"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function IndustriesPage() {
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

  const industries = [
    {
      number: "01",
      title: "Residential",
      description: "Smart homes, security, access control, and home automation for modern living.",
      features: ["Smart home automation", "Home security systems", "Access control", "Video doorbells"],
    },
    {
      number: "02",
      title: "Commercial",
      description: "Offices, retail, warehouses, and business premises with integrated technology.",
      features: ["Video surveillance", "Access control", "VOIP systems", "Automation"],
    },
    {
      number: "03",
      title: "Mining",
      description: "Site security, fleet management, access control, and communication for mines.",
      features: ["Mine site security", "Fleet tracking", "Role-based access", "Communication systems"],
    },
    {
      number: "04",
      title: "Industrial",
      description: "Automation, surveillance, access control, and monitoring for industrial sites.",
      features: ["Equipment monitoring", "Industrial automation", "Security systems", "Remote monitoring"],
    },
    {
      number: "05",
      title: "Transport & Logistics",
      description: "Vehicle tracking and fleet management for transport operations.",
      features: ["GPS tracking", "Route optimization", "Driver monitoring", "Fleet reports"],
    },
    {
      number: "06",
      title: "Property Developers",
      description: "Smart technology for new developments and residential communities.",
      features: ["Smart building systems", "Security infrastructure", "Access control", "Communication"],
    },
    {
      number: "07",
      title: "Hospitality",
      description: "Hotels, lodges, and guest houses with smart technology solutions.",
      features: ["Guest room automation", "Security systems", "Access control", "Communication"],
    },
    {
      number: "08",
      title: "Institutions",
      description: "Schools, churches, offices, and organizations with integrated systems.",
      features: ["Security systems", "Access control", "Communication", "Automation"],
    },
  ];

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image with Parallax Movement */}
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Industries1.webp')",
            backgroundPosition: "center 30%",
          }}
        />

        {/* Fixed Dark Gradient Overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-deep-blue-dark via-deep-blue-dark/70 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 pb-32">
          <div style={{ marginTop: '130px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-semibold mb-4 tracking-wider"
                style={{ color: '#D0CECB' }}
              >
                INDUSTRIES WE SERVE
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Solutions for
                <br />
                Every Sector
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                From residential homes to mining operations, we provide integrated
                technology solutions for every industry across Zimbabwe.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID - Modern cards */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-72 h-72 bg-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-charcoal-gray/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SECTORS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6">
              8 Industries We Serve
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed">
              <span style={{ color: '#6A7A88' }}>
                We provide specialized technology solutions tailored to the unique
                needs of each industry.
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="group relative bg-white rounded-2xl p-8 md:p-10 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-charcoal-gray/10 hover:border-deep-blue/30">
                  {/* Ghost number in background */}
                  <span className="absolute -right-4 -top-6 text-[7rem] md:text-[9rem] font-black text-deep-blue/5 group-hover:text-deep-blue/10 transition-colors duration-500 select-none pointer-events-none">
                    {industry.number}
                  </span>
                  
                  {/* Top accent bar */}
                  <span className="absolute top-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500 ease-out" />
                  
                  {/* Number badge */}
                  <div className="relative z-10 mb-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-deep-blue/10 text-deep-blue font-bold text-lg group-hover:bg-deep-blue group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                      {industry.number}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-deep-blue mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {industry.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="relative z-10 text-charcoal-gray-light leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  {/* Features */}
                  <div className="relative z-10 grid grid-cols-2 gap-3 mt-auto pt-6 border-t border-charcoal-gray/10 group-hover:border-deep-blue/20 transition-colors duration-500">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={16} className="text-deep-blue mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-charcoal-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent bar */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-deep-blue/30 group-hover:w-full transition-all duration-500 ease-out" />
                  
                  {/* Corner glow effect */}
                  <span className="absolute -bottom-10 -right-10 w-32 h-32 bg-deep-blue/5 rounded-full blur-2xl group-hover:bg-deep-blue/10 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - with background image */}
      <section className="relative z-20 py-24 md:py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop')" }} />
        <div className="absolute inset-0 bg-deep-blue-dark/80" />
        
        <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E8E6E3' }}>
              We work with businesses across all sectors. Contact us to discuss
              your specific technology needs.
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
            >
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue">
                Contact Us Today
                <ArrowRight className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}