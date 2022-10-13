"use strict";

const slidesElement = document.querySelectorAll(".slide");
const prevIconElement = document.querySelectorAll(".prev-btn");
const nextIconElement = document.querySelectorAll(".next-btn");

let currentSlide = 0;
let maxSlide = slidesElement.length;

const goToSlide = function (slide) {
  slidesElement.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = 1;
  } else {
    currentSlide--;
  }

  goToSlide(currentSlide);
};

goToSlide(0);
prevIconElement.forEach((btn) => btn.addEventListener("click", prevSlide));
nextIconElement.forEach((btn) => btn.addEventListener("click", nextSlide));
