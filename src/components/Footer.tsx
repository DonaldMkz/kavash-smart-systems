import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
  Camera,
  ArrowUpRight,
} from "lucide-react";

// Custom WhatsApp SVG icon
const WhatsAppIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/catalogue", label: "Catalogue" },
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

  const whatsappLink = "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

  return (
    <footer className="relative overflow-hidden bg-[#0A1622] text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Company Info */}
          <div className="lg:pr-6">
            {/* Logo */}
            <div className="mb-4 flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/10">
                <span className="text-xl font-bold text-[#0A1622]">K</span>
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight text-white">
                  Kavash
                </div>

                <div className="text-sm font-light tracking-wide text-slate-300">
                  Smart Systems
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="mb-2 text-sm font-semibold leading-6 text-slate-100">
              Smart Technology. Connected Systems. Better Control.
            </p>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Technology integration company specializing in smart automation,
              security, fleet management, and communication solutions.
            </p>

            {/* Small CTA */}
            <Link
              href="/contact"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-slate-300"
            >
              Get in touch

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:pt-1">
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                Quick Links
              </h3>

              <div className="mt-2 h-px w-8 bg-white/40" />
            </div>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:pt-1">
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                Our Services
              </h3>

              <div className="mt-2 h-px w-8 bg-white/40" />
            </div>

            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm leading-5 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="ml-1.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pt-1">
            <div className="mb-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                Contact Us
              </h3>

              <div className="mt-2 h-px w-8 bg-white/40" />
            </div>

            <ul className="space-y-3">
              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <MapPin size={15} className="text-slate-200" />
                </div>

                <div>
                  <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Location
                  </p>

                  <p className="text-sm text-slate-300">
                    Harare, Zimbabwe
                  </p>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Phone size={15} className="text-slate-200" />
                </div>

                <div>
                  <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Phone
                  </p>

                  <p className="text-sm text-slate-300">
                    +263 78 268 3726
                  </p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Mail size={15} className="text-slate-200" />
                </div>

                <div className="min-w-0">
                  <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Email
                  </p>

                  <p className="break-all text-sm text-slate-300">
                    info@kavashsmartsystems.co.zw
                  </p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-5 flex gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon size={16} />
              </a>

              <a
                href="tel:+263782683726"
                aria-label="Call"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Phone size={16} />
              </a>

              <a
                href="mailto:info@kavashsmartsystems.co.zw"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Mail size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <Camera size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs text-slate-500">
            © {currentYear} Kavash Smart Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-500">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;