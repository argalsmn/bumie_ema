# 🏠🍜 Bumie Ema — Penginapan Nyaman & Warung Mie Lezat

Selamat datang di repositori resmi website **Bumie Ema** yang berlokasi di Indihiang, Kota Tasikmalaya!

Website ini dirancang sebagai beranda digital yang ramah dan interaktif untuk memperkenalkan dua usaha keluarga yang saling melengkapi: **Penginapan Kamar Sewa Bumi Ema** yang asri dan tenang, serta **Warung Mie Bumie Ema** yang menggugah selera tepat di halaman depan.

---

## 💡 Kisah & Arti di Balik Nama "Bumie Ema"

Nama **Bumie Ema** lahir dari kehangatan keluarga dan kearifan lokal Sunda:

* **Bumi (Rumah)**: Dalam bahasa Sunda, kata *"Bumi"* berarti **"Rumah"** — tempat di mana rasa nyaman, aman, dan damai selalu dirindukan.
* **Mie**: Kata *"Bumi"* dipadukan secara manis dengan kata *"Mie"*, karena di bagian depan rumah ini terdapat kedai/kafe mie lezat, menghasilkan sebutan unik **"Bumie"**.
* **Ema (Nenek)**: *"Ema"* adalah panggilan penuh cinta dan kasih sayang untuk **Nenek** di keluarga kami.

Secara keseluruhan, **Bumie Ema** menghadirkan filosofi **"Rumah Nenek"**: sebuah tempat singgah yang menyambut siapa saja layaknya keluarga sendiri — tempat Anda bisa melepas lelah di kamar yang nyaman, sembari menikmati semangkuk mie hangat yang dimasak dengan ketulusan hati.

---

## 🎨 Identitas & Palet Warna Brand Bumie Ema

Warna pada Bumie Ema memiliki perpaduan karakter khas yang diambil langsung dari identitas visual aslinya:

* 🟠 **Oranye Hangat & Amber (`#E85D04` / `#F48C06`)**: Simbol kelezatan kuah mie gurih, kehangatan pelayanan, serta energi ramah yang menggugah selera makan.
* 🟣 **Ungu / Deep Violet (`#581C87` / `#6D28D9`)**: Warna khas dari tulisan *"EMA"* pada logo resmi dan banner *"WE ARE OPEN"*, memberikan sentuhan elegan, kreatif, dan identitas keluarga yang kuat.
* ⚪ **Putih Bersih & Marmer Netral (`#FAF8F5` / `#FFFFFF`)**: Nuansa tenang dan higienis yang terinspirasi dari poster penginapan kamar Bumi Ema, menghadirkan suasana istirahat yang lega, sejuk, dan damai.
* ⚫ **Hitam Arang & Slate Gelap (`#171717` / `#1C1917`)**: Memberikan kontras modern pada tulisan *"BUMIE"*, memastikan keterbacaan yang tajam dan kesan visual profesional di layar ponsel maupun komputer.

---

## 🌟 Tentang Bisnis & Paket Resmi Bumie Ema

Bumie Ema menggabungkan konsep kenyamanan tempat tinggal dan kemudahan kuliner dalam satu lokasi strategis:

### 1. Penginapan Kamar Sewa (Bumi Ema — @bumi_ema_)
Tersedia dua pilihan skema sewa fleksibel sesuai kebutuhan tamu:

* **🌙 Paket Baru (Menginap Standar)**:
  * **Hemat 1 — Rp 100.000**: 1 Kamar tidur (Kipas Angin) + 1 Kamar Mandi di Ruang Tengah + Akses ke Dapur & Teras Belakang + Freebies.
  * **Hemat 2 — Rp 200.000**: 1 Kamar tidur (AC Sejuk) + 1 Kamar Mandi di Ruang Tengah + Akses ke Dapur & Teras Belakang + Freebies.
  * *Waktu Sewa*: Check-in mulai pukul 16.00 WIB, batas Check-out hingga pukul 09.00 WIB.

* **⚡ Paket Transit (Sewa Singkat Fleksibel)**:
  * **Transit Hemat — Rp 100.000**: 1 Kamar tidur (Kipas Angin) + 1 Kamar Mandi di Ruang Tengah + Akses ke Dapur & Teras Belakang.
  * **Transit VIP — Rp 200.000**: 1 Kamar tidur (AC Sejuk) + 1 Kamar Mandi di Ruang Tengah + Akses ke Dapur & Teras Belakang.
  * *Pilihan Waktu*: Bisa **Pagi ke Sore** (08.00 – 18.00 WIB) atau **Malam ke Pagi** (18.00 – 08.00 WIB).

