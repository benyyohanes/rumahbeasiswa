// registry.js
// Ini adalah satu-satunya file yang perlu diupdate untuk menambah beasiswa baru.
//
// Field:
// - id            : kode unik, harus sama dengan id di scholarships-info.js kalau tipe "info"
// - nama          : nama lengkap beasiswa
// - negara        : negara tujuan studi
// - tipe          : "database" (punya halaman database lengkap seperti LPDP)
//                   atau "info" (kartu info dasar di beasiswa-lain.html)
// - status        : "aktif" (sudah ada kontennya, tampil normal)
//                   atau "segera" (baru terdaftar, kartu tampil sebagai "Segera Hadir")
// - halaman       : nama file halaman kalau tipe "database" (contoh: index.html)
// - warna         : warna spine kartu, dipakai juga untuk kartu "segera hadir"
//
// Cara menambah beasiswa baru yang sudah siap kontennya:
// 1. Tambah satu objek baru di sini dengan status "aktif"
// 2. Tambah satu objek konten dengan id yang sama di scholarships-info.js
//
// Cara menambah beasiswa baru tapi kontennya belum siap:
// 1. Tambah satu objek baru di sini dengan status "segera"
// 2. Tidak perlu sentuh scholarships-info.js dulu, kartu akan otomatis tampil sebagai "Segera Hadir"

const SCHOLARSHIP_REGISTRY = [
  {
    id: "lpdp",
    nama: "LPDP",
    negara: "Indonesia (tujuan studi berbagai negara)",
    tipe: "database",
    status: "aktif",
    halaman: "index.html",
    warna: "#A9812D"
  },
  { id: "aas", nama: "Australia Awards Scholarship (AAS)", negara: "Australia", tipe: "info", status: "aktif", warna: "#1C6E5A" },
  { id: "fulbright", nama: "Fulbright Scholarship", negara: "Amerika Serikat", tipe: "info", status: "aktif", warna: "#2C5F8A" },
  { id: "chevening", nama: "Chevening Scholarship", negara: "Inggris", tipe: "info", status: "aktif", warna: "#7A4A8C" },
  { id: "manaaki", nama: "Manaaki New Zealand Scholarships", negara: "Selandia Baru", tipe: "info", status: "aktif", warna: "#3B6B3B" },
  { id: "gks", nama: "Global Korea Scholarship (GKS)", negara: "Korea Selatan", tipe: "info", status: "aktif", warna: "#B0402A" },
  { id: "mext", nama: "MEXT Scholarship", negara: "Jepang", tipe: "info", status: "aktif", warna: "#8A3B3B" },
  { id: "erasmus-mundus", nama: "Erasmus Mundus Joint Master (EMJM)", negara: "Uni Eropa (multi-negara)", tipe: "info", status: "aktif", warna: "#37456A" },
  { id: "daad", nama: "DAAD Scholarship (skema EPOS)", negara: "Jerman", tipe: "info", status: "aktif", warna: "#A9812D" },
  { id: "sisgp", nama: "Swedish Institute Scholarships for Global Professionals (SISGP)", negara: "Swedia", tipe: "info", status: "aktif", warna: "#C0562E" },
  { id: "stipendium-hungaricum", nama: "Stipendium Hungaricum", negara: "Hungaria", tipe: "info", status: "aktif", warna: "#6B4226" },
  { id: "arryman", nama: "Arryman Scholarship", negara: "Amerika Serikat", tipe: "info", status: "aktif", warna: "#55707A" },
  { id: "knight-hennessy", nama: "Knight-Hennessy Scholars", negara: "Amerika Serikat", tipe: "info", status: "aktif", warna: "#7A2E3B" },
  { id: "rtp-australia", nama: "Research Training Program (RTP) Australia", negara: "Australia", tipe: "info", status: "aktif", warna: "#2F6B3A" },
  { id: "mccall-macbain", nama: "McCall MacBain Scholarship", negara: "Kanada", tipe: "info", status: "aktif", warna: "#6B2737" },
  { id: "jardine", nama: "Jardine Scholarship", negara: "Inggris", tipe: "info", status: "aktif", warna: "#1E3A5F" },
  { id: "gates-cambridge", nama: "Gates Cambridge Scholarship", negara: "Inggris", tipe: "info", status: "aktif", warna: "#4B6E8C" },
  { id: "mitsui-bussan", nama: "Mitsui-Bussan Scholarship Program for Indonesia", negara: "Jepang", tipe: "info", status: "aktif", warna: "#9C3B3B" },
  { id: "turkiye-burslari", nama: "Turkiye Bursları (Turkiye Scholarships)", negara: "Turki", tipe: "info", status: "aktif", warna: "#B5482E" },
  { id: "eiffel-excellence", nama: "Eiffel Excellence Scholarship", negara: "Prancis", tipe: "info", status: "aktif", warna: "#5A4A7A" },
  // Contoh slot untuk beasiswa berikutnya yang mau ditambah, hapus atau ganti kapan saja.
  // Selama statusnya "segera", kartu ini akan tampil sebagai placeholder tanpa perlu isi di scholarships-info.js.
  { id: "beasiswa-berikutnya", nama: "Beasiswa Berikutnya", negara: "Segera diumumkan", tipe: "info", status: "segera", warna: "#6B7482" }
];
