from abc import ABC, abstractmethod
from typing import List, Optional
from datetime import datetime


class LibraryItem(ABC):
    def __init__(self, item_id: str, title: str, year: int):
        self.__item_id = item_id  # Private attribute
        self._title = title  # Protected attribute
        self._year = year
        self._is_available = True
    
    @property
    def item_id(self) -> str:
        return self.__item_id
    
    @property
    def title(self) -> str:
        return self._title
    
    @title.setter
    def title(self, value: str):
        if not value or len(value.strip()) == 0:
            raise ValueError("Judul tidak boleh kosong")
        self._title = value
    
    @property
    def is_available(self) -> bool:
        return self._is_available
    
    def borrow(self):
        if self._is_available:
            self._is_available = False
            return True
        return False
    
    def return_item(self):
        self._is_available = True
    
    @abstractmethod
    def get_info(self) -> str:
        pass
    
    @abstractmethod
    def get_category(self) -> str:
        pass
    
    def __str__(self) -> str:
        status = "Tersedia" if self._is_available else "Dipinjam"
        return f"[{self.item_id}] {self._title} ({self._year}) - {status}"


class Book(LibraryItem):
    def __init__(self, item_id: str, title: str, year: int, author: str, pages: int):
        super().__init__(item_id, title, year)
        self._author = author
        self._pages = pages
    
    @property
    def author(self) -> str:
        return self._author
    
    def get_info(self) -> str:
        status = "Tersedia" if self.is_available else "Dipinjam"
        return f"""
╔════════════════════════════════════════╗
║           INFORMASI BUKU               ║
╠════════════════════════════════════════╣
║ ID       : {self.item_id:<28}║
║ Judul    : {self.title:<28}║
║ Penulis  : {self._author:<28}║
║ Tahun    : {self._year:<28}║
║ Halaman  : {self._pages:<28}║
║ Status   : {status:<28}║
╚════════════════════════════════════════╝
"""
    
    def get_category(self) -> str:
        return "Buku"


class Magazine(LibraryItem):
    def __init__(self, item_id: str, title: str, year: int, issue_number: int, publisher: str):
        super().__init__(item_id, title, year)
        self._issue_number = issue_number
        self._publisher = publisher
    
    @property
    def issue_number(self) -> int:
        return self._issue_number
    
    def get_info(self) -> str:
        status = "Tersedia" if self.is_available else "Dipinjam"
        return f"""
╔════════════════════════════════════════╗
║          INFORMASI MAJALAH             ║
╠════════════════════════════════════════╣
║ ID       : {self.item_id:<28}║
║ Judul    : {self.title:<28}║
║ Edisi    : #{self._issue_number:<27}║
║ Penerbit : {self._publisher:<28}║
║ Tahun    : {self._year:<28}║
║ Status   : {status:<28}║
╚════════════════════════════════════════╝
"""
    
    def get_category(self) -> str:
        return "Majalah"


class Library:
    def __init__(self, name: str):
        self.__name = name  # Private attribute
        self.__items: List[LibraryItem] = []  # Private collection
    
    @property
    def name(self) -> str:
        return self.__name
    
    def add_item(self, item: LibraryItem) -> bool:
        # Cek duplikasi ID
        if self.find_by_id(item.item_id):
            print(f"Item dengan ID {item.item_id} sudah ada!")
            return False
        
        self.__items.append(item)
        print(f"{item.get_category()} '{item.title}' berhasil ditambahkan!")
        return True
    
    def display_all_items(self):
        if not self.__items:
            print("Perpustakaan masih kosong.")
            return
        
        print(f"\n{'='*60}")
        print(f"DAFTAR KOLEKSI {self.__name.upper()}")
        print(f"{'='*60}")
        print(f"Total Item: {len(self.__items)}")
        print(f"{'-'*60}")
        
        for idx, item in enumerate(self.__items, 1):
            print(f"{idx}. {item}")
        print(f"{'='*60}\n")
    
    def find_by_id(self, item_id: str) -> Optional[LibraryItem]:
        for item in self.__items:
            if item.item_id.lower() == item_id.lower():
                return item
        return None
    
    def find_by_title(self, title: str) -> List[LibraryItem]:
        results = []
        search_term = title.lower()
        
        for item in self.__items:
            if search_term in item.title.lower():
                results.append(item)
        
        return results
    
    def borrow_item(self, item_id: str) -> bool:
        item = self.find_by_id(item_id)
        if not item:
            print(f"Item dengan ID {item_id} tidak ditemukan!")
            return False
        
        if item.borrow():
            print(f"Berhasil meminjam '{item.title}'")
            return True
        else:
            print(f"'{item.title}' sedang dipinjam!")
            return False
    
    def return_item(self, item_id: str) -> bool:
        item = self.find_by_id(item_id)
        if not item:
            print(f"Item dengan ID {item_id} tidak ditemukan!")
            return False
        
        item.return_item()
        print(f"Berhasil mengembalikan '{item.title}'")
        return True
    
    def get_statistics(self):
        total = len(self.__items)
        available = sum(1 for item in self.__items if item.is_available)
        borrowed = total - available
        
        books = sum(1 for item in self.__items if isinstance(item, Book))
        magazines = sum(1 for item in self.__items if isinstance(item, Magazine))
        
        print(f"\n{'='*50}")
        print(f"STATISTIK {self.__name.upper()}")
        print(f"{'='*50}")
        print(f"Total Item        : {total}")
        print(f"  - Buku          : {books}")
        print(f"  - Majalah       : {magazines}")
        print(f"Tersedia          : {available}")
        print(f"Sedang Dipinjam   : {borrowed}")
        print(f"{'='*50}\n")


