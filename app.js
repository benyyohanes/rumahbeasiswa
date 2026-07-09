import { db, auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "./firebase-init.js";
import { collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const BIDANG_COLORS = {
  'STEM': 'var(--stem)', 'SHARE': 'var(--share)', 'Pendukung': 'var(--pendukung)',
  'Co-Funding': 'var(--cofunding)', 'Joint Degree': 'var(--joint)',
  'Unggulan': 'var(--unggulan)', 'Dalam Negeri': 'var(--dn)', 'Kewirausahaan': 'var(--kewirausahaan)'
};

let overrides = {};
let isAdmin = false;
let allRows = [];
let PAGE_SIZE = 10;
let currentPage = 0;
let filtered = [];

function applyOverride(row) {
  const o = overrides[row.id];
  if (o) {
    if (o.pt !== undefined) row.pt = o.pt;
    if (o.prodi !== undefined) row.prodi = o.prodi;
  }
  return row;
}

async function loadDataFromFirestore() {
  const loadingMsg = document.getElementById('tbody');
  if (loadingMsg) loadingMsg.innerHTML = '<tr><td colspan="9" style="padding:40px;text-align:center;color:var(--ink-faint);">Memuat data dari server...</td></tr>';

  const [dataSnapshot, overrideSnapshot] = await Promise.all([
    getDocs(collection(db, "lpdp_data")),
    getDocs(collection(db, "overrides"))
  ]);

  overrideSnapshot.forEach(docSnap => {
    overrides[docSnap.id] = docSnap.data();
  });

  let rows = [];
  dataSnapshot.forEach(docSnap => {
    const data = docSnap.data();
    if (data.rows) rows = rows.concat(data.rows);
  });
  rows.sort((a, b) => a.id - b.id);
  allRows = rows.map(applyOverride);
  filtered = allRows;

  initUI();
  render();
}

function uniqueSorted(arr) { return [...new Set(arr)].filter(Boolean).sort((a, b) => a.localeCompare(b, 'id')); }

function populateSelect(id, values) {
  const sel = document.getElementById(id);
  sel.querySelectorAll('option:not(:first-child)').forEach(o => o.remove());
  values.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v; opt.textContent = v;
    sel.appendChild(opt);
  });
}

