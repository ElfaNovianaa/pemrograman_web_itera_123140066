// ========== JAM & TANGGAL ==========
function updateDateTime() {
  const now = new Date();
  const day = now.getDate();
  const monthShort = now.toLocaleString('id-ID', { month: 'short' }).toUpperCase();
  const full = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  document.getElementById('day').textContent = day;
  document.getElementById('month').textContent = monthShort;
  document.getElementById('fullDate').textContent = full;
  document.getElementById('clock').textContent = time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ========== NAVIGASI SIDEBAR ==========
const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page');

menuItems.forEach(mi => {
  mi.addEventListener('click', () => {
    menuItems.forEach(m => m.classList.remove('active'));
    mi.classList.add('active');
    pages.forEach(p => p.classList.remove('active-page'));
    document.getElementById(mi.dataset.page).classList.add('active-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ========== STORAGE & DATA ==========
const STORAGE_KEY = 'kegiatan_v1';
let kegiatan = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const form = document.getElementById('formKegiatan');
const inputNama = document.getElementById('nama');
const inputTanggal = document.getElementById('tanggal');
const inputWaktu = document.getElementById('waktu');
const inputJenis = document.getElementById('jenis');
const inputLokasi = document.getElementById('lokasi');
const inputDeskripsi = document.getElementById('deskripsi');
const submitBtn = document.getElementById('submitBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');

const listContainer = document.getElementById('listKegiatan');
const searchInput = document.getElementById('search');
const filterJenis = document.getElementById('filterJenis');
const clearFiltersBtn = document.getElementById('clearFilters');

const totalCountEl = document.getElementById('totalCount');
const doneCountEl = document.getElementById('doneCount');
const todayCountEl = document.getElementById('todayCount');
const priorityListEl = document.getElementById('priorityList');
const upcomingListEl = document.getElementById('upcomingList');

let editIndex = null;

// ========== HELPERS ==========
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(kegiatan));
  renderSummary();
}

function formatDate(d) {
  if (!d) return '-';
  const dt = new Date(d);
  return dt.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

// ========== RENDER LIST ==========
function renderList() {
  const q = (searchInput?.value || '').toLowerCase();
  const jenisFilter = filterJenis?.value;
  const container = document.getElementById('listKegiatan');
  container.innerHTML = '';

  const filtered = kegiatan.filter(k => {
    const matchesQ =
      k.nama.toLowerCase().includes(q) ||
      k.lokasi.toLowerCase().includes(q) ||
      (k.deskripsi || '').toLowerCase().includes(q);
    const matchesJenis = jenisFilter ? k.jenis === jenisFilter : true;
    return matchesQ && matchesJenis;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="card">Belum ada kegiatan.</div>`;
    return;
  }

  filtered.forEach(k => {
    const card = document.createElement('div');
    card.className = 'keg-card ' + (k.selesai ? 'keg-done' : '');
    card.innerHTML = `
      <div class="keg-left">
        <div class="keg-title">${escapeHtml(k.nama)}</div>
        <div class="keg-meta">${escapeHtml(k.jenis)} • ${formatDate(k.tanggal)} ${k.waktu} • 📍 ${escapeHtml(k.lokasi)}</div>
        <div class="keg-desc">${escapeHtml(k.deskripsi || '')}</div>
      </div>
      <div class="keg-actions">
        <button class="done">${k.selesai ? '↩' : '✓'}</button>
        <button class="edit">✏️</button>
        <button class="del">🗑️</button>
      </div>
    `;

    card.querySelector('.done').addEventListener('click', () => {
      const idx = kegiatan.indexOf(k);
      kegiatan[idx].selesai = !kegiatan[idx].selesai;
      save();
      renderList();
    });

    card.querySelector('.edit').addEventListener('click', () => {
      const idx = kegiatan.indexOf(k);
      enterEditMode(kegiatan[idx], idx);
    });

    card.querySelector('.del').addEventListener('click', () => {
      const idx = kegiatan.indexOf(k);
      if (confirm('Hapus kegiatan ini?')) {
        kegiatan.splice(idx, 1);
        save();
        renderList();
      }
    });

    container.appendChild(card);
  });
}

// ========== SUMMARY ==========
function renderSummary() {
  const total = kegiatan.length;
  const done = kegiatan.filter(k => k.selesai).length;
  const today = kegiatan.filter(k => {
    if (!k.tanggal) return false;
    const a = new Date(k.tanggal);
    const b = new Date();
    return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
  }).length;

  totalCountEl.textContent = total;
  doneCountEl.textContent = done;
  todayCountEl.textContent = today;

  const prio = kegiatan
    .filter(k => !k.selesai)
    .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    .slice(0, 3);
  priorityListEl.innerHTML = prio.length
    ? prio.map(p => `<div>• ${escapeHtml(p.nama)} (${formatDate(p.tanggal)})</div>`).join('')
    : 'Tidak ada tugas prioritas.';

  const upcoming = kegiatan
    .filter(k => k.tanggal)
    .sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
    .slice(0, 3);
  upcomingListEl.innerHTML = upcoming.length
    ? upcoming.map(u => `<div>• ${escapeHtml(u.nama)} (${formatDate(u.tanggal)})</div>`).join('')
    : 'Tidak ada jadwal terdekat.';
}

// ========== EDIT MODE ==========
function enterEditMode(item, idx) {
  editIndex = idx;
  inputNama.value = item.nama;
  inputTanggal.value = item.tanggal;
  inputWaktu.value = item.waktu;
  inputJenis.value = item.jenis;
  inputLokasi.value = item.lokasi;
  inputDeskripsi.value = item.deskripsi;
  submitBtn.textContent = 'Simpan Perubahan';
  cancelEditBtn.style.display = 'inline-block';
  document.querySelector('.menu-item[data-page="kegiatan"]').click();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitEditMode() {
  editIndex = null;
  form.reset();
  submitBtn.textContent = 'Tambah Kegiatan';
  cancelEditBtn.style.display = 'none';
}

// ========== FORM ==========
form.addEventListener('submit', e => {
  e.preventDefault();
  const item = {
    nama: inputNama.value.trim(),
    tanggal: inputTanggal.value,
    waktu: inputWaktu.value,
    jenis: inputJenis.value,
    lokasi: inputLokasi.value.trim(),
    deskripsi: inputDeskripsi.value.trim(),
    selesai: false
  };

  if (editIndex !== null) {
    item.selesai = kegiatan[editIndex].selesai;
    kegiatan[editIndex] = item;
  } else {
    kegiatan.push(item);
  }

  save();
  renderList();
  exitEditMode();
});

cancelEditBtn.addEventListener('click', () => exitEditMode());

// ========== FILTER ==========
searchInput.addEventListener('input', renderList);
filterJenis.addEventListener('change', renderList);
clearFiltersBtn.addEventListener('click', () => {
  searchInput.value = '';
  filterJenis.value = '';
  renderList();
});

// ========== INIT ==========
renderSummary();
renderList();
