$(function () {
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 1,
    isFinite: true,
    draggable: false,
    waitForAnimate: false,
    dots: true,
    appendDots: $('.reviews__avatarbox'),
    responsive:
      [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          },
        },
      ]



  })

  $('.reviews__prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider ').slick('slickPrev')
  })
  $('.reviews__next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
  $('.plan__btnbox-item00').on('click', function (e) {
    e.preventDefault()
    $('.plan__btnbox-item00').addClass('plan__btnbox-item--active')
    $('.plan__btnbox-item01').removeClass('plan__btnbox-item--active')
    $('.plan__item00').addClass('plan__item--active')
    $('.plan__item01').removeClass('plan__item--active')
  })
  $('.plan__btnbox-item01').on('click', function (e) {
    e.preventDefault()
    $('.plan__btnbox-item01').addClass('plan__btnbox-item--active')
    $('.plan__btnbox-item00').removeClass('plan__btnbox-item--active')
    $('.plan__item01').addClass('plan__item--active')
    $('.plan__item00').removeClass('plan__item--active')
  })
  $(".header__nav-list a, .header__top-logo a, .slide__menu-list a, .slide__menu-list a, .header__top-info a, .protected__btnbox a, .footer__body a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body, html').animate({ scrollTop: top }, 500)
  })
  $(function () {
    let header = $('.header__top');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        header.addClass('header__top--follow');
      } else {
        header.removeClass('header__top--follow');
      }
    });
  });
  $('.burger').on('click', function (e) {
    e.preventDefault()
    $('.slide__menu').toggleClass('slide__menu--open')
  })
  $('.burger__follow').on('click', function (e) {
    e.preventDefault()
    $('.slide__menu').toggleClass('slide__menu--open')
  })
  $('.close__btn').on('click', function (e) {
    e.preventDefault()
    $('.slide__menu').removeClass('slide__menu--open')
  })
  $(function () {
    let protected = $('.protected__phone');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        protected.addClass('protected__phone--show');
      }
    });
  });
  $(function () {
    let protectedtext = $('.protected__text');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        protectedtext.addClass('protected__text--show');
      }
    });
  });
  $(function () {
    let maps = $('.maps__dots');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1800) {
        maps.addClass('maps__dots--show');
      }
    });
  });
  $(function () {
    let mapscontent = $('.maps__content');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1800) {
        mapscontent.addClass('maps__content--show');
      }
    });
  });
  $(function () {
    let plan = $('.plan__inner');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 5500) {
        plan.addClass('plan__inner--show');
      }
    });
  });


});
