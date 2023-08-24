const sliderContainer = document.querySelector(".slider-container");
const images = sliderContainer.querySelectorAll("img");
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(nextSlide, 2000);
