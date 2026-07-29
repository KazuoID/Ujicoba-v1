// Menggunakan Intersection Observer API untuk memicu animasi saat di-scroll
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    const revealOptions = {
        threshold: 0.3, // Animasi mulai saat 30% elemen terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                // Hapus observer kalau sudah muncul agar tidak berulang (opsional)
                // observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});
