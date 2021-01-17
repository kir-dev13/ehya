let buttonMobileMenu = document.querySelector(".mobile-btn");
buttonMobileMenu.addEventListener("click", function () {
  let navbarMenu = document.querySelector(".nav");
  navbarMenu.classList.toggle("nav--visible");
  if (navbarMenu.classList.contains("nav--visible")) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
});
