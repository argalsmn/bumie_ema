"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Snowflake,
  Fan,
  Bath,
  Car,
  Clock,
  Gift,
  Coffee,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const FACILITIES = [
  {
    icon: Snowflake,
    title: "Pilihan AC & Kipas Angin",
    desc: "Tersedia kamar ber-AC dingin atau kipas angin yang sejuk sesuai paket hemat pilihan Anda.",
  },
  {
    icon: Bath,
    title: "Kamar Mandi Bersih di Ruang Tengah",
    desc: "Kamar mandi terawat, higienis, dan mudah diakses dari seluruh kamar.",
  },
  {
    icon: Coffee,
    title: "Akses Dapur & Teras Belakang",
    desc: "Bebas menggunakan dapur untuk memasak ringan dan bersantai di area teras belakang yang asri.",
  },
  {
    icon: Gift,
    title: "Freebies & Perlengkapan",
    desc: "Tersedia complimentary / freebies kejutan untuk tamu agar istirahat semakin berkesan.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    desc: "Akses internet lancar untuk WFH, video call, kuliah, maupun streaming santai.",
  },
  {
    icon: Car,
    title: "Lahan Parkir Aman",
    desc: "Area parkir untuk kendaraan roda dua maupun roda empat tepat di depan hunian.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PenginapanSection() {
  const [paketTab, setPaketTab] = useState<"baru" | "transit">("baru");

  return (
    <section id="penginapan" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200/60 text-xs font-semibold tracking-wide uppercase mb-3"
          >
            <ShieldCheck className="w-4 h-4 text-purple-700" />
            <span>Penginapan Bumi Ema (@bumi_ema_)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight"
          >
            Pilihan Paket Sewa,{" "}
            <span className="text-purple-800">Nyaman & Terjangkau</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed"
          >
            Sewa kamar di Indihiang dengan privasi tinggi, suasana tenang seperti di rumah sendiri, lengkap dengan fasilitas dapur, teras belakang, dan freebies.
          </motion.p>
        </div>

        {/* Visual Showcase & Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 group">
              <div className="relative h-[360px] sm:h-[420px] w-full">
                <Image
                  src="/images/kamar-penginapan.jpg"
                  alt="Kamar Penginapan Bumi Ema"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/25 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-stone-800">Mulai Rp 100.000 / paket</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
                    Kamar Bersih & Siap Huni
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1">
                    Hunian Asri Bernuansa Rumah Nenek
                  </h3>
                  <p className="text-sm text-stone-200 mt-1 line-clamp-2">
                    Akses bebas ke dapur bersama, teras belakang untuk santai, serta langsung terhubung ke Warung Mie di depan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Facilities List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {FACILITIES.map((fac) => {
              const IconComp = fac.icon;
              return (
                <motion.div
                  key={fac.title}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: "#7C3AED" }}
                  className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200/80 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-1">{fac.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{fac.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* PRICING & PACKAGES SECTION (AS ACCURATE AS THE POSTERS!) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          id="fasilitas"
          className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Tab Selection: Paket Baru vs Paket Transit */}
          <div className="relative z-10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <CalendarCheck className="w-4 h-4" />
                <span>Pilihan Paket Resmi Bumi Ema</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Daftar Paket Sewa Kamar
              </h3>
            </div>

            <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-md rounded-2xl gap-1">
              <button
                onClick={() => setPaketTab("baru")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  paketTab === "baru"
                    ? "bg-[#E85D04] text-white shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                🌙 Paket Baru (Menginap)
              </button>
              <button
                onClick={() => setPaketTab("transit")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  paketTab === "transit"
                    ? "bg-[#E85D04] text-white shadow-md"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                ⚡ Paket Transit
              </button>
            </div>
          </div>

          {/* Tab 1: Paket Baru (Check-in 16.00 - Check-out 09.00) */}
          {paketTab === "baru" && (
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl w-fit">
                <Clock className="w-4 h-4" />
                <span><strong>Waktu:</strong> Check-In dimulai jam 16.00 WIB • Batas Check-Out hingga jam 09.00 WIB</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hemat 1 - Rp 100.000 */}
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase bg-amber-400/20 px-2.5 py-1 rounded-lg">
                        Paket Kipas Angin
                      </span>
                      <Fan className="w-5 h-5 text-amber-300" />
                    </div>
                    <h4 className="text-2xl font-black text-white mt-3">Hemat 1</h4>
                    <div className="text-3xl font-extrabold text-amber-400 mt-1">
                      Rp 100.000
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-stone-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar tidur, dilengkapi <strong>kipas angin</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar mandi di ruang tengah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Akses ke dapur & teras belakang</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Freebies</strong> pelengkap</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/6282240553262?text=Halo%20Bumi%20Ema,%20saya%20ingin%20pesan%20Paket%20Baru%20Hemat%201%20(Rp%20100.000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/15 hover:bg-[#E85D04] text-white font-bold text-xs sm:text-sm transition-all"
                  >
                    <span>Pesan Hemat 1 via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Hemat 2 - Rp 200.000 */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-md border-2 border-[#E85D04] flex flex-col justify-between space-y-5 relative">
                  <div className="absolute -top-3 right-4 bg-[#E85D04] text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                    ⭐ Rekomendasi (AC)
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-300 uppercase bg-orange-500/20 px-2.5 py-1 rounded-lg">
                        Paket AC Sejuk
                      </span>
                      <Snowflake className="w-5 h-5 text-cyan-300" />
                    </div>
                    <h4 className="text-2xl font-black text-white mt-3">Hemat 2</h4>
                    <div className="text-3xl font-extrabold text-[#E85D04] mt-1">
                      Rp 200.000
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-stone-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar tidur, dilengkapi <strong>AC dingin</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar mandi di ruang tengah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Akses ke dapur & teras belakang</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Freebies</strong> pelengkap</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/6282240553262?text=Halo%20Bumi%20Ema,%20saya%20ingin%20pesan%20Paket%20Baru%20Hemat%202%20(Rp%20200.000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E85D04] hover:bg-[#dc2f02] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 transition-all"
                  >
                    <span>Pesan Hemat 2 (AC) via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Paket Transit (Pagi-Sore / Malam-Pagi) */}
          {paketTab === "transit" && (
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl w-fit">
                <Clock className="w-4 h-4" />
                <span><strong>Waktu Sewa Fleksibel:</strong> Pagi ke Sore (08.00 - 18.00 WIB) ATAU Malam ke Pagi (18.00 - 08.00 WIB)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Transit Hemat - Rp 100.000 */}
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 uppercase bg-amber-400/20 px-2.5 py-1 rounded-lg">
                        Transit Kipas Angin
                      </span>
                      <Fan className="w-5 h-5 text-amber-300" />
                    </div>
                    <h4 className="text-2xl font-black text-white mt-3">Transit Hemat</h4>
                    <div className="text-3xl font-extrabold text-amber-400 mt-1">
                      Rp 100.000
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-stone-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar tidur, dilengkapi <strong>kipas angin</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar mandi di ruang tengah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Akses ke dapur & teras belakang</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/6282240553262?text=Halo%20Bumi%20Ema,%20saya%20ingin%20pesan%20Paket%20Transit%20Hemat%20(Rp%20100.000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/15 hover:bg-[#E85D04] text-white font-bold text-xs sm:text-sm transition-all"
                  >
                    <span>Pesan Transit Hemat via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Transit VIP - Rp 200.000 */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-md border-2 border-[#E85D04] flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-orange-300 uppercase bg-orange-500/20 px-2.5 py-1 rounded-lg">
                        Transit AC Sejuk
                      </span>
                      <Snowflake className="w-5 h-5 text-cyan-300" />
                    </div>
                    <h4 className="text-2xl font-black text-white mt-3">Transit VIP</h4>
                    <div className="text-3xl font-extrabold text-[#E85D04] mt-1">
                      Rp 200.000
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-stone-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar tidur, dilengkapi <strong>AC dingin</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Satu kamar mandi di ruang tengah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>Akses ke dapur & teras belakang</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://wa.me/6282240553262?text=Halo%20Bumi%20Ema,%20saya%20ingin%20pesan%20Paket%20Transit%20VIP%20(Rp%20200.000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E85D04] hover:bg-[#dc2f02] text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/30 transition-all"
                  >
                    <span>Pesan Transit VIP (AC) via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Contact note footer */}
          <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
            <span>Kontak Langsung Bumi Ema: <strong>0822-4055-3262</strong> / <strong>0852-9497-1747</strong></span>
            <span>Instagram Penginapan: <strong className="text-white">@bumi_ema_</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
