# Bumie Ema — Penginapan & Warung Mie

Repositori resmi landing page Bumie Ema yang berlokasi di Indihiang, Kota Tasikmalaya.

Proyek ini dibangun menggunakan Next.js (App Router), Tailwind CSS, dan Framer Motion untuk memperkenalkan dua unit usaha dalam satu lokasi: penginapan sewa kamar (Bumi Ema) dan kedai makan (Warung Mie Bumie Ema).

---

## Asal-Usul Nama Bumie Ema

Nama Bumie Ema memiliki makna mendalam yang berasal dari bahasa Sunda dan nilai kehangatan keluarga:

* **Bumi**: Dalam bahasa Sunda berarti "rumah", melambangkan tempat bernaung yang nyaman, aman, dan tenteram.
* **Mie**: Kata "Bumi" disatukan dengan kata "Mie" karena terdapat usaha warung mie di halaman depan, membentuk pelafalan "Bumie".
* **Ema**: Merupakan panggilan takzim dan penuh kasih untuk Nenek di dalam keluarga.

Secara filosofis, Bumie Ema membawa suasana "Rumah Nenek": tempat ramah yang menyambut siapa pun layaknya keluarga, baik untuk beristirahat di kamar yang nyaman maupun menikmati hidangan mie lezat dengan porsi memuaskan.

---

## Identitas dan Palet Warna Brand

Identitas visual Bumie Ema tidak bertumpu pada satu warna saja, melainkan gabungan dari beberapa elemen warna utama sesuai materi publikasi resminya:

* **Ungu / Deep Violet (`#581C87` / `#6D28D9`)**: Warna khas yang hadir pada tulisan "EMA" di logo resmi serta banner pembuka "WE ARE OPEN". Memberikan karakter khas, elegan, dan identitas keluarga yang kuat.
* **Oranye & Amber (`#E85D04` / `#F48C06`)**: Warna aksen hangat yang mencerminkan cita rasa gurih kuah mie serta keramahan pelayanan.
* **Putih Bersih & Abu-Abu Netral (`#FFFFFF` / `#F8FAFC`)**: Warna dominan pada poster penginapan Bumi Ema, menghadirkan kesan hunian yang bersih, higienis, rapi, dan tenang untuk beristirahat.
* **Hitam Arang & Slate (`#171717` / `#1E293B`)**: Penyeimbang kontras untuk teks dan struktur desain agar tampilan tegas dan nyaman dibaca.

---

## Unit Usaha & Layanan Resmi

### 1. Penginapan Kamar Sewa (Bumi Ema — @bumi_ema_)

Menyediakan dua skema sewa kamar sesuai kebutuhan tamu:

* **Paket Baru (Menginap Standar)**:
  * Hemat 1 (Rp 100.000): 1 kamar tidur (kipas angin), kamar mandi di ruang tengah, akses ke dapur dan teras belakang, freebies.
  * Hemat 2 (Rp 200.000): 1 kamar tidur (AC), kamar mandi di ruang tengah, akses ke dapur dan teras belakang, freebies.
  * Ketentuan waktu: Check-in mulai pukul 16.00 WIB, batas check-out hingga pukul 09.00 WIB.

* **Paket Transit (Sewa Singkat Fleksibel)**:
  * Transit Hemat (Rp 100.000): 1 kamar tidur (kipas angin), kamar mandi di ruang tengah, akses dapur dan teras belakang.
  * Transit VIP (Rp 200.000): 1 kamar tidur (AC), kamar mandi di ruang tengah, akses dapur dan teras belakang.
  * Ketentuan waktu: Pagi ke Sore (08.00 – 18.00 WIB) atau Malam ke Pagi (18.00 – 08.00 WIB).

### 2. Warung Mie Bumie Ema (@bumie_ema)

Kedai kuliner di bagian depan hunian dengan aneka sajian mie dan topping pilihan:

* **Paket Hemat 10k**: 1x mie (rasa bebas) + 1x tahu goreng + 1x sosis sapi + 1 gelas tea jus dingin (Rp 10.000).
* **Bumie Full Topping 17k**: Mie kuah/nyemek komplit dengan 6 topping: telur, sosis, tahu, jamur enoki, makaroni, dan sosin segar (Rp 17.000).
* **Mie Satuan**: 1 bungkus (Rp 6.000) dan 2 bungkus porsi kenyang (Rp 10.000).
* **Topping Tambahan**: Tahu (Rp 1.000), Makaroni (Rp 1.000), Sosin (Rp 1.000), Sosis (Rp 2.000), Jamur Enoki (Rp 2.000), Telur (Rp 4.000).
* **Minuman & Camilan**: Kopi, es krim, dan aneka snack pendamping.

---

## Arsitektur File & Struktur Proyek

