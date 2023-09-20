// script.js
const toggleButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});