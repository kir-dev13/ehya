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
