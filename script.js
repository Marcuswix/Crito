// script.js
const toggleButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggleButton.addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
    overlay.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

overlay.addEventListener('click', () => {
  menu.style.display = "none";
  overlay.style.display = "none";
})


let currentSlide = 0;
const slides = document.querySelectorAll('.slidez');

function showSlide(index) {
    slides.forEach((slidez, i) => {
        if (i === index) {
            slidez.style.display = 'block';
        } else {
            slidez.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length -1) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Ändra bild var 4 sekunder (4000 ms)