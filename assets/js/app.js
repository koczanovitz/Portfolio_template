// Inicjacja biblioteki AOS
AOS.init();

// Kliknięcie w hamburger 
let hamburger = document.getElementById("hamburger");
// nałożenie nasłuchiwania na hamburger
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("is-open");
})

let menu = document.querySelector(".menu")

let sliderButton = document.getElementById("slider");

sliderButton.addEventListener("click", function () {
    document.body.classList.toggle("no-menu");
})


// ALTERNATYWNIE
// jquery

// $("hamburger").on("click", function()) {

// }