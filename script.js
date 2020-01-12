const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector("ul.link");
let pilihan = false;

menu_btn.addEventListener("click", () => {

        if(!pilihan){
            menu_btn.classList.add("active");
            nav.classList.add("active");
            pilihan = true;
        }else{
            menu_btn.classList.remove("active");
            nav.classList.remove("active");
            pilihan = false;
        }
    
});

