# Aplikasi Manajemen Matakuliah dengan Pyramid

Aplikasi REST API sederhana untuk pengelolaan data Matakuliah yang dibangun menggunakan Pyramid Framework. Aplikasi ini menyediakan fitur CRUD (Create, Read, Update, Delete) lengkap untuk entitas matakuliah dengan database PostgreSQL.

## 📋 Deskripsi Proyek

Proyek ini adalah aplikasi backend API untuk manajemen data matakuliah yang dibuat sebagai tugas praktikum. Aplikasi ini memungkinkan pengguna untuk melakukan operasi dasar seperti menambah, melihat, mengubah, dan menghapus data matakuliah melalui REST API.

**Teknologi yang Digunakan:**
- **Language:** Python 3.10+
- **Framework:** Pyramid (Latest Stable)
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy 2.0
- **Migration:** Alembic

## 🚀 Cara Instalasi

Ikuti langkah-langkah berikut untuk menyiapkan environment pengembangan di komputer Anda:

### 1. Membuat Virtual Environment

Pastikan Python 3.10 atau versi lebih baru sudah terinstall di komputer Anda.

```bash
# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Untuk Windows (Command Prompt)
venv\Scripts\activate

# Untuk Windows (Git Bash)
source venv/Scripts/activate

# Untuk Linux/MacOS
source venv/bin/activate

# Update pip ke versi terbaru
python -m pip install --upgrade pip
```

### 2. Instalasi Dependensi

Install aplikasi beserta semua dependensi yang diperlukan dalam mode editable:

```bash
pip install -e ".[testing]"
```

### 3. Konfigurasi Database

Aplikasi ini menggunakan PostgreSQL sebagai database. Ikuti langkah berikut:

#### a. Buat Database Baru:

```bash
# Login sebagai user postgres
createdb -U postgres pyramid_matakuliah

# Atau melalui psql
psql -U postgres
CREATE DATABASE pyramid_matakuliah;
\q
```

#### b. Konfigurasi Connection String:

Edit file `development.ini` dan sesuaikan baris berikut dengan kredensial PostgreSQL Anda:

```ini
sqlalchemy.url = postgresql://user_matakuliah:pass_matakuliah@localhost:5432/pyramid_matakuliah
```

#### c. Konfigurasi Alembic:

Pastikan file `alembic.ini` memiliki connection string yang sama:

```ini
sqlalchemy.url = postgresql://user_matakuliah:pass_matakuliah@localhost:5432/pyramid_matakuliah
```

> **Catatan:** Ganti `user_matakuliah` dan `pass_matakuliah` dengan username dan password PostgreSQL Anda. Pastikan PostgreSQL server sudah berjalan di port 5432.

## 🏃 Cara Menjalankan

### 1. Menjalankan Migrasi Database

Jalankan migrasi untuk membuat tabel yang diperlukan di database:

```bash
# Menggunakan Alembic
alembic upgrade head

# Atau menggunakan script inisialisasi
initialize_pyramid_matakuliah_db development.ini
```

### 2. Menjalankan Server

Jalankan server aplikasi menggunakan pserve:

```bash
pserve development.ini
```

Server akan berjalan di: **http://localhost:6543**

Anda akan melihat output seperti ini:
```
Starting server in PID 12345.
Serving on http://localhost:6543
```

## 📡 API Endpoints

Berikut adalah dokumentasi lengkap untuk semua endpoint yang tersedia:

### 1. Get All Matakuliah

Mengambil daftar semua matakuliah yang tersimpan dalam database.

**Request:**
```bash
curl -X GET http://localhost:6543/api/matakuliah
```

