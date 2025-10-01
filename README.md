<img width="2874" height="1797" alt="image" src="https://github.com/user-attachments/assets/bfc239db-ac63-42ec-a4cd-6979b5502671" /># Tech Challenge - Product Page Optimisation

Proyek ini dibuat untuk menyelesaikan **Tech Challenge Frontend (Product Page Optimisation)**.  
Aplikasi menampilkan daftar produk dari REST API `dummyjson.com`, dengan fitur filter kategori, sort, pagination, serta halaman detail produk.  
UI mengusung tema **dark high-tech** dengan optimasi performa.

---

## Fitur Utama

- **Daftar Produk**

  - Menampilkan **gambar, judul, deskripsi, harga, dan badge ketersediaan**.
  - Mendukung **filter kategori**.
  - Mendukung **sort harga (asc/desc)** dan **sort judul (A–Z / Z–A)**.
  - Pagination: **8 produk per halaman**.

- **Halaman Detail Produk**

  - Carousel gambar produk.
  - Menampilkan judul, deskripsi, harga, dan status stok.

- **Optimasi Performa**

  - **ISR (Incremental Static Regeneration)** → refresh data tiap 2 menit.
  - **next/image** untuk optimasi gambar + lazy loading.
  - **Pagination API (`skip` + `limit`)** → hanya fetch data yang dibutuhkan (8 item/page).
  - **Parallel data fetching** → kurangi TTFB.
  - UI ringan tanpa library tambahan.

- **UI/UX High-Tech**
  - Tema **dark futuristic** dengan efek glassmorphism.
  - Animasi hover halus dan proporsional.
  - Komponen modular & reusable.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS custom (dark high-tech theme)
- **Data Source**: [DummyJSON Products API](https://dummyjson.com/docs/products)

---

## Instalasi & Menjalankan

Clone repo ini, lalu install dependencies:

```bash
git clone https://github.com/username/product-page.git
cd product-page

# install dependencies
npm install

# jalankan development server
npm run dev
```
<img width="2874" height="1797" alt="image" src="https://github.com/user-attachments/assets/6ab7a031-1b69-416f-9bb8-afd2b7e456ba" />
