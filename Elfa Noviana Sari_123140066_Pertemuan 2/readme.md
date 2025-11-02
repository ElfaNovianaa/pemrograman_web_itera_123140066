# Aplikasi Personal Dashboard – Dashboard Mahasiswa

## Deskripsi Singkat
Dashboard Mahasiswa** adalah aplikasi web interaktif yang berfungsi sebagai **asisten pribadi digital bagi mahasiswa**.  
Aplikasi ini membantu pengguna **mengatur jadwal kuliah, mencatat kegiatan, dan memantau waktu secara real-time** melalui satu halaman dashboard yang modern dan responsif. Semua data kegiatan tersimpan otomatis di **localStorage**, sehingga tidak akan hilang meskipun browser ditutup.

Aplikasi ini menampilkan:
- Jadwal kuliah harian  
- Daftar kegiatan (organisasi, akademik, kepanitiaan, dan kuliah)  
- Ringkasan tugas dan kegiatan hari ini  
- Informasi waktu & tanggal secara real-time  
Seluruh data kegiatan disimpan di **localStorage**, sehingga tidak hilang meskipun browser ditutup atau halaman direfresh.

## Fitur Utama Pada Aplikasi ini

### 1. Navigasi Dinamis
- Sidebar interaktif dengan tiga menu utama:
  - 🏠 **Beranda**
  - 🎓 **Jadwal Kuliah**
  - 🗓️ **Jadwal Kegiatan**
- Navigasi menggunakan manipulasi DOM tanpa reload halaman (SPA sederhana).

### 2. Manajemen Jadwal Kegiatan
- Tambah, edit, hapus kegiatan.  
- Tandai kegiatan **selesai/belum selesai**.  
- Filter kegiatan berdasarkan jenis (Organisasi, Kuliah, Akademik, Kepanitiaan).  
- Pencarian berdasarkan **nama, lokasi, atau deskripsi kegiatan**.

### 3. Dashboard Ringkasan
- Menampilkan total kegiatan.  
- Jumlah kegiatan yang sudah selesai.  
- Jumlah kegiatan yang dijadwalkan **hari ini**.  
- Daftar kegiatan terdekat dengan prioritas waktu.

### 4. Real-Time Clock & Calendar
- Menampilkan waktu dan tanggal yang diperbarui setiap detik menggunakan fungsi asynchronous.

### 5. Penyimpanan Lokal
- Semua data tersimpan otomatis di **localStorage**, sehingga data tetap ada meskipun browser ditutup.

---

## Teknologi & Konsep yang Digunakan

| Aspek | Implementasi |
|-------|---------------|
| **Bahasa Pemrograman** | HTML5, CSS3, JavaScript (ES6+) |
| **Penyimpanan Data** | localStorage |
| **Paradigma** | DOM Manipulation, Object-Oriented Programming |
| **Desain UI/UX** | Flat modern dengan warna pastel |
| **Arsitektur** | SPA sederhana berbasis event listener dan manipulasi DOM |

---

## Implementasi Fitur ES6+

| Fitur ES6+ | Implementasi |
|-------------|--------------|
| **`let` & `const`** | Digunakan secara konsisten untuk deklarasi variabel agar memiliki scope yang tepat. |
| **Arrow Functions (≥3)** | Contoh penggunaan:<br>• `menuItems.forEach(mi => {...})`<br>• `clearFiltersBtn.addEventListener('click', () => {...})`<br>• `updateSummary = () => {...}` |
| **Template Literals** | Digunakan untuk men-generate HTML dinamis, seperti pada fungsi `renderList()` dan `renderSummary()`. |
| **Async/Await** | Diterapkan pada fungsi real-time clock untuk update jam secara asynchronous. |
| **Class Implementation** | Menggunakan class `Kegiatan` untuk representasi setiap data kegiatan. |

---

## Fungsi penyimpanan

```javascript
function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(kegiatan));
}
```

```javascript
saveToLocalStorage();
renderSummary();
```

```javascript
[
  {
    "nama": "Rapat Organisasi",
    "tanggal": "2025-10-27",
    "waktu": "13:00",
    "jenis": "Organisasi",
    "lokasi": "Aula B",
    "deskripsi": "Pembahasan acara akhir tahun",
    "selesai": false
  },
  {
    "nama": "Pengumpulan Tugas Pemweb",
    "tanggal": "2025-10-30",
    "waktu": "23:59",
    "jenis": "Akademik",
    "lokasi": "E-learning",
    "deskripsi": "Deadline tugas 4",
    "selesai": true
  }
]
```
---

## Screenshot Aplikasi
1. Halaman Beranda dengan ringkasan kegiatan
   
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a57fc9d2-554f-470f-ae8c-f1720cfec32a" />

2. Jadwal Tugas perkuliahan statis
   
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/55d85d56-398b-49e6-b226-5edf0f062125" />

3. Form interaktif untuk menambah kegiatan
   
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/2b0af482-93d1-4e46-92cf-79cbf3da4f54" />

4. Daftar kegiatan dengan tombol edit, hapus, dan tandai selesai
   
   <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/0ad630d6-bd30-406e-861b-0eb58490e6ef" />


---

## Cara Menjalankan Aplikasi
1. Unduh seluruh file (index.html, style.css, script.js, dan README.md).
2. Buka file index.html di browser (tidak perlu server).
3. Tambahkan kegiatan baru melalui form.
4. Data akan otomatis tersimpan di localStorage browser.
5. Navigasi antara menu Beranda, Jadwal Kuliah, dan Jadwal Kegiatan tanpa reload halaman.


