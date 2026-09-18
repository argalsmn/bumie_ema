"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  UtensilsCrossed,
  Flame,
  PlusCircle,
  Coffee,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const TOPPINGS = [
  { name: "Tahu Goreng Gurih", price: "Rp 1.000", tag: "Gurih" },
  { name: "Makaroni", price: "Rp 1.000", tag: "Kenyal" },
  { name: "Sosin (Sayur Segar)", price: "Rp 1.000", tag: "Segar" },
  { name: "Sosis Sapi Pilihan", price: "Rp 2.000", tag: "Favorit" },
  { name: "Jamur Enoki Crispy/Rebus", price: "Rp 2.000", tag: "Best Topping" },
  { name: "Telur (Rebus / Ceplok)", price: "Rp 4.000", tag: "Spesial" },
];

const SNACKS_DRINKS = [
  { name: "Tea Jus Dingin", price: "Rp 3.000", desc: "Manis segar pelepas dahaga" },
  { name: "Kopi Hitam / Susu", price: "Rp 4.000 - 5.000", desc: "Teman nongkrong asik" },
  { name: "Aneka Snack & Kerupuk", price: "Rp 2.000 - 5.000", desc: "Pelengkap makan mie" },
  { name: "Es Krim Pilihan", price: "Rp 3.000 - 8.000", desc: "Penutup manis setelah makan" },
];

