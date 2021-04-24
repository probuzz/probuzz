$(document).ready(function () {
  $(this).scrollTop(0);
});

$(function () {
  $("html, body").css({
    overflow: "hidden",
  });
  setTimeout(function () {
    $("html, body").css({
      overflowY: "auto",
    });
    $(".cover2").css("display", "none");
    $(".cover1").css("display", "none");
    // .animate(
    //   {
    //     scrollTop: $('.is-max-desktop').offset().top,
    //   },
    //   2000
    // )
  }, 4500);
});

// document.addEventListener('DOMContentLoaded', () => {
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll('.navbar-burger'),
//     0
//   )

//   if ($navbarBurgers.length > 0) {
//     $navbarBurgers.forEach((el) => {
//       el.addEventListener('click', () => {
//         const target = el.dataset.target
//         const $target = document.getElementById(target)
//         el.classList.toggle('is-active')
//         $target.classList.toggle('is-active')
//       })
//     })
//   }
// })

function openCurtain() {
  console.log("Welcome to Probuzz");
  document.getElementById("leftCurtain").style.transform = "scaleX(0)";
  document.getElementById("rightCurtain").style.transform = "scaleX(0)";

  setTimeout(function () {
    $(".balloons").hide();
  }, 7000);
  // setTimeout($("#curtain").fireworks(), 5000);
}

setTimeout(openCurtain, 10000);

ScrollReveal().reveal(".welcome");
ScrollReveal().reveal(".wcCard", { interval: 300 });
ScrollReveal().reveal(".services");
ScrollReveal().reveal(".svcCard", { interval: 300 });
ScrollReveal().reveal(".team");
ScrollReveal().reveal(".member", { interval: 300 });
