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

// document.addEventListener("click", (e) => {
//   let target = e.target;
//   let its_menu = target == navbarMenu || navbarMenu.contains(target);
//   // let its_hamburger = target == hamburger;
//   let menu_is_active = navbarMenu.classList.contains("active");
//   if (!its_menu && menu_is_active) {
//     console.log("click");
//     mobileMenuClose();
//   }
// });

// document.addEventListener("click", function (event) {
//   let navbarMenuMobile = document.querySelector(".nav--visible");
//   let choordsNavbar = navbarMenuMobile.getBoundingClientRect()
//   if ()
// });
