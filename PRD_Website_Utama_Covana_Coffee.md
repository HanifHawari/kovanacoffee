# Product Requirements Document (PRD)
## Website Utama Kovana Coffee

---

## 1. Overview

**Nama Project:** Website Utama Kovana Coffee
**Tujuan:** Membuat website utama multi-page yang berfungsi sebagai platform lengkap Kovana Coffee, menampilkan menu lengkap dengan filter kategori, halaman tentang kami yang lebih detail, galeri foto, dan halaman kontak/reservasi. Website ini adalah tujuan akhir dari CTA di landing page (`/`).

**Relasi dengan Landing Page:**
- Landing page (`/`) sudah ada → berfungsi sebagai entry point/gerbang
- Website utama dimulai dari route `/home` dan mencakup semua sub-halaman di bawahnya
- Design system (warna, font, spacing) **harus konsisten** dengan landing page yang sudah ada

**Target User:**
- Pelanggan yang sudah tertarik dari landing page dan ingin eksplorasi lebih lanjut
- Pelanggan yang ingin melihat menu lengkap dengan harga
- Pelanggan yang ingin reservasi meja atau menghubungi café

---

## 2. Tech Stack

Mengikuti stack yang sama dengan landing page:

| Kebutuhan | Stack |
|---|---|
| Framework | Next.js 16 (App Router), sudah terinstall |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4, sudah terkonfigurasi |
| Icon | Lucide React, sudah terinstall |
| Font | Playfair Display (heading) + Inter (body), sudah dikonfigurasi |
| Animasi | Transisi CSS/Tailwind ringan (fade, hover state, slide) |

> **Tidak perlu install dependency baru.** Semua sudah tersedia di project.

---

## 3. Design System (Existing, Harus Konsisten)

### 3.1 Color Palette
| Nama | Hex | CSS Variable |
|---|---|---|
| Cream | `#F5EFE6` | `--color-cream` |
| Cream Dark | `#EDE5D8` | `--color-cream-dark` |
| White | `#FFFFFF` | `--color-white` |
| Gray Light | `#E5E1DA` | `--color-gray-light` |
| Gray Medium | `#8C877D` | `--color-gray-medium` |
| Charcoal | `#3A362F` | `--color-charcoal` |
| Accent (Coffee Brown) | `#6F4E37` | `--color-accent` |
| Accent Dark | `#5A3D2B` | `--color-accent-dark` |
| Accent Light | `#8B6A52` | `--color-accent-light` |

### 3.2 Typography
- **Heading:** `font-serif` → Playfair Display
- **Body:** `font-sans` → Inter
- Konsisten dengan landing page

### 3.3 Layout
- Container max-width `1200px` dengan padding konsisten
- Card `rounded-xl`, shadow tipis
- Spacing antar section lega

---

## 4. Struktur Halaman

Website utama memiliki **5 halaman** yang diakses via navigasi internal:

### 4.1 Layout Website Utama
- **Navbar khusus website utama** (berbeda dari landing page)
  - Logo Kovana Coffee (kiri), klik kembali ke `/home`
  - Menu navigasi: Home, Menu, Tentang Kami, Galeri, Kontak
  - Tombol CTA "Reservasi" di kanan
  - Sticky di top saat scroll
  - Mobile responsive (hamburger menu)
- **Footer**, sama stylenya dengan landing page tapi link navigasi menyesuaikan halaman website utama

---

### 4.2 Home (`/home`)
Halaman utama website, bukan landing page, melainkan "dashboard" pengunjung.

**Konten:**
1. **Hero Banner**, gambar besar full-width dengan overlay text
   - Headline: "Selamat Datang di Kovana Coffee"
   - Sub-text singkat
   - 2 CTA: "Lihat Menu" → `/home/menu` dan "Reservasi" → `/home/contact`

2. **Featured Menu**, 3 menu unggulan dalam card horizontal
   - Ambil dari data `menu.ts` yang sudah ada
   - Button "Lihat Semua Menu" → `/home/menu`

3. **Highlight Section**, split layout (gambar + text)
   - Tentang kopi specialty Kovana
   - Button "Selengkapnya" → `/home/about`

4. **Quick Info Bar**, 3 kolom icon + text
   - Jam Buka | Lokasi | Kontak Cepat (WhatsApp)

---

### 4.3 Menu Lengkap (`/home/menu`)
Halaman menu lengkap dengan filter.

**Konten:**
1. **Header Section**, judul "Menu Kami" + deskripsi singkat
2. **Filter Tabs**, filter berdasarkan kategori:
   - Semua | Coffee | Non-Coffee | Food | Snack
   - Tab aktif ditandai warna accent
3. **Menu Grid**, grid card (3 kolom desktop, 2 tablet, 1 mobile)
   - Card: foto, nama, harga, deskripsi singkat, badge kategori
   - Hover effect: shadow lift + image zoom ringan
4. **Data menu diperluas**, tambah lebih banyak item (12-15 total) di file `data/menu.ts`
   - Tambah kategori "snack"

---

### 4.4 Tentang Kami (`/home/about`)
Halaman about yang lebih detail dari section di landing page.

**Konten:**
1. **Hero kecil**, judul "Tentang Kovana Coffee" dengan background cream
2. **Story Section**, split layout
   - Kiri: foto interior/barista
   - Kanan: cerita panjang tentang Kovana (visi, misi, sejarah)
3. **Values / Filosofi**, 3 card
   - "Kopi Berkualitas" | "Suasana Nyaman" | "Komunitas"
   - Masing-masing dengan icon dan deskripsi
