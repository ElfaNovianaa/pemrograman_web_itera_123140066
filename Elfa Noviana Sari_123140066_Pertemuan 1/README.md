# Website Manajemen Tugas Mahasiswa

Repository ini berisi proyek website manajemen tugas mahasiswa sebagai bagian dari tugas praktikum mata kuliah Pemrograman aplikasi Website.

*Nama*: Elfa Noviana Sari
*NIM*: 123140066
*Kelas*: RB


## Deskripsi Aplikasi

Aplikasi website to do list sederhana untuk membantu mahasiswa mengelola tugas-tugas kuliah dengan fitur CRUD lengkap, filter, pencarian, dan penyimpanan lokal menggunakan localStorage. Interface dirancang dengan tema pink yang friendly dan mudah digunakan.

## Fitur-Fitur

1. *Manajemen Tugas*
- Tambah tugas baru (nama tugas, mata kuliah, deskripsi, deadline)
- Edit tugas yang sudah ada melalui modal
- Hapus tugas dengan konfirmasi
- Toggle status selesai/belum selesai
- Field deskripsi opsional untuk detail tambahan

2. *Penyimpanan Data*
- Menggunakan localStorage browser
- Data tetap ada setelah browser ditutup
- Tidak perlu koneksi internet
- Data tersimpan secara lokal di device

3. *Validasi Form*
- Nama tugas tidak boleh kosong
- Mata kuliah wajib diisi
- Deadline tidak boleh di masa lalu
- Alert notification untuk error dan success

4. Filter & Pencarian
- Cari tugas berdasarkan nama atau mata kuliah
- Filter berdasarkan status: Semua tugas, Belum selesai, dan Selesai
- Real-time filtering saat mengetik

5. Statistik Real-time
- Total tugas
- Jumlah tugas selesai
- Jumlah tugas belum selesai
- Update otomatis setiap ada perubahan

## Cara Menjalankan Aplikasi

1. Download atau clone repository ini
2. Ekstrak file (jika dalam bentuk zip)
3. Buka file index.html di browser (Chrome, Firefox, Edge, dll)
4. Website siap digunakan!

## Tampilan Website
1. *Tampilan utama untuk pengisian nama tugas, nama mata kuliah, deskripsi tugas (opsional), dan deadline tugas*
   
   <img width="1918" height="704" alt="image" src="https://github.com/user-attachments/assets/b8bbb443-bc1a-4d09-b2b7-f0dd02136bc5" />
3. *Tampilan daftar tugas, terdapat statistika total, tugas selesai, dan tugas belum selesai serta detail tugas yang sudah ditambahkan*
   <img width="1915" height="1000" alt="image" src="https://github.com/user-attachments/assets/90207346-5fa5-428d-89ef-5a50475057c1" />
4. *Tampilan fitur mencari tugas berdasarkan semua tugas, tugas selesai, dan tugas belum selesai*
   <img width="1913" height="492" alt="image" src="https://github.com/user-attachments/assets/d08e30ba-9a63-4e5e-ae2f-c2838ac45a28" />
5. *Tampilan tugas ketika di klik 'selesai' dan edit tugas*
<img width="1917" height="681" alt="image" src="https://github.com/user-attachments/assets/e3dbdb09-3c2f-4f6a-8cb9-de70b00b1eb4" />
<img width="1918" height="886" alt="image" src="https://github.com/user-attachments/assets/f4532139-b03c-4544-ad21-df2237a404d5" />

## Penjelasan Teknis
### localStorage
Aplikasi ini menggunakan localStorage untuk menyimpan data tugas. Data disimpan dalam format JSON dan akan tetap ada meskipun browser ditutup.

javascript
// Menyimpan data
localStorage.setItem("tugas", JSON.stringify(tasks));

// Mengambil data
let tasks = JSON.parse(localStorage.getItem("tugas")) || [];

### Validasi Form
Aplikasi memiliki validasi untuk memastikan data yang diinput valid:
- Nama tugas, mata kuliah, dan deadline tidak boleh kosong
- Deadline tidak boleh di masa lalu
- Ada alert konfirmasi untuk setiap aksi penting

### Responsive Design
Aplikasi sudah responsive dan bisa diakses dari perangkat mobile dengan layout yang menyesuaikan ukuran layar.

## Fitur yang Sudah Diimplementasikan

CRUD (Create, Read, Update, Delete) tugas lengkap  
localStorage untuk penyimpanan data  
Validasi form input  
Filter dan pencarian tugas  
Statistik jumlah tugas  
Responsive design  
Modal untuk edit tugas  
Konfirmasi sebelum hapus  

Toggle status selesai/belum

