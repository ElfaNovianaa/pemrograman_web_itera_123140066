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

Penjelasan : Menampilkan 7 pilihan menu utama, muncul saat program dimulai atau setelah selesai menggunakan fitur lain.

Penjelasan : Menampilkan seluruh data mahasiswa dalam tabel terstruktur yang berisi Nama, NIM, UTS, UAS, Tugas, Nilai Akhir, dan Grade (A/B/C/D/E).

Penjelasan : Memungkinkan penambahan data mahasiswa (Nama, NIM, Nilai UTS, UAS, Tugas) dengan validasi otomatis (harus angka dan dalam rentang 0-100).

Penjelasan : Mencari dan menampilkan informasi lengkap (Nama, NIM, Nilai Akhir, Grade) dari mahasiswa dengan nilai akhir tertinggi di kelas.

Penjelasan : Mencari dan menampilkan informasi lengkap (Nama, NIM, Nilai Akhir, Grade) dari mahasiswa dengan nilai akhir terendah di kelas.

Penjelasan : Menghitung dan menampilkan rata-rata nilai akhir seluruh kelas, termasuk menampilkan grade dari rata-rata tersebut.

Penjelasan : Memfilter data berdasarkan grade yang dimasukkan user (A/B/C/D/E) dan menampilkan hasilnya dalam format tabel.

Penjelasan : Mengakhiri program dengan aman dan menampilkan pesan penutup.
