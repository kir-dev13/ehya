const inputButton = $(".nav__btn");
const closeModalButton = $(".modal__close");
const modalOverlay = $(".modal__overlay");
const modalDialog = $(".modal__dialog");

function openModal() {
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  mobileMenuClose();
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closeModal() {
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  // document.getElementsByTagName("body")[0].style.overflow = "auto";
}

inputButton.on("click", openModal);
closeModalButton.on("click", closeModal);

$(document).keyup(function (e) {
  if (e.key === "Escape" && modalDialog.hasClass("modal__dialog--visible")) {
    // escape key maps to keycode '27'
    closeModal();
  }
});

jQuery(function ($) {
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".modal__dialog"); // тут указываем ID элемента
    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      closeModal(); // скрываем его
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  });
});
