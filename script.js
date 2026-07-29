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
    // --- Fitur Background Music ---
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

let isPlaying = false;

    musicToggle.addEventListener("click", function() {
        if (isPlaying) {
            bgMusic.pause();
            // Ganti ikon ke mute
            musicIcon.classList.remove("fa-music");
            musicIcon.classList.add("fa-volume-xmark");
        } else {
            bgMusic.play();
            // Ganti ikon ke nada musik
            musicIcon.classList.remove("fa-volume-xmark");
            musicIcon.classList.add("fa-music");
        }
        isPlaying = !isPlaying;
    });
});
