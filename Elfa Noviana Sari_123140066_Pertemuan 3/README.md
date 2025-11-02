# Aplikasi Manajemen Buku Pribadi

Aplikasi ini merupakan platform manajemen buku pribadi yang dibangun menggunakan React.js.
Melalui aplikasi ini, pengguna bisa mencatat dan mengatur daftar buku yang sudah dimiliki, sedang dibaca, maupun yang ingin dibeli di kemudian hari dengan mengimplementasikan berbagai konsep inti React seperti Hooks, Context API, React Router, serta Custom Hooks dalam satu aplikasi yang fungsional dan interaktif.

---

## 1. Deskripsi Aplikasi & Fitur

Aplikasi ini memungkinkan pengguna melakukan manajemen data buku secara penuh CRUD dengan fitur-fitur berikut:

### Fitur Utama:
1. Fitur Dasar
- Tambah Buku Baru - Input judul, penulis, dan status buku
- Edit Buku - Perbarui informasi buku kapan saja
- Hapus Buku - Hapus buku dari koleksi dengan konfirmasi
- Pencarian Real-time - Cari buku berdasarkan judul atau penulis
- Filter Status dengan Filter buku: Semua, Dimiliki, Dibaca, Wishlist

2. Halaman Statistik
Total buku dalam koleksi
Jumlah buku yang sudah dimiliki
Jumlah buku yang sedang dibaca
Jumlah buku di wishlist
Daftar 5 buku terbaru yang ditambahkan

---

## 2. Instruksi Instalasi & Menjalankan

### Prasyarat:
Pastikan perangkat sudah terpasang:
- Node.js (versi 16 atau lebih baru)
- NPM (otomatis terinstal bersama Node.js)

### Langkah-langkah Menjalankan:
1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/tugas3-praktikum-pemweb.git
2. Masuk ke direktori proyek:
   ```bash
   cd "Elfa Noviana Sari_123140066_Pertemuan 3"
3. Install semua dependensi:
   ```bash
   npm install
4. Jalankan aplikasi:
   ```bash
   npm start
5. Aplikasi akan otomatis terbuka di browser: http://localhost:3000

## 3. Screenshot Antarmuka
1. Halaman Beranda dengan ringkasan kegiatan
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/8fcb6c32-71e6-4a0a-accc-7a413fbed305" />

2. Tampilan jika ingin menambah list buku
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a5cd3997-389f-44ae-ac5b-cf76966ea4eb" />

3. Tampilan statistik
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/5d01dd6d-60de-4c70-ab47-b8ee0b3df68f" />

## 4. Penjelasan Fitur React yang Digunakan
Proyek ini mengimplementasikan berbagai konsep inti dan modern React:
1. Functional Components
Seluruh bagian aplikasi seperti **BookForm**, **BookList**, **BookFilter**, dan **HomePage** dibuat menggunakan functional components. Pendekatan ini membuat kode lebih ringkas, mudah dibaca, dan memanfaatkan fitur React Hooks secara optimal.
2. useState Hook
Digunakan untuk menyimpan dan mengubah data secara dinamis di komponen.
Contohnya pada **BookForm** untuk menyimpan input pengguna (judul, penulis, kategori, dan tahun terbit).
3. useContext Hook
Menggunakan React Context API untuk mengelola data buku secara global melalui **BookContext**.
Dengan cara ini, data bisa diakses dan diubah dari berbagai komponen tanpa perlu props drilling.
4. useEffect Hook
Digunakan untuk melakukan efek samping seperti mengambil data awal dari **localStorage** atau menyimpan perubahan data setiap kali daftar buku diperbarui.
5. Component Reusability
Setiap komponen (seperti **BookForm**, **BookFilter**, dan **BookList**) dibuat modular agar mudah digunakan kembali di halaman lain jika diperlukan.
6. Props
Data antar-komponen dikirim menggunakan props, contohnya dari **HomePage** ke **BookList** untuk menampilkan hasil filter buku.
7. Local Storage Integration
Data buku disimpan secara lokal di browser menggunakan **localStorage** agar tetap tersimpan walau halaman direfresh.
8. Dynamic Filtering
Fitur pencarian dan filter buku memanfaatkan state dan event handler di React untuk memperbarui tampilan daftar buku secara real-time.

## 5. Komentar Penting dalam Kode 
// BookContext.js 
// Context global untuk menyimpan dan mengelola daftar buku pengguna const BookContext = createContext(); 
// useLocalStorage.js 
// Hook custom untuk menyimpan dan mengambil data dari localStorage try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.error('Gagal menyimpan ke localStorage:', error); }

## 6. Laporan Testing
*Testing* dilakukan menggunakan **React Testing Library** dan **Jest**. File tes utama adalah `src/App.test.js`.
![Gambar WhatsApp 2025-11-02 pukul 09 29 23_4caa8939](https://github.com/user-attachments/assets/d3b54af2-4e4e-4f20-964f-3c3e33eb7e90)


**Perintah untuk Menjalankan Tes:**
```bash
npm test
