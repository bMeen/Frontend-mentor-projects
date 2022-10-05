"use strict";
const formElement = document.querySelectorAll("form");
const billElement = document.getElementById("bill");
const customRateElement = document.getElementById("custom-rate");
const personAmtElement = document.getElementById("people");
const TipAmountElement = document.querySelector(".tip-per-person");
const totalAmountElement = document.querySelector(".total-per-person");
const errorElement = document.querySelector(".error-info");
const ratesElement = document.querySelector(".rates");
const tipsElement = document.querySelectorAll(".tip-rate");
const resetButtonElement = document.querySelector("button");

let tipRate;
// Getting rates
ratesElement.addEventListener("click", function (e) {
  tipsElement.forEach((tip) => tip.classList.remove("active"));
  if (e.target.classList.contains("tip-rate")) {
    e.target.classList.add("active");
    tipRate = +e.target.dataset.id;
  }
});

formElement.forEach((form) =>
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const displayError = function () {
      errorElement.classList.remove("hidden");
      errorElement.classList.add("error-message");
      personAmtElement.classList.add("error");
    };

    const clearError = function () {
      errorElement.classList.add("hidden");
      errorElement.classList.remove("error-message");
      personAmtElement.classList.remove("error");
    };

    // Getting Inputs
    const bill = +billElement.value;
    const custom = +customRateElement.value;
    const people = +personAmtElement.value;
    const tip = tipRate ? tipRate : custom;

    // Getting Amounts
    if (bill && tip && people) {
      const tipPerPerson = (bill * (tip / 100)) / people;
      const totalPerPerson = bill / people + tipPerPerson;

      if (tipPerPerson && totalPerPerson) {
        TipAmountElement.textContent = `$${tipPerPerson.toFixed(2)}`;
        totalAmountElement.textContent = `$${totalPerPerson.toFixed(2)}`;
      }
    }

    people === 0 ? displayError() : clearError();
  })
);

resetButtonElement.addEventListener("click", function (e) {
  e.preventDefault();
  TipAmountElement.textContent = totalAmountElement.textContent = `$0.00`;
  billElement.value = customRateElement.value = personAmtElement.value = "";
  tipsElement.forEach((tip) => tip.classList.remove("active"));
});
