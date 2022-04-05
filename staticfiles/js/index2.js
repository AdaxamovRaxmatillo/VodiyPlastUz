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

var mainswiper1 = new Swiper(".main_swiper_img",{
    effect:"fade",
    autoplay: {
          delay:3000,
          disableOnInteraction: false,
    },

})

var maintextwiper = new Swiper(".text_swiper",{
    spaceBetween:10,
})

let main_swiper_len = document.querySelectorAll(".clen").length;
let main_swiper_len_percent = 100/main_swiper_len
let main_bar = document.querySelector(".progress_2");
main_bar.setAttribute("data-value",main_swiper_len_percent)

document.querySelector(".main_counter_number_small").innerHTML = `1/${main_swiper_len}`

document.querySelector(".main_mobile_counter").innerHTML = `1/${main_swiper_len}`

var bar2 = new ldBar(".progress_2",{
    "stroke": '#fff',
    "stroke-width": 1,
})

let msnum = 0;

function change_main_carousel(){
    msnum++
    if(msnum >= main_swiper_len){msnum = 0}
    mainswiper1.slideTo(msnum)
}

function change_main_decriment(){
    msnum--
    if(msnum <= -1){msnum = main_swiper_len-1}
    mainswiper1.slideTo(msnum)

}



mainswiper1.on('slideChangeTransitionEnd', function() {
  let index_currentSlide = mainswiper1.realIndex;
  maintextwiper.slideTo(index_currentSlide);
  document.querySelector(".main_swiper_counter").innerHTML = `<span>${index_currentSlide+1}</span>`
  document.querySelector(".main_counter_number_small").innerHTML = `${index_currentSlide+1}/${main_swiper_len}`
  document.querySelector(".main_mobile_counter").innerHTML = `${index_currentSlide+1}/${main_swiper_len}`
  bar2.set(main_swiper_len_percent * (index_currentSlide+1))
});

maintextwiper.on('slideChangeTransitionEnd', function() {
  let index_currentSlide = maintextwiper.realIndex;
  mainswiper1.slideTo(index_currentSlide);
});
