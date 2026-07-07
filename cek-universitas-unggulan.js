// ============================================================
// Fungsi Pengecekan Universitas Unggulan LPDP
// WAJIB di-load SETELAH file data-universitas-unggulan.js
// ============================================================

// Normalisasi string supaya matching tidak gagal karena beda spasi/kapitalisasi
function normalisasiTeks(teks) {
  return (teks || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.,]/g, "");
}

/**
 * Cek apakah suatu universitas + program studi termasuk "Universitas Unggulan LPDP"
 * @param {string} namaUniversitas - nama perguruan tinggi, contoh: "Columbia University"
 * @param {string} programStudi - nama program studi, contoh: "Computer Science, MS"
 * @param {string} jenjang - "Magister" atau "Doktor" (opsional, untuk validasi tambahan)
 * @returns {{unggulan: boolean, kategori: string|null, bidang: string|null}}
 */
function cekUniversitasUnggulan(namaUniversitas, programStudi, jenjang) {
  const namaNorm = normalisasiTeks(namaUniversitas);

  if (typeof window.UNIVERSITAS_UNGGULAN_ALL_SUBJECT === "undefined") {
    console.warn("Data UNIVERSITAS_UNGGULAN_ALL_SUBJECT belum dimuat. Cek urutan <script> tag.");
    return { unggulan: false, kategori: null, bidang: null };
  }

  // 1. Cek dulu kategori All Subject (unggul di semua program studi)
  const isAllSubject = window.UNIVERSITAS_UNGGULAN_ALL_SUBJECT.some(
    (u) => normalisasiTeks(u) === namaNorm
  );
  if (isAllSubject) {
    return { unggulan: true, kategori: "All Subject", bidang: null };
  }

  // 2. Kalau tidak match di All Subject, cek kategori STEM (harus match program studi persis)
  const progNorm = normalisasiTeks(programStudi);
  const jenjangNorm = normalisasiTeks(jenjang);

  const match = window.UNIVERSITAS_UNGGULAN_STEM.find((item) => {
    const cocokUniv = normalisasiTeks(item.universitas) === namaNorm;
    const cocokProdi = normalisasiTeks(item.programStudi) === progNorm;
    const cocokJenjang = !jenjang || normalisasiTeks(item.jenjang) === jenjangNorm;
    return cocokUniv && cocokProdi && cocokJenjang;
  });

  if (match) {
    return { unggulan: true, kategori: "STEM", bidang: match.bidang };
  }

  return { unggulan: false, kategori: null, bidang: null };
}

/**
 * Helper untuk generate HTML badge, silakan sesuaikan class CSS-nya
 * dengan style yang sudah ada di project.
 */
function buatBadgeUniversitasUnggulan(namaUniversitas, programStudi, jenjang) {
  const hasil = cekUniversitasUnggulan(namaUniversitas, programStudi, jenjang);

  if (!hasil.unggulan) {
    return "";
  }

  if (hasil.kategori === "All Subject") {
    return `<span class="badge-unggulan badge-unggulan-all" title="Universitas Unggulan LPDP - Seluruh Program Studi">
      ⭐ Universitas Unggulan
    </span>`;
  }

  // kategori STEM, tampilkan juga bidang industri strategisnya
  return `<span class="badge-unggulan badge-unggulan-stem" title="Universitas Unggulan LPDP - Bidang STEM (${hasil.bidang})">
    ⭐ Unggulan STEM: ${hasil.bidang}
  </span>`;
}
