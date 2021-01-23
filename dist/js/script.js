"use strict";
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
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
;
$(document).ready(function () {
  let tabsItem = $(".trends__menu-item");
  let goodsContent = $(".trends__goods");

  tabsItem.on("click", function (event) {
    let activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends__menu-item--active");
    $(this).addClass("trends__menu-item--active");
    goodsContent.removeClass("trends__goods--active");
    $(activeContent).toggleClass("trends__goods--active");
  });
});
;
var sliderReviews = new Swiper(".reviews__swiper-container", {
  // Optional parameters
  loop: true,
  //   setWrapperSize: true,
  //   autoHeight: true,
  // autoplay: {
  //   delay: 7000,
  // },
  disableOnInteraction: true,
  // If we need pagination
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
});

$(".reviews__swiper-container").hover(
  function () {
    this.swiper.autoplay.stop();
  },
  function () {
    this.swiper.autoplay.start();
  }
);

var sliderHistory = new Swiper(".history__swiper-container", {
  // Optional parameters
  //   loop: true,

  // If we need pagination

  // Navigation arrows
  preloadImages: false,
  navigation: {
    nextEl: ".history__slider-button-next",
    prevEl: ".history__slider-button-prev",
    disabledClass: "history__slider-button--disabled",
  },
});
;
