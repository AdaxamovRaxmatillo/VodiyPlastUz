/* START BANNER  */
var bannerswiper = new Swiper(".banner_swiper", {
    slideToClickedSlide: false,
    effect: "fade"
});

/* END BANNER  */

// swiper.on('slideChangeTransitionEnd', function() {
//   let index_currentSlide = swiper.realIndex;
//   let currentSlide = swiper.slides[index_currentSlide]
//   console.log(currentSlide)
// });


/* OTHER CODE */


// var galleryTop = new Swiper('.gallery-top', {
//       spaceBetween: 10,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       loop: true
// });
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//       spaceBetween: 10,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       touchRatio: 0.2,
//       slideToClickedSlide: true
// });

// galleryTop.on('slideChangeTransitionEnd', function() {
//   let index_currentSlide = galleryTop.realIndex;
//   let currentSlide = galleryTop.slides[index_currentSlide]
//   galleryThumbs.slideTo(index_currentSlide, 1000, false);
// });

// galleryThumbs.on('slideChangeTransitionEnd', function() {
//   let index_currentSlide = galleryThumbs.realIndex;
//   let currentSlide = galleryThumbs.slides[index_currentSlide]
//   galleryTop.slideTo(index_currentSlide, 1000, false);
// });
