const menu_btn = document.querySelector(".menu-btn");
const nav_ul = document.querySelector("ul.link");
const nav = document.querySelector("nav");
const navH = document.querySelector("nav h1");
let img  = document.querySelectorAll(".img");
let pilihan = false;

menu_btn.addEventListener("click", () => {

        if(!pilihan){
            menu_btn.classList.add("active");
            nav_ul.classList.add("active");
            pilihan = true;
        }else{
            menu_btn.classList.remove("active");
            nav_ul.classList.remove("active");
            pilihan = false;
        }
    
});

window.addEventListener("scroll", () => {
    let test = window.pageYOffset;
    if(test > 50 ){
        nav.style.height = "70px";
        navH.style.fontSize = "20px";
        menu_btn.style.top = "10px";
        nav.style.borderBottom = "0.4px #1188FF solid";
    }else{
        menu_btn.style.top = "25px";
        nav.style.height = "100px";
        navH.style.fontSize = "30px";
        nav.style.borderBottom = "none";
    }

    if(test > 300){
        
    }
});

