"use strict";

const mainContainer = document.querySelector(".content-container");
const filterBar = document.querySelector(".filter-bar");
const filterBtnContainer = document.querySelector(".filter-container");
const clearElement = document.querySelector(".clear");

const state = {
  jobs: [],
  searchFilters: {},
};

const getJSON = async function () {
  try {
    const response = await fetch("./js/data.json");
    const data = await response.json();
    state.jobs = data;
    data;
  } catch (error) {
    console.log(error);
  }
};

const generateFilterButton = function (text, type, value) {
  const html = `
        <div class="filter-btn" id="${type}-${value}">
          <p class="filter-item">${text}</p>
          <img src="./images/icon-remove.svg" alt="" class="close-btn" />
        </div>`;
  filterBtnContainer.insertAdjacentHTML("beforeend", html);
};

const generateButton = function (item, type) {
  return item
    .map(
      (i) => `
        <a class="select-filter" id=${type}-${i} >${i}</a>
    `
    )
    .join("");
};

const generateHTML = function (jobs) {
  const html = jobs
    .map(
      (item) => `
         <section class = "job-item ${
           item.id < 3 ? "border-l-4 border-desaturated-dark-cyan" : ""
         }">   
     <div class="description">
          <!-- COMPANY IMAGE -->
          <img src=${item.logo} alt="" class="job-logo" />

          <!-- JOB INFOS -->
          <div class="-mt-5 md:mt-0">
            <!-- COMPANY -->
            <div class="flex items-center space-x-5 mb-1">
              <p class="text-desaturated-dark-cyan font-black">${
                item.company
              }</p>
              <div>
              ${item.new ? '<a class="status"> NEW! </a>' : ""}
              ${
                item.featured
                  ? '<a class="status bg-very-dark-grayish-cyan"> FEATURED </a>'
                  : ""
              }  
              </div>
            </div>

            <!-- JOB TITLE -->
            <p class="job-title">${item.position}</p>

            <!-- JOB TERMS -->
            <ul class="list-disc flex space-x-6">
              <li class="list-none">${item.postedAt}</li>
              <li>${item.contract}</li>
              <li>${item.location}</li>
            </ul>
          </div>
        </div>

         <div class="py-4 md:py-0 flex gap-4 flex-wrap md:justify-end">
          <a class="select-filter" id=role-${item.role}>${item.role}</a>
          <a class="select-filter"  id=level-${item.level}>${item.level}</a>
          ${item.languages ? generateButton(item.languages, "language") : ""}
          ${item.tools ? generateButton(item.tools, "tool") : ""}
        </div>
      </section>
    
    
    `
    )
    .join("");
  mainContainer.innerHTML = "";
  mainContainer.insertAdjacentHTML("beforeend", html);
};

const displayJobs = async function () {
  await getJSON();
  generateHTML(state.jobs);
};

function filterJobs() {
  const searchFilters = state.searchFilters;
  let jobs = [...state.jobs];

  const shouldFilterByRole = Array.isArray(searchFilters.role);
  if (shouldFilterByRole) {
    jobs = jobs.filter((job) => searchFilters.role.includes(job.role));
  }

  const shouldFilterByLevel = Array.isArray(searchFilters.level);
  if (shouldFilterByLevel) {
    jobs = jobs.filter((job) => searchFilters.level.includes(job.level));
  }

  const shouldFilterByLanguage = Array.isArray(searchFilters.language);
  if (shouldFilterByLanguage) {
    jobs = jobs.filter((job) =>
      searchFilters.language.every((ln) => job.languages.includes(ln))
    );
  }

  const shouldFilterByTool = Array.isArray(searchFilters.tool);
  if (shouldFilterByTool) {
    jobs = jobs.filter((job) =>
      searchFilters.tool.every((tl) => job.tools.includes(tl))
    );
  }

  return jobs;
}

function clearFilter() {
  filterBtnContainer.innerHTML = "";
  filterBar.classList.add("hidden");
  state.searchFilters = {};
  generateHTML(state.jobs);
}

window.addEventListener("load", displayJobs);

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("select-filter")) {
    filterBar.classList.remove("hidden");

    const [type, value] = e.target.id.split("-");
    const filterItem = e.target.textContent;

    if (state.searchFilters[type]) {
      if (!state.searchFilters[type].includes(value)) {
        state.searchFilters[type].push(value);
        generateFilterButton(filterItem, type, value);
      }
    } else {
      state.searchFilters[type] = [value];
      generateFilterButton(filterItem, type, value);
    }

    const filteredJobs = filterJobs();
    generateHTML(filteredJobs);
  }
});

filterBar.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-btn")) {
    const filterBtn = e.target.closest(".filter-btn");
    const [type, value] = filterBtn.id.split("-");

    state.searchFilters[type].splice(state.searchFilters[type].indexOf(value));
    filterBtn.remove();

    if (document.querySelectorAll(".filter-btn").length === 0) clearFilter();

    const filteredJobs = filterJobs();
    generateHTML(filteredJobs);
  }

  if (e.target.classList.contains("clear")) {
    e.target.addEventListener("click", clearFilter);
  }
});
