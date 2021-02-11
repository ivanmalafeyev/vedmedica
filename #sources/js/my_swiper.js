const mainSwiper = new Swiper(".main__bg", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  // autoHeight: false,
  slidesPerView: 1,
  speed: 700,
  allowTouchMove: false,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".main__pagination",
    clickable: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".control-main-slider__arrow--next",
  //   prevEl: ".control-main-slider__arrow--prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    768: {},
  },
});

const sliderSwiper = new Swiper(".slider-main__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 500,
  // autoHeight: false,
  slidesPerView: 1,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-main__arrow-next",
    prevEl: ".slider-main__arrow-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    500: {},
    768: {},
    975: {},
  },
});

const variantsSwiper = new Swiper(".variants__body", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 500,
  // effect: "fade",
  // autoHeight: false,
  slidesPerView: "auto",
  spaceBetween: 30,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".controls-variants__arrow--prev",
    // prevEl: ".controls-variants__arrow--prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    650: {},
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 500,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".controls-reviews__arrow--next",
    prevEl: ".controls-reviews__arrow--prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  // el: '.swiper-scrollbar',
  // },
  breakpoints: {
    320: {},
    500: {},
    768: {},
    975: {},
  },
});

const thumbsSwiper = new Swiper(".thumbs__swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  // autoHeight: false,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 700,
  // allowTouchMove: false,

  // If we need pagination
  // pagination: {
  //   el: ".main__pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".controls-thumbs__arrow--next",
    prevEl: ".controls-thumbs__arrow--prev",
  },

  // And if we need scrollbar
  scrollbar: {
    dragClass: "thumbs__drag",
    el: ".thumbs__scrollbar",
    draggable: true,
  },
  breakpoints: {
    320: {},
    768: {},
  },
});

const bigsliderSwiper = new Swiper(".bigslider__swiper", {
  // Optional parameters
  loop: true,
  // autoHeight: false,
  slidesPerView: 1,
  // spaceBetween: 30,
  speed: 700,
  // allowTouchMove: false,
  thumbs: {
    swiper: thumbsSwiper,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  // pagination: {
  //   el: ".main__pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".controls-thumbs__arrow--next",
  //   prevEl: ".controls-thumbs__arrow--prev",
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".thumbs__scrollbar",
  //   draggable: true,
  // },
  breakpoints: {
    320: {},
    768: {},
  },
});