def display_menu():
    """Menampilkan menu utama"""
    print("\n╔════════════════════════════════════════╗")
    print("║   SISTEM MANAJEMEN PERPUSTAKAAN        ║")
    print("╠════════════════════════════════════════╣")
    print("║ 1. Tambah Buku                         ║")
    print("║ 2. Tambah Majalah                      ║")
    print("║ 3. Tampilkan Semua Item                ║")
    print("║ 4. Cari Item (berdasarkan ID)          ║")
    print("║ 5. Cari Item (berdasarkan Judul)       ║")
    print("║ 6. Pinjam Item                         ║")
    print("║ 7. Kembalikan Item                     ║")
    print("║ 8. Statistik Perpustakaan              ║")
    print("║ 9. Keluar                              ║")
    print("╚════════════════════════════════════════╝")


def main():
    library = Library("Perpustakaan Institut Teknologi Sumatera")
    
    # Data contoh untuk testing
    library.add_item(Book("BK001", "Python Programming", 2023, "John Doe", 450))
    library.add_item(Book("BK002", "Data Science Fundamentals", 2024, "Jane Smith", 380))
    library.add_item(Magazine("MG001", "Tech Monthly", 2025, 12, "Tech Publisher"))
    library.add_item(Magazine("MG002", "Science Today", 2025, 5, "Science Press"))
    
    while True:
        display_menu()
        choice = input("Pilih menu (1-9): ").strip()
        
        if choice == "1":
            print("\nTAMBAH BUKU")
            item_id = input("ID Buku: ").strip()
            title = input("Judul: ").strip()
            author = input("Penulis: ").strip()
            year = int(input("Tahun: "))
            pages = int(input("Jumlah Halaman: "))
            
            book = Book(item_id, title, year, author, pages)
            library.add_item(book)
        
        elif choice == "2":
            print("\nTAMBAH MAJALAH")
            item_id = input("ID Majalah: ").strip()
            title = input("Judul: ").strip()
            issue = int(input("Nomor Edisi: "))
            publisher = input("Penerbit: ").strip()
            year = int(input("Tahun: "))
            
            magazine = Magazine(item_id, title, year, issue, publisher)
            library.add_item(magazine)
        
        elif choice == "3":
            library.display_all_items()
        
        elif choice == "4":
            print("\nCARI BERDASARKAN ID")
            item_id = input("Masukkan ID: ").strip()
            item = library.find_by_id(item_id)
            
            if item:
                print(item.get_info())
            else:
                print(f"Item dengan ID '{item_id}' tidak ditemukan!")
        
        elif choice == "5":
            print("\nCARI BERDASARKAN JUDUL")
            title = input("Masukkan judul (atau sebagian): ").strip()
            results = library.find_by_title(title)
            
            if results:
                print(f"\nDitemukan {len(results)} item:")
                for idx, item in enumerate(results, 1):
                    print(f"{idx}. {item}")
            else:
                print(f"Tidak ada item dengan judul '{title}'")
        
        elif choice == "6":
            print("\nPINJAM ITEM")
            item_id = input("Masukkan ID item: ").strip()
            library.borrow_item(item_id)
        
        elif choice == "7":
            print("\nKEMBALIKAN ITEM")
            item_id = input("Masukkan ID item: ").strip()
            library.return_item(item_id)
        
        elif choice == "8":
            library.get_statistics()
        
        elif choice == "9":
            print("\nTerima kasih telah menggunakan sistem perpustakaan!")
            break
        
        else:
            print("Pilihan tidak valid! Silakan pilih 1-9.")
        
        input("\nTekan Enter untuk melanjutkan...")


if __name__ == "__main__":
    main()