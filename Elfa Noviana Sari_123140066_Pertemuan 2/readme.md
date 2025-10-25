# 💻 Aplikasi Personal Dashboard – Dashboard Mahasiswa

## 📘 Deskripsi Singkat
**Dashboard Mahasiswa** adalah aplikasi web interaktif berbasis **HTML, CSS, dan JavaScript (ES6+)** yang berfungsi sebagai **personal dashboard** untuk mahasiswa.  
Aplikasi ini menampilkan:

- Jadwal kuliah harian  
- Daftar kegiatan (organisasi, akademik, kepanitiaan, dan kuliah)  
- Ringkasan tugas dan kegiatan hari ini  
- Informasi waktu & tanggal secara real-time  

Seluruh data kegiatan disimpan di **localStorage**, sehingga tidak hilang meskipun browser ditutup atau halaman direfresh.

---

## 🎯 Fitur Utama

### 🔹 1. Navigasi Dinamis
- Sidebar interaktif dengan tiga menu utama:
  - 🏠 **Beranda**
  - 🎓 **Jadwal Kuliah**
  - 🗓️ **Jadwal Kegiatan**
- Navigasi menggunakan manipulasi DOM tanpa reload halaman (SPA sederhana).

### 🔹 2. Manajemen Jadwal Kegiatan
- Tambah, edit, hapus kegiatan.  
- Tandai kegiatan **selesai/belum selesai**.  
- Filter kegiatan berdasarkan jenis (Organisasi, Kuliah, Akademik, Kepanitiaan).  
- Pencarian berdasarkan **nama, lokasi, atau deskripsi kegiatan**.

### 🔹 3. Dashboard Ringkasan
- Menampilkan total kegiatan.  
- Jumlah kegiatan yang sudah selesai.  
- Jumlah kegiatan yang dijadwalkan **hari ini**.  
- Daftar kegiatan terdekat dengan prioritas waktu.

### 🔹 4. Real-Time Clock & Calendar
- Menampilkan waktu dan tanggal yang diperbarui setiap detik menggunakan fungsi asynchronous.

### 🔹 5. Penyimpanan Lokal
- Semua data tersimpan otomatis di **localStorage**, sehingga data tetap ada meskipun browser ditutup.

---

## ⚙️ Teknologi & Konsep yang Digunakan

| Aspek | Implementasi |
|-------|---------------|
| **Bahasa Pemrograman** | HTML5, CSS3, JavaScript (ES6+) |
| **Penyimpanan Data** | localStorage |
| **Paradigma** | DOM Manipulation, Object-Oriented Programming |
| **Desain UI/UX** | Flat modern dengan warna pastel (tema pink) |
| **Arsitektur** | SPA sederhana berbasis event listener dan manipulasi DOM |

---

## ✨ Implementasi Fitur ES6+

| Fitur ES6+ | Implementasi |
|-------------|--------------|
| **`let` & `const`** | Digunakan secara konsisten untuk deklarasi variabel agar memiliki scope yang tepat. |
| **Arrow Functions (≥3)** | Contoh penggunaan:<br>• `menuItems.forEach(mi => {...})`<br>• `clearFiltersBtn.addEventListener('click', () => {...})`<br>• `updateSummary = () => {...}` |
| **Template Literals** | Digunakan untuk men-generate HTML dinamis, seperti pada fungsi `renderList()` dan `renderSummary()`. |
| **Async/Await** | Diterapkan pada fungsi real-time clock untuk update jam secara asynchronous. |
| **Class Implementation** | Menggunakan class `Kegiatan` untuk representasi setiap data kegiatan. |

---

## 🧠 Struktur Folder & File

