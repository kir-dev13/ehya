let buttonMobileMenu = document.querySelector(".mobile-btn");
buttonMobileMenu.addEventListener("click", function () {
  console.log("клик");
  document.querySelector(".nav").classList.toggle("nav--visible");
});
