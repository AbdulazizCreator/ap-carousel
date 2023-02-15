const carousel = document.querySelector(".carousel");
const carouselAllItems = document.querySelectorAll(".carousel-item");
const carouselItems = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideLength = 4;

if (innerWidth < 1200) {
  slideLength = 3;
}

if (innerWidth < 900) {
  slideLength = 2;
}

if (innerWidth < 500) {
  slideLength = 1;
}

const carouselItemsLength = carouselAllItems.length; // the number of carousel items

const carouselItemWidth = carousel.offsetWidth / slideLength; // carousel-item width
carouselItems.style.width = carouselItemsLength * carouselItemWidth + "px"; // total width of carousel-items

for (let i = 0; i < carouselItemsLength; i++) {
  carouselAllItems[i].style.width = carouselItemWidth + "px"; // set width for every carousel-item
}

const stepLength = 1;
const stepWidth = stepLength * carouselItemWidth;

let currentPosition = 0;
let lastPosition = (carouselItemsLength - slideLength) * carouselItemWidth;

prevBtn.addEventListener("click", function () {
  currentPosition -= stepWidth;
  if (Math.ceil(currentPosition) < 0) {
    currentPosition = lastPosition;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

nextBtn.addEventListener("click", function () {
  currentPosition += stepWidth;
  if (Math.floor(currentPosition) > lastPosition) {
    currentPosition = 0;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});
