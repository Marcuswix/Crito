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