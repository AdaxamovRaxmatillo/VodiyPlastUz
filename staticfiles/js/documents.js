/* START NAVBAR CONTROLR */
let navnum = 0;
function controlnavbar(){
   navnum++
   function media1(x) {
      var navbar = document.querySelector('.navbar_right_items');
      if (x.matches) { 
            if(navnum >= 2){navnum = 0}
            if (navnum == 0) {
                  navbar.style.height = 0;
                  navbar.style.borderBottom = ""
                 
            }
            if(navnum == 1){
                  var wrapper = navbar.querySelector("ul")
                  navbar.style.height = wrapper.clientHeight + "px";
                  navbar.style.borderBottom = "1px solid white"
             }
      } 
      else {
          navnum = 0
          navbar.style.height = "";
          navbar.style.borderBottom = ""
      }
  }
  var x = window.matchMedia("(max-width: 768px)")
  media1(x) 
  x.addListener(media1)
}
/* END NAVBAR CONTROLR */


function checked(e){
    if(e.className == "categories_dcm_block"){
        document.querySelectorAll(".categories_dcm_block").forEach((z)=>{
            z.className = "categories_dcm_block"
        })
        e.classList = "categories_dcm_block checked_catalog"
    }
    else{
        e.className = "categories_dcm_block"
    }
}