4. **Tim Kami** (opsional), 3-4 card foto + nama + role
5. **CTA**, "Kunjungi Kami" dengan link ke halaman kontak

---

### 4.5 Galeri (`/home/gallery`)
Halaman galeri foto lengkap.

**Konten:**
1. **Header Section**, judul "Galeri" + deskripsi
2. **Filter**, Semua | Interior | Menu | Suasana
3. **Photo Grid**, masonry-style grid
   - Hover: overlay gelap ringan + icon zoom
   - Klik: buka lightbox/modal preview gambar besar
4. **Gambar**, reuse gambar yang sudah ada di `/public/images/`

---

### 4.6 Kontak & Reservasi (`/home/contact`)
Halaman kontak dan reservasi.

**Konten:**
1. **Header Section**, judul "Hubungi Kami"
2. **Split Layout:**
   - **Kiri: Form Kontak/Reservasi**
     - Nama (required)
     - No. WhatsApp (required)
     - Tanggal kunjungan (date picker, opsional)
     - Jumlah orang (number, opsional)
     - Pesan (textarea)
     - Button "Kirim via WhatsApp" → redirect ke WhatsApp dengan pesan pre-filled
     - *Tidak pakai backend, langsung redirect ke WhatsApp API*
   - **Kanan: Info Kontak**
     - Alamat lengkap
     - Telepon
     - Email
     - Jam operasional
     - Social media links
3. **Google Maps Embed**, full-width di bawah form

---

## 5. Navigasi & Routing

| Route | Halaman | Keterangan |
|---|---|---|
| `/` | Landing Page | Sudah ada, tidak diubah |
| `/home` | Home Website Utama | Dashboard pengunjung |
| `/home/menu` | Menu Lengkap | Filter + grid semua menu |
| `/home/about` | Tentang Kami | Cerita detail Kovana |
| `/home/gallery` | Galeri | Grid foto + lightbox |
| `/home/contact` | Kontak & Reservasi | Form + info kontak |

**Navigasi antar halaman:**
- Gunakan `next/link` untuk semua navigasi internal
- Navbar website utama menampilkan link ke semua 5 halaman di atas
- Tambahkan link "Kembali ke Landing Page" di footer (opsional, kecil)

---

## 6. Fitur Fungsional

| Fitur | Prioritas | Keterangan |
|---|---|---|
| Multi-page navigation | Wajib | 5 halaman dengan routing Next.js |
| Responsive design | Wajib | Mobile-first, rapi di semua ukuran |
| Menu filter by category | Wajib | Tab filter tanpa reload halaman |
| Form kontak → WhatsApp redirect | Wajib | Pre-filled message ke WhatsApp API |
| Galeri dengan lightbox/modal | Wajib | Klik gambar → preview besar |
| Navbar sticky + mobile menu | Wajib | Konsisten dengan landing page style |
| Smooth page transitions | Opsional | Fade in saat pindah halaman |
| Image optimization | Wajib | Gunakan `next/image` |

---

## 7. Non-Goals

- Tidak ada sistem order online / payment gateway
- Tidak ada autentikasi / login user
- Tidak ada backend / database (semua data hardcode)
- Tidak ada dark mode
- Tidak ada multi-bahasa (Bahasa Indonesia saja)
- Tidak ada CMS / admin dashboard

---

## 8. Data yang Perlu Diperluas

### `data/menu.ts`, Tambah item baru:
Tambahkan item berikut (total jadi 15 item):

| Nama | Harga | Kategori |
|---|---|---|
| Espresso | Rp 25.000 | coffee |
| Café Latte | Rp 30.000 | coffee |
| V60 Pour Over | Rp 35.000 | coffee |
| Americano | Rp 28.000 | coffee |
| Cokelat Panas | Rp 30.000 | non-coffee |
| Lemon Tea | Rp 22.000 | non-coffee |
| French Fries | Rp 25.000 | snack |
| Nachos | Rp 35.000 | snack |
| Banana Bread | Rp 28.000 | food |

### `data/gallery.ts`, File baru:
Array data galeri dengan kategori (interior, menu, suasana).

---

## 9. Struktur Folder (Tambahan)

```
/app
  /page.tsx                    → Landing page "/" (sudah ada)
  /layout.tsx                  → Root layout (sudah ada)
  /home
    /layout.tsx                → Layout website utama (navbar + footer sendiri)
    /page.tsx                  → Home website utama
    /menu
      /page.tsx                → Menu lengkap
    /about
      /page.tsx                → Tentang kami
    /gallery
      /page.tsx                → Galeri foto
    /contact
      /page.tsx                → Kontak & reservasi
/components
  (existing landing page components...)
  /main                        → Folder komponen website utama
    MainNavbar.tsx
    MainFooter.tsx
    MenuFilter.tsx
    MenuCard.tsx
    GalleryGrid.tsx
    GalleryLightbox.tsx
    ContactForm.tsx
    QuickInfoBar.tsx
    FeaturedMenu.tsx
    PageHeader.tsx
/data
  menu.ts                      → Diperluas (15 items, + kategori "snack")
  testimonials.ts              → Sudah ada
  gallery.ts                   → Baru, data galeri
/lib
  routes.ts                    → Tambah route konstanta baru
```

---

## 10. Deliverables

1. Semua 5 halaman website utama sudah bisa diakses dan berfungsi
2. Navigasi antar halaman lancar via navbar
3. Filter menu bekerja tanpa reload
4. Form kontak redirect ke WhatsApp dengan pesan pre-filled
5. Galeri dengan lightbox berfungsi
6. Responsive di mobile, tablet, desktop
7. Design konsisten dengan landing page (warna, font, spacing)
8. `npm run build` sukses tanpa error
