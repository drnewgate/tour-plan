var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
})

const menuButton = $('.menu-button')
  menuButton.on('click', function () {
    const navbarBottom = $('.navbar-bottom')
    navbarBottom.toggleClass('navbar-bottom--visible')
    
    navbarBottom.hasClass('navbar-bottom--visible')
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = ''
});