---

### 2. Warung Mie Bumie Ema (@bumie_ema)
Kedai mie kekinian di halaman depan penginapan dengan racikan bumbu gurih khas dan kuah nyemek nikmat:

* **Paket Hemat 10k**: 1x Mie (rasa bebas) + 1x Tahu Goreng + 1x Sosis Sapi + 1 Gelas Tea Jus Dingin (Rp 10.000).
* **Bumie Full Topping 17k (Signature)**: Mie Komplit + Telur + Sosis + Tahu + Jamur Enoki + Makaroni + Sawi/Sosin Segar (Rp 17.000).
* **Mie Satuan**: 1 Bungkus (Rp 6.000) & 2 Bungkus Porsi Kenyang (Rp 10.000).
* **Aneka Topping Ekstra**: Tahu (1k), Makaroni (1k), Sosin (1k), Sosis (2k), Jamur Enoki (2k), Telur Rebus/Ceplok (4k).
* **Minuman & Camilan**: Kopi, Es Krim, dan aneka snack teman santai.

---

## 📁 Arsitektur File & Struktur Proyek

Berikut bagan susunan folder dan berkas pada proyek website ini beserta fungsinya masing-masing:

```text
bumie_ema/
├── 📁 app/                          # Direktori utama Next.js App Router
│   ├── 📄 favicon.ico               # Ikon kecil tab browser
│   ├── 📄 globals.css               # Pengaturan tema warna (Oranye, Ungu, Netral), font, dan scroll halus
│   ├── 📄 layout.tsx                # Kerangka induk halaman, font Geist, dan metadata SEO lokal
│   └── 📄 page.tsx                  # Halaman utama landing page yang menyatukan semua komponen
│
├── 📁 components/                   # Komponen antarmuka modular (interaktif & responsif)
│   ├── 📄 Navbar.tsx                # Menu navigasi sticky atas, logo Bumie Ema, link halaman, & drawer HP
│   ├── 📄 Hero.tsx                  # Bagian sambutan teratas dengan headline, kartu cuplikan, & 2 tombol aksi
│   ├── 📄 PenginapanSection.tsx     # Bagian sewa kamar: tab Paket Baru & Transit, fasilitas, dan kontak WA
│   ├── 📄 CafeSection.tsx           # Bagian Warung Mie: tab Paket Populer 10k/17k, mie satuan, & daftar topping
│   ├── 📄 LocationSection.tsx       # Peta Google Maps, alamat Jalan Ciumbeng, jam buka, & 2 nomor kontak
│   ├── 📄 FloatingWhatsApp.tsx      # Tombol melayang di pojok kanan bawah dengan opsi cepat (Kamar / Mie)
│   └── 📄 Footer.tsx                # Bagian penutup bawah berisi identitas usaha, link sosmed, & hak cipta
│
├── 📁 lib/                          # Fungsi utilitas pembantu
│   └── 📄 utils.ts                  # Fungsi 'cn' untuk menggabungkan class styling secara rapi
│
├── 📁 public/                       # Berkas aset statis yang bisa diakses langsung oleh browser
│   └── 📁 images/                   # Foto resolusi tinggi untuk tampilan visual website
│       ├── 🖼️ kamar-penginapan.jpg  # Foto visual kamar tidur modern ber-AC dan kasur springbed
│       ├── 🖼️ mie-full-topping.jpg  # Foto semangkuk mie kuah nyemek komplit dengan 6 topping
│       └── 🖼️ mie-paket-hemat.jpg   # Foto mie goreng paket hemat 10k beserta es teh manis
│
├── 📄 package.json                  # Catatan pustaka dependensi (Next.js, Framer Motion, Lucide Icons, Tailwind)
├── 📄 tsconfig.json                 # Pengaturan bahasa TypeScript dan alias jalur pemanggilan (@/*)
└── 📄 README.md                     # Buku panduan lengkap proyek, filosofi bisnis, dan penjelasan fitur
```

### 🔍 Penjelasan Singkat Per File:

