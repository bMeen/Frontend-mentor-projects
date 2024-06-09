"use strict";

const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");

const signUpModalElement = document.querySelector(".sign-up-modal");
const successModalElement = document.querySelector(".success-modal");

const subscribeBtn = document.querySelector(".subscribe");
const dismissBtn = document.querySelector(".dismiss");

const errorElement = document.querySelector(".error-message");
const mailElement = document.querySelector(".email");

const renderError = function () {
  errorElement.classList.remove("hidden");
  inputElement.classList.add("error");
};

const renderSuccess = function () {
  signUpModalElement.classList.toggle("hidden");
  successModalElement.classList.toggle("hidden");

  errorElement.classList.add("hidden");
  inputElement.classList.remove("error");
};

const validateForm = function (e) {
  e.preventDefault();

  const input = inputElement.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  !validEmail ? renderError() : renderSuccess();

  inputElement.value = "";
  mailElement.textContent = input;
};

formElement.addEventListener("submit", validateForm);
subscribeBtn.addEventListener("click", validateForm);
dismissBtn.addEventListener("click", renderSuccess);
