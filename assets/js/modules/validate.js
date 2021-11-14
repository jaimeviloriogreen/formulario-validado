import { Regexp } from "./regex.js";

export class Validate{
    disabled = true;

    namesInputs(form){
        for(let input of form){
            if( input.classList.contains("form__input_fname") || 
                input.classList.contains("form__input_lname")) {
                    const regexp = new Regexp();
                    const successIcon = document.querySelector(`.form__icon_success_${input.name}`);
                    const errorIcon = document.querySelector(`.form__icon_error_${input.name}`);

                    input.addEventListener("keyup", (e)=>{
                        if(regexp.names().test(e.target.value)){
                            input.classList.add("success");
                            input.classList.remove("error");

                            successIcon.style.display = "unset";
                            errorIcon.style.display = "none";
                        }else{
                            input.classList.remove("success", "form__input_text-focus");
                            input.classList.add("error");
                            successIcon.style.display = "none";
                            errorIcon.style.display = "unset";
                        }

                    });
            };
        };
        
    };

    
}