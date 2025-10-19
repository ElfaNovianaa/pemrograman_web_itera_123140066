// Ambil data dari localStorage atau array kosong
let tasks = JSON.parse(localStorage.getItem("tugas")) || [];
let editIdx = -1;

// Simpan ke localStorage
function saveToStorage() {
    localStorage.setItem("tugas", JSON.stringify(tasks));
}

// Tampilkan semua tugas
function displayTasks() {
    const list = document.getElementById("daftarTugas");
    const searchVal = document.getElementById("cari").value.toLowerCase();
    const filterVal = document.getElementById("filterStatus").value;
    
    list.innerHTML = "";
    
    // Filter tugas
    let filteredTasks = tasks.filter(function(task) {
        const matchSearch = task.nama.toLowerCase().includes(searchVal) || 
                          task.matkul.toLowerCase().includes(searchVal);
        const matchStatus = filterVal === "semua" || 
                          (filterVal === "selesai" && task.selesai) || 
                          (filterVal === "belum" && !task.selesai);
        return matchSearch && matchStatus;
    });
    
    if (filteredTasks.length === 0) {
        list.innerHTML = '<div class="empty">Tidak ada tugas</div>';
        updateStats();
        return;
    }
    
    // Tampilkan setiap tugas
    filteredTasks.forEach(function(task) {
        const idx = tasks.indexOf(task);
        const li = document.createElement("li");
        li.className = "task-item" + (task.selesai ? " done" : "");
        
        let taskHTML = '<div class="task-header">';
        taskHTML += '<div class="task-title">' + task.nama + '</div>';
        taskHTML += '<span class="task-status">' + (task.selesai ? 'SELESAI' : 'BELUM') + '</span>';
        taskHTML += '</div>';
        
        taskHTML += '<div class="task-info">';
        taskHTML += '📚 <span class="task-matkul">' + task.matkul + '</span>';
        taskHTML += '</div>';
        
        if (task.deskripsi) {
            taskHTML += '<div class="task-info">📝 ' + task.deskripsi + '</div>';
        }
        
        taskHTML += '<div class="task-info">📅 ' + formatDate(task.deadline) + '</div>';
        
        taskHTML += '<div class="task-buttons">';
        taskHTML += '<button class="btn-selesai" onclick="toggleDone(' + idx + ')">';
        taskHTML += task.selesai ? 'Belum' : 'Selesai';
        taskHTML += '</button>';
        taskHTML += '<button class="btn-edit" onclick="editTask(' + idx + ')">Edit</button>';
        taskHTML += '<button class="btn-hapus" onclick="deleteTask(' + idx + ')">Hapus</button>';
        taskHTML += '</div>';
        
        li.innerHTML = taskHTML;
        list.appendChild(li);
    });
    
    updateStats();
}

// Format tanggal
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];
    return date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

// Update statistik
function updateStats() {
    const total = tasks.length;
    const done = tasks.filter(t => t.selesai).length;
    const notDone = total - done;
    
    document.getElementById("totalTugas").textContent = total;
    document.getElementById("tugasSelesai").textContent = done;
    document.getElementById("tugasBelum").textContent = notDone;
}

// Tambah tugas baru
document.getElementById("formTugas").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nama = document.getElementById("namaTugas").value.trim();
    const matkul = document.getElementById("mataKuliah").value.trim();
    const deskripsi = document.getElementById("deskripsiTugas").value.trim();
    const deadline = document.getElementById("deadline").value;
    
    if (!nama || !matkul || !deadline) {
        alert("Nama, mata kuliah, dan deadline harus diisi!");
        return;
    }
    
    // Cek deadline
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDate = new Date(deadline);
    if (taskDate < today) {
        alert("Deadline tidak boleh di masa lalu!");
        return;
    }
    
    const newTask = {
        nama: nama,
        matkul: matkul,
        deskripsi: deskripsi,
        deadline: deadline,
        selesai: false
    };
    
    tasks.push(newTask);
    saveToStorage();
    displayTasks();
    this.reset();
    alert("Tugas berhasil ditambahkan!");
});

// Toggle status selesai
function toggleDone(idx) {
    tasks[idx].selesai = !tasks[idx].selesai;
    saveToStorage();
    displayTasks();
}

// Hapus tugas
function deleteTask(idx) {
    if (confirm("Yakin ingin menghapus tugas ini?")) {
        tasks.splice(idx, 1);
        saveToStorage();
        displayTasks();
    }
}

// Edit tugas
function editTask(idx) {
    editIdx = idx;
    const task = tasks[idx];
    
    document.getElementById("editNama").value = task.nama;
    document.getElementById("editMatkul").value = task.matkul;
    document.getElementById("editDeskripsi").value = task.deskripsi || '';
    document.getElementById("editDeadline").value = task.deadline;
    
    document.getElementById("modalEdit").classList.add("active");
}

// Tutup modal
function tutupModal() {
    document.getElementById("modalEdit").classList.remove("active");
    editIdx = -1;
}

// Submit edit
document.getElementById("formEdit").addEventListener("submit", function(e) {
    e.preventDefault();
    
    if (editIdx === -1) return;
    
    const nama = document.getElementById("editNama").value.trim();
    const matkul = document.getElementById("editMatkul").value.trim();
    const deskripsi = document.getElementById("editDeskripsi").value.trim();
    const deadline = document.getElementById("editDeadline").value;
    
    if (!nama || !matkul || !deadline) {
        alert("Semua field harus diisi!");
        return;
    }
    
    tasks[editIdx].nama = nama;
    tasks[editIdx].matkul = matkul;
    tasks[editIdx].deskripsi = deskripsi;
    tasks[editIdx].deadline = deadline;
    
    saveToStorage();
    displayTasks();
    tutupModal();
    alert("Tugas berhasil diupdate!");
});

// Event listener untuk filter
document.getElementById("filterStatus").addEventListener("change", displayTasks);
document.getElementById("cari").addEventListener("input", displayTasks);

// Tutup modal kalau klik di luar
document.getElementById("modalEdit").addEventListener("click", function(e) {
    if (e.target === this) {
        tutupModal();
    }
});

// Load tugas saat halaman dibuka
displayTasks();