"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  X,
} from "lucide-react";

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function SupportPage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const supportPlans = [
    {
      title: "Basic Support",
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
      title: "Premium Support",
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
      title: "Enterprise Support",
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

  const whatsappLink = "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%27m%20interested%20in%20support%20plans.";

  const openModal = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Support1.webp')",
            backgroundPosition: "center 30%",
          }}
        />

        <div className="fixed inset-0 bg-gradient-to-b from-deep-blue-dark via-deep-blue-dark/70 to-transparent" />

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
                SUPPORT & MAINTENANCE
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                We're Here
                <br />
                When You Need Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                Our team provides ongoing support and maintenance to ensure your
                technology systems always perform at their best.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">OUR SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              How We Support You
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden border border-charcoal-gray/10 hover:border-deep-blue/20"
              >
                <span className="absolute -right-4 -top-4 text-[6rem] font-black text-deep-blue/5 group-hover:text-deep-blue/10 transition-colors duration-500 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                <span className="absolute top-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-deep-blue transition-colors duration-500">
                    <service.icon size={28} className="text-deep-blue group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue mb-3">{service.title}</h3>
                  <p className="text-charcoal-gray-light leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT PLANS */}
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
            <p className="text-deep-blue font-semibold mb-3 tracking-wider text-sm">SUPPORT PLANS</p>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-blue mb-4">
              Choose Your Support Level
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-full ${
                  plan.highlighted
                    ? "bg-deep-blue rounded-2xl shadow-xl transform md:scale-105 relative overflow-hidden"
                    : "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? "text-white" : "text-deep-blue"}`}>
                    {plan.title}
                  </h3>
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
                  
                  <button
                    onClick={() => openModal(plan.title)}
                    className={`group relative inline-flex items-center justify-center text-sm px-6 py-3 rounded-xl font-semibold overflow-hidden border-2 transition-all duration-300 ${
                      plan.highlighted
                        ? "border-white"
                        : "border-deep-blue"
                    }`}
                  >
                    <span className={`relative z-10 transition-colors duration-300 flex items-center gap-2 ${
                      plan.highlighted
                        ? "text-white group-hover:text-deep-blue"
                        : "text-deep-blue group-hover:text-white"
                    }`}>
                      Get Started
                      <ArrowRight size={16} />
                    </span>
                    <span className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                      plan.highlighted ? "bg-white" : "bg-deep-blue"
                    }`}></span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL - Get Started */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-charcoal-gray/10 bg-off-white">
                <h3 className="text-xl font-bold text-deep-blue">
                  {selectedPlan} Plan
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-deep-blue hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <p className="text-charcoal-gray-light text-center mb-8">
                  Choose how you'd like to get started with our {selectedPlan} plan.
                </p>
                
                <div className="space-y-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center text-sm px-6 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-green-600 w-full"
                  >
                    <span className="relative z-10 text-green-600 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                      <WhatsAppIcon size={18} />
                      Chat on WhatsApp
                    </span>
                    <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                  
                  <Link
                    href="/contact"
                    onClick={() => setIsModalOpen(false)}
                    className="group relative flex items-center justify-center text-sm px-6 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue w-full"
                  >
                    <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                      <Mail size={18} />
                      Contact Us
                    </span>
                    <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT CTA */}
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need Immediate Support?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E8E6E3' }}>
              Our team is available 24/7 for emergency support. Contact us now.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
              >
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue flex items-center gap-2">
                  <Phone size={20} />
                  Contact Support
                </span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-green-500"
              >
                <span className="relative z-10 text-green-500 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                  <WhatsAppIcon size={20} />
                  WhatsApp Us
                </span>
                <span className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}