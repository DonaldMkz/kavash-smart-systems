import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const WhatsAppIcon = ({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const whatsappLink =
    "https://wa.me/263782683726?text=Hello%20Kavash%20Smart%20Systems%2C%20I%20would%20like%20to%20make%20an%20inquiry";

  return (
    <footer className="relative overflow-hidden bg-[#152E3F] text-white">
      {/* Top accent line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F5A623] to-transparent opacity-80" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A623]/[0.04] blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_1fr_1.2fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F5F3] text-xl font-bold text-[#152E3F]">
                K
              </div>

              <div>
                <div className="text-lg font-bold leading-none text-white">
                  Kavash
                </div>

                <div className="mt-1 text-sm font-medium text-white/65">
                  Smart Systems
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-[260px] text-sm leading-6 text-white/70">
              Integrated automation, security and communication solutions for
              modern environments.
            </p>

            <Link
              href="/about"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#F5A623]"
            >
              About Kavash

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F5A623] group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Our Services
            </h3>

            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium leading-5 text-white/85 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={12}
                      className="shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F5A623] group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5A623]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F5A623]"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                    Location
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-white/90">
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <a
                href="tel:+263782683726"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F5A623]"
                />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-[#F5A623]">
                    +263 78 268 3726
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@kavashsmartsystems.co.zw"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F5A623]"
                />

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-sm font-medium text-white/90 transition-colors duration-300 group-hover:text-[#F5A623]">
                    info@kavashsmartsystems.co.zw
                  </p>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#152E3F]"
              >
                <WhatsAppIcon size={16} />
              </a>

              <a
                href="tel:+263782683726"
                aria-label="Call"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#152E3F]"
              >
                <Phone size={16} />
              </a>

              <a
                href="mailto:info@kavashsmartsystems.co.zw"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#152E3F]"
              >
                <Mail size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#152E3F]"
              >
                <Camera size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#102837]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs font-medium text-white/60">
            © {currentYear} Kavash Smart Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs font-medium">
            <Link
              href="/privacy"
              className="text-white/60 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="h-1 w-1 rounded-full bg-[#F5A623]" />

            <Link
              href="/terms"
              className="text-white/60 transition-colors duration-300 hover:text-white"
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