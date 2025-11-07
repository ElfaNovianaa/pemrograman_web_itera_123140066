def hitung_nilai_akhir(uts, uas, tugas):
    """
    Menghitung nilai akhir mahasiswa
    Formula: 30% UTS + 40% UAS + 30% Tugas
    """
    return (uts * 0.3) + (uas * 0.4) + (tugas * 0.3)


def tentukan_grade(nilai_akhir):
    """
    Menentukan grade berdasarkan nilai akhir
    A: ≥80, B: ≥70, C: ≥60, D: ≥50, E: <50
    """
    if nilai_akhir >= 80:
        return 'A'
    elif nilai_akhir >= 70:
        return 'B'
    elif nilai_akhir >= 60:
        return 'C'
    elif nilai_akhir >= 50:
        return 'D'
    else:
        return 'E'


def tampilkan_tabel(data_mahasiswa):
    """
    Menampilkan data mahasiswa dalam format tabel
    """
    print("\n" + "="*100)
    print(f"{'No':<5} {'Nama':<20} {'NIM':<12} {'UTS':<8} {'UAS':<8} {'Tugas':<8} {'Nilai Akhir':<13} {'Grade':<8}")
    print("="*100)
    
    for i, mhs in enumerate(data_mahasiswa, 1):
        nilai_akhir = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        grade = tentukan_grade(nilai_akhir)
        
        print(f"{i:<5} {mhs['nama']:<20} {mhs['nim']:<12} {mhs['nilai_uts']:<8} "
              f"{mhs['nilai_uas']:<8} {mhs['nilai_tugas']:<8} {nilai_akhir:<13.2f} {grade:<8}")
    
    print("="*100)


def cari_nilai_tertinggi(data_mahasiswa):
    """
    Mencari mahasiswa dengan nilai tertinggi
    """
    mhs_terbaik = data_mahasiswa[0]
    nilai_tertinggi = hitung_nilai_akhir(mhs_terbaik['nilai_uts'], 
                                         mhs_terbaik['nilai_uas'], 
                                         mhs_terbaik['nilai_tugas'])
    
    for mhs in data_mahasiswa:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if nilai > nilai_tertinggi:
            nilai_tertinggi = nilai
            mhs_terbaik = mhs
    
    return mhs_terbaik, nilai_tertinggi


def cari_nilai_terendah(data_mahasiswa):
    """
    Mencari mahasiswa dengan nilai terendah
    """
    mhs_terendah = data_mahasiswa[0]
    nilai_terendah = hitung_nilai_akhir(mhs_terendah['nilai_uts'], 
                                        mhs_terendah['nilai_uas'], 
                                        mhs_terendah['nilai_tugas'])
    
    for mhs in data_mahasiswa:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if nilai < nilai_terendah:
            nilai_terendah = nilai
            mhs_terendah = mhs
    
    return mhs_terendah, nilai_terendah


def hitung_rata_rata(data_mahasiswa):
    """
    Menghitung rata-rata nilai kelas
    """
    total = 0
    for mhs in data_mahasiswa:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        total += nilai
    
    return total / len(data_mahasiswa)


def filter_grade(data_mahasiswa, grade):
    """
    Filter mahasiswa berdasarkan grade
    """
    hasil = []
    for mhs in data_mahasiswa:
        nilai = hitung_nilai_akhir(mhs['nilai_uts'], mhs['nilai_uas'], mhs['nilai_tugas'])
        if tentukan_grade(nilai) == grade:
            hasil.append(mhs)
    
    return hasil


def input_mahasiswa():
    """
    Input data mahasiswa baru
    """
    print("\n=== INPUT DATA MAHASISWA BARU ===")
    
    nama = input("Nama: ")
    nim = input("NIM: ")
    
    # Input dan validasi nilai UTS
    while True:
        try:
            uts = float(input("Nilai UTS (0-100): "))
            if 0 <= uts <= 100:
                break
            print("Nilai harus antara 0-100!")
        except ValueError:
            print("Input harus berupa angka!")
    
    # Input dan validasi nilai UAS
    while True:
        try:
            uas = float(input("Nilai UAS (0-100): "))
            if 0 <= uas <= 100:
                break
            print("Nilai harus antara 0-100!")
        except ValueError:
            print("Input harus berupa angka!")
    
    # Input dan validasi nilai Tugas
    while True:
        try:
            tugas = float(input("Nilai Tugas (0-100): "))
            if 0 <= tugas <= 100:
                break
            print("Nilai harus antara 0-100!")
        except ValueError:
            print("Input harus berupa angka!")
    
    mahasiswa_baru = {
        'nama': nama,
        'nim': nim,
        'nilai_uts': uts,
        'nilai_uas': uas,
        'nilai_tugas': tugas
    }
    
    print("\nData berhasil ditambahkan!\n")
    return mahasiswa_baru