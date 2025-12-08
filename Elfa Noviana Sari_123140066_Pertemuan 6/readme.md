# Aplikasi Manajemen Matakuliah dengan Pyramid

Aplikasi REST API sederhana untuk pengelolaan data Matakuliah yang dibangun menggunakan Pyramid Framework. Aplikasi ini menyediakan fitur CRUD (Create, Read, Update, Delete) lengkap untuk entitas matakuliah dengan database PostgreSQL.

## Deskripsi Proyek

Proyek ini adalah aplikasi backend API untuk manajemen data matakuliah yang dibuat sebagai tugas praktikum. Aplikasi ini memungkinkan pengguna untuk melakukan operasi dasar seperti menambah, melihat, mengubah, dan menghapus data matakuliah melalui REST API.

**Teknologi yang Digunakan:**
- **Language:** Python 3.10+
- **Framework:** Pyramid (Latest Stable)
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy 2.0
- **Migration:** Alembic

## Cara Instalasi

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

**a. Buat Database Baru:**

```bash
# Login sebagai user postgres
createdb -U postgres pyramid_matakuliah

# Atau melalui psql
psql -U postgres
CREATE DATABASE pyramid_matakuliah;
\q
```

**b. Konfigurasi Connection String:**

Edit file `development.ini` dan sesuaikan baris berikut dengan kredensial PostgreSQL Anda:

```ini
sqlalchemy.url = postgresql://user_matakuliah:pass_matakuliah@localhost:5432/pyramid_matakuliah
```

**c. Konfigurasi Alembic:**

Pastikan file `alembic.ini` memiliki connection string yang sama:

```ini
sqlalchemy.url = postgresql://user_matakuliah:pass_matakuliah@localhost:5432/pyramid_matakuliah
```

> **Catatan:** Ganti `user_matakuliah` dan `pass_matakuliah` dengan username dan password PostgreSQL Anda. Pastikan PostgreSQL server sudah berjalan di port 5432.

## Cara Menjalankan

### 1. Menjalankan Migrasi Database

Jalankan migrasi untuk membuat tabel yang diperlukan di database:

```bash
# Menggunakan Alembic
alembic upgrade head

# Atau menggunakan script inisialisasi
initialize_pyramid_matakuliah_db development.ini
```

### 2. Menjalankan Server

Jalankan server aplikasi menggunakan `pserve`:

```bash
pserve development.ini
```

Server akan berjalan di: **http://localhost:6543**

Anda akan melihat output seperti ini:
```
Starting server in PID 12345.
Serving on http://localhost:6543
```

## API Endpoints

Berikut adalah dokumentasi lengkap untuk semua endpoint yang tersedia:

### 1. Get All Matakuliah

Mengambil daftar semua matakuliah yang tersimpan dalam database.

**Request:**
```bash
curl -X GET http://localhost:6543/api/matakuliah
```

**Success Response :**
```json
{
  "matakuliahs": [
    {
      "id": 1,
      "kode_mk": "IF221",
      "nama_mk": "Pemrograman Web",
      "sks": 3,
      "semester": 4
    },
    {
      "id": 2,
      "kode_mk": "IF305",
      "nama_mk": "Kecerdasan Buatan",
      "sks": 3,
      "semester": 5
    }
  ]
}
```
![Gambar WhatsApp 2025-12-08 pukul 19 02 05_ecfc2e77](https://github.com/user-attachments/assets/c6261a90-c033-4a38-b578-f8eae77adde0)

---

### 2. Get Matakuliah by ID

Mengambil detail satu matakuliah berdasarkan ID.

**Request:**
```bash
curl -X GET http://localhost:6543/api/matakuliah/1
```

**Success Response :**
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
![Gambar WhatsApp 2025-12-08 pukul 19 04 11_035568e1](https://github.com/user-attachments/assets/9a477bd0-b28e-4de0-aeb1-1020f17db20a)

---

### 3. Add Matakuliah

Menambahkan data matakuliah baru ke dalam database.

**Request:**
```bash
curl -X POST http://localhost:6543/api/matakuliah \
     -H "Content-Type: application/json" \
     -d '{
       "kode_mk": "IF305",
       "nama_mk": "Kecerdasan Buatan",
       "sks": 3,
       "semester": 5
     }'
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "matakuliah": {
    "id": 2,
    "kode_mk": "IF305",
    "nama_mk": "Kecerdasan Buatan",
    "sks": 3,
    "semester": 5
  }
}
```
![Gambar WhatsApp 2025-12-08 pukul 19 52 05_0ce80d6b](https://github.com/user-attachments/assets/834c3050-8dfa-4e28-9a4a-8a18f4cbfae2)
![Gambar WhatsApp 2025-12-08 pukul 19 52 33_e2bd0315](https://github.com/user-attachments/assets/159513fb-4a41-4f95-9eb2-85cbd888bae6)

---

### 4. Update Matakuliah

Memperbarui data matakuliah yang sudah ada berdasarkan ID.

**Request:**
```bash
curl -X PUT http://localhost:6543/api/matakuliah/2 \
     -H "Content-Type: application/json" \
     -d '{
       "nama_mk": "Kecerdasan Buatan Lanjut",
       "sks": 4
     }'
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "matakuliah": {
    "id": 2,
    "kode_mk": "IF305",
    "nama_mk": "Kecerdasan Buatan Lanjut",
    "sks": 4,
    "semester": 5
  }
}
```
![Gambar WhatsApp 2025-12-08 pukul 19 57 31_6b8ba33e](https://github.com/user-attachments/assets/645520c6-ce94-4a25-b5f5-348782658488)


---

### 5. Delete Matakuliah

Menghapus data matakuliah dari database berdasarkan ID.

**Request:**
```bash
curl -X DELETE http://localhost:6543/api/matakuliah/2
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Matakuliah ID 2 berhasil dihapus"
}
```
![Gambar WhatsApp 2025-12-08 pukul 20 00 20_90a3eadd](https://github.com/user-attachments/assets/5cf95482-9fdb-4e60-98ac-dd11fb0c348b)


## Testing

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

## Struktur Database

### Tabel Matakuliah

| Kolom     | Tipe    | Constraint           | Deskripsi              |
|-----------|---------|----------------------|------------------------|
| id        | Integer | Primary Key          | ID unik (auto increment) |
| kode_mk   | Text    | Unique, Not Null     | Kode mata kuliah       |
| nama_mk   | Text    | Not Null             | Nama mata kuliah       |
| sks       | Integer | Not Null             | Jumlah SKS             |
| semester  | Integer | Not Null             | Semester pengambilan   |

