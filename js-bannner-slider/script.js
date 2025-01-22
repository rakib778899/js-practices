let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

setInterval(() => {
    currentIndex++;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0; 
    }

    const slideWidth = slides[0].clientWidth; 
    const sliderImages = document.querySelector(".slider-images");


    sliderImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}, 2000); 
