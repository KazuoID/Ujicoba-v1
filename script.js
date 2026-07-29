// Menggunakan Intersection Observer API untuk memicu animasi saat di-scroll
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    const revealOptions = {
        threshold: 0.2, // Mulai animasi saat 20% elemen masuk layar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Jika elemen masuk layar, tambah class "active"
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                // Jika elemen keluar layar, hapus class "active" 
                // Ini yang bikin animasinya bisa main lagi saat discroll naik/turun!
                entry.target.classList.remove("active");
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
