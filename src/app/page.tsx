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
  Shield,
  Clock,
  Wrench,
  Users,
  Award,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Smart Home Automation",
      description: "Custom smart home solutions for lighting, security, access, entertainment, and appliances.",
      href: "/services/smart-home",
      color: "bg-deep-blue",
    },
    {
      icon: Truck,
      title: "Vehicle Technology & Fleet Management",
      description: "GPS tracking and fleet management for businesses with vehicles.",
      href: "/services/fleet-management",
      color: "bg-deep-blue-light",
    },
    {
      icon: Camera,
      title: "Video Surveillance & Security",
      description: "Surveillance systems for homes, businesses, and industrial sites.",
      href: "/services/security",
      color: "bg-deep-blue-dark",
    },
    {
      icon: Phone,
      title: "VOIP & Business Communication",
      description: "Professional phone systems for businesses and organizations.",
      href: "/services/voip",
      color: "bg-charcoal-gray",
    },
    {
      icon: Key,
      title: "Automation & Access Control",
      description: "Systems that control who enters properties and restricted areas.",
      href: "/services/access-control",
      color: "bg-charcoal-gray-light",
    },
    {
      icon: HardHat,
      title: "Mining & Industrial Solutions",
      description: "Integrated technology for mining and industrial operations.",
      href: "/services/mining",
      color: "bg-deep-blue",
    },
  ];

  const whyKavash = [
    {
      icon: Shield,
      title: "Integrated Solutions",
      description: "We connect security, gates, lights, phones, and tracking into one seamless system.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all our installations.",
    },
    {
      icon: Wrench,
      title: "Expert Installation",
      description: "Professional installation by certified technicians with years of experience.",
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored technology solutions designed for your specific needs and budget.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "We only use premium, reliable products from trusted manufacturers.",
    },
    {
      icon: Zap,
      title: "Future-Ready",
      description: "Scalable systems that grow with your needs and adapt to new technology.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        {/* Decorative circles */}
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
                Technology Integration Experts
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Smart Technology.
              <br />
              Connected Systems.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
                Better Control.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              Kavash Smart Systems designs, supplies, installs, and supports smart automation,
              security, fleet technology, communication, and access control solutions for
              residential, commercial, and industrial clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/services" className="btn btn-white text-lg px-8 py-3.5">
                Explore Services
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link
                href="/contact"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-blue text-lg px-8 py-3.5"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6">
              Complete Technology Solutions
            </h2>
            <p className="text-charcoal-gray-light max-w-2xl mx-auto text-lg leading-relaxed">
              We provide integrated technology solutions that connect different systems
              seamlessly for better control and efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col cursor-pointer hover:border-deep-blue border-2 border-transparent">
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-deep-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-gray-light mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>
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

      {/* WHY KAVASH SECTION */}
      <section className="py-24 md:py-32 bg-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHY CHOOSE KAVASH</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-6">
              Why We're Different
            </h2>
            <p className="text-charcoal-gray-light max-w-2xl mx-auto text-lg leading-relaxed">
              We're not just installers - we're technology integration experts who
              connect systems for seamless control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whyKavash.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-start mb-5">
                    <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon size={28} className="text-deep-blue" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-deep-blue pt-3">{item.title}</h3>
                  </div>
                  <p className="text-charcoal-gray-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="gradient-bg py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Property with Smart Technology?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our integrated solutions can enhance security, efficiency,
              and control for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
                Get a Consultation
              </Link>
              <Link
                href="/portfolio"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-blue text-lg px-8 py-3.5"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}