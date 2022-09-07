"use strict";

const ratingsSectionElement = document.getElementById("rating-section");
const submitSectionElement = document.getElementById("submit-section");
const ratingsElement = document.querySelectorAll(".rate-item");
const submitBtnElement = document.querySelector(".btn");
const rateElement = document.getElementById("rate");
const rateContainer = document.getElementById("rate-container");

let rateNumber;

// With Event Delegation
rateContainer.addEventListener("click", function (e) {
  const clicked = e.target;

  if (!clicked) return;

  ratingsElement.forEach((r) => r.classList.remove("active"));
  rateNumber = clicked.textContent;
  clicked.classList.add("active");
});

// Without Event Delegation
/* for (let i = 0; i < ratingsElement.length; i++) {
  ratingsElement[i].addEventListener("click", function () {
    rateNumber = ratingsElement[i].textContent;

    clearActive();
    ratingsElement[i].classList.add("active");
  });
}

function clearActive() {
  for (let i = 0; i < ratingsElement.length; i++) {
    ratingsElement[i].classList.remove("active");
  }
} */

submitBtnElement.addEventListener("click", function () {
  rateElement.textContent = rateNumber;
  if (!rate) {
    rateElement.textContent = 0;
  }

  ratingsSectionElement.classList.toggle("hidden");
  submitSectionElement.classList.toggle("hidden");
});
