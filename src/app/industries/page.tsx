"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Building,
  HardHat,
  Factory,
  Truck,
  Building2,
  Hotel,
  School,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Home,
      title: "Residential",
      description: "Smart homes, security, access control, and home automation for modern living.",
      features: ["Smart home automation", "Home security systems", "Access control", "Video doorbells"],
    },
    {
      icon: Building,
      title: "Commercial",
      description: "Offices, retail, warehouses, and business premises with integrated technology.",
      features: ["Video surveillance", "Access control", "VOIP systems", "Automation"],
    },
    {
      icon: HardHat,
      title: "Mining",
      description: "Site security, fleet management, access control, and communication for mines.",
      features: ["Mine site security", "Fleet tracking", "Role-based access", "Communication systems"],
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Automation, surveillance, access control, and monitoring for industrial sites.",
      features: ["Equipment monitoring", "Industrial automation", "Security systems", "Remote monitoring"],
    },
    {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Vehicle tracking and fleet management for transport operations.",
      features: ["GPS tracking", "Route optimization", "Driver monitoring", "Fleet reports"],
    },
    {
      icon: Building2,
      title: "Property Developers",
      description: "Smart technology for new developments and residential communities.",
      features: ["Smart building systems", "Security infrastructure", "Access control", "Communication"],
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotels, lodges, and guest houses with smart technology solutions.",
      features: ["Guest room automation", "Security systems", "Access control", "Communication"],
    },
    {
      icon: School,
      title: "Institutions",
      description: "Schools, churches, offices, and organizations with integrated systems.",
      features: ["Security systems", "Access control", "Communication", "Automation"],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute top-40 right-40 w-32 h-32 bg-white/10 rounded-full animate-pulse" />

        <div className="container mx-auto px-6 md:px-8 relative z-10 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2.5 mb-8"
            >
              <span className="text-white text-sm font-medium tracking-wide">
                Industries We Serve
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Solutions for
              <br />
              Every Sector
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              From residential homes to mining operations, we provide integrated
              technology solutions for every industry across Zimbabwe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SECTORS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6">
              8 Industries We Serve
            </h2>
            <p className="text-charcoal-gray-light max-w-2xl mx-auto text-lg leading-relaxed">
              We provide specialized technology solutions tailored to the unique
              needs of each industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start mb-5">
                    <div className="bg-deep-blue w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <industry.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-2">{industry.title}</h3>
                      <p className="text-charcoal-gray-light leading-relaxed text-sm md:text-base">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={16} className="text-deep-blue mr-2 mt-1 flex-shrink-0" />
                        <span className="text-charcoal-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="gradient-bg py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              We work with businesses across all sectors. Contact us to discuss
              your specific technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
                Contact Us Today
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}