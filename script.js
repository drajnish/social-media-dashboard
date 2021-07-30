"use strict";

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  const html = document.querySelector("html");

  html.classList.toggle("dark");
});
