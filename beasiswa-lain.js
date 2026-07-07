// beasiswa-lain.js
(function () {
  const grid = document.getElementById("blGrid");

  if (typeof SCHOLARSHIP_REGISTRY === "undefined" || !SCHOLARSHIP_REGISTRY.length) {
    grid.innerHTML = '<div class="bl-empty">Belum ada beasiswa yang terdaftar di registry.js.</div>';
    return;
  }

  const infoById = {};
  const infoList = typeof SCHOLARSHIPS_INFO === "undefined" ? [] : SCHOLARSHIPS_INFO;
  infoList.forEach((s) => {
    infoById[s.id] = s;
  });

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }

  function renderComingSoon(entry) {
    const card = document.createElement("div");
    card.className = "bl-card bl-coming-soon";

    card.innerHTML = `
      <div class="bl-spine" style="background:${entry.warna || "#6B7482"}"></div>
      <div class="bl-card-body">
        <div class="bl-card-header">
          <p class="bl-card-nama">${escapeHtml(entry.nama)}</p>
          <span class="bl-card-negara">${escapeHtml(entry.negara || "Segera diumumkan")}</span>
          <span class="bl-card-jenjang" style="background:${entry.warna || "#6B7482"}">Segera Hadir</span>
        </div>
        <p class="bl-card-deskripsi">Info untuk beasiswa ini belum ditambahkan. Cek kembali nanti.</p>
      </div>
    `;

    return card;
  }

  function renderInfoCard(entry, detail) {
    const card = document.createElement("div");
    card.className = "bl-card";
    card.dataset.id = entry.id;

    const warna = entry.warna || detail.warna || "#A9812D";
    const syaratHtml = (detail.syarat || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    card.innerHTML = `
      <div class="bl-spine" style="background:${warna}"></div>
      <div class="bl-card-body">
        <div class="bl-card-header">
          <p class="bl-card-nama">${escapeHtml(detail.nama || entry.nama)}</p>
          <span class="bl-card-negara">${escapeHtml(detail.negara || entry.negara)}</span>
          <span class="bl-card-jenjang" style="background:${warna}">${escapeHtml(detail.jenjang || "")}</span>
        </div>
        <p class="bl-card-deskripsi">${escapeHtml(detail.deskripsi)}</p>
        <div class="bl-card-toggle">Lihat syarat umum &amp; link resmi &darr;</div>
        <div class="bl-card-detail">
          <h4>Syarat Umum</h4>
          <ul>${syaratHtml}</ul>
          <a class="bl-card-link" href="${detail.link}" target="_blank" rel="noopener">Kunjungi Situs Resmi &rarr;</a>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      card.classList.toggle("bl-open");
    });

    return card;
  }

  let rendered = 0;

  SCHOLARSHIP_REGISTRY.forEach((entry) => {
    if (entry.tipe === "database") return; // LPDP dan sejenisnya sudah punya halaman sendiri, dilewati di sini

    if (entry.status === "segera") {
      grid.appendChild(renderComingSoon(entry));
      rendered++;
      return;
    }

    const detail = infoById[entry.id];
    if (!detail) {
      console.warn(`registry.js mendaftarkan "${entry.id}" sebagai aktif, tapi belum ada isinya di scholarships-info.js`);
      grid.appendChild(renderComingSoon(entry));
      rendered++;
      return;
    }

    grid.appendChild(renderInfoCard(entry, detail));
    rendered++;
  });

  if (!rendered) {
    grid.innerHTML = '<div class="bl-empty">Belum ada kartu beasiswa untuk ditampilkan.</div>';
  }
})();
