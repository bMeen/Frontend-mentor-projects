"use strict";

const switchTheme = document.querySelector(".theme-switch");
const input = document.getElementById("theme-toggle");

if (
  localStorage.getItem("current-theme") === "dark" ||
  (!("current-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  input.checked = false;
} else {
  input.checked = true;
}

switchTheme.addEventListener("click", function () {
  if (input.checked) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("current-theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("current-theme", "dark");
  }
});
