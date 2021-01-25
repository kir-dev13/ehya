let navbarMenu = document.querySelector(".nav");

let buttonMobileMenu = document.querySelector(".mobile-btn");
let navbarCloseButton = document.querySelector(".nav__close");

function mobileMenuOpen() {
  navbarMenu.classList.add("nav--visible");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  // let navbarMenuActive = document.querySelector(".nav--visible");
  // onClickClose(navbarMenuActive);
}

function mobileMenuClose() {
  navbarMenu.classList.remove("nav--visible");
  document.getElementsByTagName("body")[0].style.overflow = "auto";
}

// function onClickClose(elem) {
//   function outsideClickListener(event) {
//     if (!elem.contains(event.target) && isVisible(elem)) {
//       // console.log(event);
//       mobileMenuClose;
//       document.removeEventListener("click", outsideClickListener);
//     }
//   }
//   document.addEventListener("click", outsideClickListener);
// }

// function isVisible(elem) {
//   return (
// !!elem &&
// !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
//   );
// }

buttonMobileMenu.addEventListener("click", mobileMenuOpen);
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
jQuery(function ($) {
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".navbarMenu"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      mobileMenuClose(); // скрываем его
    }
  });
});
