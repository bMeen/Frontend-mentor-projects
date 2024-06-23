"use strict";

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const inputElement = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

const shortenSectionElement = document.querySelector(".shorten-section");

let link = "";
let shortURL = "";
let savedLinks = [];

const getJSON = async function (url) {
  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
    shortURL = await response.text();
  } catch (error) {
    console.log(error);
  }
};

const insertHTML = function (link, shortenLink) {
  const html = `
  <div
    class="link-container flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row"
   >
   <p class="font-bold text-center text-veryDarkViolet md:text-left">
      ${link}
    </p>

    <div
      class="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0"
    >
      <div class="font-bold text-cyan shorten-link">${shortURL}</div>
      <button
        class="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none copy-btn"
      >
        Copy
      </button>
    </div>
  </div>
  `;

  shortenSectionElement.insertAdjacentHTML("beforeend", html);
  savedLinks.push(html);
  localStorage.setItem("previousLinks", JSON.stringify(savedLinks));
};

const formSunmit = async function (e) {
  e.preventDefault();

  /* VALIDATE AND SET LINK */
  const url = inputElement.value.trim();
  const validUrl =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(url);

  if (!validUrl) {
    errMsg.classList.remove("hidden");
    inputElement.classList.add("border-red");
    return;
  }

  if (validUrl) {
    errMsg.classList.add("hidden");
    inputElement.classList.remove("border-red");
    link = url;
  }

  inputElement.value = "";

  /* GET SHORTEN LINK */
  await getJSON(link);

  /* INSERT INTO HTML */
  insertHTML(link, shortURL);
};

const copyShortenUrl = function (e) {
  const btn = e.target;
  const url = e.target.previousSibling.previousSibling.textContent;

  navigator.clipboard
    .writeText(url)
    .then(() => {
      btn.textContent = "Copied!";
      btn.classList.add("bg-darkViolet");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

/* LOAD PREVIOUS LINKS FROM LOCAL STORAGE */
window.addEventListener("load", function () {
  const prevs = JSON.parse(localStorage.getItem("previousLinks"));
  if (!prevs) return;

  savedLinks = prevs;

  savedLinks.forEach((el) => {
    shortenSectionElement.insertAdjacentHTML("beforeend", el);
  });
});

/* MOBILE MENU */
const navToggle = function () {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

/* Event Listeners */
btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSunmit);
shortenSectionElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("copy-btn"))
    e.target.addEventListener("click", copyShortenUrl);
});
