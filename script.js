const openMenuButton=document.querySelector("#open-menu-button");
openMenuButton.addEventListener("click",()=>
        document.body.classList.toggle("show-mobile-menu"));
const closeMenuButton=document.querySelector("#close-menu-button");
closeMenuButton.addEventListener("click",()=>
       openMenuButton.click());