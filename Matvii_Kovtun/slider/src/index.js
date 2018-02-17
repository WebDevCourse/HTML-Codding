let buttonNext = document.querySelector(".slider__button_next");
let buttonPrev = document.querySelector(".slider__button_prev");
let sliderImage = document.querySelector(".slider__image");

let images = ["https://www.metaslider.com/wp-content/uploads/2014/11/mountains1.jpg", "http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg"];

let currentImage = 1;

buttonNext.addEventListener("click", () => {
    currentImage = ++currentImage  % images.length;
    sliderImage.src = images[currentImage];
}, false);

buttonPrev.addEventListener("click", () => {
    currentImage = (--currentImage + images.length) % images.length;
    sliderImage.src = images[currentImage];
}, false);


