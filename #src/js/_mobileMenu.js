let navbarMenu = document.querySelector(".nav");
let buttonMobileMenu = document.querySelector(".mobile-btn");
let navbarCloseButton = document.querySelector(".nav__close");

function mobileMenuClose() {
  navbarMenu.classList.remove("nav--visible");
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}

buttonMobileMenu.addEventListener("click", function () {
  navbarMenu.classList.add("nav--visible");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

navbarCloseButton.addEventListener("click", mobileMenuClose);
// document.addEventListener("click", function (e) {
//   const target = e.target;
//   const itsMenu = target == navbarMenu || navbarMenu.contains(target);
//   const menuIsActive = navbarMenu.classList.contains("nav--visible");
//   if (!itsMenu && !buttonMobileMenu && menuIsActive) {
//     console.log("click");

//     mobileMenuClose;
//   }
// });
