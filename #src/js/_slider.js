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
