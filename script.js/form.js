const d = document;

export default function formContact (form,loader,reponse){
    const $form     = d.querySelector(form),
          $loader   = d.querySelector(loader),
          $response = d.querySelector(reponse);


    d.addEventListener("submit" , e => {
        e.preventDefault();
        
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/carloschang51@yahoo.com" ,{
            method:"POST",
            body: new FormData(e.target),
        })

        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json);
            location.hash = "#gracias";
            $form.reset();
        })

        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status} : ${message}`
        }).finally(() => {
            $loader.classList.add('none');
            setTimeout(() => {
                location.hash = "#close"
            }, 3000);
        });
    });

    
};


