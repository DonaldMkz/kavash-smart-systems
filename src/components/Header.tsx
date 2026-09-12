"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#204860] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[#204860]">Kavash</span>
              <span className="text-xl font-light text-[#384048]"> Smart Systems</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 py-1 group ${
                    active
                      ? "text-[#204860]"
                      : "text-[#384048] hover:text-[#204860]"
                  }`}
                >
                  {link.label}
                  
                  {/* Active page underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-[#204860] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  
                  {/* Hover background effect */}
                  <span
                    className={`absolute inset-0 -z-10 rounded-md transition-all duration-300 ${
                      active
                        ? "bg-[#204860]/5"
                        : "bg-transparent group-hover:bg-[#204860]/5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Get a Quote Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg overflow-hidden border-2 border-[#204860]"
            >
              <span className="relative z-10 text-[#204860] transition-colors duration-300 group-hover:text-white">
                Get a Quote
              </span>
              <span className="absolute inset-0 bg-[#204860] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#204860] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E6E3] animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                    active
                      ? "text-[#204860] bg-[#204860]/5"
                      : "text-[#384048] hover:text-[#204860] hover:bg-[#204860]/5"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    
                    {/* Active indicator dot */}
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-[#204860]" />
                    )}
                  </span>
                  
                  {/* Active page underline for mobile */}
                  {active && (
                    <span className="absolute left-4 bottom-2 right-4 h-0.5 bg-[#204860] rounded-full" />
                  )}
                </Link>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-[#E8E6E3]">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="group relative inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-lg overflow-hidden border-2 border-[#204860]"
              >
                <span className="relative z-10 text-[#204860] transition-colors duration-300 group-hover:text-white">
                  Get a Quote
                </span>
                <span className="absolute inset-0 bg-[#204860] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;