let buttonNext = document.querySelector(".slider__button_next");
let buttonPrev = document.querySelector(".slider__button_prev");
let sliderImage = document.querySelector(".slider__image");

let images = ["https://www.metaslider.com/wp-content/uploads/2014/11/mountains1.jpg", "http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg"];

let currentImage = 1;


const image = (src) => new Promise((res, rej) => {
    const image = new Image();
    image.onload = res;
    image.src = src;
});


const fadeOff = () => new Promise((res, rej) => {
    const animate = () => {
        if (!sliderImage.style.opacity) sliderImage.style.opacity = 1;
        if (sliderImage.style.opacity <= 0) return res();
        else sliderImage.style.opacity -= 0.01;
        requestAnimationFrame(animate);
    };
    animate();
});

const fadeIn = () => new Promise((res, rej) => {
    const animate = () => {
        if (sliderImage.style.opacity >= 1) return res();
        else sliderImage.style.opacity = 0.01 + Number(sliderImage.style.opacity);
        requestAnimationFrame(animate);
    };
    animate();
});

const nextPic = async () => {
    await image(images[currentImage]);
    await fadeOff();
    sliderImage.src = images[currentImage];
    await fadeIn();
};


const wait = (time) => new Promise((res, rej) => setTimeout(res, time));


const run = async () => {
    await wait(4000);
    await nextPic();
    run();
};

run();


buttonNext.addEventListener("click", () => {
    currentImage = ++currentImage % images.length;
    nextPic();
}, false);

buttonPrev.addEventListener("click", () => {
    currentImage = (--currentImage + images.length) % images.length;
    nextPic();
}, false);