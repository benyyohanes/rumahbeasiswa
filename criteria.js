// criteria.js — Data kriteria per jalur seleksi LPDP
// Setiap kali ada gambar syarat baru, tinggal tambah 1 object baru di dalam array ini.
const CRITERIA_DATA = [
  {
    id: "afirmasi_prasejahtera",
    kategori: "Afirmasi",
    nama: "Afirmasi - Prasejahtera",
    sasaran: "Diperuntukkan bagi kelompok masyarakat dari keluarga prasejahtera untuk melanjutkan studi jenjang magister.",
    usia_maksimal: "Magister: 42",
    dokumen_khusus: "Pendaftar dinyatakan terdaftar dan aktif sebagai penerima atau merupakan anggota dalam Kartu Keluarga (KK) dengan penerima Program Keluarga Harapan (PKH), penerima Bantuan Pangan Non Tunai (BPNT), dan/atau Penerima Bantuan Iuran (PBI) pada sistem Data Tunggal Sosial dan Ekonomi Nasional (DTSEN) Kementerian Sosial.",
    syarat_bahasa: "Magister LN: Toefl ITP 500; Toefl iBT 61; PTE Academic 50; IELTS 6,0; Duolingo English Test 95; TOEP 500.",
    syarat_ipk: "Magister: 3.00",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
  // Tambahkan object baru di sini untuk jalur lain, 
{
    id: "skema_pendanaan_parsial",
    kategori: "Skema Pendanaan",
    nama: "Skema Pendanaan Parsial",
    sasaran: "Pendaftar yang termasuk dalam kriteria Umum atau kriteria CPNS/PNS/TNI/POLRI dapat memilih skema pendanaan parsial.",
    usia_maksimal: "Magister: 35, Doktor: 40. Dosen Tetap dengan NIDN, Magister: 42, Doktor: 47.",
    dokumen_khusus: "Mengunggah Surat Pernyataan Tanggung Jawab Mutlak (SPTJM) bahwa dana yang berasal dari Individu tidak bersumber dari APBN/APBD dengan format sesuai ketentuan LPDP.",
    syarat_bahasa: "Magister DN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0. Magister LN: Toefl iBT 80, PTE Academic 58, IELTS 6,5. Doktor DN: Toefl ITP 530, Toefl iBT 70, PTE Academic 50, IELTS 6,0. Doktor LN: Toefl iBT 94, PTE Academic 65, IELTS 7,0. Tidak wajib sertifikat Bahasa Inggris untuk yang telah memiliki LoA Unconditional (Tujuan DN & LN). Bagi yang belum memiliki LoA Unconditional, Tujuan DN ditambah opsi Tes kemampuan Bahasa Inggris mandiri di PTDN (pusat Bahasa) sesuai list LPDP, Duolingo, TOEP. Tujuan LN ditambah opsi Duolingo.",
    syarat_ipk: "Magister: 3.00, Doktor: 3.25",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
  {
    id: "afirmasi_disabilitas",
    kategori: "Afirmasi",
    nama: "Afirmasi - Penyandang Disabilitas",
    sasaran: "Diperuntukkan bagi kelompok masyarakat penyandang disabilitas yang ingin menempuh jenjang magister dan doktor.",
    usia_maksimal: "Magister: 42, Doktor: 47",
    dokumen_khusus: "Pendaftar merupakan penyandang disabilitas berkategori Penyandang Disabilitas Fisik, Penyandang Disabilitas Intelektual, Penyandang Disabilitas Mental, Penyandang Disabilitas Sensorik, dan/atau Penyandang Disabilitas Ganda atau Multi. Dibuktikan dengan surat keterangan disabilitas yang ditandatangani oleh dokter/psikolog/psikiater/audiologis dari RS Pemerintah atau Puskesmas.",
    syarat_bahasa: "Magister LN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0, Duolingo English Test 95, TOEP 500. Doktor LN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0, Duolingo English Test 95, TOEP 500. Penambahan opsi sertifikat skor minimal kemampuan bahasa Inggris pada Pusat Bahasa PTDN 500/setara. Jika telah memiliki LoA Unconditional sesuai program studi dan perguruan tinggi tujuan LPDP maka tidak wajib memiliki sertifikat kemampuan Bahasa Inggris.",
    syarat_ipk: "Magister: 2.50, Doktor: 3.00",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
  {
    id: "afirmasi_daerah_afirmasi",
    kategori: "Afirmasi",
    nama: "Afirmasi - Daerah Afirmasi",
    sasaran: "Diperuntukkan bagi kelompok masyarakat yang berasal dari daerah afirmasi yang ingin menempuh jenjang magister dan doktor.",
    usia_maksimal: "Magister: 47, Doktor: 50",
    dokumen_khusus: "Pendaftar bertempat tinggal di daerah afirmasi yang dibuktikan dengan Kartu Tanda Penduduk (KTP), dan Surat keterangan dari Lurah/Kepala Desa yang diterbitkan paling lama 1 (satu) tahun di bulan yang sama dengan waktu pendaftaran beasiswa.",
    syarat_bahasa: "Magister LN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0, Duolingo English Test 95, TOEP 500. Doktor LN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0, Duolingo English Test 95, TOEP 500. Penambahan opsi sertifikat skor minimal kemampuan bahasa Inggris pada Pusat Bahasa PTDN 500/setara. Jika telah memiliki LoA Unconditional sesuai program studi dan perguruan tinggi tujuan LPDP maka tidak wajib memiliki sertifikat kemampuan Bahasa Inggris.",
    syarat_ipk: "Magister: 2.50, Doktor: 3.00",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
  {
    id: "afirmasi_putra_putri_papua",
    kategori: "Afirmasi",
    nama: "Afirmasi - Putra Putri Papua",
    sasaran: "Diperuntukkan bagi putra-putri daerah Provinsi Papua, Provinsi Papua Barat, Provinsi Papua Selatan, Provinsi Papua Tengah, Provinsi Papua Pegunungan, dan Provinsi Papua Barat Daya yang ingin menempuh jenjang magister dan doktor.",
    usia_maksimal: "Magister: 47, Doktor: 50",
    dokumen_khusus: "Surat pernyataan yang ditandatangani oleh orang tua/wali pendaftar/kepala adat/kepala lembaga adat resmi Papua/kepala desa setempat yang menyatakan bahwa pendaftar: a) Pendaftar bermarga Asli Papua, b) Ibu kandung adalah Orang Asli Papua (bermarga Asli Papua), atau c) Bapak kandung adalah Orang Asli Papua (bermarga Asli Papua).",
    syarat_bahasa: "Tidak dipersyaratkan",
    syarat_ipk: "Tidak dipersyaratkan",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
  {
    id: "kriteria_umum",
    kategori: "Umum",
    nama: "Kriteria Pendaftar Umum",
    sasaran: "Seluruh WNI yang sudah menyelesaikan jenjang pendidikan D4 atau S1 atau jenjang pendidikan S2.",
    usia_maksimal: "Masyarakat Umum, Magister: 35, Doktor: 47. Dosen Tetap dengan NIDN, Magister: 42, Doktor: 40.",
    dokumen_khusus: "",
    syarat_bahasa: "Magister DN: Toefl ITP 500, Toefl iBT 61, PTE Academic 50, IELTS 6,0. Magister LN: Toefl iBT 80, PTE Academic 58, IELTS 6,5. Doktor DN: Toefl ITP 530, Toefl iBT 70, PTE Academic 50, IELTS 6,0. Doktor LN: Toefl iBT 94, PTE Academic 65, IELTS 7,0. Tidak wajib sertifikat Bahasa Inggris untuk yang telah memiliki LoA Unconditional (Tujuan DN & LN). Bagi yang belum memiliki LoA Unconditional, Tujuan DN ditambah opsi Tes kemampuan Bahasa Inggris mandiri di PTDN (pusat Bahasa) sesuai list LPDP, Duolingo, TOEP. Tujuan LN ditambah opsi Duolingo.",
    syarat_ipk: "Magister: 3.00, Doktor: 3.25",
    proses_seleksi: ["Seleksi Administrasi", "Seleksi Bakat Skolastik", "Seleksi Substansi"]
  },
];