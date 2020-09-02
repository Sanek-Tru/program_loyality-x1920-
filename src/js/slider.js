let everythingSlide = document.querySelectorAll('.js-slide');
let slider = document.querySelector('.slider');

const next=document.querySelector('.js-button-next');
const prev=document.querySelector('.js-button-prev');

let wayImages=slider.getAttribute("data-slider-images");
let masWay=wayImages.split(',');


let index = 1;

function processingSlides() {
        const imageIndex = [index !== 0 ? index - 1 : masWay.length - 1, index, index !== masWay.length - 1 ? index + 1 : 0];
        everythingSlide.forEach(function (slide, i){
                slide.src = masWay[imageIndex[i]]
        });
}

function nextSlide(){
        if (index === masWay.length - 1) {
                index = 0;
        } else {
                index += 1;
        }
        processingSlides();
}

function prevSlide(){
        if (index === 0) {
                index = masWay.length - 1;
        } else {
                index -= 1;
        }
        processingSlides();
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)







