const main = "";
const media = "";
const fonts = "";
$(document).ready(() => {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    dots: true,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".menu-burger").click(function() {
    $(this).toggleClass("active");
    $(".mobile-menu").toggleClass("active");
  });
  $(".arrow-list").click(function() {
    $(this).toggleClass("openned");
    const parent = $(this).parent().parent().parent();
    parent.toggleClass("light-gray__bg ");
    $(parent).children(".grid__list-content").toggleClass("openned");
  });
  $(".arrow-list-gray").click(function() {
    $(this).toggleClass("openned");
    const parent = $(this).parent().parent().parent();
    $(parent).children(".price-content").toggleClass("openned").toggleClass("light-gray__bg");
  });
  $(".btn-popup").click(function() {
    $(".popup").addClass("active");
  });
  $(".btn-close").click(function() {
    $(this).parent().parent().removeClass("active");
  });
  $(document).mouseup(function(e) {
    if ($(".popup").has(e.target).length === 0) {
      $(".popup").removeClass("active");
    }
  });
  $(".feedback__submit > input").click(() => {
    $(".popup-done").addClass("active");
  });
});