function initUI() {
  populateSelect('fBidang', uniqueSorted(allRows.map(r => r.bidang)));
  populateSelect('fJenjang', uniqueSorted(allRows.map(r => r.jenjang)));
  populateSelect('fNegara', uniqueSorted(allRows.map(r => r.negara)));
  populateSelect('fIndustri', uniqueSorted(allRows.map(r => r.bidang_industri)));

  document.getElementById('statTotal').textContent = allRows.length.toLocaleString('id-ID');
  document.getElementById('statUni').textContent = uniqueSorted(allRows.map(r => r.pt)).length.toLocaleString('id-ID');
  document.getElementById('statNegara').textContent = uniqueSorted(allRows.map(r => r.negara)).length.toLocaleString('id-ID');

  const legend = document.getElementById('legend');
  legend.innerHTML = '';
  Object.keys(BIDANG_COLORS).forEach(k => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.style.background = BIDANG_COLORS[k];
    span.textContent = k;
    legend.appendChild(span);
  });

  if (typeof JADWAL_DATA !== 'undefined' && JADWAL_DATA.length > 0) {
    const j = JADWAL_DATA[0];
    document.getElementById('jadwalNama').textContent = j.nama;
    document.getElementById('jadwalPeriode').textContent = j.periode_pendaftaran + (j.catatan ? ' - ' + j.catatan : '');
    document.getElementById('jadwalLink').href = j.sumber_url;
    const statusEl = document.getElementById('jadwalStatus');
    statusEl.textContent = j.status;
    statusEl.style.background = j.status === 'Dibuka' ? 'var(--stem)' : (j.status === 'Ditutup' ? '#999' : 'var(--brass)');
    document.getElementById('jadwalBanner').style.display = 'block';
  }

  const fCriteria = document.getElementById('fCriteria');
  if (fCriteria && typeof CRITERIA_DATA !== 'undefined' && fCriteria.options.length <= 1) {
    CRITERIA_DATA.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.nama;
      fCriteria.appendChild(opt);
    });
    fCriteria.addEventListener('change', () => {
      if (fCriteria.value) openCriteriaModal(fCriteria.value);
      fCriteria.value = '';
    });
    document.getElementById('criteriaCloseBtn').addEventListener('click', () => {
      document.getElementById('criteriaModalOverlay').style.display = 'none';
    });
    document.getElementById('criteriaModalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'criteriaModalOverlay') e.target.style.display = 'none';
    });
  }

  const pageSizeSelect = document.getElementById('pageSizeSelect');
  if (pageSizeSelect && !pageSizeSelect.dataset.bound) {
    pageSizeSelect.dataset.bound = '1';
    pageSizeSelect.addEventListener('change', (e) => {
      PAGE_SIZE = parseInt(e.target.value, 10);
      currentPage = 0;
      render();
    });
  }

  bindOnce('search', 'input', applyFilters);
  ['fBidang', 'fJenjang', 'fNegara', 'fIndustri'].forEach(id => {
    bindOnce(id, 'change', applyFilters);
  });
  bindOnce('clearBtn', 'click', () => {
    document.getElementById('search').value = '';
    document.getElementById('fBidang').value = '';
    document.getElementById('fJenjang').value = '';
    document.getElementById('fNegara').value = '';
    document.getElementById('fIndustri').value = '';
    applyFilters();
  });
  bindOnce('prevBtn', 'click', () => { currentPage--; render(); scrollToTableTop(); });
  bindOnce('nextBtn', 'click', () => { currentPage++; render(); scrollToTableTop(); });

  const tbody = document.getElementById('tbody');
  if (!tbody.dataset.bound) {
    tbody.dataset.bound = '1';
    tbody.addEventListener('dblclick', e => {
      const td = e.target.closest('td.editable');
      if (!td) return;
      if (!isAdmin) {
        alert('Login sebagai admin dulu untuk mengedit data.');
        return;
      }
      td.contentEditable = 'true';
      td.focus();
      const range = document.createRange();
      range.selectNodeContents(td);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });
    tbody.addEventListener('blur', async e => {
      const td = e.target.closest('td.editable');
      if (!td || td.contentEditable !== 'true') return;
      td.contentEditable = 'false';
      const id = td.dataset.id, field = td.dataset.field;
      if (!overrides[id]) overrides[id] = {};
      overrides[id][field] = td.textContent.trim();
      await setDoc(doc(db, "overrides", String(id)), overrides[id], { merge: true });
      const idx = allRows.findIndex(r => String(r.id) === String(id));
      if (idx > -1) allRows[idx][field] = overrides[id][field];
    }, true);
    tbody.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); }
    });
  }
}

function bindOnce(id, evt, fn) {
  const el = document.getElementById(id);
  if (!el || el.dataset['bound_' + evt]) return;
  el.dataset['bound_' + evt] = '1';
  el.addEventListener(evt, fn);
}

const FIELD_LABELS = {
  sasaran: 'Sasaran Pendaftar',
  usia_maksimal: 'Usia Maksimal Pendaftar',
  dokumen_khusus: 'Dokumen Khusus',
  syarat_bahasa: 'Syarat Bahasa',
  syarat_ipk: 'Syarat IPK',
  proses_seleksi: 'Proses Seleksi'
};

function openCriteriaModal(id) {
  const c = CRITERIA_DATA.find(x => x.id === id);
  if (!c) return;
  document.getElementById('criteriaTitle').textContent = 'Kriteria ' + c.nama;
  let html = '';
  Object.keys(FIELD_LABELS).forEach(key => {
    const val = c[key];
    if (!val || (Array.isArray(val) && val.length === 0)) return;
    html += `<div style="margin-bottom:14px;">
      <div style="font-weight:600;color:var(--navy);margin-bottom:3px;">${FIELD_LABELS[key]}</div>`;
    if (Array.isArray(val)) {
      html += '<ul style="margin:0;padding-left:18px;">' + val.map(v => `<li>${v}</li>`).join('') + '</ul>';
    } else {
      html += `<div>${val}</div>`;
    }
    html += '</div>';
  });
  document.getElementById('criteriaBody').innerHTML = html;
  document.getElementById('criteriaModalOverlay').style.display = 'flex';
}

