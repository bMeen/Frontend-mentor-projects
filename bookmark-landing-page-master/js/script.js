"use strict";

const mobileMenuBtnElement = document.querySelector(".nav-btns");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navLogo = document.querySelector(".logo");

const tabBtnContainer = document.querySelector(".tab-buttons");
const activeElements = document.querySelectorAll(".actives");
const tabContents = document.querySelectorAll(".tab-contents");

const accordionContainer = document.querySelector(".accordion");
const answersElement = document.querySelectorAll(".faq-answer");
const arrowElement = document.querySelectorAll(".icon");

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");

/* FUNCTIONS */
const toggleMobileNav = function (url = "./images/logo-bookmark.svg") {
  navOpen.classList.toggle("hidden");
  navClose.classList.toggle("hidden");
  document.querySelector(".mobile-nav").classList.toggle("hidden");
  navLogo.src = url;
};

const renderError = function () {
  errorIcon.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
};

const renderSuccess = function () {
  errorIcon.classList.add("hidden");
  errorMessage.classList.add("hidden");
};

/* EVENT HANDLERS  */
/* MOBILE NAVIGATION */
mobileMenuBtnElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-open"))
    toggleMobileNav("./images/logo-bookmark-invert.svg");

  if (e.target.classList.contains("nav-close")) toggleMobileNav();
});

/* TABBED COMPONENT */
tabBtnContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".tab-btn");
  if (!clicked) return;

  const id = clicked.getAttribute("id");

  activeElements.forEach((t) => t.classList.remove("tab-btn-active"));
  tabContents.forEach((t) => t.classList.add("hidden"));

  document.getElementById(`${id}-active`).classList.add("tab-btn-active");
  document.getElementById(`${id}-content`).classList.remove("hidden");
});

/* ACCORDION COMPONENT */
accordionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq");
  if (!clicked) return;

  const id = clicked.getAttribute("id");
  console.log(id);

  arrowElement.forEach((e) => e.classList.remove("icon-active"));
  answersElement.forEach((e) => e.classList.add("hidden"));

  document.querySelector(`.${id}-icon`).classList.toggle("icon-active");
  document.getElementById(`${id}-answer`).classList.toggle("hidden");
});

/* FORM VALIDATION */
formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = inputElement.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  !validEmail ? renderError() : renderSuccess();

  inputElement.value = "";
});
