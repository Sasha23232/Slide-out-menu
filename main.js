let openBtn = document.querySelector(".open");
let closeBtn = document.querySelector(".close");
let container = document.querySelector(".container");

openBtn.addEventListener("click", function () {
  container.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  container.classList.remove("show");
});