export default function CafeSection() {
  const [activeTab, setActiveTab] = useState<"populer" | "custom" | "minuman">("populer");

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#E85D04] text-xs font-bold tracking-wide uppercase mb-3"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Warung Mie Bumie Ema</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight"
          >
            Menu Spesial,{" "}
            <span className="bg-gradient-to-r from-[#E85D04] to-amber-500 bg-clip-text text-transparent">
              Rasa Nendang & Topping Melimpah
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed"
          >
            Pilihan mie rebus, goreng, hingga kuah nyemek kaya rempah dengan aneka topping lengkap yang bisa Anda racik sesuka hati!
          </motion.p>

          {/* Navigation Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex p-1.5 bg-stone-200/80 rounded-2xl mt-8 gap-1 shadow-inner"
          >
            <button
              onClick={() => setActiveTab("populer")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "populer"
                  ? "bg-white text-stone-900 shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              🔥 Paket Populer
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "custom"
                  ? "bg-white text-stone-900 shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              🍜 Mie Satuan & Topping
            </button>
            <button
              onClick={() => setActiveTab("minuman")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "minuman"
                  ? "bg-white text-stone-900 shadow-md"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              ☕ Minuman & Snack
            </button>
          </motion.div>
        </div>

        {/* Tab 1: Paket Populer (Grid 2 Signature Cards) */}
        {activeTab === "populer" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
          >
            {/* Card 1: Paket Hemat 10k */}
            <div className="bg-white rounded-3xl overflow-hidden border border-orange-100/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/mie-paket-hemat.jpg"
                  alt="Paket Hemat 10k Bumie Ema"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-stone-950 font-black px-3.5 py-1.5 rounded-xl text-xs shadow-md uppercase tracking-wide">
                  Best Value
                </div>
                <div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur-md text-amber-400 font-extrabold px-4 py-2 rounded-xl text-lg shadow-lg">
                  Rp 10.000
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-stone-900">
                      Paket Hemat 10k
                    </h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      Lengkap + Minum
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Kombinasi hemat dan kenyang yang pas di kantong pelajar, mahasiswa, maupun santap cepat saat istirahat.
                  </p>

                  <div className="space-y-2.5 bg-[#FAF8F5] p-4 rounded-2xl border border-orange-100/60">
                    <div className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                      Sudah Termasuk:
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-600 space-y-1.5">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                        <span>1x Mie (Rasa bebas pilih)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                        <span>1x Tahu Goreng Lembut</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                        <span>1x Sosis Sapi Gurih</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#E85D04] flex-shrink-0" />
                        <span className="font-semibold text-stone-900">1x Gelas Tea Jus Segar Dingin</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20mau%20pesan%20Paket%20Hemat%2010k."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#E85D04] to-amber-500 hover:from-[#dc2f02] hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Paket Hemat via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Bumie Full Topping 17k */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#E85D04] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group relative">
              <div className="absolute top-0 right-0 left-0 bg-[#E85D04] text-white text-[11px] font-bold text-center py-1 uppercase tracking-wider z-20">
                ⭐ Menu Paling Laris (Signature Seller) ⭐
              </div>

              <div className="relative h-64 sm:h-72 w-full overflow-hidden mt-6 sm:mt-0">
                <Image
                  src="/images/mie-full-topping.jpg"
                  alt="Bumie Full Topping 17k"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-600 text-white font-black px-3.5 py-1.5 rounded-xl text-xs shadow-md uppercase tracking-wide">
                  🔥 Full Topping
                </div>
                <div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur-md text-amber-400 font-extrabold px-4 py-2 rounded-xl text-lg shadow-lg">
                  Rp 17.000
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-stone-900">
                      Bumie Full Topping
                    </h3>
                    <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-lg">
                      Topping Melimpah
                    </span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    Sajian paling komplit dan memuaskan! Kuah nyemek gurih dipadukan 6 macam topping sekaligus untuk sensasi makan maksimal.
                  </p>

                  <div className="space-y-2.5 bg-orange-50/50 p-4 rounded-2xl border border-orange-200/60">
                    <div className="text-xs font-bold text-orange-950 uppercase tracking-wide">
                      Topping Komplit Termasuk:
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Telur Rebus / Ceplok</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Sosis Sapi</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Jamur Enoki</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Tahu Goreng</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Makaroni Gurih</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                        <span>Sawi Hijau / Sosin</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20mau%20pesan%20Bumie%20Full%20Topping%2017k."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm text-white bg-[#E85D04] hover:bg-[#dc2f02] shadow-lg shadow-orange-500/30 transition-all active:scale-98"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Pesan Full Topping via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Mie Satuan & Daftar Topping */}
        {activeTab === "custom" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            {/* Mie Satuan Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-orange-100 shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-orange-600 uppercase">Porsi Standar</span>
                  <h4 className="text-xl font-bold text-stone-900 mt-0.5">1 Bungkus Mie</h4>
                  <p className="text-xs text-stone-500 mt-1">Pilihan rasa bebas (kuah / goreng)</p>
                </div>
                <div className="text-2xl font-black text-[#E85D04]">Rp 6.000</div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-amber-200 uppercase">Porsi Kenyang (Hemat)</span>
                  <h4 className="text-xl font-bold text-white mt-0.5">2 Bungkus Mie</h4>
                  <p className="text-xs text-orange-100 mt-1">Puas dan hemat banget!</p>
                </div>
                <div className="text-2xl font-black text-white">Rp 10.000</div>
              </div>
            </div>

            {/* Topping Tambahan Table/Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <PlusCircle className="w-5 h-5 text-[#E85D04]" />
                    <span>Daftar Topping Ekstra Tambahan</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Bebas tambah topping favorit Anda untuk dicampur ke mangkuk mie!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TOPPINGS.map((top) => (
                  <div
                    key={top.name}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-orange-100/70 flex items-center justify-between hover:border-orange-300 transition-colors"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-orange-700 uppercase bg-orange-100/60 px-2 py-0.5 rounded">
                        {top.tag}
                      </span>
                      <h5 className="text-sm font-bold text-stone-800 mt-1">{top.name}</h5>
                    </div>
                    <span className="text-sm font-black text-stone-900 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                      {top.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Minuman & Snack */}
        {activeTab === "minuman" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SNACKS_DRINKS.map((item) => (
                <div
                  key={item.name}
                  className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-between hover:shadow-md transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4 text-[#E85D04]" />
                      <h4 className="text-base font-bold text-stone-900">{item.name}</h4>
                    </div>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </div>
                  <span className="text-sm font-black text-[#E85D04] bg-orange-50 px-3 py-1.5 rounded-xl whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom Banner Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
              🍜 Dine-in Maupun Take Away
            </span>
            <p className="text-xs sm:text-sm text-amber-950 font-medium mt-0.5">
              Makan di tempat santai dengan suasana adem, atau pesan bungkus bawa pulang ke kamar penginapan.
            </p>
          </div>
          <a
            href="https://wa.me/6282240553262?text=Halo%20Bumie%20Ema,%20saya%20mau%20order%20mie%20untuk%20take%20away%20/%20dine-in."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold whitespace-nowrap shadow-sm transition-all"
          >
            Chat Order WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
