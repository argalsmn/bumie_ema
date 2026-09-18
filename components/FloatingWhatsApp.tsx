"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, BedDouble, UtensilsCrossed, ChevronRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      title: "Sewa Kamar Penginapan",
      desc: "Tanya ketersediaan & tarif harian / bulanan",
      icon: BedDouble,
      url: "https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20tertarik%20untuk%20sewa%20kamar%20penginapan.%20Boleh%20info%20ketersediaan%20dan%20harganya?",
      color: "bg-amber-100 text-amber-800",
    },
    {
      title: "Pesan Menu Warung Mie",
      desc: "Order Paket Hemat, Full Topping & Take away",
      icon: UtensilsCrossed,
      url: "https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20mau%20pesan%20menu%20Warung%20Mie.%20Boleh%20minta%20info%20lengkapnya?",
      color: "bg-orange-100 text-[#E85D04]",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-80 sm:w-88 rounded-3xl bg-white p-5 shadow-2xl border border-stone-200/90 text-stone-900"
          >
            {/* Header Dialog */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Chat Bumie Ema</h4>
                  <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Online • Langsung Terhubung
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Action Options */}
            <p className="text-xs text-stone-500 my-3">
              Silakan pilih layanan yang ingin Anda tanyakan:
            </p>

            <div className="space-y-2">
              {options.map((opt) => {
                const Icon = opt.icon;
                return (
                  <a
                    key={opt.title}
                    href={opt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] hover:bg-orange-50/80 border border-stone-100 hover:border-orange-200 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${opt.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-stone-900 group-hover:text-[#E85D04] transition-colors">
                          {opt.title}
                        </div>
                        <div className="text-[10px] text-stone-500 leading-tight">
                          {opt.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-[#E85D04] transition-all" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Chat WhatsApp Bumie Ema"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping -z-10" />

        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline-block">WhatsApp Usaha</span>
      </motion.button>
    </div>
  );
}
