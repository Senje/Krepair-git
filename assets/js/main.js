(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
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
          slidesToShow: 1,
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
  $(".btn-popup__close").click(function() {
    $(".popup").removeClass("active");
  });
});
