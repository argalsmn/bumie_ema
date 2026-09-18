"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ExternalLink,
  Car,
  CheckCircle2,
} from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#E85D04] text-xs font-bold tracking-wide uppercase mb-3"
          >
            <MapPin className="w-4 h-4" />
            <span>Lokasi & Kontak Kami</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight"
          >
            Akses Mudah di Kawasan{" "}
            <span className="text-[#E85D04]">Indihiang, Tasikmalaya</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed"
          >
            Terletak strategis di Jalan Cisembung Indihiang, mudah dijangkau kendaraan roda dua maupun roda empat dengan tempat parkir aman di area properti.
          </motion.p>
        </div>

        {/* Content Grid: Left Details & Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Cards Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Alamat Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-orange-100 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Alamat Lengkap
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-1 leading-snug">
                    Bumi Ema & Warung Mie Bumie Ema
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                    Jln Ciumbeng RT 04 RW 01, Kelurahan Indihiang, Kecamatan Indihiang, Kota Tasikmalaya, Jawa Barat.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-orange-200/50 flex flex-wrap gap-2 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                  <Car className="w-3.5 h-3.5 text-[#E85D04]" />
                  Akses Mobil & Motor
                </span>
                <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Parkir Aman di Lokasi
                </span>
              </div>
            </div>

            {/* Jam Operasional Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-orange-100 shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/20">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                    Jam Operasional
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-1">
                    Warung Buka Setiap Hari
                  </h4>
                  <p className="text-sm font-semibold text-[#E85D04] mt-0.5">
                    10.00 – 22.00 WIB
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    *Reservasi kamar penginapan aktif 24 jam via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* Kontak & Social Media Card */}
            <div className="p-6 rounded-3xl bg-stone-900 text-white shadow-xl space-y-4">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Hubungi Langsung
              </span>
              
              <div className="space-y-2.5 pt-1">
                {/* WhatsApp 1 */}
                <a
                  href="https://wa.me/6282240553262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-[11px] text-stone-300">WhatsApp 1 (Utama)</div>
                      <div className="text-sm font-bold text-white">0822-4055-3262</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* WhatsApp 2 */}
                <a
                  href="https://wa.me/6285294971747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-[11px] text-stone-300">WhatsApp 2 (Cadangan)</div>
                      <div className="text-sm font-bold text-white">0852-9497-1747</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Instagram Penginapan */}
                <a
                  href="https://instagram.com/bumi_ema_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-[11px] text-stone-300">Instagram Penginapan</div>
                      <div className="text-sm font-bold text-white">@bumi_ema_</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Instagram Warung Mie */}
                <a
                  href="https://instagram.com/bumie_ema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-5 h-5 text-pink-400" />
                    <div>
                      <div className="text-[11px] text-stone-300">Instagram Warung Mie</div>
                      <div className="text-sm font-bold text-white">@bumie_ema</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Interactive View & Directions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col h-full space-y-4"
          >
            <div className="relative w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100">
              {/* Google Maps Iframe */}
              <iframe
                title="Peta Lokasi Bumie Ema Indihiang"
                src="https://maps.google.com/maps?q=Indihiang,%20Tasikmalaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
              />

              {/* Float Button on Map */}
              <div className="absolute bottom-4 right-4 left-4 sm:left-auto">
                <a
                  href="https://maps.app.goo.gl/Ytfvco4H6Vhh8LyC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-[#E85D04] hover:bg-[#dc2f02] text-white font-bold text-sm shadow-xl shadow-orange-500/30 backdrop-blur-md transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4 fill-white" />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/60 text-stone-700 text-xs sm:text-sm flex items-center gap-3">
              <Navigation className="w-5 h-5 text-[#E85D04] flex-shrink-0" />
              <span>
                <strong>Petunjuk Jalan:</strong> Dari arah perempatan / stasiun Indihiang, arahkan ke Jalan Cisembung. Spanduk <strong>Bumie Ema</strong> terlihat jelas di tepi jalan dengan parkiran di depan.
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
