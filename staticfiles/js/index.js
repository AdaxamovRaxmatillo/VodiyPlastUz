/* START BANNER  */
var bannerswiper = new Swiper(".banner_swiper", {
    slideToClickedSlide: false,
    effect: "fade",
    loop:true,
    autoplay: {
          delay:3000,
          disableOnInteraction: false,
    },

});

let swnum = 1;
function swipercontrol(){
    swnum++
    if(swnum >= 4){swnum = 1}
    bannerswiper.slideTo(swnum)
}

function swipercontroldecriment(){
    swnum--
    if(swnum <= 0){swnum = 3}
    bannerswiper.slideTo(swnum)
}

bannerswiper.on('slideChangeTransitionEnd', function() {
  let index_currentSlide = bannerswiper.realIndex;

  arr = [     
                "circle","circle for_border_bottom","circle for_border_bottom for_border_left","circle for_border_bottom for_border_left for_border_top"
            ]
    let circle = document.querySelector(".circle");
    let counter = document.querySelector(".counter_number");
    let counter_small = document.querySelector(".counter_number_small");
    let counter_mobile = document.querySelector(".swiper_mobile_counter");
    counter.innerHTML = `<span>${index_currentSlide+1}</span>`
    circle.classList = `${arr[index_currentSlide]}`
    counter_mobile.innerHTML = `<p>${index_currentSlide+1}/3</p>`
    counter_small.innerHTML = `<p>${index_currentSlide+1}/3</p>`

  
});


/* END BANNER  */

/* START SCROLL ANIMATIONS */

let under_carts = document.querySelectorAll(".category_under_img_block");
let under_cart_texts = document.querySelectorAll(".category_under_img_text")
window.addEventListener("scroll",function(){
/* START SCROLLING */

    let scroll = window.scrollY
    under_carts.forEach(function(e,index){
        let position = e.getBoundingClientRect();
        let wheight = window.innerHeight;
        let num = 0
        if(window.innerWidth <= 992){
          num = 150  
        }else{
          num = 250
        }
        if(position.top <= wheight - num){
            e.classList = "category_under_img_block for_category_under"
            under_cart_texts[index].classList = "category_under_img_text for_category_under_text"
            }
        else{
            e.classList = "category_under_img_block"
             under_cart_texts[index].classList = "category_under_img_text"
        }
    })

/* END SCROLLING */
})

/* END SCROLL ANIMATIONS */


/* START MAIN CAROUSEL */


/* END MAIN CAROUSEL */

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
