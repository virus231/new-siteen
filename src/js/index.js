$(document).ready(function () {
  $('.nav-toggle').click(function () {
    var collapse_content_selector = $(this).attr('href');
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css('display') == 'none') {
        toggle_switch.html('View More');
      } else {
        toggle_switch.html('View Less');
      }
    });
  });
});
// Your jQuery code

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("menu");
const promo = document.querySelector(".promo-block");
const links = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");



if (hamburger) {
  hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    promo.classList.toggle("active");
    links.classList.toggle("active");
    logo.classList.toggle("active");


  }
}

document.querySelectorAll("menu a").forEach((link) => {
  link.onclick = () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  }
});