document.querySelector("#btnMenu").onclick = () => {
  document.querySelector("#btnMenu svg:first-child").classList.toggle("d-none");
  document.querySelector("#btnMenu svg:last-child").classList.toggle("d-none");
  document.querySelector(".header-top-right").classList.toggle("d-flex");
  document.querySelector(".header-nav").classList.toggle("d-flex");
};
