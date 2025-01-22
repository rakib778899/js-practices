


const slideshowElements = document.querySelectorAll(".slideshow-element");
let countElements = 0; 

setInterval(() => {
    slideshowElements[countElements].classList.remove("current");
    
    
    countElements = (countElements + 1) % slideshowElements.length;  

    slideshowElements[countElements].classList.add("current");
}, 2000);



