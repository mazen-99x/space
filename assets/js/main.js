/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById("nav__menu");
let navToggle = document.getElementById("nav__toggle");
let navClose = document.getElementById("nav__close");
let navLink = Array.from(document.querySelectorAll(".nav__link"));
let header = document.getElementById("header");
let sections = document.querySelectorAll("section[id]");
let scrollUp = document.getElementById("scrollup");
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show__menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show__menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
function linkAction() {
  navMenu.classList.remove("show__menu");
}
navLink.forEach((e) => {
  e.addEventListener("click", linkAction);
});
/*=============== ADD BLUR HEADER ===============*/
function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add("blur-header");
  } else {
    header.classList.remove("blur-header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*=============== SWIPER PLANETS ===============*/
const swiperTravel = new Swiper(".travel__swiper", {
  loop: true,
  spaceBetween: "32",
  grapCursor: true,
  slidesPerview: "auto",
  centeredSlides: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
function scrollup() {
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollup);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
function scrollActive() {
  let scrollDown = window.scrollY;
  sections.forEach((El) => {
    const sectionHeight = El.offsetHeight;
    const sectionTop = El.offsetTop - 58;
    const sectionId = El.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duratiob: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(".home__data,.travel__swiper,.contact__container");
sr.reveal(".home__img", { origin: "buttom" });
sr.reveal(".home__ovni", { delay: 800 });
sr.reveal(".explore__img", { origin: "left" });
sr.reveal(".explore__data", { origin: "right" });
sr.reveal(".explore__planet", { origin: "right", delay: 800 });
sr.reveal(".history__card", { interval: 100 });
sr.reveal(".history__planet-1", { origin: "left", delay: 1000 });
sr.reveal(".history__planet-2", { origin: "right", delay: 1200 });
sr.reveal(".footer__planet-1", { origin: "bottom", delay: 600 });
sr.reveal(".footer__planet-2", { delay: 800 });
