// jadwal.js — Jadwal pendaftaran LPDP, update manual sesuai info resmi lpdp.kemenkeu.go.id
// Setiap ada info baru, tinggal tambah object baru di dalam array ini (paling atas supaya urut terbaru dulu)
const JADWAL_DATA = [
  {
    id: "tahap2_2026",
    nama: "Beasiswa LPDP Tahap II Tahun 2026",
    status: "Dibuka",
    periode_pendaftaran: "30 Juni 2026 - 31 Juli 2026",
    catatan: "Meliputi Beasiswa STEM Industri Strategis, Beasiswa SHARE, Beasiswa Akselerasi Universitas Unggulan, Beasiswa Keolahragaan, dan Beasiswa Talenta Riset dan Inovasi Nasional Jalur Doctor by Research.",
    sumber_url: "https://lpdp.kemenkeu.go.id/beasiswa/pendaftaran-beasiswa/",
    terakhir_diperiksa: "2026-07-05"
  },
  // Tambahkan object baru di sini tiap ada jadwal/tahap baru, contoh:
  // {
  //   id: "tahap1_2027",
  //   nama: "Beasiswa LPDP Tahap I Tahun 2027",
  //   status: "Akan Dibuka",
  //   periode_pendaftaran: "...",
  //   catatan: "...",
  //   sumber_url: "https://lpdp.kemenkeu.go.id/beasiswa/pendaftaran-beasiswa/",
  //   terakhir_diperiksa: "2027-01-10"
  // },
];