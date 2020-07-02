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
const main = document.querySelector("main");
const sidebar = document.querySelector("sidebar");

if (hamburger) {
  hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    promo.classList.toggle("active");
    logo.classList.toggle("active");
    main.classList.toggle("active")
  }
}

document.querySelectorAll("menu a").forEach((link) => {
  link.onclick = () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    main.classList.remove("active");
  }
});


// Nav SM
const hamburgerSM = document.querySelector(".hamburger-sm");
const menuSM = document.querySelector("menuu");

if (hamburgerSM) {
  hamburgerSM.onclick = () => {
    hamburgerSM.classList.toggle("active");
    menuSM.classList.toggle("active");
  }
}

document.querySelectorAll(".link-group-sm a").forEach((link) => {
  link.onclick = () => {
    hamburgerSM.classList.remove("active");
    menuSM.classList.remove("active");
  }
});

// Slider

$(document).ready(function(){
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  });

  $('button.prev').click(function(){
    $(".team-slider").slick('slickPrev');
  });

  $('button.next').click(function(){
    $(".team-slider").slick('slickNext');
  });
});

