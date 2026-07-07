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
  },

  {
    id: "arryman",
    nama: "Arryman Scholarship",
    singkatan: "Arryman",
    negara: "Amerika Serikat (Northwestern University)",
    jenjang: "S3",
    warna: "#55707A",
    deskripsi:
      "Program dari Indonesian Scholarship and Research Support Foundation (ISRSF) yang bekerja sama dengan Northwestern University, ditujukan bagi warga negara Indonesia yang ingin menjadi akademisi di bidang ilmu sosial dan humaniora. Penerima lebih dulu menjalani satu tahun sebagai Arryman Fellow untuk persiapan pra-doktoral, sebelum lanjut sebagai Arryman Scholar menempuh S3 hingga 6 tahun.",
    syarat: [
      "Warga Negara Indonesia",
      "Minimal lulusan S1 dengan rekam akademik yang kuat",
      "Berkomitmen menjadi akademisi di bidang ilmu sosial seperti ilmu politik, sejarah, sosiologi, hukum, atau kajian pembangunan",
      "Skor bahasa Inggris minimal setara TOEFL iBT 80 atau IELTS 6.5",
      "Setelah lulus S3, wajib mengabdi sebagai staf akademik atau peneliti selama periode setara masa penerimaan beasiswa"
    ],
    link: "https://www.isrsf.org/"
  },
  {
    id: "knight-hennessy",
    nama: "Knight-Hennessy Scholars",
    singkatan: "Knight-Hennessy",
    negara: "Amerika Serikat (Stanford University)",
    jenjang: "Jenjang pascasarjana(S2,S3, dan Profesi)",
    warna: "#7A2E3B",
    deskripsi:
      "Program beasiswa penuh Stanford University yang didanai filantropi Phil Knight dan John Hennessy, terbuka untuk kandidat dari negara mana pun tanpa batasan bidang studi, ditujukan bagi calon pemimpin lintas disiplin. Pelamar harus mendaftar dan diterima secara terpisah di salah satu program pascasarjana penuh waktu Stanford.",
    syarat: [
      "Terbuka untuk warga negara dari negara mana pun",
      "Wajib mendaftar dan diterima di program pascasarjana penuh waktu Stanford (S2, S3, MBA, JD, MD, dan sejenisnya)",
      "Gelar S1 diperoleh dalam kurun waktu tertentu sebelum masuk, umumnya dalam 7 tahun terakhir, ada perpanjangan untuk yang pernah bertugas militer",
      "Tidak ada kuota berdasarkan bidang studi atau wilayah asal"
    ],
    link: "https://knight-hennessy.stanford.edu/"
  },
  {
    id: "rtp-australia",
    nama: "Research Training Program (RTP) Australia",
    singkatan: "RTP Australia",
    negara: "Australia",
    jenjang: "S2 (riset), S3",
    warna: "#2F6B3A",
    deskripsi:
      "Skema pendanaan dari Pemerintah Australia yang disalurkan lewat masing-masing universitas untuk mahasiswa S2 riset dan S3 (Higher Degree by Research), terbuka untuk mahasiswa domestik maupun internasional. Berbeda dari beasiswa lain, RTP tidak punya pendaftaran terpusat, otomatis dipertimbangkan saat mendaftar admisi ke universitas Australia yang berpartisipasi.",
    syarat: [
      "Terbuka untuk mahasiswa dari negara mana pun, bukan hanya warga Australia",
      "Terdaftar di program S2 riset atau S3 di universitas Australia yang berpartisipasi dalam RTP",
      "Pendaftaran dilakukan lewat universitas tujuan, bukan lewat sistem terpusat pemerintah",
      "Setiap universitas punya proses seleksi dan tenggat sendiri, umumnya berdasarkan prestasi akademik dan potensi riset"
    ],
    link: "https://www.education.gov.au/research-block-grants/research-training-program"
  },
  {
    id: "mccall-macbain",
    nama: "McCall MacBain Scholarship",
    singkatan: "McCall MacBain",
    negara: "Kanada (McGill University)",
    jenjang: "S2 atau Profesional tertentu di McGill",
    warna: "#6B2737",
    deskripsi:
      "Beasiswa penuh terbesar di McGill University, mencakup biaya kuliah, tunjangan bulanan, dan program pengembangan kepemimpinan, terbuka untuk pelamar dari seluruh dunia yang ingin menempuh S2 atau program profesional tertentu di McGill.",
    syarat: [
      "Sedang menempuh tahun terakhir S1, atau sudah lulus S1 (umumnya dalam 5 tahun terakhir, ada opsi untuk yang lebih senior dengan batas usia)",
      "Berencana mendaftar program S2 atau program profesional penuh waktu tertentu di McGill (minimal 45 SKS)",
      "Menunjukkan rekam jejak kepemimpinan dan keterlibatan komunitas",
      "Mendaftar beasiswa dan program McGill secara terpisah, sesuai tenggat masing-masing"
    ],
    link: "https://mccallmacbainscholars.org/"
  },
  {
    id: "jardine",
    nama: "Jardine Scholarship",
    singkatan: "Jardine",
    negara: "Inggris (Oxford dan Cambridge)",
    jenjang: "S1 (prioritas utama), S2 terbatas",
    warna: "#1E3A5F",
    deskripsi:
      "Beasiswa penuh dari Jardine Foundation (Jardine Matheson Group) untuk studi di kolese mitra tertentu di Oxford dan Cambridge, terbuka untuk pelamar dari sejumlah negara Asia termasuk Indonesia, dengan penekanan pada potensi kepemimpinan.",
    syarat: [
      "Berasal dari negara atau wilayah dengan kehadiran bisnis signifikan Jardine Matheson, termasuk Indonesia",
      "Sudah berdomisili di negara asal minimal 7 tahun sebelum pendaftaran",
      "Diterima di salah satu kolese mitra tertentu di Oxford atau Cambridge, kuota kolese terbatas",
      "Menunjukkan kualitas kepemimpinan, prestasi non akademik, dan komitmen terhadap kontribusi publik"
    ],
    link: "https://www.jardine-foundation.org/"
  },
  {
    id: "gates-cambridge",
    nama: "Gates Cambridge Scholarship",
    singkatan: "Gates Cambridge",
    negara: "Inggris (University of Cambridge)",
    jenjang: "S2, S3",
    warna: "#4B6E8C",
    deskripsi:
      "Beasiswa penuh dari Bill and Melinda Gates Foundation untuk studi pascasarjana di University of Cambridge, terbuka untuk pelamar dari negara mana pun di luar Inggris, dengan penekanan pada keunggulan akademik dan komitmen memberi manfaat bagi masyarakat luas.",
    syarat: [
      "Warga negara dari negara mana pun di luar Inggris",
      "Mendaftar dan diterima di salah satu program S2 atau S3 penuh waktu di Cambridge, calon diperingkat oleh masing-masing departemen",
      "Menunjukkan keunggulan akademik, kapasitas kepemimpinan, dan komitmen pada kebaikan bersama",
      "Umumnya berusia di bawah 30 tahun, meski tidak mutlak"
    ],
    link: "https://www.gatescambridge.org/"
  },
  {
    id: "mitsui-bussan",
    nama: "Mitsui-Bussan Scholarship Program for Indonesia",
    singkatan: "Mitsui-Bussan",
    negara: "Jepang",
    jenjang: "S1",
    warna: "#9C3B3B",
    deskripsi:
      "Beasiswa penuh dari Mitsui & Co. khusus untuk lulusan SMA/MA di Indonesia jurusan IPA atau IPS, mencakup kursus bahasa Jepang intensif sekitar 1,5 tahun sebelum melanjutkan kuliah S1 di universitas Jepang.",
    syarat: [
      "Warga Negara Indonesia, lulusan SMA/MA kurikulum Indonesia jurusan IPA atau IPS, bukan SMK atau jurusan bahasa",
      "Berusia di bawah 20 tahun per 1 April tahun pendaftaran dan belum menikah",
      "Nilai akademik minimal 80 untuk mata pelajaran seperti Bahasa Inggris, Matematika, Fisika, Kimia, Ekonomi, atau Geografi sesuai jurusan",
      "Melalui rangkaian seleksi meliputi ujian tertulis, tes bakat, pemeriksaan kesehatan, dan wawancara"
    ],
    link: "https://www.mbkscholarship-id.com/"
  },
  {
    id: "turkiye-burslari",
    nama: "Turkiye Bursları (Turkiye Scholarships)",
    singkatan: "Turkiye Bursları",
    negara: "Turki",
    jenjang: "Diploma, S1, S2, S3, riset",
    warna: "#B5482E",
    deskripsi:
      "Beasiswa penuh Pemerintah Turki yang dikelola YTB (Presidency for Turks Abroad and Related Communities), mencakup penempatan otomatis di universitas Turki, kursus bahasa Turki satu tahun, serta jenjang mulai dari diploma sampai S3 di berbagai bidang.",
    syarat: [
      "Bukan warga negara Turki",
      "Batas usia bervariasi per jenjang, sekitar di bawah 21 tahun untuk S1, di bawah 30 tahun untuk S2, di bawah 35 tahun untuk S3",
      "Nilai akademik minimal sekitar 70 persen untuk S1, lebih tinggi untuk jenjang pascasarjana",
      "Mendaftar satu kali secara individu lewat portal resmi tanpa biaya pendaftaran, penempatan kampus dan jurusan diatur oleh sistem"
    ],
    link: "https://www.turkiyeburslari.gov.tr/"
  },
  {
    id: "eiffel-excellence",
    nama: "Eiffel Excellence Scholarship",
    singkatan: "Eiffel Excellence",
    negara: "Prancis",
    jenjang: "S2, S3",
    warna: "#5A4A7A",
    deskripsi:
      "Beasiswa dari Kementerian Eropa dan Luar Negeri Prancis untuk menarik mahasiswa asing unggulan ke program S2 dan S3 di institusi pendidikan tinggi Prancis, dengan fokus pada bidang prioritas seperti sains, teknik, hukum, ekonomi, dan ilmu sosial.",
    syarat: [
      "Bukan warga negara Prancis, termasuk dwikewarganegaraan dengan salah satunya Prancis",
      "Untuk jenjang S2, umumnya berusia maksimal 29 tahun dan belum sedang berkuliah di Prancis",
      "Untuk jenjang S3, umumnya berusia maksimal 35 tahun, dalam skema co-tutelle atau bimbingan bersama dengan institusi asal",
      "Pendaftaran hanya bisa diajukan oleh institusi pendidikan tinggi Prancis yang dituju, bukan langsung oleh mahasiswa"
    ],
    link: "https://www.campusfrance.org/en/france-excellence-eiffel-scholarship-program"
  },
];
