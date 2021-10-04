const d = document;
const $nav    = d.querySelector(".header"),
      $title  =d.querySelector(".hero-image-title");

export default function nav  ()  {

    d.addEventListener("scroll", e => {
       
        let altura = $title.getBoundingClientRect().top;

        if(altura < 36){
            $nav.classList.add("is-active");
        } else{
            $nav.classList.remove("is-active");
        }
    })

}