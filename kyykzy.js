// GANTI PAKE LINK FOTO QRIS LU
const qrisURL = "https://files.catbox.moe/ew33a6.jpg";

// GANTI PAKE FOTO BACKGROUND LU
const backgroundURL = "https://files.catbox.moe/ew33a6.jpg";

// Data pembayaran yang bisa diubah
const paymentData = {
    Dana: "081246493375", // NOPE DANA LU
    Ovo: "081248845231", // NOPE OVO LU
    Gopay: "081248845231" // NOPE GOPAY LU
}; //NOTE UBAH TAPI JAN APUS TANDA " NYA

//MAU UBAH NAMA NAMA WEB NOMOR SAMA EMAIL DI BAGIAN HUBUNGI SAYA? KE FILE INDEX.HTML 

// Set background gambar
document.getElementById("background-container").style.backgroundImage = `url('${backgroundURL}')`;

// Set QRIS link
document.getElementById("qris-link").href = qrisURL;

// Fungsi untuk menyalin nomor saat tombol ditekan
function copyToClipboard(paymentType) {
    if (paymentData[paymentType]) {
        navigator.clipboard.writeText(paymentData[paymentType]).then(() => {
            alert(paymentType + " nomor telah disalin: " + paymentData[paymentType]);
        }).catch(err => {
            console.error('Gagal menyalin:', err);
        });
    } else {
        alert("Nomor tidak ditemukan!");
    }
}
