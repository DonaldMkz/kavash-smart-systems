"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
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

  const services = [
    {
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
      title: "Smart Home Automation",
      description: "Custom smart home solutions for lighting, security, access, entertainment, and appliances. Includes smart lighting, switches, plugs, locks, video doorbells, smart curtains, sensors, automated gates, climate control, and appliance control.",
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
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
      title: "Vehicle Technology & Fleet Management",
      description: "GPS tracking and fleet management for businesses with vehicles. Real-time tracking, trip history, geofencing, speed monitoring, and driver behavior monitoring.",
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
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
      title: "Video Surveillance & Security",
      description: "Surveillance systems for homes, businesses, and industrial sites. IP CCTV cameras, HD cameras, night vision, PTZ cameras, and remote viewing.",
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
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
      title: "VOIP & Business Communication",
      description: "Professional phone systems for businesses and organizations. IP phone systems, internal extensions, call routing, and conference calling.",
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
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
      title: "Automation & Access Control",
      description: "Systems that control who enters properties, buildings, and restricted areas. Fingerprint systems, facial recognition, RFID cards, and smart locks.",
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
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
      title: "Mining & Industrial Solutions",
      description: "Integrated technology for mining and industrial operations. Site security, access control, fleet management, and communication systems.",
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

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Fixed Background Image with Parallax Movement */}
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Services1.webp')",
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
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                We design, supply, install, and support integrated technology solutions
                that connect different systems for seamless control.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Alternating image sides */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHAT WE OFFER</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Six Core Services
            </h2>
            <p className="max-w-2xl mx-auto">
              <span style={{ color: '#6A7A88' }}>
                Each service is designed to work independently or as part of a fully integrated system.
              </span>
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={service.href}
                    className={`group relative block bg-charcoal-gray rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:flex ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Image Section */}
                    <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Fade gradient - direction depends on image position */}
                      <div className={`absolute inset-0 ${
                        isEven 
                          ? 'bg-gradient-to-r from-transparent to-charcoal-gray' 
                          : 'bg-gradient-to-l from-transparent to-charcoal-gray'
                      }`} />
                      
                      {/* Number badge */}
                      <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white text-sm font-bold px-3 py-1.5 rounded-lg border border-white/20 z-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start">
                            <CheckCircle size={18} className="text-white/70 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-200 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Learn More */}
                      <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More 
                        <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Bottom accent bar */}
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-white/50 group-hover:w-full transition-all duration-500 ease-out" />
                  </Link>
                </motion.div>
              );
            })}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Solution You Need?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#E8E6E3' }}>
              Our team can assess your needs and recommend the perfect integrated
              technology solution for your home or business.
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
            >
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue">
                Get a Free Consultation
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