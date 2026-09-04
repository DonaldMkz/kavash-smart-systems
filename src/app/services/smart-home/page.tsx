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
} from "lucide-react";

export default function SmartHomePage() {
  const offerings = [
    {
      icon: Lightbulb,
      title: "Smart Lighting",
      description: "Control lights from your phone, set schedules, and create ambiance with dimming and color-changing options.",
    },
    {
      icon: Lock,
      title: "Smart Locks & Access",
      description: "Facial recognition, fingerprint, PIN, and RFID locks for enhanced security and convenience.",
    },
    {
      icon: Video,
      title: "Video Doorbells & Cameras",
      description: "See who's at your door from anywhere with HD video doorbells and integrated security cameras.",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Automated temperature control for comfort and energy efficiency throughout your home.",
    },
    {
      icon: Smartphone,
      title: "Appliance Control",
      description: "Control appliances remotely, set schedules, and monitor energy usage from your smartphone.",
    },
    {
      icon: House,
      title: "Smart Curtains & Gates",
      description: "Automated curtains, blinds, and gates that respond to schedules, sensors, or voice commands.",
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
      {/* FULL-SCREEN IMMERSIVE HERO */}
      <section className="relative min-h-screen bg-gradient-to-br from-deep-blue-dark via-deep-blue to-deep-blue-light flex items-center">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
        >
          <Lightbulb size={32} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
        >
          <Lock size={32} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute bottom-40 left-40 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
        >
          <Video size={32} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-20 right-40 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm"
        >
          <Thermometer size={32} className="text-white" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-8 relative z-10 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Sparkles size={20} className="text-white mr-2" />
              <span className="text-white font-semibold">Smart Home Automation</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Live Smarter,
              <br />
              <span className="text-gray-300">Not Harder</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
            >
              Transform your home into an intelligent living space that anticipates
              your needs and simplifies your life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn bg-white text-deep-blue text-lg px-10 py-4 rounded-full font-semibold hover:bg-off-white">
                Get Started Today
                <ArrowRight className="inline ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENTO GRID LAYOUT - LIGHT CARDS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SOLUTIONS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Everything Your Home Needs
            </h2>
          </motion.div>

          {/* Bento Grid - Different sized cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : 
                  index === 3 ? 'md:col-span-2' : 
                  ''
                } bg-off-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:bg-off-white-dark transition-colors border border-off-white-dark`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-deep-blue rounded-2xl flex items-center justify-center mb-4">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">{item.title}</h3>
                  <p className="text-charcoal-gray-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                 {/* APPLICATIONS - SLIDER WITH ARROWS */}
      <section className="py-24 bg-off-white-dark overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">WHO IT'S FOR</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Perfect For Every Home
            </h2>
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Cards Container */}
            <div className="overflow-x-auto scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-6">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow min-w-[280px] md:min-w-[300px] flex-shrink-0"
                  >
                    <div className="w-16 h-16 bg-deep-blue/10 rounded-2xl flex items-center justify-center mb-4">
                      <app.icon size={32} className="text-deep-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-deep-blue mb-2">{app.title}</h3>
                    <p className="text-charcoal-gray-light leading-relaxed">{app.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={() => {
                const container = document.querySelector('.overflow-x-auto');
                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-deep-blue-light transition-colors z-10"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                const container = document.querySelector('.overflow-x-auto');
                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-deep-blue-light transition-colors z-10"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL-STYLE CTA */}
      <section className="py-24 bg-deep-blue-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={48} className="text-white/20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              "Transform Your Home Into an Intelligent Living Space"
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join hundreds of homeowners who've upgraded to smart living with Kavash.
            </p>
            <Link href="/contact" className="btn bg-white text-deep-blue text-lg px-10 py-4 rounded-full font-semibold">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}