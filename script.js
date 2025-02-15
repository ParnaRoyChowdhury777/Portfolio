/*====================================Toggle icon navbar=========================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*=========scroll sections active link=============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*===========================Sticky navbar=================================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 400);

  /*===============Remove toggle icon and navbar when click navbar link(scroll)=======================*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Preloader//////////////////////////////////////////////////////////////////////////

gsap.fromTo(
  ".loader",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1,
    delay: 2,
  }
);

gsap.fromTo(
  "section",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 4,
    delay: 3,
  }
);

gsap.fromTo(
  "header, footer",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    delay: 3,
  }
);
