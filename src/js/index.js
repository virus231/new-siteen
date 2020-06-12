



$('#toggle2').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});

let inputGroups = [...document.querySelectorAll(".input-group")];

inputGroups.forEach(inputGroup => {
  var label = inputGroup.children[0];
  var input = inputGroup.children[1];
  input.addEventListener("focus", function () {
    onSelect(label);
  });
  input.addEventListener("blur", function () {
    onBlur(label, input);
  })
});

function onSelect(label) {
  label.classList.add('selected');
}

function onBlur(label, input) {
  if (!input.value) {
    label.classList.remove('selected');
  }
}

console.log("1123");


$('#headingOne1').click(function (e) {
  e.preventDefault()
  $(this).find('.arrow').toggleClass('active');
});

$('#headingTwo2').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

$('#headingTwo').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

$('#headingFour').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

$('#headingThree4').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

$('#headingThree6').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

$('#headingFour123').click(function (e) {
  e.preventDefault()

  $(this).find('.arrow').toggleClass('active');
});

let linkNav = document.querySelectorAll('a.menu-lists__link, a.how__go, a.how__work'), //выбираем все ссылки к якорю на странице
  V = 0.3;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    e.preventDefault(); //отменяем стандартное поведение
    var w = window.pageYOffset,  // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
      start = null;
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}


$('#chk, #chk2').click(function () {
  if ($(this).is(':checked')) {
    $('#chk, #chk2').not(this).prop('checked', false);
  }
});




$('.min').prop('disabled', true);
$('.min-1').prop('disabled', true);


// Count - 1
let max = 10
$(document).ready(function (e) {

  $('.plus').click(function (e) {
    e.preventDefault();
    let cnt = $('#count1').html(+$('#count1').html() + 1);

    if (cnt.html() <= 0 ) {
      $('.min').prop('disabled', true);
    } else if (cnt.html() >= 1) {
      $('.min').prop('disabled', false);
    }

    if( cnt.html() > 0) {
      $('.plus').prop('disabled', false);
    }

    if( cnt.html() == max) {
      $('.plus').prop('disabled', true);
    } else {
      $('.plus').prop('disabled', false);

    }

  });

  $('.min').click(function (e) {
    e.preventDefault();
    let cnt = $('#count1').html(+$('#count1').html() - 1);

    if (cnt.html() <= 0) {
      $('.min').prop('disabled', true);
    }

    if(cnt.html() >= 1){
      $('.plus').prop('disabled', false)
    }
  });
});


// Count - 2
$(document).ready(function (e) {
  $('.plus-1').click(function (e) {
    e.preventDefault();
    let cnt = $('#count2').html(+$('#count2').html() + 1);

    if (cnt.html() <= 0 ) {
      $('.min-1').prop('disabled', true);
    } else if (cnt.html() >= 1) {
      $('.min-1').prop('disabled', false);
    }

    if( cnt.html() > 0) {
      $('.plus-1').prop('disabled', false);
    }

    if( cnt.html() == max) {
      $('.plus-1').prop('disabled', true);
    } else {
      $('.plus-1').prop('disabled', false);

    }
  });

  $('.min-1').click(function (e) {
    e.preventDefault();
    let cnt = $('#count2').html(+$('#count2').html() - 1);

    if (cnt.html() <= 0) {
      $('.min-1').prop('disabled', true);
    }

    if(cnt.html() >= 1){
      $('.plus-1').prop('disabled', false)
    }
  });
});


$(document).ready(function () {
  $(".button a").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
});
$('.overlay').on('click', function () {
  $(".overlay").fadeToggle(200);
  $(".button a").toggleClass('btn-open').toggleClass('btn-close');
  open = false;
});


$(function () {

      // функция с параметрами idModal1 (1 модальное окно) и idModal2 (2 модальное окно)
      var twoModal = function (idModal1, idModal2) {
        var showModal2 = false;
        // при нажатии на ссылку в idModal2 устанавливаем переменной showModal2 значение равное true и закрываем idModal1
        $('[href="' + idModal2 + '"]').click(function (e) {
          e.preventDefault();
          showModal2 = true;
          $(idModal1).modal('hide');
        });
        // после закрытия idModal1, если значение showModal2 равно true, то открываем idModal2
        $(idModal1).on('hidden.bs.modal', function (e) {
          if (showModal2) {
            showModal2 = false;
            $(idModal2).modal('show');
          }
        });
        // при закрытии idModal2 открываем idModal1
        // $(idModal2).on('hidden.bs.modal', function (e) {
        //   $(idModal1).modal('show');
        // });
      };

      twoModal('#modal-1', '#modal-2');
      twoModal('#modal-1', '#modal-5');
      twoModal('#modal-3', '#modal-4');

    });


    $(function () {

      // функция с параметрами idModal1 (1 модальное окно) и idModal2 (2 модальное окно)
      var twoModal = function (idModal1, idModal2) {
        var showModal2 = false;
        // при нажатии на ссылку в idModal2 устанавливаем переменной showModal2 значение равное true и закрываем idModal1
        $('[href="' + idModal2 + '"]').click(function (e) {
          e.preventDefault();
          showModal2 = true;
          $(idModal1).modal('hide');
        });
        // после закрытия idModal1, если значение showModal2 равно true, то открываем idModal2
        $(idModal1).on('hidden.bs.modal', function (e) {
          if (showModal2) {
            showModal2 = false;
            $(idModal2).modal('show');
          }
        });
        // при закрытии idModal2 открываем idModal1
        $(idModal2).on('hidden.bs.modal', function (e) {
          $(idModal1).modal('hide');
        });
      };

      twoModal('#modal-1', '#modal-2');
      twoModal('#modal-1', '#modal-5');
      twoModal('#modal-3', '#modal-4');

    });