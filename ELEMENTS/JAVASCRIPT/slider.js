const slidesWrapper = document.querySelector(".slides-wrapper");
const images = document.querySelectorAll(".image");
let imglen = images.length;
let imageindex = 0;

function next() {
    imageindex = (imageindex + 1) % imglen;
    updateslider()
}

function preview() {
    imageindex = (imageindex - 1 + imglen) % imglen;
    updateslider()
}

function updateslider() {
    slidesWrapper.style.transform = `translateX(-${imageindex * 100}%)`
}
setInterval(next, 2000)