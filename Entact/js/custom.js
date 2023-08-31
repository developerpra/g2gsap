$(function () {
  $(".navbar-toggler").on("click", function (e) {
    $(".hamburger").toggleClass("is-active");
    e.stopPropagation();
    $(".navbar-collapse").toggleClass("is-active");
  });
});

var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1199: {
      direction: "vertical",
    },
  },
});
// var swiper = new Swiper(".mySwiperContent", {
//   direction: "vertical",
//   slidesPerView: 1,
//   spaceBetween: 0,
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

(function () {
  "use strict";
  const breakpoint = window.matchMedia("(max-width:1199px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper(".mySwiperContent", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

$("#pageheader .navbar li:has(ul.sub-menu) > a").after(
  $('<span class="caret"></span>')
);
$(function () {
  $("#pageheader .navbar li.menu-item-has-children .caret").click(function () {
    $("#pageheader .navbar li", this).stop(true, true).fadeIn("fast");
    $(this).parent().toggleClass("open");
  });
});
$("#menuController").click(function () {
  $("body").toggleClass("is_menu_active");
  $(this).toggleClass("active");
});

// document.addEventListener("DOMContentLoaded", function() {
//   const boxes = document.querySelectorAll(".box");
//   function getRandomIndex(max) {
//     return Math.floor(Math.random() * max);
//   }
//   function hideBox(box) {
//     box.classList.add("hidden");
//   }
//   function animateRandomly() {
//     const visibleBoxes = Array.from(boxes).filter(box => !box.classList.contains("hidden"));
//     if (visibleBoxes.length === 0) {
//       return;
//     }
//     const randomIndex = getRandomIndex(visibleBoxes.length);
//     const randomBox = visibleBoxes[randomIndex];
//     randomBox.classList.add("flipped");
//     setTimeout(() => {
//       hideBox(randomBox);
//       randomBox.classList.remove("flipped");
//       animateRandomly();
//     }, 200);
//   }
//   animateRandomly();
// });
