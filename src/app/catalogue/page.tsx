"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
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

export default function CataloguePage() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // 15 products shown on main page
  const products = [
    {
      image: "/images/products/image1.webp",
      name: "Home Assistant Green",
      category: "Smart Home & Security",
      description: "A compact smart home hub designed to centralize and control all your smart devices seamlessly.",
    },
    {
      image: "/images/products/image2.webp",
      name: "TP-Link Tapo Smart WiFi Bulb",
      category: "Smart Lighting",
      description: "A multicolor, energy-efficient smart bulb controlled remotely via WiFi with adjustable brightness.",
    },
    {
      image: "/images/products/image3.webp",
      name: "Semi-Auto Smart Door Lock",
      category: "Smart Home & Security",
      description: "Durable smart lock with fingerprint, RFID card, PIN code, and Tuya App cloud control.",
    },
    {
      image: "/images/products/image4.webp",
      name: "Fully Automatic Smart Lock",
      category: "Smart Home & Security",
      description: "3D face recognition, biometric fingerprint, and WiFi HD camera for real-time monitoring.",
    },
    {
      image: "/images/products/image5.webp",
      name: "Tuya WiFi Peephole Smart Lock",
      category: "Smart Home & Security",
      description: "Smart lock with built-in camera and high-resolution display for remote viewing.",
    },
    {
      image: "/images/products/image6.webp",
      name: "12V LED Smart Bulb MR16",
      category: "Smart Lighting",
      description: "RGBCW smart bulb with full color control and WiFi connectivity for 12V GU5.3 sockets.",
    },
    {
      image: "/images/products/image7.webp",
      name: "Temperature & Humidity Sensor",
      category: "Sensors & Management",
      description: "Wireless Zigbee sensor for real-time temperature and humidity monitoring.",
    },
    {
      image: "/images/products/image8.webp",
      name: "32\" Portable 4K Touch TV",
      category: "Sensors & Management",
      description: "Premium portable 4K UHD touch-screen smart display on a sleek wheeled stand.",
    },
    {
      image: "/images/products/image9.webp",
      name: "32\" Portable 4K Touch TV",
      category: "Sensors & Management",
      description: "Premium portable 4K UHD touch-screen smart display on a sleek wheeled stand.",
    },
    {
      image: "/images/products/image10.webp",
      name: "Smart Room Booking Panel",
      category: "Sensors & Management",
      description: "Anti-glare Android tablet for conference room booking and scheduling.",
    },
    {
      image: "/images/products/image11.webp",
      name: "12W Anti-Glare COB Spotlight",
      category: "Smart Lighting",
      description: "Adjustable recessed downlight with 2700K-6500K and Zigbee connectivity.",
    },
    {
      image: "/images/products/image12.webp",
      name: "Motion Sensor LED Bulb",
      category: "Smart Lighting",
      description: "Auto-dimming motion sensor bulb with adjustable daylight and multi-color.",
    },
    {
      image: "/images/products/image13.webp",
      name: "Decorative Filament LED Bulb",
      category: "Smart Lighting",
      description: "Dimming filament bulb with irregular shape in smoky grey or amber glass.",
    },
    {
      image: "/images/products/image14.webp",
      name: "12W LED Motion Sensor Bulb",
      category: "Smart Lighting",
      description: "Energy-efficient motion-sensing bulb for E27 and B22 holders.",
    },
    {
      image: "/images/products/image15.webp",
      name: "Electric Curtain System",
      category: "Smart Curtains",
      description: "Motorized curtains controlled via remote or Tuya Smart Home App.",
    },
  ];

  // All 31 products for the modal
  const allProducts = [
    ...products,
    {
      name: "WiFi Smart IR Remote Controller",
      category: "Smart Home & Security",
      description: "Universal remote using WiFi to control IR-enabled home appliances from your smartphone.",
    },
    {
      name: "New LR K9 TT App Cloud Fingerprint Smart Lock",
      category: "Smart Home & Security",
      description: "Grade C security certified lock with Wi-Fi, fingerprint sensor, and remote management.",
    },
    {
      name: "Dalton DH-88 Smart Lock",
      category: "Smart Home & Security",
      description: "Premium smart lock with symmetrical design, WiFi, and Tuya app integration.",
    },
    {
      name: "12W/15W/18W/20W LED Motion Sensor Emergency Bulb",
      category: "Smart Lighting",
      description: "Universal E27/B22 bulb with motion sensor and rechargeable battery for power outages.",
    },
    {
      name: "KYOK Smart Electric Curtain Rail",
      category: "Smart Curtains",
      description: "Motorized curtain rail with Matter support for Apple Home, Google Home, and Alexa.",
    },
    {
      name: "DIY Smart Tuya Zigbee Motorized Curtain Driver",
      category: "Smart Curtains",
      description: "Retrofittable smart driver that automates existing curtain rails.",
    },
    {
      name: "A-OK Smart Roller Blinds Tubular Motor",
      category: "Smart Curtains",
      description: "Rechargeable smart tubular motor for modern indoor roller blinds.",
    },
    {
      name: "R-GD200 Outdoor Garden Speaker",
      category: "Audio Systems",
      description: "Durable ABS outdoor speaker with waterproof design for gardens and patios.",
    },
    {
      name: "CS166II Waterproof Outdoor Speaker",
      category: "Audio Systems",
      description: "40-watt IP65 waterproof speaker with 5-inch driver for clear sound.",
    },
    {
      name: "V 15W Ground Mounted Garden Speaker",
      category: "Audio Systems",
      description: "Weatherproof ground-mounted speaker with 3-inch full-range driver.",
    },
    {
      name: "6.5 Inch PA System Ceiling Speaker",
      category: "Audio Systems",
      description: "High-performance ceiling speaker with coaxial design for commercial spaces.",
    },
    {
      name: "BT814 Wireless Bluetooth Ceiling Speaker System",
      category: "Audio Systems",
      description: "Set of four ceiling speakers with Bluetooth for wireless stereo sound.",
    },
    {
      name: "5.25 Inch Passive HiFi Ceiling/Wall Speaker",
      category: "Audio Systems",
      description: "Compact passive speaker for flush-mount installation in ceilings or walls.",
    },
    {
      name: "Savia Outdoor LED Spotlight 6W",
      category: "Outdoor & Garden",
      description: "Durable aluminum landscape spotlight with IP65 rating and adjustable spike mount.",
    },
    {
      name: "Haozee Smart Watering Timer",
      category: "Outdoor & Garden",
      description: "Intelligent irrigation controller for garden, lawn, and drip irrigation.",
    },
    {
      name: "Smart Temperature and Humidity Sensor",
      category: "Sensors & Management",
      description: "Wireless sensor for continuous environmental monitoring.",
    },
    {
      name: "SONOFF SNZB-02D Zigbee Smart Sensor",
      category: "Sensors & Management",
      description: "Zigbee-enabled sensor with LCD display, compatible with Alexa and Google Home.",
    },
  ];

  const categories = ["All", "Smart Home & Security", "Smart Lighting", "Smart Curtains", "Sensors & Management"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const whatsappLink = "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%27m%20interested%20in%20your%20products.";

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Catalogue1.webp')",
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
                OUR PRODUCTS
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Product
                <br />
                Catalogue
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                Browse our range of premium technology products. Request a quote
                for any product and our team will get back to you.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="relative z-20 py-8 bg-off-white border-b border-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-deep-blue text-white border-deep-blue"
                    : "bg-transparent text-deep-blue border-deep-blue hover:bg-deep-blue hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="relative z-20 py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${product.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-charcoal-gray/10 hover:border-deep-blue/20 hover:-translate-y-2">
                  {/* Product Image */}
                  <div className="h-56 bg-white flex items-center justify-center relative overflow-hidden p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-deep-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-deep-blue mb-2 group-hover:text-deep-blue-dark transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-charcoal-gray-light text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-charcoal-gray/10">
                      <div className="flex gap-2">
                        <Link
                          href="/contact"
                          className="group/quote relative flex-1 inline-flex items-center justify-center text-xs px-3 py-2 rounded-lg font-semibold overflow-hidden border-2 border-deep-blue"
                        >
                          <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover/quote:text-white flex items-center gap-1.5">
                            <ShoppingCart size={14} />
                            Request Quote
                          </span>
                          <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover/quote:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                        
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/whatsapp relative flex-1 inline-flex items-center justify-center text-xs px-3 py-2 rounded-lg font-semibold overflow-hidden border-2 border-green-600"
                        >
                          <span className="relative z-10 text-green-600 transition-colors duration-300 group-hover/whatsapp:text-white flex items-center gap-1.5">
                            <WhatsAppIcon size={14} />
                            WhatsApp
                          </span>
                          <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover/whatsapp:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-deep-blue group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center text-lg px-10 py-4 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue"
            >
              <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white">
                View All Products
                <ArrowRight className="inline ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </span>
              <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>
      </section>

      {/* MODAL - All Products */}
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
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-charcoal-gray/10 bg-off-white flex-shrink-0">
                <h3 className="text-2xl font-bold text-deep-blue">All Products ({allProducts.length})</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-deep-blue hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6 md:p-8 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allProducts.map((product, index) => (
                    <div
                      key={`${product.name}-${index}`}
                      className="flex items-start gap-4 bg-off-white rounded-xl p-4 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-deep-blue/10"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-deep-blue text-sm">{product.name}</h4>
                          <span className="text-xs text-deep-blue-light font-semibold bg-deep-blue/5 px-2 py-1 rounded-full flex-shrink-0 ml-2">
                            {product.category}
                          </span>
                        </div>
                        <p className="text-charcoal-gray-light text-xs mb-3">{product.description}</p>
                        <div className="flex gap-2">
                          <Link
                            href="/contact"
                            onClick={() => setIsModalOpen(false)}
                            className="group/quote relative inline-flex items-center text-xs px-3 py-1.5 rounded-lg font-semibold overflow-hidden border-2 border-deep-blue"
                          >
                            <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover/quote:text-white flex items-center gap-1">
                              <ShoppingCart size={12} />
                              Quote
                            </span>
                            <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover/quote:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </Link>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/whatsapp relative inline-flex items-center text-xs px-3 py-1.5 rounded-lg font-semibold overflow-hidden border-2 border-green-600"
                          >
                            <span className="relative z-10 text-green-600 transition-colors duration-300 group-hover/whatsapp:text-white flex items-center gap-1">
                              <WhatsAppIcon size={12} />
                              WhatsApp
                            </span>
                            <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover/whatsapp:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} className="text-white" />
      </a>

      {/* CALL TO ACTION */}
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
              Looking for Something Specific?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#E8E6E3' }}>
              We supply a wide range of technology products. Contact us with your
              requirements and we&apos;ll source it for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-white"
              >
                <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-deep-blue flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Request a Quote
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
                  Chat on WhatsApp
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