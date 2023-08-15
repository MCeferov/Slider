"use strict";

const leftBtn = document.getElementById("left__btn");
const rightBtn = document.getElementById("right__btn");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideBtns = document.querySelectorAll(".slide-points div");

let index = 0;

slideBtns[0].classList.add("active");


slideBtns.forEach((btn, indexBtn) => {
  btn.addEventListener("click", (e) => {
    if (indexBtn == 0) {
      index = 0;
    } else if (indexBtn == 1) {
      index = 3;
    } else if (indexBtn == 2) {
      index = 6;
    }
    slider.style.transform = `translateX(${310 * -index}px)`;
    addColor();
  });
});

rightBtn.addEventListener("click", () => {
  index == slides.length - 3 ? (index = 0) : index++;
  slider.style.transform = `translateX(${310 * -index}px)`;

  addColor();
});
leftBtn.addEventListener("click", () => {
  index == 0 ? (index = slides.length - 3) : index--;
  slider.style.transform = `translateX(${310 * -index}px)`;

  addColor();
});

const addColor = () => {
  slideBtns.forEach((btn, indexBtn) => {
    btn.className = "";
  });
  if (index >= 3 && index < 6) {
    slideBtns[1].classList.add("active");
  } else if (index >= 6 && index <= 9) {
    slideBtns[2].classList.add("active");
  } else {
    slideBtns[0].classList.add("active");
  }
};
