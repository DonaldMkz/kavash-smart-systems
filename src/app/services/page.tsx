"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Truck,
  Camera,
  Phone,
  Key,
  HardHat,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Custom smart home solutions for lighting, security, access, entertainment, and appliances. Includes smart lighting, switches, plugs, locks, video doorbells, smart curtains, sensors, automated gates, climate control, and appliance control.",
      href: "/services/smart-home",
      color: "bg-deep-blue",
      features: [
        "Smart lighting and switches",
        "Facial recognition locks",
        "Video doorbells",
        "Automated gates",
        "Climate control",
      ],
    },
    {
      icon: Truck,
      title: "Vehicle Technology & Fleet Management",
      description: "GPS tracking and fleet management for businesses with vehicles. Real-time tracking, trip history, geofencing, speed monitoring, and driver behavior monitoring.",
      href: "/services/fleet-management",
      color: "bg-deep-blue-light",
      features: [
        "Real-time GPS tracking",
        "Geofencing alerts",
        "Driver behavior monitoring",
        "Fleet reporting",
        "Maintenance reminders",
      ],
    },
    {
      icon: Camera,
      title: "Video Surveillance & Security",
      description: "Surveillance systems for homes, businesses, and industrial sites. IP CCTV cameras, HD cameras, night vision, PTZ cameras, and remote viewing.",
      href: "/services/security",
      color: "bg-deep-blue-dark",
      features: [
        "IP CCTV cameras",
        "Night vision capability",
        "PTZ cameras",
        "Remote viewing",
        "Video storage solutions",
      ],
    },
    {
      icon: Phone,
      title: "VOIP & Business Communication",
      description: "Professional phone systems for businesses and organizations. IP phone systems, internal extensions, call routing, and conference calling.",
      href: "/services/voip",
      color: "bg-charcoal-gray",
      features: [
        "IP phone systems",
        "Internal extensions",
        "Call routing",
        "Conference calling",
        "Remote extensions",
      ],
    },
    {
      icon: Key,
      title: "Automation & Access Control",
      description: "Systems that control who enters properties, buildings, and restricted areas. Fingerprint systems, facial recognition, RFID cards, and smart locks.",
      href: "/services/access-control",
      color: "bg-charcoal-gray-light",
      features: [
        "Fingerprint systems",
        "Facial recognition",
        "RFID card access",
        "Smart locks",
        "Visitor management",
      ],
    },
    {
      icon: HardHat,
      title: "Mining & Industrial Solutions",
      description: "Integrated technology for mining and industrial operations. Site security, access control, fleet management, and communication systems.",
      href: "/services/mining",
      color: "bg-deep-blue",
      features: [
        "Mine site security",
        "Role-based access control",
        "Fleet management",
        "Mining communication",
        "Industrial automation",
      ],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 gradient-bg overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full animate-pulse" />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
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
              className="text-gray-300 font-semibold mb-4 tracking-wider"
            >
              OUR SERVICES
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Complete Technology
              <br />
              Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              We design, supply, install, and support integrated technology solutions
              that connect different systems for seamless control.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start mb-6">
                    <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-deep-blue pt-2">{service.title}</h2>
                  </div>
                  
                  <p className="text-charcoal-gray-light mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={18} className="text-deep-blue mr-2 mt-1 flex-shrink-0" />
                        <span className="text-charcoal-gray text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-deep-blue font-semibold hover:text-deep-blue-light transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Solution You Need?
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Our team can assess your needs and recommend the perfect integrated
              technology solution for your home or business.
            </p>
            <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
              Get a Free Consultation
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
