import btnScrollTop from "./btn-scroll-top.js";
import formContact from "./form.js";
import { menuMobile } from "./menu.js";
import nav from "./nav.js";
import objectDynamic from "./object-dynamic.js";


(() => {
    
    document.addEventListener("DOMContentLoaded", (e)=>{
        menuMobile(".menu-btn", ".menu", ".menu a")
        formContact(".contact-form", ".contact-form-loader", ".contact-form-response")
        objectDynamic()
        nav()
        btnScrollTop()
        
    })
    
})();
