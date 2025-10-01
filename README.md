<img width="2874" height="1797" alt="image" src="https://github.com/user-attachments/assets/bfc239db-ac63-42ec-a4cd-6979b5502671" />
<img width="2879" height="1799" alt="Screenshot 2025-10-01 162538" src="https://github.com/user-attachments/assets/a12b32f5-7397-460d-a6f6-e5e9bbacb430" />
<img width="2879" height="1680" alt="image" src="https://github.com/user-attachments/assets/692e717c-b5b7-465d-bf86-cd2319a1d6c8" />
<img width="1792" height="1056" alt="image" src="https://github.com/user-attachments/assets/6ff45d19-4857-4045-bd70-29a741d1b953" />
<img width="717" height="1527" alt="Screenshot 2025-10-01 163108" src="https://github.com/user-attachments/assets/ba0302d4-1dde-4c5b-b451-b29baa76d8a2" />


# Tech Challenge - Product Page Optimisation

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
