"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
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

  const values = [
    {
      number: "01",
      title: "Integrity",
      description: "We operate with honesty and transparency in everything we do.",
    },
    {
      number: "02",
      title: "Excellence",
      description: "We strive for the highest quality in every project we deliver.",
    },
    {
      number: "03",
      title: "Customer Focus",
      description: "Our clients' needs and satisfaction are at the center of our work.",
    },
    {
      number: "04",
      title: "Innovation",
      description: "We embrace new technology to provide cutting-edge solutions.",
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      title: "Integrated Solutions",
      description: "We don't just install individual systems - we connect them all for seamless operation.",
    },
    {
      number: "02",
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all installations.",
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

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Assessment",
      description: "We meet with you to understand your needs, assess your property, and identify the best solutions.",
    },
    {
      number: "02",
      title: "Design & Proposal",
      description: "We create a customized system design and provide a detailed proposal with transparent pricing.",
    },
    {
      number: "03",
      title: "Installation & Integration",
      description: "Our certified technicians install and integrate all components professionally and efficiently.",
    },
    {
      number: "04",
      title: "Support & Maintenance",
      description: "We provide ongoing support, maintenance, and upgrades to keep your systems running perfectly.",
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
            backgroundImage: "url('/images/hero/About1.webp')",
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
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                Kavash Smart Systems is a technology integration company that designs, supplies,
                installs, and supports smart automation, security, fleet technology, communication,
                and access control solutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW - Text on charcoal background */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Text content on charcoal background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-charcoal-gray rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-blue via-deep-blue-light to-transparent" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-deep-blue/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <p className="font-semibold mb-3 tracking-wider text-sm" style={{ color: '#D0D5D9' }}>WHO WE ARE</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  More Than Just Installers
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: '#D0D5D9' }}>
                  We are not just a CCTV installer. We are a technology integration company that
                  connects different systems - security, gates, lights, phones, and tracking -
                  so everything works together seamlessly.
                </p>
                <p className="mb-8 leading-relaxed" style={{ color: '#D0D5D9' }}>
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
                    <div key={item} className="flex items-start group">
                      <CheckCircle size={20} className="mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ color: '#D0D5D9' }} />
                      <span className="group-hover:opacity-80 transition-opacity duration-300" style={{ color: '#FFFFFF' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image with hover zoom effect and floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group overflow-hidden rounded-2xl shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" 
                alt="Technology Integration"
                className="w-full h-full min-h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue-dark/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                  <h3 className="text-lg font-bold text-deep-blue mb-2">Our Mission</h3>
                  <p className="text-charcoal-gray-light text-sm leading-relaxed">
                    To provide integrated, reliable, and innovative technology solutions that
                    enhance security, efficiency, and control for our clients.
                  </p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl">
                  <h3 className="text-lg font-bold text-deep-blue mb-2">Our Vision</h3>
                  <p className="text-charcoal-gray-light text-sm leading-relaxed">
                    To be Zimbabwe's leading technology integration company, known for excellence,
                    innovation, and customer satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - Bento grid design */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white-dark overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-charcoal-gray/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <span className="absolute -right-4 -top-4 text-[8rem] font-black text-deep-blue/5 group-hover:text-deep-blue/10 transition-colors duration-500">
                  {value.number}
                </span>
                
                <span className="absolute top-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500" />
                
                <div className="relative z-10">
                  <span className="text-deep-blue/30 font-bold text-sm mb-4 block">{value.number}</span>
                  <h3 className="text-2xl font-bold text-deep-blue mb-3 group-hover:translate-x-2 transition-transform duration-500">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-gray-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Grid with hover effects */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              Why Kavash Smart Systems
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 mb-5">
                  <span className="text-5xl font-black text-deep-blue/10 group-hover:text-deep-blue/20 transition-colors duration-500">
                    {item.number}
                  </span>
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-deep-blue mb-3">
                  {item.title}
                </h3>
                <p className="relative z-10 text-charcoal-gray-light leading-relaxed">
                  {item.description}
                </p>
                
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS - Timeline design */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white-dark overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              How We Deliver Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-deep-blue/20" />
            
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-deep-blue mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-gray-light leading-relaxed text-sm text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - with background image */}
      <section className="relative z-20 py-24 md:py-32 overflow-hidden">
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
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#E8E6E3' }}>
              Ready to experience the power of integrated technology solutions?
            </p>
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
            >
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue">
                Get in Touch
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