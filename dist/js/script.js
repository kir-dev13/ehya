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
;
