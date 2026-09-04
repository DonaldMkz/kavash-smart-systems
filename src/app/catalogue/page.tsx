"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Lock,
  Lightbulb,
  Truck,
  Phone,
  Thermometer,
  ArrowRight,
  ShoppingCart,
  CheckCircle,
} from "lucide-react";

export default function CataloguePage() {
  const products = [
    {
      icon: Camera,
      name: "IP CCTV Camera",
      category: "Security",
      description: "High-definition IP camera with night vision and remote viewing.",
      price: "From $150",
    },
    {
      icon: Camera,
      name: "PTZ Camera",
      category: "Security",
      description: "Pan-tilt-zoom camera for wide area coverage with 360° rotation.",
      price: "From $350",
    },
    {
      icon: Lock,
      name: "Smart Door Lock",
      category: "Access Control",
      description: "Fingerprint, PIN, RFID, and facial recognition smart lock.",
      price: "From $200",
    },
    {
      icon: Lightbulb,
      name: "Smart Light Switch",
      category: "Smart Home",
      description: "WiFi-enabled smart switch for remote lighting control.",
      price: "From $45",
    },
    {
      icon: Truck,
      name: "GPS Tracker",
      category: "Fleet Management",
      description: "Real-time GPS tracker with geofencing and speed alerts.",
      price: "From $85",
    },
    {
      icon: Phone,
      name: "IP Phone System",
      category: "Communication",
      description: "Professional IP phone for business communication systems.",
      price: "From $120",
    },
    {
      icon: Thermometer,
      name: "Smart Thermostat",
      category: "Smart Home",
      description: "WiFi-enabled thermostat for automated climate control.",
      price: "From $75",
    },
    {
      icon: Camera,
      name: "NVR System",
      category: "Security",
      description: "Network video recorder with 8-channel support and storage.",
      price: "From $400",
    },
    {
      icon: Lock,
      name: "Fingerprint Access System",
      category: "Access Control",
      description: "Biometric fingerprint reader for secure access control.",
      price: "From $180",
    },
  ];

  const categories = ["All", "Security", "Access Control", "Smart Home", "Fleet Management", "Communication"];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
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
                Our Products
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Product
              <br />
              Catalogue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              Browse our range of premium technology products. Request a quote
              for any product and our team will get back to you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 bg-off-white border-b border-off-white-dark">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-deep-blue font-semibold border-2 border-deep-blue hover:bg-deep-blue hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden">
                  {/* Product Image Placeholder */}
                  <div className="bg-gradient-to-br from-deep-blue to-deep-blue-light h-48 flex items-center justify-center relative overflow-hidden">
                    <product.icon size={64} className="text-white/50" />
                    <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-semibold">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-deep-blue mb-2">{product.name}</h3>
                    <p className="text-charcoal-gray-light mb-4 leading-relaxed flex-grow">{product.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-deep-blue font-bold text-lg">{product.price}</span>
                      <Link
                        href="/contact"
                        className="btn btn-primary text-sm px-4 py-2"
                      >
                        Request a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="gradient-bg py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Looking for Something Specific?
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              We supply a wide range of technology products. Contact us with your
              requirements and we'll source it for you.
            </p>
            <Link href="/contact" className="btn btn-white text-lg px-8 py-3.5">
              Contact Our Team
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}