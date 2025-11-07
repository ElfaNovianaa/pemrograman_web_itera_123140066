import fungsi_mahasiswa as fm

# Data mahasiswa (list berisi dictionary)
data_mahasiswa = [
    {'nama': 'Rafa Adrian Wiratama', 'nim': '123140340', 'nilai_uts': 50, 'nilai_uas': 45, 'nilai_tugas': 90},
    {'nama': 'Nadia Shafira Putri', 'nim': '123140278', 'nilai_uts': 78, 'nilai_uas': 82, 'nilai_tugas': 85},
    {'nama': 'Dimas Alvaro Pratama', 'nim': '123140090', 'nilai_uts': 20, 'nilai_uas': 34, 'nilai_tugas': 93},
    {'nama': 'Citra Ayuning Tyas', 'nim': '123140065', 'nilai_uts': 65, 'nilai_uas': 70, 'nilai_tugas': 68},
    {'nama': 'Galih Rizky Ananta', 'nim': '123140540', 'nilai_uts': 55, 'nilai_uas': 60, 'nilai_tugas': 58}
]


def tampilkan_menu():
    """Menampilkan menu program"""
    print("\n" + "="*50)
    print("   PROGRAM PENGELOLAAN DATA NILAI MAHASISWA")
    print("="*50)
    print("1. Tampilkan Semua Data")
    print("2. Tambah Data Mahasiswa")
    print("3. Cari Nilai Tertinggi")
    print("4. Cari Nilai Terendah")
    print("5. Hitung Rata-rata Kelas")
    print("6. Filter Berdasarkan Grade")
    print("0. Keluar")
    print("="*50)


def main():
    """Fungsi utama program"""
    while True:
        tampilkan_menu()
        pilihan = input("Pilih menu (0-6): ")
        
        if pilihan == '1':
            # Tampilkan semua data
            print("\n=== DATA NILAI MAHASISWA ===")
            fm.tampilkan_tabel(data_mahasiswa)
        
        elif pilihan == '2':
            # Tambah mahasiswa baru
            mahasiswa_baru = fm.input_mahasiswa()
            data_mahasiswa.append(mahasiswa_baru)
        
        elif pilihan == '3':
            # Cari nilai tertinggi
            mhs, nilai = fm.cari_nilai_tertinggi(data_mahasiswa)
            print(f"\n=== NILAI TERTINGGI ===")
            print(f"Nama: {mhs['nama']}")
            print(f"NIM: {mhs['nim']}")
            print(f"Nilai Akhir: {nilai:.2f}")
            print(f"Grade: {fm.tentukan_grade(nilai)}")
        
        elif pilihan == '4':
            # Cari nilai terendah
            mhs, nilai = fm.cari_nilai_terendah(data_mahasiswa)
            print(f"\n=== NILAI TERENDAH ===")
            print(f"Nama: {mhs['nama']}")
            print(f"NIM: {mhs['nim']}")
            print(f"Nilai Akhir: {nilai:.2f}")
            print(f"Grade: {fm.tentukan_grade(nilai)}")
        
        elif pilihan == '5':
            # Hitung rata-rata kelas
            rata_rata = fm.hitung_rata_rata(data_mahasiswa)
            print(f"\n=== RATA-RATA KELAS ===")
            print(f"Rata-rata: {rata_rata:.2f}")
            print(f"Grade: {fm.tentukan_grade(rata_rata)}")
        
        elif pilihan == '6':
            # Filter berdasarkan grade
            grade = input("\nMasukkan Grade (A/B/C/D/E): ").upper()
            hasil = fm.filter_grade(data_mahasiswa, grade)
            
            if len(hasil) > 0:
                print(f"\n=== MAHASISWA DENGAN GRADE {grade} ===")
                fm.tampilkan_tabel(hasil)
            else:
                print(f"\nTidak ada mahasiswa dengan grade {grade}")
        
        elif pilihan == '0':
            # Keluar program
            print("\nTerima kasih! Program selesai.")
            break
        
        else:
            print("\nPilihan tidak valid!")
        
        input("\nTekan Enter untuk melanjutkan...")


# Jalankan program
if __name__ == "__main__":
    main()