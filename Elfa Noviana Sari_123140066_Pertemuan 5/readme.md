# Sistem Manajemen Perpustakaan Sederhana

Sistem Manajemen Perpustakaan adalah aplikasi berbasis Python yang menerapkan konsep Object-Oriented Programming (OOP) untuk mengelola koleksi perpustakaan. Program ini memungkinkan pengguna untuk menambah, mencari, meminjam, dan mengembalikan item perpustakaan seperti buku dan majalah.

## Fitur Utama

* **Manajemen Item Perpustakaan**
    * Menambahkan buku dengan detail lengkap (judul, penulis, tahun, jumlah halaman)
    * Menambahkan majalah dengan informasi (judul, edisi, penerbit, tahun)
    * Validasi ID unik untuk setiap item

* **Pencarian Item**
    * Pencarian berdasarkan ID item (*exact match*)
    * Pencarian berdasarkan judul (*partial match/fuzzy search*)
    * Menampilkan informasi detail item dalam format terstruktur

* **Sistem Peminjaman**
    * Meminjam item yang tersedia
    * Mengembalikan item yang dipinjam
    * *Tracking* status ketersediaan item secara *real-time*

* **Statistik Perpustakaan**
    * Total item dalam koleksi
    * Jumlah buku dan majalah
    * Status ketersediaan (tersedia/dipinjam)

* **Interface User-Friendly**
    * Menu interaktif dengan navigasi mudah
    * Tampilan informasi terformat dengan *box* ASCII
    * *Feedback* yang jelas untuk setiap aksi

## Struktur OOP

### 1. Abstract Class: `LibraryItem`

* **Penerapan Konsep:**
    * *Abstract Base Class* yang menjadi *blueprint* untuk semua jenis item perpustakaan
    * Mengimplementasikan *encapsulation* dengan *private* (`__item_id`) dan *protected* (`_title`, `_year`) *attributes*
    * *Property decorator* untuk akses aman ke atribut
    * *Abstract methods* yang wajib diimplementasikan oleh *subclass*
* **Atribut:**
    * `__item_id`: ID unik item (*private*)
    * `_title`: Judul item (*protected*)
    * `_year`: Tahun terbit (*protected*)
    * `_is_available`: Status ketersediaan (*protected*)
* **Methods:**
    * `borrow()`: Meminjam item
    * `return_item()`: Mengembalikan item
    * `get_info()`: *Abstract method* untuk menampilkan informasi (*polymorphism*)
    * `get_category()`: *Abstract method* untuk mendapatkan kategori item

### 2. Class: `Book` (Inheritance dari `LibraryItem`)

* **Atribut Tambahan:**
    * `_author`: Nama penulis
    * `_pages`: Jumlah halaman
* **Implementasi Polymorphism:**
    * *Override* method `get_info()` dengan format khusus untuk buku
    * *Override* method `get_category()` mengembalikan "Buku"

### 3. Class: `Magazine` (Inheritance dari `LibraryItem`)

* **Atribut Tambahan:**
    * `_issue_number`: Nomor edisi majalah
    * `_publisher`: Nama penerbit
* **Implementasi Polymorphism:**
    * *Override* method `get_info()` dengan format khusus untuk majalah
    * *Override* method `get_category()` mengembalikan "Majalah"

### 4. Class: `Library`

* **Encapsulation:**
    * `__name`: Nama perpustakaan (*private*)
    * `__items`: Koleksi item perpustakaan (*private*)
* **Methods:**
    * `add_item()`: Menambah item ke perpustakaan
    * `display_all_items()`: Menampilkan semua item
    * `find_by_id()`: Mencari item berdasarkan ID
    * `find_by_title()`: Mencari item berdasarkan judul
    * `borrow_item()`: Meminjam item
    * `return_item()`: Mengembalikan item
    * `get_statistics()`: Menampilkan statistik perpustakaan

## 🎯 Konsep OOP yang Diterapkan

1.  **Inheritance**
    * `Book` dan `Magazine` mewarisi dari *abstract class* `LibraryItem`
    * Menggunakan `super().__init__()` untuk memanggil *constructor parent class*
    * Mewarisi method `borrow()` dan `return_item()`

2.  **Encapsulation**
    * *Private attributes* (`__item_id`, `__name`, `__items`) dengan *name mangling*
    * *Protected attributes* (`_title`, `_year`, `_author`, dll)
    * *Property decorators* untuk *controlled access*:
        ```python
        @property
        def title(self) -> str:
            return self._title
        
        @title.setter
        def title(self, value: str):
            if not value or len(value.strip()) == 0:
                raise ValueError("Judul tidak boleh kosong")
            self._title = value
        ```

3.  **Polymorphism**
    * *Abstract methods* (`get_info()`, `get_category()`) yang diimplementasikan berbeda di setiap *subclass*
    * Setiap *subclass* meng-*override* method dengan implementasi spesifik sesuai jenisnya
    * *Duck typing*: `Library` dapat menangani berbagai tipe item tanpa perlu tahu tipe spesifiknya

4.  **Abstraction**
    * Menggunakan `ABC` (*Abstract Base Class*) dari *module* `abc`
    * Method *abstract* (`@abstractmethod`) memaksa *subclass* untuk implementasi
    * Interface konsisten untuk semua *library items*

## Navigasi Menu
- Tambah Buku → Menambahkan buku baru ke perpustakaan
- Tambah Majalah → Menambahkan majalah baru ke perpustakaan
- Tampilkan Semua Item → Melihat semua koleksi perpustakaan
- Cari Item (ID) → Mencari item dengan ID spesifik
- Cari Item (Judul) → Mencari item berdasarkan judul
- Pinjam Item → Meminjam item yang tersedia
- Kembalikan Item → Mengembalikan item yang dipinjam
- Statistik → Melihat statistik perpustakaan
- Keluar → Keluar dari program

## Tampilan Program
<img width="1016" height="566" alt="image" src="https://github.com/user-attachments/assets/24bfbc4a-b528-42aa-808d-adfbf606c28b" />
Penjelasan : Tampilan Semua Item Perpustakaan

<img width="1103" height="409" alt="image" src="https://github.com/user-attachments/assets/ac205f96-a87a-4d9f-8a1e-80596cc18c4a" />
Penjelasan : Tampilan ketika menambah buku ke perpustakaan

<img width="1117" height="446" alt="image" src="https://github.com/user-attachments/assets/1bc849fe-f5b9-4d9a-a272-2f707f1e974e" />
Penjelasan : Tampilan ketika menambah majalah ke perpustakaan

<img width="1062" height="516" alt="image" src="https://github.com/user-attachments/assets/dee71d75-bdd8-4e4c-9380-8f5cf0420312" />
Penjelasan : Tampilan ketika mencari item berdasarkan ID

<img width="1097" height="369" alt="image" src="https://github.com/user-attachments/assets/f8dcfa12-ad1f-4fd2-81b1-63dc693bad5c" />
Penjelasan : Tampilan ketika mencari item berdasarkan judul

<img width="1096" height="487" alt="image" src="https://github.com/user-attachments/assets/09dd0550-ae42-4510-97cf-c85c2e6292c7" />
Penjelasan : Peminjaman item dan terhubung dengan statis (terlihat 1 peminjaman)

<img width="1170" height="492" alt="image" src="https://github.com/user-attachments/assets/1f74ad72-06be-4262-9371-e89a6a3f3621" />
Penjelasan : Pengembalian item dan terhubung dengan statis (terlihat 0 peminjaman)
