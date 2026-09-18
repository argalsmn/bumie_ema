"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UtensilsCrossed, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { name: "Beranda", href: "#beranda" },
  { name: "Penginapan", href: "#penginapan" },
  { name: "Menu Warung Mie", href: "#menu" },
  { name: "Fasilitas", href: "#fasilitas" },
  { name: "Lokasi & Jam Buka", href: "#lokasi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-orange-100/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-800 via-purple-700 to-[#E85D04] flex items-center justify-center text-white shadow-md shadow-purple-950/20 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 leading-none">
                BUMIE <span className="text-purple-700">EMA</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-stone-500 uppercase mt-0.5">
                Penginapan & Warung Mie
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-purple-700 rounded-lg hover:bg-stone-100/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20ingin%20bertanya%20seputar%20penginapan%20atau%20warung%20mie."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700 hover:from-purple-900 hover:to-indigo-800 shadow-md shadow-purple-900/20 hover:shadow-lg transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-purple-200" />
              <span>Hubungi Usaha</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20ingin%20bertanya%20layanan."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-orange-100 text-[#E85D04] hover:bg-orange-200 transition-colors"
              aria-label="WhatsApp"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-[#E85D04] hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF8F5]/98 border-b border-orange-100 backdrop-blur-lg overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-medium text-stone-800 hover:bg-orange-100/70 hover:text-[#E85D04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-orange-200/60">
                <a
                  href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20ingin%20bertanya%20seputar%20penginapan%20atau%20warung%20mie."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#E85D04] to-amber-500 shadow-md shadow-orange-500/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hubungi Usaha via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
