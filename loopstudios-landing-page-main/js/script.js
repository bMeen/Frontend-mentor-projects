"use strict";

const btnElement = document.getElementById("menu-btn");
const menuElement = document.getElementById("menu");

const navToggle = function () {
  btnElement.classList.toggle("open");
  menuElement.classList.toggle("flex");
  menuElement.classList.toggle("hidden");
};

btnElement.addEventListener("click", navToggle);
