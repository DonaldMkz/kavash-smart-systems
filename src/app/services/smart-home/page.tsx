"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Lightbulb,
  Lock,
  Video,
  Thermometer,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Building2,
  House,
  Hotel,
  Sparkles,
  Shield,
  Wifi,
  Star,
  Quote,
  ChevronRight,
} from "lucide-react";

export default function SmartHomePage() {
  const offerings = [
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Control lights from your phone, set schedules, and create ambiance with dimming and color-changing options.",
      number: "01",
    },
    {
      icon: Lock,
      title: "Smart Locks & Access",
      description: "Facial recognition, fingerprint, PIN, and RFID locks for enhanced security and convenience.",
      number: "02",
    },
    {
      icon: Video,
      title: "Video Doorbells & Cameras",
      description: "See who's at your door from anywhere with HD video doorbells and integrated security cameras.",
      number: "03",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Automated temperature control for comfort and energy efficiency throughout your home.",
      number: "04",
    },
    {
      icon: Smartphone,
      title: "Appliance Control",
      description: "Control appliances remotely, set schedules, and monitor energy usage from your smartphone.",
      number: "05",
    },
    {
      icon: House,
      title: "Smart Curtains & Gates",
      description: "Automated curtains, blinds, and gates that respond to schedules, sensors, or voice commands.",
      number: "06",
    },
  ];

  const applications = [
    {
      icon: Building2,
      title: "Apartments & Family Homes",
      description: "Complete smart home solutions for modern living.",
    },
    {
      icon: House,
      title: "Luxury Homes & Townhouses",
      description: "Premium automation for high-end residential properties.",
    },
    {
      icon: Hotel,
      title: "Lodges & Guest Houses",
      description: "Smart hospitality solutions for enhanced guest experience.",
    },
    {
      icon: Home,
      title: "Gated Communities",
      description: "Integrated smart systems for entire residential communities.",
    },
  ];

  return (
    <>
      {/* HERO SECTION - Unique Split Design */}
      <section className="relative min-h-screen bg-deep-blue-dark overflow-hidden">
        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 1px, transparent 1px, transparent 20px)',
        }} />
        
        {/* Large background circle */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-deep-blue rounded-full translate-x-1/2 -translate-y-1/2 opacity-20" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        <div className="container mx-auto px-6 md:px-8 relative z-10 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-deep-blue-light/20 rounded-full px-4 py-2 mb-6">
                <Sparkles size={16} className="text-deep-blue-light mr-2" />
                <span className="text-deep-blue-light text-sm font-semibold tracking-wider">
                  SMART HOME AUTOMATION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Live Smarter.
                <br />
                <span className="text-deep-blue-light">Not Harder.</span>
                <br />
                Effortlessly.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Transform your home into an intelligent living space that anticipates
                your needs and simplifies your life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="btn btn-primary text-lg px-8 py-3.5">
                  Get Started
                  <ArrowRight className="inline ml-2" size={20} />
                </Link>
                <Link
                  href="#solutions"
                  className="btn bg-transparent text-white text-lg px-8 py-3.5 font-semibold hover:bg-white hover:text-deep-blue"
                  style={{ border: '2px solid #204860' }}
                >
                  View Solutions
                </Link>
              </div>
            </motion.div>

            {/* Right - Interactive Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-deep-blue rounded-3xl p-8 relative overflow-hidden">
                {/* Home icon center */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-deep-blue-light rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Home size={48} className="text-white" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-deep-blue-light rounded-full opacity-20"
                    />
                  </div>
                  <p className="text-white font-bold text-xl">Smart Home Hub</p>
                  <p className="text-gray-400 text-sm">All devices, one control</p>
                </div>

                {/* Grid of smart home features */}
                <div className="grid grid-cols-2 gap-4">
                  {offerings.slice(0, 4).map((item) => (
                    <div key={item.title} className="bg-deep-blue-dark rounded-xl p-4 hover:bg-deep-blue-dark/70 transition-colors">
                      <item.icon size={24} className="text-deep-blue-light mb-2" />
                      <p className="text-white text-sm font-semibold">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS - Numbered List Style */}
      <section id="solutions" className="relative z-20 py-24 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SOLUTIONS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Everything Your Home Needs
            </h2>
          </motion.div>

          <div className="space-y-0">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="border-b border-off-white-dark py-8 flex items-center group hover:bg-white transition-colors px-4 rounded-lg"
              >
                <div className="text-4xl md:text-6xl font-bold text-deep-blue/10 mr-6 md:mr-12 w-20">
                  {item.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <item.icon size={24} className="text-deep-blue mr-3" />
                    <h3 className="text-2xl md:text-3xl font-bold text-deep-blue">{item.title}</h3>
                  </div>
                  <p className="text-charcoal-gray-light leading-relaxed">{item.description}</p>
                </div>
                <ChevronRight size={24} className="text-deep-blue opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS - Dark Section with Cards */}
      <section className="relative z-20 py-24 bg-deep-blue-dark overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue-light font-semibold mb-3 tracking-wider text-sm">WHO IT'S FOR</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Perfect For Every Home
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-deep-blue rounded-2xl p-6 text-center hover:bg-deep-blue-light transition-colors group"
              >
                <div className="w-16 h-16 bg-deep-blue-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <app.icon size={32} className="text-deep-blue-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 py-24 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-deep-blue rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-deep-blue-light rounded-full -mr-20 -mt-20 opacity-30" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-deep-blue-light rounded-full -ml-20 -mb-20 opacity-20" />
            
            <div className="relative z-10">
              <Quote size={48} className="text-deep-blue-light mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Home?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss the best smart home solution for your lifestyle.
              </p>
              <Link href="/contact" className="btn btn-primary text-lg px-8 py-3.5">
                Get a Free Consultation
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}