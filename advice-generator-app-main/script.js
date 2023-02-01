"use strict";

const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const switchBtnElement = document.querySelector(".switch-btn");

const getAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  console.log(res);
  const data = await res.json();
  console.log(data);
  adviceIdElement.textContent = data.slip.id;
  adviceTextElement.textContent = `"${data.slip.advice}"`;
};

getAdvice();
switchBtnElement.addEventListener("click", getAdvice);
