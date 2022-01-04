/* Slider */
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const intervalTime = 15000;
let slideInterval;

//Slider Events
const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.active');
    // Remove current class
    current.classList.remove('active');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('active');
    } else {
        // Add current to start
        slides[0].classList.add('active');
    }
    setTimeout(() => current.classList.remove('active'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.active');
    // Remove current class
    current.classList.remove('active');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('active');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('active');
    }
    setTimeout(() => current.classList.remove('active'));
};

//Buttons Events
next.addEventListener('click', e => {
    nextSlide();
})
prev.addEventListener('click', e => {
    prevSlide();
})