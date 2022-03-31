/* START BANNER  */
var bannerswiper = new Swiper(".banner_swiper", {
    slideToClickedSlide: false,
    effect: "fade"
});

/* END BANNER  */

/* START NAVBAR CONTROLR */

let navnum = 0;
function controlnavbar(){
   navnum++
   function media1(x) {
      var navbar = document.querySelector('.navbar_right_items');
      let curtain = document.querySelector(".curtain_navbar");
      if (x.matches) { 
            if(navnum >= 2){navnum = 0}
            if (navnum == 0) {
                  navbar.style.height = 0;
                  navbar.style.borderBottom = ""
                  setTimeout(function(){
                    curtain.style = "display:none;"
                  },400)
            }
            if(navnum == 1){
                  var wrapper = navbar.querySelector("ul")
                  navbar.style.height = wrapper.clientHeight + "px";
                  navbar.style.borderBottom = "1px solid white"
                  curtain.style = "display:block;"
             }
      } 
      else {
          navnum = 0
          navbar.style.height = "";
          navbar.style.borderBottom = ""
          curtain.style = "display:none;"

      }
  }
  var x = window.matchMedia("(max-width: 768px)")
  media1(x) 
  x.addListener(media1)
}

/* END NAVBAR CONTROLR */

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
