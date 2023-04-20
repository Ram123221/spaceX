const toggleBtn = document.getElementById("toggle");
const menus = document.getElementById("menus");
const bodyOverlay = document.getElementById("body-overlay");
const menuContainer = document.getElementById("menu-container");

toggleBtn.addEventListener("click", ()=>{
    if(menus.classList.contains("transform-right")){
        menus.classList.remove("transform-right");
        bodyOverlay.classList.add("overlay");
        menuContainer.classList.remove("height-0");
        menuContainer.classList.add("height-set");
    }
    else{
        menus.classList.add("transform-right");
        bodyOverlay.classList.remove("overlay");
        menuContainer.classList.remove("height-set");
        menuContainer.classList.add("height-0");
    }
    if(bodyOverlay.classList.contains("overlay"))
    {
        document.body.style.overflow = "hidden";
    }
    else 
        document.body.style.overflow = "unset";
});