Susunan berkas pada proyek ini diatur secara modular dan terstruktur:

```text
bumie_ema/
├── app/
│   ├── favicon.ico               # Ikon browser
│   ├── globals.css               # Token warna (Ungu, Oranye, Slate), tipografi, dan gaya dasar
│   ├── layout.tsx                # Kerangka induk HTML, font Geist, dan metadata SEO lokal
│   └── page.tsx                  # Halaman utama landing page yang merakit seluruh komponen
│
├── components/
│   ├── Navbar.tsx                # Navigasi sticky, logo resmi, link seksi, dan menu mobile
│   ├── Hero.tsx                  # Sambutan pembuka gabungan penginapan dan warung mie dengan tombol aksi
│   ├── PenginapanSection.tsx     # Informasi paket kamar (Paket Baru & Transit), fasilitas, dan kontak
│   ├── CafeSection.tsx           # Katalog menu warung mie dengan tab filter dan daftar harga topping
│   ├── LocationSection.tsx       # Alamat Jalan Ciumbeng, jam operasional, dan peta Google Maps
│   ├── FloatingWhatsApp.tsx      # Tombol melayang di pojok kanan bawah untuk chat langsung
│   └── Footer.tsx                # Informasi penutup, alamat, jam buka, dan akun media sosial
│
├── lib/
│   └── utils.ts                  # Fungsi helper penggabung kelas Tailwind (clsx & twMerge)
│
├── public/
│   └── images/
│       ├── kamar-penginapan.jpg  # Foto visual kamar tidur penginapan
│       ├── mie-full-topping.jpg  # Foto semangkuk mie komplit dengan topping melimpah
│       └── mie-paket-hemat.jpg   # Foto porsi mie paket hemat dan es teh
│
├── package.json                  # Konfigurasi dependensi dan perintah npm
├── tsconfig.json                 # Konfigurasi TypeScript dan path alias
└── README.md                     # Dokumentasi proyek dan panduan lengkap
```

### Penjelasan Singkat Tiap Berkas:

1. **app/globals.css**: Mendefinisikan palet warna resmi (kombinasi ungu, oranye, dan netral slate), pengaturan font, dan scrollbar halus.
2. **app/layout.tsx**: Menyusun struktur HTML utama, memuat font Geist Sans dan Mono, serta menyetel metadata pencarian lokal.
3. **app/page.tsx**: Menggabungkan seluruh komponen modular menjadi satu halaman landing page responsif.
4. **components/Navbar.tsx**: Navigasi atas yang menempel saat halaman digulir, lengkap dengan logo resmi dan tombol kontak.
5. **components/Hero.tsx**: Bagian utama di layar pembuka yang memperkenalkan konsep hunian kamar dan warung mie.
6. **components/PenginapanSection.tsx**: Menampilkan detail paket menginap dan paket transit dengan tata letak bersih bernuansa hunian.
7. **components/CafeSection.tsx**: Menyediakan katalog menu mie dengan sistem tab interaktif untuk memudahkan pengunjung memilih hidangan.
8. **components/LocationSection.tsx**: Menyajikan rincian lokasi fisik di Jalan Ciumbeng Indihiang, peta interaktif, dan dua nomor WhatsApp pengelola.
9. **components/FloatingWhatsApp.tsx**: Tombol bantuan cepat di sudut kanan bawah yang langsung mengarahkan ke obrolan WhatsApp.
10. **components/Footer.tsx**: Penutup halaman dengan rincian operasional, tautan ke akun Instagram, dan tombol kembali ke atas.
11. **lib/utils.ts**: Fungsi utilitas untuk mempermudah manipulasi kelas CSS Tailwind secara dinamis.

---

## Informasi Alamat & Kontak Resmi

* **Alamat**: Jln. Ciumbeng RT 04 RW 01, Kelurahan Indihiang, Kecamatan Indihiang, Kota Tasikmalaya, Jawa Barat.
* **Google Maps**: [https://maps.app.goo.gl/Ytfvco4H6Vhh8LyC7](https://maps.app.goo.gl/Ytfvco4H6Vhh8LyC7)
* **WhatsApp 1 (Utama)**: 0822-4055-3262
* **WhatsApp 2 (Cadangan)**: 0852-9497-1747
* **Instagram Penginapan**: [@bumi_ema_](https://instagram.com/bumi_ema_)
* **Instagram Warung Mie**: [@bumie_ema](https://instagram.com/bumie_ema)
* **Jam Buka Warung Mie**: Setiap Hari, 10.00 – 22.00 WIB
* **Layanan Reservasi Kamar**: Aktif 24 Jam via WhatsApp

---

## Panduan Menjalankan Proyek Secara Lokal

1. Pasang dependensi:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

3. Buka di peramban:
   Akses `http://localhost:3000` pada peramban web Anda.
