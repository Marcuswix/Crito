// Menu-bar functions
const toggleButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggleButton.addEventListener("click", () => {
  menu.classList.add('open')
  overlay.classList.add('show')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open')
  overlay.classList.remove('show')
})

// Slide functions
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
    if (currentSlide >= slides.length -0) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Ändra bild var 4 sekunder (4000 ms)

// Go to top function
function goToTop()
{
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    )
}

window.addEventListener("scroll", function()
{
    let element = document.getElementById("to-top-btn")

    if(window.scrollY > 100)
    {
        element.classList.remove("hide-btn")
    }

    else
    {
        element.classList.add("hide-btn")
    }
})

