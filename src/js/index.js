$(document).ready(function () {
  $('.nav-toggle').click(function () {
    var collapse_content_selector = $(this).attr('href');
    var toggle_switch = $(this);
    $(collapse_content_selector).toggle(function () {
      if ($(this).css('opacity') == '0') {
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
const contactBlocks = document.querySelector(".contact-block");

if (hamburger) {
  hamburger.onclick = () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    // promo.classList.toggle("active");
    // logo.classList.toggle("active");
    main.classList.toggle("active");

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
const menuSM = document.querySelector(".link-group-sm");
// const mainSM = document.querySelector("main");

if (hamburgerSM) {
  hamburgerSM.onclick = () => {
    hamburgerSM.classList.toggle("active");
    menuSM.classList.toggle("active");
    // mainSM.classList.toggle("active")
  }
}

document.querySelectorAll(".link-group-sm a").forEach((link) => {
  link.onclick = () => {
    hamburgerSM.classList.remove("active");
    menuSM.classList.remove("active");
  }
});

// Slider

$(document).ready(function () {
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('button.prev').click(function () {
    $(".team-slider").slick('slickPrev');
  });

  $('button.next').click(function () {
    $(".team-slider").slick('slickNext');
  });
});


// Adv
var btn = document.querySelector('.btn-show');
btn.onclick = function (e) {
  var element = document.querySelector(".hidden-area");
  if (element.classList.contains("show-block")) {
    element.classList.remove("show-block");
  } else {
    element.classList.add("show-block");
  }
}