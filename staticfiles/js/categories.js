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
    if(e.classList == "categories_dcm_block categories_page"){
        document.querySelectorAll(".categories_page").forEach((z)=>{
            z.className = "categories_dcm_block categories_page"
        });
         document.querySelectorAll(".category1_in_categories").forEach((y)=>{
            y.style.maxHeight = null;
        });
        document.querySelectorAll(".rotater").forEach((r)=>{
            r.className = "";
        })
        let panel = e.nextElementSibling;
        e.classList = "categories_dcm_block categories_page checked_categories";
        panel.style.maxHeight = panel.scrollHeight + "px";
        if(document.querySelector(".right_documents_title_mobile") && document.querySelector(".right_documents_title")){
           document.querySelector(".right_documents_title_mobile").textContent = e.querySelector('p').textContent
           document.querySelector(".right_documents_title").textContent = e.querySelector('p').textContent 
        }
        
        e.querySelectorAll("p")[1].classList = "rotater checked_categories_rotate";
    }
    else{
        e.className = "categories_dcm_block categories_page"
        e.nextElementSibling.style.maxHeight = null;
        e.querySelectorAll("p")[1].className = "";
    }
    
}

let categories = document.querySelectorAll(".category2_in_categories")

if(categories.length >= 2){
 categories[categories.length-2].style = "border-bottom:1px solid rgba(255,255,255,0.5);"   
}

