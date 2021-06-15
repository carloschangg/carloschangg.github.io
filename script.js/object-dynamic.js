const d = document,
      w = window;


export default function objectDynamic (){

     const $arrHtml     = d.querySelectorAll(".animation")
     console.log($arrHtml );


    d.addEventListener("scroll", e => {
     let altura = innerHeight / 1.5;
     for(let i = 0; i< $arrHtml.length; i++){
          let distancia = $arrHtml[i].getBoundingClientRect().top;
          
          if(distancia <= altura  ){
               $arrHtml[i].classList.remove("animation")
          } 
          
     }

     })
}