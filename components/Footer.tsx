"use client";

import { UtensilsCrossed, MapPin, Phone, ArrowUp } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E85D04] to-amber-500 flex items-center justify-center text-white shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                BUMIE <span className="text-purple-400">EMA</span>
              </span>
            </div>

            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Kombinasi hunian sewa kamar modern dan tenang dengan kenikmatan Warung Mie Bumie Ema beraneka topping gurih di Indihiang, Tasikmalaya.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com/bumi_ema_"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:text-amber-400 flex items-center gap-1.5 text-xs text-stone-300 transition-colors"
                aria-label="Instagram Penginapan"
              >
                <InstagramIcon className="w-4 h-4 text-amber-400" />
                <span>@bumi_ema_</span>
              </a>
              <a
                href="https://instagram.com/bumie_ema"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-500/50 hover:text-pink-400 flex items-center gap-1.5 text-xs text-stone-300 transition-colors"
                aria-label="Instagram Warung Mie"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>@bumie_ema</span>
              </a>
              <a
                href="https://wa.me/6282240553262"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 hover:border-emerald-500/50 hover:text-emerald-400 flex items-center justify-center text-stone-300 transition-colors"
                aria-label="WhatsApp Bumie Ema"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#beranda" className="hover:text-[#E85D04] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#penginapan" className="hover:text-[#E85D04] transition-colors">
                  Penginapan & Fasilitas
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E85D04] transition-colors">
                  Menu Warung Mie
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#E85D04] transition-colors">
                  Lokasi & Jam Buka
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Informasi Operasional & Lokasi */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Operasional & Alamat
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
              <a
                href="https://maps.app.goo.gl/Ytfvco4H6Vhh8LyC7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 group hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E85D04] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Jln Ciumbeng RT 04 RW 01, Kelurahan Indihiang, Kec. Indihiang, Tasikmalaya</span>
              </a>
              <p className="text-stone-300">
                <strong className="text-white">Warung Mie:</strong> Setiap Hari, 10.00 – 22.00 WIB
              </p>
              <p className="text-stone-300">
                <strong className="text-white">Reservasi Kamar:</strong> 0822-4055-3262 / 0852-9497-1747
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Bumie Ema. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
