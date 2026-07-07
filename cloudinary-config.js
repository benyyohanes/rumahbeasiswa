// cloudinary-config.js
// Konfigurasi terpusat untuk upload file ke Cloudinary
// Dipakai oleh fitur mana pun yang butuh upload gambar/dokumen

const CLOUDINARY_CONFIG = {
    cloudName: "bmjaom4r",
    uploadPreset: "database_lpdp",
};

/**
 * Upload satu file ke Cloudinary
 * @param {File} file - file dari input type="file"
 * @param {string} folder - opsional, subfolder tujuan di Cloudinary
 * @returns {Promise<object>} response dari Cloudinary (berisi secure_url, public_id, dll)
 */
async function uploadToCloudinary(file, folder = "") {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/auto/upload`;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_CONFIG.uploadPreset);
    if (folder) {
        formData.append("folder", folder);
    }

    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
            errorData?.error?.message || "Upload ke Cloudinary gagal"
        );
    }

    return response.json();
}