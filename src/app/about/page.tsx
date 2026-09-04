"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Clock,
  Wrench,
  Users,
  Award,
  Zap,
  ArrowRight,
  CheckCircle,
  Search,
  Settings,
  Wrench as ToolIcon,
  Headphones,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty and transparency in everything we do.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in every project we deliver.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients' needs and satisfaction are at the center of our work.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technology to provide cutting-edge solutions.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Integrated Solutions",
      description: "We don't just install individual systems - we connect them all for seamless operation.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all installations.",
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

  const processSteps = [
    {
      icon: Search,
      title: "Consultation & Assessment",
      description: "We meet with you to understand your needs, assess your property, and identify the best solutions.",
    },
    {
      icon: Settings,
      title: "Design & Proposal",
      description: "We create a customized system design and provide a detailed proposal with transparent pricing.",
    },
    {
      icon: ToolIcon,
      title: "Installation & Integration",
      description: "Our certified technicians install and integrate all components professionally and efficiently.",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "We provide ongoing support, maintenance, and upgrades to keep your systems running perfectly.",
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
              ABOUT US
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Technology Integration
              <br />
              Experts in Zimbabwe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              Kavash Smart Systems is a technology integration company that designs, supplies,
              installs, and supports smart automation, security, fleet technology, communication,
              and access control solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHO WE ARE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                More Than Just Installers
              </h2>
              <p className="text-charcoal-gray-light mb-6 leading-relaxed">
                We are not just a CCTV installer. We are a technology integration company that
                connects different systems - security, gates, lights, phones, and tracking -
                so everything works together seamlessly.
              </p>
              <p className="text-charcoal-gray-light mb-6 leading-relaxed">
                Based in Harare, Zimbabwe, we serve residential, commercial, and industrial
                clients with cutting-edge technology solutions that enhance security, efficiency,
                and control.
              </p>
              <div className="space-y-4">
                {[
                  "Residential smart home solutions",
                  "Commercial security and automation",
                  "Industrial and mining technology",
                  "Fleet management and tracking",
                  "Business communication systems",
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <CheckCircle size={20} className="text-deep-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-charcoal-gray">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-xl shadow-sm"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-deep-blue mb-2">Our Mission</h3>
                <div className="w-20 h-1 bg-deep-blue mx-auto mb-4"></div>
                <p className="text-charcoal-gray-light leading-relaxed">
                  To provide integrated, reliable, and innovative technology solutions that
                  enhance security, efficiency, and control for our clients.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-deep-blue mb-2">Our Vision</h3>
                <div className="w-20 h-1 bg-deep-blue mx-auto mb-4"></div>
                <p className="text-charcoal-gray-light leading-relaxed">
                  To be Zimbabwe's leading technology integration company, known for excellence,
                  innovation, and customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 md:py-32 bg-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <value.icon size={28} className="text-deep-blue" />
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-3">{value.title}</h3>
                <p className="text-charcoal-gray-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Why Kavash Smart Systems
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full"
              >
                <div className="flex items-start mb-5">
                  <div className="bg-deep-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                    <item.icon size={24} className="text-deep-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue pt-2">{item.title}</h3>
                </div>
                <p className="text-charcoal-gray-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS */}
      <section className="py-24 md:py-32 bg-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              How We Deliver Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full relative"
              >
                <div className="absolute top-4 right-4 text-5xl font-bold text-deep-blue/10">
                  {index + 1}
                </div>
                <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <step.icon size={28} className="text-deep-blue" />
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-3">{step.title}</h3>
                <p className="text-charcoal-gray-light leading-relaxed">{step.description}</p>
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
              Let's Work Together
            </h2>
            <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
              Ready to experience the power of integrated technology solutions?
            </p>
            <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
              Get in Touch
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}