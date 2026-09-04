"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Headphones,
  Clock,
  Wrench,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function SupportPage() {
  const supportPlans = [
    {
      icon: Shield,
      title: "Basic Support",
      price: "From $50/month",
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
      icon: Wrench,
      title: "Premium Support",
      price: "From $120/month",
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
      icon: Zap,
      title: "Enterprise Support",
      price: "Custom Pricing",
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

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full animate-pulse" />

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
                Support & Maintenance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              We're Here
              <br />
              When You Need Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              Our team provides ongoing support and maintenance to ensure your
              technology systems always perform at their best.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              How We Support You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <service.icon size={28} className="text-deep-blue" />
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-3">{service.title}</h3>
                <p className="text-charcoal-gray-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS */}
      <section className="py-24 md:py-32 bg-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">SUPPORT PLANS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Choose Your Support Level
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-full ${
                  plan.highlighted
                    ? "bg-deep-blue rounded-xl shadow-lg transform md:scale-105"
                    : "bg-white rounded-xl shadow-sm hover:shadow-lg"
                }`}
              >
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-deep-blue"}`}>
                    {plan.title}
                  </h3>
                  <p className={`font-semibold mb-4 ${plan.highlighted ? "text-gray-300" : "text-deep-blue-light"}`}>
                    {plan.price}
                  </p>
                  <p className={`mb-6 leading-relaxed ${plan.highlighted ? "text-gray-300" : "text-charcoal-gray-light"}`}>
                    {plan.description}
                  </p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle size={18} className={`mr-2 mt-1 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-deep-blue"}`} />
                        <span className={`text-sm ${plan.highlighted ? "text-gray-200" : "text-charcoal-gray"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className={`btn text-center ${
                      plan.highlighted
                        ? "btn-white"
                        : "btn-primary"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="gradient-bg py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Immediate Support?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Our team is available 24/7 for emergency support. Contact us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
                <Phone className="inline mr-2" size={20} />
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}