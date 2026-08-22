# Product Requirements Document (PRD)
## Landing Page Coffee Shop

---

## 1. Overview

**Nama Project:** Landing Page Coffee Shop
**Tujuan:** Membuat landing page yang informatif, clean, dan profesional untuk memperkenalkan coffee shop, menampilkan menu, lokasi, dan mengarahkan pengunjung untuk order/reservasi atau menghubungi kontak yang tersedia.

**Target User:**
- Calon pelanggan yang mencari info coffee shop (menu, lokasi, jam buka)
- Pelanggan lama yang ingin cek promo/menu baru

**Prinsip Desain:**
- Simple, clean, tidak berlebihan
- Fokus ke kejelasan informasi, bukan efek visual yang ramai
- Layout mengikuti struktur landing page pada umumnya (familiar pattern, tidak eksperimental)

**Alur Utama:**
Landing page ini berfungsi sebagai **entry point/pintu masuk**. Pengunjung datang ke landing page dulu (route `/`), lihat info singkat (menu, tentang, lokasi), lalu diarahkan lewat tombol CTA ke **website full/utama** yang berada di **route berbeda dalam project yang sama** (misal `/home`, `/main`, atau `/order`, bukan domain/project terpisah). Landing page ini TIDAK menggantikan website utama, perannya lebih ke "gerbang" yang menarik minat sebelum masuk ke sistem yang lebih lengkap.

---

## 2. Tech Stack

