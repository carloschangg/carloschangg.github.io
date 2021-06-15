import formContact from "./form.js";
import { menuMobile } from "./menu.js";

(() => {
    
    document.addEventListener("DOMContentLoaded", (e)=>{
        menuMobile(".menu-btn", ".menu", ".menu a")
        formContact(".contact-form", ".contact-form-loader", ".contact-form-response")
    })
    
})();
