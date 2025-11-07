# Aplikasi Manajemen Buku Pribadi

Program Python ini dikembangkan untuk memenuhi tugas praktikum Pemrograman Web (Pertemuan 4) yang bertujuan mengelola data nilai mahasiswa secara interaktif menggunakan terminal. Program ini mengaplikasikan konsep **Fungsi**, **List**, **Dictionary**, dan **Custom Module**.

---

## 1. Deskripsi Aplikasi & Fitur

Program Python ini dibuat untuk membantu dalam menghitung dan menentukan fungsi fungsi (sesuai ketentuan tugas) dengan fitur-fitur berikut:

### Fitur Utama:
1. Tampilkan Semua Data
- Menampilkan seluruh data mahasiswa dalam format tabel
- Menampilkan nilai akhir dan grade setiap mahasiswa
2. Tambah Data Mahasiswa
- Input data mahasiswa baru
- Validasi input nilai (0-100)
- Otomatis menghitung nilai akhir dan grade
3. Cari Nilai Tertinggi
- Mencari dan menampilkan mahasiswa dengan nilai tertinggi
- Menampilkan detail lengkap mahasiswa tersebut
4. Cari Nilai Terendah
- Mencari dan menampilkan mahasiswa dengan nilai terendah
- Menampilkan detail lengkap mahasiswa tersebut
5. Hitung Rata-rata Kelas
- Menghitung rata-rata nilai seluruh kelas
- Menampilkan grade rata-rata kelas
6. Filter Berdasarkan Grade
- Filter mahasiswa berdasarkan grade tertentu (A/B/C/D/E)
- Menampilkan hasil filter dalam format tabel

## 2. Struktur Program
[NAMA]_[NIM]_pertemuan4/
│
├── fungsi_mahasiswa.py      # File modul berisi fungsi-fungsi
├── main.py                   # File program utama
└── README.md                 # File dokumentasi (file ini)

## 3. Cara Menjalankan Program

**Persyaratan**
- Python 3.x terinstall di komputer
- Terminal/Command Prompt

Langkah-langkah
1. Download Repository 
2. Masuk ke Folder Pertemuan 4
```bash
cd Elfa Noviana Sari_123140066_Pertemuan 4
```
3. Jalankan Program
```bash
python main.py
```

## 4. Dokumentasi Output


![Gambar WhatsApp 2025-11-07 pukul 09 29 39_4ac090b6](https://github.com/user-attachments/assets/5e0d2d18-a06e-4714-8a39-88899fa059cc)
Penjelasan : Menampilkan seluruh data mahasiswa dalam tabel terstruktur yang berisi Nama, NIM, UTS, UAS, Tugas, Nilai Akhir, dan Grade (A/B/C/D/E).

![Gambar WhatsApp 2025-11-07 pukul 09 30 25_97381703](https://github.com/user-attachments/assets/f5220327-572d-4b80-8ddc-38d30188fff2)
Penjelasan : Memungkinkan penambahan data mahasiswa (Nama, NIM, Nilai UTS, UAS, Tugas) dengan validasi otomatis (harus angka dan dalam rentang 0-100).

![Gambar WhatsApp 2025-11-07 pukul 09 30 46_52665826](https://github.com/user-attachments/assets/88307693-ff58-4cdd-8ba0-e14d7fbc8ebf)
Penjelasan : Mencari dan menampilkan informasi lengkap (Nama, NIM, Nilai Akhir, Grade) dari mahasiswa dengan nilai akhir tertinggi di kelas.

![Gambar WhatsApp 2025-11-07 pukul 09 31 00_efc9e625](https://github.com/user-attachments/assets/e8a4e8a6-956e-4d4a-8d29-bf2662884afd)
Penjelasan : Mencari dan menampilkan informasi lengkap (Nama, NIM, Nilai Akhir, Grade) dari mahasiswa dengan nilai akhir terendah di kelas.

![Gambar WhatsApp 2025-11-07 pukul 09 31 22_e9d13f27](https://github.com/user-attachments/assets/458a44c3-1cea-4a01-911f-c21e9d5011fb)
Penjelasan : Menghitung dan menampilkan rata-rata nilai akhir seluruh kelas, termasuk menampilkan grade dari rata-rata tersebut.

![Gambar WhatsApp 2025-11-07 pukul 09 32 37_2c8ee615](https://github.com/user-attachments/assets/e6bbf571-47df-43c0-b089-c37da1b51310)
Penjelasan : Memfilter data berdasarkan grade yang dimasukkan user (A/B/C/D/E) dan menampilkan hasilnya dalam format tabel.

![Gambar WhatsApp 2025-11-07 pukul 09 31 58_1cb52722](https://github.com/user-attachments/assets/277a906f-9958-40fb-a5b2-605b6d8e5bac)
Penjelasan : Mengakhiri program dengan aman dan menampilkan pesan penutup.
