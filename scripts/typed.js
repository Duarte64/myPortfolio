var typed = new Typed(".auto-input", {
    strings: ["Bem Vindo", "歡迎", "Selamat Datang", "Welcome", "Bienvenido", "ようこそ", "Welkom", "желанный", "Bienvenue"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

var typed = new Typed(".auto-input-about", {
    strings: ["ABOUT ME", "關於我", "SOBRE MIM", "SOBRE MI", "私について", "OVER MIJ", "Обо мне", "À PROPOS DE MOI", "TENTANG SAYA"],
    typeSpeed: 20,
    backSpeed: 25,
    loop: true
});

$('img').on('dragstart', function(event) { event.preventDefault(); });