| Kebutuhan | Rekomendasi |
|---|---|
| Framework | Next.js (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Icon | Lucide React |
| Font | Google Fonts (serif untuk heading, sans-serif untuk body) |
| Deployment | Vercel |
| Animasi | Tidak wajib. Kalau ada, cukup transisi halus bawaan CSS/Tailwind (fade, hover state), hindari library animasi kompleks (Framer Motion/GSAP) kecuali diminta lain kali |

---

## 3. Design System

### 3.1 Color Palette

| Nama | Hex (contoh) | Penggunaan |
|---|---|---|
| Cream | `#F5EFE6` | Background utama |
| White | `#FFFFFF` | Card, section alternatif |
| Gray Light | `#E5E1DA` | Border, divider |
| Gray Medium | `#8C877D` | Teks sekunder |
| Gray Dark / Charcoal | `#3A362F` | Teks utama, heading |
| Accent (opsional, boleh diganti sesuai brand) | `#6F4E37` (coffee brown) | Button primary, highlight kecil |

> Catatan untuk AI/dev: Warna dominan adalah cream, putih, dan abu-abu. Warna coklat kopi hanya dipakai sebagai aksen kecil (button, ikon aktif), bukan warna dominan.

### 3.2 Typography
- **Heading:** Serif (misal: Playfair Display / Lora), kesan warm & elegan
- **Body:** Sans-serif (misal: Inter / Poppins), mudah dibaca
- Ukuran mengikuti standar landing page (H1 besar di hero, H2 untuk tiap section, body 14-16px)

### 3.3 Layout Style
- Container max-width standar (misal 1200px), padding konsisten kiri-kanan
- Spacing antar section cukup lega (tidak padat)
- Card dengan rounded-corner ringan (rounded-lg/xl), shadow tipis, tidak flat 100%
- Grid responsive standar (1 kolom mobile, 2-3 kolom desktop)

---

## 4. Struktur Halaman (Section)

Urutan section landing page seperti website umum, dari atas ke bawah:

### 4.1 Navbar
- Logo/nama coffee shop (kiri)
- Menu navigasi: Home, Menu, Tentang Kami, Lokasi, Kontak (kanan)
- Button CTA kecil di navbar (misal: "Order Sekarang" atau "Hubungi Kami")
- Sticky di top saat scroll (opsional, umum dipakai)

### 4.2 Hero Section
- Headline singkat (nama coffee shop + tagline)
- Deskripsi 1-2 kalimat
- 2 button:
  - **Primary CTA → "Kunjungi Website Kami" / "Order Sekarang"**: navigasi internal (pakai `next/link`) ke route website utama (misal `/home` atau `/order`), TIDAK buka tab baru karena masih dalam satu project
  - **Secondary CTA → "Lihat Menu"** atau **"Lokasi Kami"**: scroll ke section di landing page itu sendiri (anchor link, bukan pindah route)
- Gambar/foto coffee shop atau produk (kanan atau full-width background)

### 4.3 Tentang Kami (About)
- Deskripsi singkat tentang coffee shop (cerita, konsep, keunggulan)
- Foto pendukung (interior/eksterior toko)

### 4.4 Menu Unggulan
- Grid card menu (foto, nama menu, harga singkat)
- Bisa ditampilkan sebagian (4-6 item) dengan button "Lihat Menu Lengkap"

### 4.5 Kenapa Pilih Kami / Keunggulan
- 3-4 poin singkat dalam bentuk card/icon list (misal: Biji Kopi Pilihan, Suasana Nyaman, Wifi Kencang, Harga Terjangkau)

### 4.6 Galeri (opsional)
- Grid foto suasana coffee shop / produk

### 4.7 Testimoni (opsional)
- 2-3 testimoni pelanggan dalam card sederhana

### 4.8 Lokasi & Jam Operasional
- Alamat lengkap
- Embed Google Maps
- Jam buka (tabel sederhana per hari)

### 4.9 Kontak / CTA Akhir
- Ajakan final untuk masuk ke website utama (button besar, misal: "Kunjungi Website Kami" atau "Order & Reservasi di Website Kami")
- Ajakan sekunder untuk hubungi via WhatsApp atau media sosial (buat yang belum yakin/mau tanya dulu)
- Link ke Instagram, WhatsApp, dll.

### 4.10 Footer
- Logo + copyright
- Link navigasi singkat
- Social media icons
- Kontak singkat (alamat, telepon, email)

---

## 5. Fitur Fungsional

| Fitur | Prioritas | Keterangan |
|---|---|---|
| Responsive design (mobile-first) | Wajib | Harus rapi di semua ukuran layar |
| Navigasi smooth scroll ke section | Wajib | Klik menu navbar langsung scroll ke section terkait |
| **CTA button ke website utama** | **Wajib** | **Button di Hero dan di bagian akhir (Kontak/CTA Akhir) yang navigasi ke route lain dalam project yang sama menggunakan `next/link` (`<Link href="/home">` atau route yang disepakati). Path route ini sebaiknya disimpan sebagai konstanta di satu file (misal `/lib/routes.ts`) biar gampang diubah kalau nama route-nya berubah** |
| Integrasi Google Maps | Wajib | Embed di section lokasi |
| Link WhatsApp/Instagram | Wajib | Untuk kontak langsung |
| Form kontak sederhana (opsional) | Opsional | Nama, email, pesan, kalau tidak pakai backend, cukup mailto/WhatsApp redirect |
| Dark mode | Tidak perlu | Di luar scope |
| CMS/dynamic content | Tidak perlu (v1) | Konten menu/harga hardcode dulu, bisa upgrade ke CMS nanti |

---

## 6. Non-Goals (Batasan)
- Tidak perlu sistem order online / payment gateway di versi ini
- Tidak perlu animasi kompleks (parallax, 3D, scroll-jacking)
- Tidak perlu multi-bahasa (cukup Bahasa Indonesia)
- Tidak perlu dashboard admin

---

## 7. Deliverables yang Diharapkan dari AI Coding
1. Project Next.js + TypeScript + Tailwind yang sudah bisa dijalankan (`npm run dev`)
2. Semua section pada poin 4 sudah dibuat dengan data dummy/placeholder
3. Struktur folder rapi (components dipisah per section)
4. Responsive di mobile, tablet, desktop
5. Warna dan tipografi mengikuti design system di atas
6. Kode bersih, terkomentar seperlunya, mudah diedit (misal: data menu di file terpisah biar gampang diganti)

---

## 8. Referensi Struktur Folder (Saran)
```
/app
  /page.tsx          -> Landing page (route "/")
  /layout.tsx
  /home (atau /order, dst)
    /page.tsx        -> Website utama (route terpisah, di luar scope PRD ini)
/components
  Navbar.tsx
  Hero.tsx
  About.tsx
  MenuSection.tsx
  WhyUs.tsx
  Gallery.tsx
  Testimonials.tsx
  LocationSection.tsx
  ContactCTA.tsx
  Footer.tsx
/data
  menu.ts
  testimonials.ts
/lib
  routes.ts          -> Konstanta path route (misal MAIN_WEBSITE_ROUTE = "/home")
/public
  /images
```

> Catatan: Landing page (`/`) dan website utama (`/home` atau route lain) berada dalam **satu project Next.js yang sama**. PRD ini hanya mencakup pengembangan landing page-nya; halaman website utama dianggap sudah ada atau dikerjakan terpisah.
