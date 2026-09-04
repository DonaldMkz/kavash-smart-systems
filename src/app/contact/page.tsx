"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
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
    // Here we'll add form submission logic later
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
      details: "+263 XX XXX XXXX",
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
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              Let's Discuss
              <br />
              Your Project
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
            >
              Get in touch with our team for a free consultation and quote.
              We're here to help with all your technology needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-deep-blue/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon size={28} className="text-deep-blue" />
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-2">{info.title}</h3>
                <p className="text-deep-blue-light font-semibold mb-2">{info.details}</p>
                <p className="text-charcoal-gray-light text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="py-24 bg-off-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Send Us a Message
              </h2>
              <p className="text-charcoal-gray-light mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <CheckCircle size={48} className="text-deep-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">Thank You!</h3>
                  <p className="text-charcoal-gray-light">
                    Your message has been received. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
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
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:outline-none"
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
                        className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-off-white-dark focus:border-deep-blue focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full text-lg">
                    Send Message
                    <ArrowRight className="inline ml-2" size={20} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Our Location
              </h2>
              <p className="text-charcoal-gray-light mb-8">
                Based in Harare, we serve clients across Zimbabwe.
              </p>
              
              <div className="bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
                <div className="relative z-10 text-center">
                  <MapPin size={64} className="text-white/50 mx-auto mb-4" />
                  <p className="text-white font-semibold text-xl">Harare, Zimbabwe</p>
                  <p className="text-gray-300">Map placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}