1. **`app/globals.css`**: Menyimpan variabel warna identitas (Oranye `#E85D04`, Ungu `#4C1D95`, Amber `#F48C06`, dan krem lembut), pengaturan perilaku *smooth scrolling*, serta bentuk scrollbar khusus.
2. **`app/layout.tsx`**: Mengatur struktur dasar HTML, menyetel bahasa ke Bahasa Indonesia (`id`), memuat font modern Geist, serta memasang informasi meta pencarian Google (SEO) agar website mudah ditemukan orang di Tasikmalaya.
3. **`app/page.tsx`**: Pintu gerbang utama tempat seluruh komponen (Navbar, Hero, Kamar, Mie, Lokasi, WhatsApp, Footer) disusun bertingkat menjadi satu landing page yang utuh.
4. **`components/Navbar.tsx`**: Navigasi yang tetap menempel di bagian atas saat digulir. Di layar HP, otomatis berubah menjadi menu tombol praktis yang bisa dibuka-tutup.
5. **`components/Hero.tsx`**: Kesan pertama pengunjung. Menjelaskan perpaduan penginapan dan warung mie dalam satu tatapan, dilengkapi tombol jalan pintas ke menu atau pemesanan kamar.
6. **`components/PenginapanSection.tsx`**: Membantu calon penyewa melihat detail paket menginap biasa (Paket Baru) maupun singgah sementara (Paket Transit), lengkap dengan rincian fasilitas (kipas/AC, dapur, teras, kamar mandi tengah).
7. **`components/CafeSection.tsx`**: Menyajikan menu makanan secara interaktif, pengunjung bisa memilih tab untuk melihat Paket Hemat 10k, Full Topping 17k, ataupun menghitung tambahan topping satuan.
8. **`components/LocationSection.tsx`**: Memandu pengunjung menuju lokasi fisik dengan peta Google Maps tersemat, jam operasional warung, serta dua nomor kontak WhatsApp.
9. **`components/FloatingWhatsApp.tsx`**: Tombol WhatsApp beranimasi denyut yang selalu siap di pojok layar, memberi kemudahan pesan kamar atau makanan tanpa perlu mencari-cari nomor kontak.
10. **`components/Footer.tsx`**: Menutup halaman dengan rapi, memuat tautan balik ke bagian atas, akun Instagram resmi, dan informasi hak cipta.
11. **`lib/utils.ts`**: Skrip ringkas yang memastikan pengaturan tampilan tidak bentrok dan berjalan ringan di browser.

---

## ✨ Fitur-Fitur Pengalaman Pengguna

* 📱 **Tampilan Ramah Ponsel (Mobile-First)**: Rapi di HP, tablet, maupun layar komputer lebar.
* 🎈 **Animasi Gerak Halus (Scroll Motion)**: Kartu dan tulisan muncul perlahan saat layar digulir ke bawah (`framer-motion`).
* 🧭 **Navigasi Mulus Sekali Sentuh**: Menggeser layar secara halus (*smooth scroll*) saat link menu ditekan.
* 💬 **Integrasi Langsung WhatsApp**: Menghubungkan pengunjung ke WhatsApp pengelola dengan pesan pembuka otomatis yang sopan.

---

## 📍 Informasi Kontak & Alamat Resmi

* **Alamat**: Jln. Ciumbeng RT 04 RW 01, Kelurahan Indihiang, Kecamatan Indihiang, Kota Tasikmalaya, Jawa Barat.
* **Google Maps**: [Buka Lokasi di Google Maps](https://maps.app.goo.gl/Ytfvco4H6Vhh8LyC7)
* **WhatsApp 1 (Utama)**: `0822-4055-3262`
* **WhatsApp 2 (Cadangan)**: `0852-9497-1747`
* **Instagram Penginapan**: [@bumi_ema_](https://instagram.com/bumi_ema_)
* **Instagram Warung Mie**: [@bumie_ema](https://instagram.com/bumie_ema)
* **Jam Buka Warung Mie**: Buka Setiap Hari, Pukul 10.00 – 22.00 WIB
* **Reservasi Penginapan**: Aktif 24 Jam via WhatsApp

---

## 🚀 Cara Menjalankan Website di Komputer Lokal

1. **Unduh paket pendukung**:
   ```bash
   npm install
   ```

2. **Jalankan website**:
   ```bash
   npm run dev
   ```

3. **Buka di peramban (browser)**:
   Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat website secara langsung.

---

*Dibuat dengan penuh cinta dan kehangatan untuk keluarga besar **Bumie Ema**.*