function applyFilters() {
  const q = document.getElementById('search').value.trim().toLowerCase();
  const fBidang = document.getElementById('fBidang').value;
  const fJenjang = document.getElementById('fJenjang').value;
  const fNegara = document.getElementById('fNegara').value;
  const fIndustri = document.getElementById('fIndustri').value;

  filtered = allRows.filter(r => {
    if (fBidang && r.bidang !== fBidang) return false;
    if (fJenjang && r.jenjang !== fJenjang) return false;
    if (fNegara && r.negara !== fNegara) return false;
    if (fIndustri && r.bidang_industri !== fIndustri) return false;
    if (q) {
      const hay = (r.pt + ' ' + r.prodi + ' ' + r.bidang_industri).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  currentPage = 0;
  render();
}

function scrollToTableTop() {
  const el = document.querySelector('.table-wrap');
  if (!el) return;
  const toolbar = document.querySelector('.toolbar');
  const toolbarH = toolbar ? toolbar.offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - toolbarH - 10;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function render() {
  const tbody = document.getElementById('tbody');
  const emptyState = document.getElementById('emptyState');
  tbody.innerHTML = '';
  document.getElementById('statShown').textContent = filtered.length.toLocaleString('id-ID');

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
    document.getElementById('pageInfo').textContent = '';
    document.getElementById('prevBtn').disabled = true;
    document.getElementById('nextBtn').disabled = true;
    return;
  }
  emptyState.style.display = 'none';

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  if (currentPage >= totalPages) currentPage = totalPages - 1;
  const start = currentPage * PAGE_SIZE;
  const pageRows = filtered.slice(start, start + PAGE_SIZE);

  const frag = document.createDocumentFragment();
  pageRows.forEach(r => {
    const tr = document.createElement('tr');
    const color = BIDANG_COLORS[r.bidang] || '#999';
    const badgeUnggulan = buatBadgeUniversitasUnggulan(r.pt, r.prodi, r.jenjang);
    tr.innerHTML = `
      <td class="spine" style="background:${color}"></td>
      <td class="num">${r.id}</td>
      <td>${escapeHtml(r.jenjang)}</td>
      <td>${escapeHtml(r.bidang_industri)}</td>
      <td class="pt editable" data-field="pt" data-id="${r.id}">${escapeHtml(r.pt)}</td>
      <td class="editable" data-field="prodi" data-id="${r.id}">${escapeHtml(r.prodi)}</td>
      <td>${escapeHtml(r.negara)}</td>
      <td><span class="bidang-tag" style="background:${color}">${escapeHtml(r.bidang)}</span></td>
      <td class="unggulan-col">${badgeUnggulan}</td>
    `;
    frag.appendChild(tr);
  });
  tbody.appendChild(frag);

  document.getElementById('pageInfo').textContent =
    `Halaman ${currentPage + 1} dari ${totalPages} baris ${start + 1} sampai ${Math.min(start + PAGE_SIZE, filtered.length)}`;
  document.getElementById('prevBtn').disabled = currentPage === 0;
  document.getElementById('nextBtn').disabled = currentPage >= totalPages - 1;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

document.getElementById('loginBtn').addEventListener('click', () => {
  document.getElementById('loginModalOverlay').style.display = 'flex';
});
document.getElementById('loginCancelBtn').addEventListener('click', () => {
  document.getElementById('loginModalOverlay').style.display = 'none';
});
document.getElementById('loginSubmitBtn').addEventListener('click', async () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.style.display = 'none';
  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById('loginModalOverlay').style.display = 'none';
  } catch (e) {
    errEl.textContent = 'Email atau password salah.';
    errEl.style.display = 'block';
  }
});
document.getElementById('logoutBtn').addEventListener('click', async () => {
  await signOut(auth);
});
onAuthStateChanged(auth, (user) => {
  isAdmin = !!user;
  document.getElementById('loginBtn').style.display = user ? 'none' : 'inline-block';
  document.getElementById('adminStatus').style.display = user ? 'inline' : 'none';
});

loadDataFromFirestore();