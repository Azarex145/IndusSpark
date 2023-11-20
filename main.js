const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const nav = document.querySelector(".nav");

window.onscroll = function() {
  console.log("hr")
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 500,
});


ScrollReveal().reveal(".about__item", {
  ...scrollRevealOption,
  interval: 500,
});


ScrollReveal().reveal(".stats__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});

ScrollReveal().reveal(".stats__card", {
  interval: 500,
  duration: 500,
  delay: 1000,
});


ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
