var typed = new Typed(".auto-input", {
    strings: ["Bem Vindo", "歡迎", "Welcome", "Bienvenido", "ようこそ", "Welkom", "желанный", "Bienvenue", "Selamat Datang"],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true
});

$('img').on('dragstart', function(event) { event.preventDefault(); });