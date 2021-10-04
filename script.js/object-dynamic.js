const d = document,
      w = window;


export default function objectDynamic (){

     const $img    = d.querySelectorAll("img"),
           $parrafo    = d.querySelectorAll("p"),
           $titulos    = d.querySelectorAll("h2,h3,h4,h5,h6"),
           $barras    = d.querySelectorAll("progress")
    


    d.addEventListener("scroll", e => {
     let altura = innerHeight / 1.05;
     
     const animaciones = (obj, animacion) => {
          for(let i = 0; i < obj.length; i++){
               let distancia = obj[i].getBoundingClientRect().top;
              
               if(distancia <= altura  ){
                    obj[i].classList.add(animacion)
               } 
               
          }
     }
     animaciones($img, "animation-img");
     animaciones($parrafo, "animation-parrafos");
     animaciones($titulos, "animation-titulo");
     animaciones($barras, "animation-barras");
  })

  
}