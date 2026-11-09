const openMenuButton=document.querySelector("#open-menu-button");
openMenuButton.addEventListener("click",()=>
        document.body.classList.toggle("show-mobile-menu"));
const closeMenuButton=document.querySelector("#close-menu-button");
closeMenuButton.addEventListener("click",()=>
       openMenuButton.click());


const swiper = new Swiper('.slider-container', {
  slidesPerView:3,
  spaceBetween:20,
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
,
breakpoints: {
   0:{
      slidesPerView:1,
   },
   768:{
        slidesPerView:2,
   },
1024:{

     slidesPerView:3,
},


}

 
});