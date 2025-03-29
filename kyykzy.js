document.addEventListener("DOMContentLoaded", function() {
    // LINK DONATE SAMA QRIS || UBAH PAKE PUNYA LU
    const config = {
		qris: "https://files.catbox.moe/ew33a6.jpg",
        saweria: "https://saweria.co/asu",
        buymeacoffee: "https://www.buymeacoffee.com/asi",
        trakteer: "https://trakteer.id/usu",
        patreon: "https://www.patreon.com/sus"
    };

    // GAUSAH DI APA-APAIN NANTI EMROR LAGI
	const QrisLink = document.getElementById("qris-link");
    const saweriaLink = document.getElementById("saweria-link");
    const buymeacoffeeLink = document.getElementById("buymeacoffee-link");
    const trakteerLink = document.querySelector("a[href*='trakteer.id']");
    const patreonLink = document.querySelector("a[href*='patreon.com']");

	if (QrisLink) QrisLink.href = config.qris;
    if (saweriaLink) saweriaLink.href = config.saweria;
    if (buymeacoffeeLink) buymeacoffeeLink.href = config.buymeacoffee;
    if (trakteerLink) trakteerLink.href = config.trakteer;
    if (patreonLink) patreonLink.href = config.patreon;

    // INI FUNGSI BEKGROND BIAR GAK ERROR
    let backgroundContainer = document.getElementById("background-container");
    if (!backgroundContainer) {
        backgroundContainer = document.createElement("div");
        backgroundContainer.id = "background-container";
        document.body.prepend(backgroundContainer);
    }
    backgroundContainer.style.position = "fixed";
    backgroundContainer.style.top = "0";
    backgroundContainer.style.left = "0";
    backgroundContainer.style.width = "100%";
    backgroundContainer.style.height = "100%";
    backgroundContainer.style.zIndex = "-1";   // LINK BACKGROUND DIGANTI DI BAWAH SINI
    backgroundContainer.style.background = "url('https://files.catbox.moe/ew33a6.jpg') no-repeat center center fixed";
    backgroundContainer.style.backgroundSize = "cover";

    // NOMOR PAYMENT LU NOH
    window.copyToClipboard = function(paymentName) {
        let paymentNumbers = {
            'Dana': '081234567890',
            'Ovo': '081234567891',
            'Gopay': '081234567892'
        };
        
        let number = paymentNumbers[paymentName];
        if (!number) return;

        navigator.clipboard.writeText(number).then(() => { // YANG INI BOLEH UBAH TAPI JAN ASAL
            showNotification(`Nomor ${paymentName} Berhasil Disalin: ${number}<br>TOLONG KIRIM BUKTI TRANSFER AGAR TRANSAKSI BERJALAN LANCAR`);
        });
    };

    // NOTIFNYA NIH JAN DI UBAH
    function showNotification(message) {
        let notification = document.createElement("div");
        notification.innerHTML = message;
        notification.style.position = "absolute";
        notification.style.top = "100px"; // Sesuaikan dengan posisi di bawah marquee || JAN DI APAIN
        notification.style.left = "50%";
        notification.style.transform = "translateX(-50%)";
        notification.style.padding = "10px";
        notification.style.background = "rgba(0, 0, 0, 0.8)";
        notification.style.color = "white";
        notification.style.border = "1px solid rgba(255, 255, 255, 0.3)";
        notification.style.borderRadius = "5px";
        notification.style.zIndex = "1000";
        notification.style.textAlign = "center";
        document.body.appendChild(notification);

        // NOTIF ILANG KALO LEWAT 3 DETIK
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
});

//BUAT LO YANG MAU GANTI JUDUL, NAMA WEB, NOMOR WA, DAN EMAIL KE INDEX.HTML YA SOALNYA GW UDAH COBA MASUKIN SEMUA DI SINI CUMAN ERROR JIRLAH. NEXT AFDET AJA DEH YA