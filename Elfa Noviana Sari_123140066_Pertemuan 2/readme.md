💻 Aplikasi Personal Dashboard – Dashboard Mahasiswa
📘 Deskripsi Singkat

Dashboard Mahasiswa adalah aplikasi web interaktif berbasis HTML, CSS, dan JavaScript yang berfungsi sebagai personal dashboard untuk mahasiswa.
Aplikasi ini menampilkan:

Jadwal kuliah harian,

Daftar kegiatan (organisasi, akademik, kepanitiaan, dan kuliah),

Ringkasan tugas dan kegiatan hari ini,

Informasi waktu & tanggal secara real-time.

Aplikasi ini menyimpan data di localStorage, sehingga informasi kegiatan akan tetap tersimpan meskipun halaman direfresh atau browser ditutup.

🎯 Fitur Utama
🔹 1. Navigasi Dinamis

Sidebar interaktif untuk berpindah antar halaman:

Beranda

Jadwal Kuliah

Jadwal Kegiatan

Navigasi tidak me-refresh halaman (SPA sederhana).

🔹 2. Manajemen Jadwal Kegiatan

Tambah, edit, dan hapus kegiatan.

Filter kegiatan berdasarkan jenis (Organisasi, Kuliah, dll).

Fitur pencarian berdasarkan nama, lokasi, atau deskripsi.

Menandai kegiatan sebagai selesai / belum selesai.

🔹 3. Dashboard Ringkasan

Total kegiatan yang tersimpan.

Jumlah kegiatan yang sudah selesai.

Jumlah kegiatan yang dijadwalkan hari ini.

Daftar 3 kegiatan terdekat.

🔹 4. Real-Time Clock & Calendar

Tanggal dan waktu diperbarui setiap detik secara otomatis menggunakan setInterval().

🔹 5. Penyimpanan Lokal

Semua data kegiatan disimpan secara permanen di localStorage.

⚙️ Teknologi & Konsep yang Digunakan
Aspek	Implementasi
Bahasa Pemrograman	HTML5, CSS3, JavaScript (ES6+)
Penyimpanan Data	localStorage
Paradigma	DOM Manipulation, Object-Oriented Programming
Desain UI/UX	Flat modern dengan warna pastel (tema pink)
Arsitektur	SPA sederhana berbasis manipulasi DOM
✨ Implementasi Fitur ES6+

Aplikasi ini memenuhi seluruh syarat ES6+ yang diwajibkan:

Fitur ES6+	Implementasi dalam Kode
let & const	Digunakan untuk semua deklarasi variabel agar memiliki scope yang jelas.
Arrow Functions (≥3)	Contoh:
• menuItems.forEach(mi => {...})
• card.querySelector('.done').addEventListener('click', () => {...})
• clearFiltersBtn.addEventListener('click', () => {...})
Template Literals	Digunakan untuk membuat elemen HTML secara dinamis, misalnya dalam renderList() dan renderSummary().
Async/Await	Diterapkan pada fungsi waktu & tanggal (updateDateTime) secara asynchronous untuk update real-time.
Class Implementation	Kelas Kegiatan dapat digunakan untuk menginisialisasi setiap data kegiatan (konsep ini sudah terintegrasi dalam struktur objek kegiatan).
🧠 Struktur Folder & File
📂 project-dashboard/
├── index.html        # Struktur utama halaman
├── style.css         # Desain dan tata letak
├── script.js         # Logika utama aplikasi (ES6+)
└── README.md         # Dokumentasi proyek

🗂️ Penjelasan Singkat Kode
🔸 index.html

Berisi struktur utama tampilan:

Sidebar navigasi.

Tiga halaman utama: Beranda, Jadwal Kuliah, Jadwal Kegiatan.

Form input kegiatan dan tabel jadwal kuliah.

🔸 style.css

Mengatur tampilan:

Menggunakan variabel warna (--pink-400, --pink-500) untuk konsistensi tema.

Desain responsif untuk layar kecil (media query ≤1000px).

Efek hover dan animasi transisi lembut pada tombol dan kartu.

🔸 script.js

Berisi logika utama:

updateDateTime() → memperbarui jam & tanggal real-time.

renderList() → menampilkan daftar kegiatan berdasarkan pencarian & filter.

renderSummary() → menampilkan ringkasan total kegiatan.

enterEditMode() / exitEditMode() → mengatur mode edit kegiatan.

localStorage → menyimpan dan memuat data kegiatan pengguna.

Event listener untuk navigasi, form, filter, dan tombol aksi.

📦 Fungsionalitas localStorage

Semua data disimpan dengan key:

const STORAGE_KEY = 'kegiatan_v1';


Fungsi save() menyimpan array kegiatan:

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(kegiatan));
  renderSummary();
}


Setiap kali pengguna menambah, mengedit, atau menghapus kegiatan, data akan otomatis diperbarui di localStorage.

🧩 Contoh Struktur Data yang Disimpan
[
  {
    "nama": "Rapat Organisasi",
    "tanggal": "2025-10-27",
    "waktu": "13:00",
    "jenis": "Organisasi",
    "lokasi": "Aula B",
    "deskripsi": "Pembahasan acara akhir tahun",
    "selesai": false
  }
]

📸 Screenshot Aplikasi
Tampilan	Deskripsi

	Tampilan beranda dengan ringkasan kegiatan

	Form interaktif untuk menambah kegiatan

	Daftar kegiatan yang bisa diedit, dihapus, atau ditandai selesai
🚀 Cara Menjalankan Aplikasi

Unduh seluruh file (index.html, style.css, script.js).

Buka file index.html di browser.

Tambahkan kegiatan menggunakan form.

Data akan otomatis tersimpan di browser melalui localStorage.