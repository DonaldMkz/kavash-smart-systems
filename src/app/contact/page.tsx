"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Send,
  User,
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

export default function ContactPage() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+263 78 268 3726",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@kavashsmartsystems.co.zw",
      description: "Email us for quotes and inquiries",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Harare, Zimbabwe",
      description: "Serving all of Zimbabwe",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 5:00 PM",
      description: "24/7 emergency support available",
    },
  ];

  const services = [
    "Smart Home Automation",
    "Fleet Management",
    "Video Surveillance & Security",
    "VOIP & Business Communication",
    "Automation & Access Control",
    "Mining & Industrial Solutions",
    "Other",
  ];

  const whatsappLink = "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

  return (
    <>
      {/* HERO SECTION - Fixed Background with Parallax */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          ref={bgRef}
          className="fixed inset-0 bg-cover will-change-transform"
          style={{
            backgroundImage: "url('/images/hero/Contact1.webp')",
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
                CONTACT US
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Let's Discuss
                <br />
                Your Project
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: '#C5C3C0' }}
              >
                Get in touch with our team for a free consultation and quote.
                We're here to help with all your technology needs.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="relative z-20 py-16 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-charcoal-gray rounded-2xl p-6 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20"
              >
                <span className="absolute -right-3 -top-3 text-[5rem] font-black text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none pointer-events-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                <span className="absolute top-0 left-0 h-1 w-0 bg-white/50 group-hover:w-full transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <info.icon size={28} className="text-white group-hover:text-deep-blue transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-gray-300 font-semibold mb-2 text-sm">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="relative z-20 py-24 bg-off-white overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-deep-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-charcoal-gray/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Send Us a Message
              </h2>
              <p className="text-charcoal-gray-light mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-deep-blue/10">
                  <CheckCircle size={64} className="text-deep-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">Thank You!</h3>
                  <p className="text-charcoal-gray-light mb-6">
                    Your message has been received. We'll contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-deep-blue font-semibold hover:text-deep-blue-light transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-deep-blue/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-deep-blue font-semibold mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20 focus:outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-deep-blue font-semibold mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20 focus:outline-none transition-all"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-deep-blue font-semibold mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20 focus:outline-none transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-deep-blue font-semibold mb-2" htmlFor="service">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20 focus:outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-deep-blue font-semibold mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/20 focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="group relative inline-flex items-center justify-center text-lg px-8 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue w-full"
                  >
                    <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                      <Send size={20} />
                      Send Message
                    </span>
                    <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder with WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
                Our Location
              </h2>
              <p className="text-charcoal-gray-light mb-8">
                Based in Harare, we serve clients across Zimbabwe.
              </p>
              
              <div className="bg-charcoal-gray rounded-2xl flex-1 min-h-[400px] flex items-center justify-center relative overflow-hidden shadow-lg mb-6">
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
                <div className="relative z-10 text-center p-8">
                  <MapPin size={64} className="text-white/40 mx-auto mb-4" />
                  <p className="text-white font-semibold text-xl">Harare, Zimbabwe</p>
                  <p className="text-gray-400">Serving all of Zimbabwe</p>
                </div>
              </div>
              
              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center text-sm px-6 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-green-600"
                >
                  <span className="relative z-10 text-green-600 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                  </span>
                  <span className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                
                <a
                  href="tel:+263782683726"
                  className="group relative flex items-center justify-center text-sm px-6 py-3.5 rounded-xl font-semibold overflow-hidden border-2 border-deep-blue"
                >
                  <span className="relative z-10 text-deep-blue transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                    <Phone size={18} />
                    Call Us Now
                  </span>
                  <span className="absolute inset-0 bg-deep-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              </div>
            </motion.div>            
          </div>
        </div>
      </section>
    </>
  );
}