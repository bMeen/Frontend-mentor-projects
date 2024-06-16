"use strict";

const btnContainer = document.querySelector(".btns-container");
const buttons = document.querySelectorAll(".btn-item");

const state = {
  data: [],
};

const getJSON = async function () {
  try {
    const response = await fetch("./js/data.json");
    const data = await response.json();
    state.data = data;
  } catch (error) {
    console.error(error);
  }
};

const renderData = async function (time) {
  await getJSON();

  state.data.forEach((el) => {
    const title = el.title.replace(/ /g, "-");

    const currEl = document.querySelector(`.${title}-current`);
    const prevEl = document.querySelector(`.${title}-previous`);
    const { current, previous } = el.timeframes[time];

    if (time === "daily")
      document.querySelector(`.${title}-duration`).textContent = "Yesterday";
    if (time === "weekly")
      document.querySelector(`.${title}-duration`).textContent = "Last Week";
    if (time === "monthly")
      document.querySelector(`.${title}-duration`).textContent = "Last Month";

    currEl.textContent = current;
    prevEl.textContent = previous;

    buttons.forEach((btn) => btn.classList.remove("btn-active"));
    document.getElementById(`${time}`).classList.add("btn-active");
  });
};

window.addEventListener("load", function () {
  renderData("weekly");
});

btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-item")) {
    const time = e.target.id;
    renderData(time);
  }
});