**Success Response:**
```json
{
  "matakuliahs": [
    {
      "id": 1,
      "kode_mk": "IF101",
      "nama_mk": "Basis Data",
      "sks": 3,
      "semester": 3
    },
    {
      "id": 2,
      "kode_mk": "IF102",
      "nama_mk": "Machine Learning",
      "sks": 3,
      "semester": 6
    },
    {
      "id": 3,
      "kode_mk": "IF103",
      "nama_mk": "Deep Learning",
      "sks": 3,
      "semester": 7
    }
  ]
}
```
![Gambar WhatsApp 2025-12-08 pukul 19 02 05_77a41cb7](https://github.com/user-attachments/assets/6c4f137a-16f1-452a-9549-fa279385683d)

![Gambar WhatsApp 2025-12-08 pukul 19 02 46_e4e39e52](https://github.com/user-attachments/assets/26126a87-9ed9-4509-9ceb-aaf73b8a633a)

### 2. Get Matakuliah by ID

Mengambil detail satu matakuliah berdasarkan ID.

**Request:**
```bash
curl -X GET http://localhost:6543/api/matakuliah/1
```

**Success Response:**
```json
{
  "matakuliah": {
    "id": 1,
    "kode_mk": "IF221",
    "nama_mk": "Pemrograman Web",
    "sks": 3,
    "semester": 4
  }
}
```
![Gambar WhatsApp 2025-12-08 pukul 19 04 11_b4caecb4](https://github.com/user-attachments/assets/8d68a946-7d4e-49ae-99e2-67786c83fea3)

### 3. Add Matakuliah

Menambahkan data matakuliah baru ke dalam database.

**Request:**
```bash
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{
       "kode_mk": "IF104",
       "nama_mk": "Pemrograman Web",
       "sks": 3,
       "semester": 4
     }'
```
![Gambar WhatsApp 2025-12-08 pukul 19 52 05_b847e9af](https://github.com/user-attachments/assets/a3e86341-0fea-4bce-a4f3-53ecfb464314)
![Gambar WhatsApp 2025-12-08 pukul 19 52 33_5a61994d](https://github.com/user-attachments/assets/0803869b-0f75-490c-8d37-842276f220b1)
![Gambar WhatsApp 2025-12-08 pukul 19 53 14_7fa7046f](https://github.com/user-attachments/assets/01f2d4cd-4b27-4846-ba87-d8a3531d87d8)


**Success Response (200 OK):**
```json
{
  "message": "Matakuliah created successfully",
  "matakuliah": {
    "id": null,
    "kode_mk": "IF104",
    "nama_mk": "Pemrograman Web",
    "sks": 3,
    "semester": 4
  }
}
```

### 4. Update Matakuliah

Memperbarui data matakuliah yang sudah ada berdasarkan ID.

**Request:**
```bash
curl -X PUT http://localhost:6543/api/matakuliah/4 \
     -H "Content-Type: application/json" \
     -d '{
       "nama_mk": "Pemrograman Aplikasi Web",
       "sks": 5
     }'
```

**Success Response (200 OK):**
```json
{
  "message": "Matakuliah updated successfully",
  "matakuliah": {
    "id": 4,
    "kode_mk": "IF104",
    "nama_mk": "Pemrograman Aplikasi Web",
    "sks": 5,
    "semester": 4
  }
}
```
![WhatsApp Image 2025-12-19 at 12 52 32](https://github.com/user-attachments/assets/bb090c36-9e14-4d69-b03d-be811e3f00b1)
![WhatsApp Image 2025-12-19 at 12 52 33](https://github.com/user-attachments/assets/c63a3371-15cc-449e-ac0f-c904ed709b3f)
![WhatsApp Image 2025-12-19 at 12 52 33 (1)](https://github.com/user-attachments/assets/ea7a6e0c-10cf-40f1-8548-eac86d6a1458)



### 5. Delete Matakuliah

Menghapus data matakuliah dari database berdasarkan ID.

**Request:**
```bash
curl -X DELETE http://localhost:6543/api/matakuliah/2
```

**Success Response (200 OK):**
```json
{
  "message": "Matakuliah deleted successfully"
}
```
![WhatsApp Image 2025-12-19 at 12 52 33 (2)](https://github.com/user-attachments/assets/d7e03ba4-f398-46c3-881b-c972315d1661)
![WhatsApp Image 2025-12-19 at 12 52 34](https://github.com/user-attachments/assets/7bd9f963-f647-43e4-aebb-b80823ff2dc5)
![WhatsApp Image 2025-12-19 at 12 52 34 (1)](https://github.com/user-attachments/assets/8e643305-62e1-4a5a-beec-c8efdd5d50bd)



## 🧪 Testing

### Testing dengan cURL

Berikut adalah contoh perintah lengkap untuk menguji setiap endpoint:

#### 1. Test GET All Matakuliah
```bash
curl -X GET http://localhost:6543/api/matakuliah
```

#### 2. Test POST (Tambah Data)
```bash
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{"kode_mk": "IF101", "nama_mk": "Algoritma Dasar", "sks": 3, "semester": 1}'
```

#### 3. Test GET Detail (dengan ID spesifik)
```bash
curl -X GET http://localhost:6543/api/matakuliah/1
```

#### 4. Test PUT (Update Data)
```bash
curl -X PUT http://localhost:6543/api/matakuliah/1 \
     -H "Content-Type: application/json" \
     -d '{"sks": 4, "nama_mk": "Algoritma Lanjut"}'
```

#### 5. Test DELETE (Hapus Data)
```bash
curl -X DELETE http://localhost:6543/api/matakuliah/1
```

### Testing dengan Postman

Anda juga dapat menggunakan Postman untuk testing yang lebih interaktif:

1. Import collection atau buat request baru
2. Set Base URL: `http://localhost:6543`
3. Gunakan endpoint sesuai dokumentasi di atas
4. Pastikan header `Content-Type: application/json` untuk POST dan PUT

### Data Testing Awal

Untuk memudahkan testing, Anda dapat menambahkan data awal dengan menjalankan perintah POST beberapa kali:

```bash
# Tambah data matakuliah 1
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{"kode_mk": "IF101", "nama_mk": "Algoritma dan Pemrograman", "sks": 3, "semester": 1}'

# Tambah data matakuliah 2
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{"kode_mk": "IF202", "nama_mk": "Struktur Data", "sks": 4, "semester": 2}'

# Tambah data matakuliah 3
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{"kode_mk": "IF303", "nama_mk": "Basis Data", "sks": 3, "semester": 3}'
```

## 🗄️ Struktur Database

### Tabel Matakuliah

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| id | Integer | Primary Key | ID unik (auto increment) |
| kode_mk | Text | Unique, Not Null | Kode mata kuliah |
| nama_mk | Text | Not Null | Nama mata kuliah |
| sks | Integer | Not Null | Jumlah SKS |
| semester | Integer | Not Null | Semester pengambilan |

## 🔧 Troubleshooting

### Error Koneksi Database

Jika terjadi error koneksi database, pastikan:
- PostgreSQL service sudah berjalan
- Username, password, dan nama database sudah benar
- Port 5432 tidak digunakan oleh aplikasi lain

### Error saat Migrasi

Jika ada error saat menjalankan migrasi:

```bash
# Drop semua tabel dan jalankan ulang migrasi
alembic downgrade base
alembic upgrade head
```

### Port 6543 Sudah Digunakan

Jika port 6543 sudah digunakan, edit file `development.ini`:

```ini
[server:main]
listen = localhost:6544
```

## 👨‍💻 Kontributor

- **Nama:** Elfa Noviana Sari
- **NIM:** 123140066
- **Kelas:** Pertemuan 6
- **Repository:** https://github.com/ElfaNovianaa/pemrograman_web_itera_123140066

