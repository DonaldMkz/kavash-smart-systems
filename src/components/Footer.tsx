import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, MessageCircle, Camera } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/smart-home", label: "Smart Home Automation" },
    { href: "/services/fleet-management", label: "Fleet Management" },
    { href: "/services/security", label: "Video Surveillance" },
    { href: "/services/voip", label: "VOIP & Communication" },
    { href: "/services/access-control", label: "Access Control" },
    { href: "/services/mining", label: "Mining Solutions" },
  ];

  return (
    <footer className="bg-deep-blue-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-deep-blue font-bold text-xl">K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Kavash</span>
                <span className="text-xl font-light text-gray-300"> Smart Systems</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Smart Technology. Connected Systems. Better Control.
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Technology integration company specializing in smart automation, security, fleet management, and communication solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-300 mt-1" />
                <span className="text-gray-300 text-sm">
                  Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-gray-300 mt-1" />
                <span className="text-gray-300 text-sm">
                  +263 XX XXX XXXX
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-gray-300 mt-1" />
                <span className="text-gray-300 text-sm">
                  info@kavashsmartsystems.co.zw
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Website"
              >
                <Globe size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Share"
              >
                <Share2 size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Message"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Camera"
              >
                <Camera size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Kavash Smart Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;