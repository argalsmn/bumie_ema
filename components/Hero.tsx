"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BedDouble, UtensilsCrossed, Sparkles, MapPin, Wifi, ShieldCheck, Flame, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-50/60 via-[#FAF8F5] to-[#FAF8F5]"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-orange-300/20 via-amber-200/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-orange-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Location & Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-xs sm:text-sm font-semibold text-orange-900 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#E85D04] animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Indihiang, Tasikmalaya</span>
              <span className="text-orange-300">•</span>
              <span className="text-orange-800">Buka Setiap Hari 10.00 – 22.00</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[1.12]"
            >
              Istirahat Nyaman,{" "}
              <span className="bg-gradient-to-r from-[#E85D04] via-amber-500 to-orange-600 bg-clip-text text-transparent">
                Kulineran Nikmat
              </span>{" "}
              di Satu Tempat.
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed"
            >
              Selamat datang di <strong className="text-stone-900 font-semibold">Bumie Ema</strong>! Paduan ideal antara 
              penginapan sewa kamar modern ber-AC yang tenang dan bersih, dengan kelezatan aneka menu 
              <strong className="text-[#E85D04] font-semibold"> Warung Mie Bumie Ema</strong> bercita rasa gurih serta topping melimpah tepat di depan hunian.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2"
            >
              <a
                href="#penginapan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-stone-900 text-white font-semibold shadow-lg shadow-stone-900/20 hover:bg-stone-800 hover:shadow-xl transition-all active:scale-98 group"
              >
                <BedDouble className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Pesan Kamar Tidur</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E85D04] to-amber-500 text-white font-semibold shadow-lg shadow-orange-500/25 hover:from-[#dc2f02] hover:to-amber-600 hover:shadow-xl hover:shadow-orange-500/35 transition-all active:scale-98 group"
              >
                <UtensilsCrossed className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                <span>Lihat Menu Mie (Mulai 6k)</span>
              </a>
            </motion.div>

            {/* Quick Feature Pill Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-orange-100/90 w-full max-w-lg"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
                  <Wifi className="w-4 h-4 text-[#E85D04]" />
                  <span>Free WiFi</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Koneksi Cepat</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
                  <Flame className="w-4 h-4 text-[#E85D04]" />
                  <span>Paket 10k</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Mie + Tahu + Sosis + Teh</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
                  <ShieldCheck className="w-4 h-4 text-[#E85D04]" />
                  <span>Parkir Aman</span>
                </div>
                <span className="text-[11px] text-stone-500 mt-0.5">Motor & Mobil</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Composite Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Visual Showcase: 2 Staggered Floating Cards */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card 1: Warung Mie Bumie Ema */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-orange-100/80 p-3 sm:p-4 group"
              >
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/mie-full-topping.jpg"
                    alt="Mie Nyemek Bumie Ema Full Topping"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Floating Price Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-orange-600/90 text-white backdrop-blur-md shadow-lg flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-white" />
                    <span className="text-xs font-bold uppercase tracking-wider">Signature 17k</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-amber-300">Warung Mie Bumie Ema</p>
                    <h3 className="text-lg font-bold">Mie Kuah/Nyemek Full Topping</h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      Telur, Sosis, Tahu, Enoki, Makaroni & Sosin
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Penginapan Preview (Overlapping Floating Mini Card) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="absolute -bottom-8 -left-4 sm:-left-8 max-w-[250px] sm:max-w-[280px] bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-stone-200/80 flex items-center gap-3 z-20"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/kamar-penginapan.jpg"
                    alt="Kamar Penginapan Bumie Ema"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <Sparkles className="w-3 h-3" />
                    <span>Kamar Bersih & AC</span>
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 truncate">Penginapan Bumie Ema</h4>
                  <p className="text-[11px] text-stone-500">Mulai Rp 100k (Kipas / AC)</p>
                </div>
              </motion.div>

              {/* Small Decorative Badge Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-amber-400 text-stone-950 px-3.5 py-1.5 rounded-full shadow-lg font-bold text-xs flex items-center gap-1.5"
              >
                <span>⭐ Rating Favorit</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
