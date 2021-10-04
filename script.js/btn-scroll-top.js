const d = document,
      $distancia = d.querySelector(".about"),
      $btnScroll = d.querySelector(".btn-scroll-top")


export default function btnScrollTop (){


    d.addEventListener("scroll", e => {

        let altura = $distancia.getBoundingClientRect().top;
       
        if(altura <= 150){
            $btnScroll.classList.remove("none")
        } else{
            $btnScroll.classList.add("none")
        }
        
    })

    d.addEventListener("click", e => {
    
        if(e.target.matches(".btn-scroll-top") || e.target.matches(`${".btn-scroll-top"} *`)){
            window.scrollTo({
                behavior:"smooth",
                top: 0
                })
        }
    });

}