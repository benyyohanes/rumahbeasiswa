// scholarships-info.js
// Data ringkas beasiswa luar negeri selain LPDP.
// Info bersifat umum (bukan detail lengkap seperti database LPDP) dan bisa berubah sewaktu-waktu,
// jadi selalu arahkan pengguna ke link resmi untuk info terbaru.

const SCHOLARSHIPS_INFO = [
  {
    id: "aas",
    nama: "Australia Awards Scholarship (AAS)",
    singkatan: "AAS",
    negara: "Australia",
    jenjang: "S1 (terbatas), S2, S3",
    warna: "#1C6E5A",
    deskripsi:
      "Beasiswa penuh dari Pemerintah Australia (DFAT) untuk warga negara dari negara-negara berkembang mitra Australia, termasuk Indonesia. Ditujukan bagi kandidat yang menunjukkan potensi kepemimpinan dan komitmen terhadap pembangunan negara asal.",
    syarat: [
      "Warga negara dari negara peserta program (Indonesia termasuk di dalamnya)",
      "Bukan warga negara atau pemegang izin tinggal tetap Australia",
      "Umumnya memiliki pengalaman kerja yang relevan",
      "Berkomitmen kembali ke negara asal minimal 2 tahun setelah studi",
      "Pendaftaran untuk Indonesia tidak lewat OASIS, melainkan jalur khusus negara"
    ],
    link: "https://www.dfat.gov.au/people-to-people/australia-awards"
  },
  {
    id: "fulbright",
    nama: "Fulbright Scholarship",
    singkatan: "Fulbright",
    negara: "Amerika Serikat",
    jenjang: "S2, S3",
    warna: "#2C5F8A",
    deskripsi:
      "Program beasiswa Pemerintah Amerika Serikat yang di Indonesia dikelola oleh AMINEF (American Indonesian Exchange Foundation), untuk studi S2 dan S3 di universitas AS pada hampir semua bidang, kecuali kedokteran yang berhubungan langsung dengan pasien.",
    syarat: [
      "Warga Negara Indonesia, bukan warga negara atau pemegang izin tinggal tetap AS",
      "Berkomitmen kembali ke Indonesia setelah menyelesaikan program",
      "Skor bahasa Inggris (TOEFL ITP/iBT atau IELTS) sesuai jenjang yang dilamar",
      "IPK dan latar belakang akademik yang memadai"
    ],
    link: "https://www.aminef.or.id/"
  },
  {
    id: "chevening",
    nama: "Chevening Scholarship",
    singkatan: "Chevening",
    negara: "Inggris",
    jenjang: "S2 (program 1 tahun)",
    warna: "#7A4A8C",
    deskripsi:
      "Beasiswa Pemerintah Inggris (FCDO) untuk program magister satu tahun di universitas mana pun di Inggris, menyasar calon pemimpin masa depan dari negara-negara mitra Chevening.",
    syarat: [
      "Warga negara dari negara/wilayah yang memenuhi syarat Chevening",
      "Memiliki sekitar 2.800 jam pengalaman kerja (kira-kira setara 2 tahun kerja penuh waktu)",
      "Memiliki gelar S1 yang memenuhi syarat masuk program S2 di Inggris",
      "Mendaftar ke tiga pilihan program studi berbeda di Inggris",
      "Berkomitmen kembali ke negara asal minimal 2 tahun setelah studi"
    ],
    link: "https://www.chevening.org/"
  },
  {
    id: "manaaki",
    nama: "Manaaki New Zealand Scholarships",
    singkatan: "Manaaki NZ",
    negara: "Selandia Baru",
    jenjang: "S1 (terbatas), S2, S3",
    warna: "#3B6B3B",
    deskripsi:
      "Beasiswa penuh Pemerintah Selandia Baru untuk warga negara dari sejumlah negara mitra di kawasan Asia dan Pasifik, untuk studi di universitas atau institut teknologi Selandia Baru.",
    syarat: [
      "Berasal dari negara yang termasuk dalam daftar negara mitra Manaaki",
      "Berusia minimal 18 tahun saat menandatangani surat penawaran beasiswa",
      "Pelamar jenjang pascasarjana umumnya memerlukan pengalaman kerja yang relevan",
      "Berkomitmen berkontribusi pada pembangunan negara asal setelah studi"
    ],
    link: "https://www.nzscholarships.govt.nz/"
  },
  {
    id: "gks",
    nama: "Global Korea Scholarship (GKS)",
    singkatan: "GKS",
    negara: "Korea Selatan",
    jenjang: "S2, S3",
    warna: "#B0402A",
    deskripsi:
      "Beasiswa penuh Pemerintah Korea Selatan (dahulu dikenal sebagai KGSP) yang dikelola NIIED, mencakup pelatihan bahasa Korea sekitar satu tahun sebelum studi gelar S2/S3 di universitas Korea Selatan. Tersedia lewat jalur kedutaan atau jalur universitas.",
    syarat: [
      "Pelamar dan kedua orang tua bukan warga negara Korea",
      "Umumnya berusia di bawah 40 tahun untuk jenjang pascasarjana",
      "Memiliki gelar S1 (untuk S2) atau gelar S2 (untuk S3)",
      "Sehat jasmani dan rohani, dibuktikan dengan surat keterangan medis",
      "Memilih salah satu jalur pendaftaran saja: jalur kedutaan atau jalur universitas"
    ],
    link: "https://www.studyinkorea.go.kr/"
  },
  {
    id: "mext",
    nama: "MEXT Scholarship",
    singkatan: "MEXT",
    negara: "Jepang",
    jenjang: "S1, S2, S3, mahasiswa riset",
    warna: "#8A3B3B",
    deskripsi:
      "Beasiswa Pemerintah Jepang melalui Kementerian Pendidikan (MEXT), untuk studi di universitas Jepang lewat jalur rekomendasi kedutaan atau rekomendasi universitas, mencakup berbagai jenjang termasuk mahasiswa riset, S2, dan S3.",
    syarat: [
      "Warga negara dari negara yang memiliki hubungan diplomatik dengan Jepang",
      "Batas usia bervariasi tergantung kategori dan jenjang yang dilamar",
      "Memiliki gelar/latar belakang akademik yang sesuai kategori",
      "Pendaftaran jalur kedutaan dilakukan lewat Kedutaan Besar Jepang di negara asal, bukan langsung ke MEXT"
    ],
    link: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
  },
  {
    id: "erasmus-mundus",
    nama: "Erasmus Mundus Joint Master (EMJM)",
    singkatan: "Erasmus Mundus",
    negara: "Uni Eropa (multi-negara)",
    jenjang: "S2 (1-2 tahun, Joint Degree)",
    warna: "#37456A",
    deskripsi:
      "Program magister gabungan yang dirancang bersama oleh konsorsium universitas di beberapa negara Eropa, didanai Uni Eropa, dengan beasiswa kompetitif bagi pelamar terbaik dari seluruh dunia. Mahasiswa umumnya berpindah studi di 2-3 negara berbeda selama program berlangsung.",
    syarat: [
      "Memiliki gelar S1, atau berada di tahun akhir studi S1 dan lulus sebelum program dimulai",
      "Kualifikasi diakui secara resmi di negara pemberi gelar",
      "Memenuhi syarat spesifik tiap program studi (bahasa, dokumen, kadang pengalaman kerja)",
      "Umumnya belum pernah menerima beasiswa Erasmus Mundus sebelumnya"
    ],
    link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters"
  },
  {
    id: "daad",
    nama: "DAAD Scholarship (skema EPOS)",
    singkatan: "DAAD",
    negara: "Jerman",
    jenjang: "S2(umumnya),S3",
    warna: "#A9812D",
    deskripsi:
      "Beasiswa Pemerintah Jerman lewat DAAD, salah satunya skema EPOS untuk lulusan dari negara berkembang termasuk Indonesia. Ditujukan bagi profesional yang ingin menempuh S2 (dan pada program tertentu S3) di bidang-bidang terkait pembangunan di universitas negeri Jerman.",
    syarat: [
      "Memiliki gelar S1 di bidang yang relevan dengan program yang dituju",
      "Minimal 2 tahun pengalaman profesional",
      "Berasal dari negara berkembang/emerging yang termasuk daftar negara EPOS",
      "Kemampuan bahasa Inggris atau Jerman sesuai bahasa pengantar program"
    ],
    link: "https://www.daad-indonesia.org/"
  },
  {
    id: "sisgp",
    nama: "Swedish Institute Scholarships for Global Professionals (SISGP)",
    singkatan: "SISGP",
    negara: "Swedia",
    jenjang: "S2 (1-2 tahun)",
    warna: "#C0562E",
    deskripsi:
      "Beasiswa penuh Pemerintah Swedia melalui Swedish Institute, ditujukan bagi profesional muda dari sejumlah negara berkembang yang ingin menempuh S2 di universitas Swedia dan sudah menunjukkan pengalaman kepemimpinan.",
    syarat: [
      "Warga negara dari salah satu negara yang termasuk daftar negara memenuhi syarat SISGP",
      "Sudah/sedang mendaftar program magister yang memenuhi syarat lewat universityadmissions.se",
      "Memiliki pengalaman kerja dengan jumlah jam tertentu (bervariasi per kawasan asal)",
      "Memiliki pengalaman kepemimpinan yang terdokumentasi, dari tempat kerja atau organisasi masyarakat"
    ],
    link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
  },
  {
    id: "stipendium-hungaricum",
    nama: "Stipendium Hungaricum",
    singkatan: "Stipendium Hungaricum",
    negara: "Hungaria",
    jenjang: "S1, S2, S3, non-gelar",
    warna: "#6B4226",
    deskripsi:
      "Beasiswa Pemerintah Hungaria yang dikelola Tempus Public Foundation, mencakup jenjang S1, S2, S3, dan program non-gelar di universitas-universitas Hungaria, berdasarkan perjanjian kerja sama bilateral pendidikan antara Hungaria dan negara pengirim.",
    syarat: [
      "Berasal dari negara mitra yang memiliki perjanjian kerja sama pendidikan dengan Hungaria",
      "Mendaftar lewat mitra pengirim di negara asal (biasanya kementerian pendidikan/lembaga yang ditunjuk)",
      "Memenuhi syarat bahasa pengantar program (mayoritas berbahasa Inggris)",
      "Untuk jenjang S3, sudah memiliki gelar S2 sebelum studi dimulai"
    ],
    link: "https://stipendiumhungaricum.hu/"
  }
];
