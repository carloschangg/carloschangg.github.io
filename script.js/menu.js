const d = document;

export function menuMobile (menuBtn, panel, menuLink){

    d.addEventListener("click", e => {
        const $menuBtn = d.querySelector(menuBtn),
              $panel   = d.querySelector(panel);


        if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
            
            $menuBtn.firstElementChild.classList.toggle("none");
            $menuBtn.lastElementChild.classList.toggle("none");
            $panel.classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            $panel.classList.remove("is-active")
            $menuBtn.firstElementChild.classList.remove("none");
            $menuBtn.lastElementChild.classList.add("none");
           
        }
        
    })

}