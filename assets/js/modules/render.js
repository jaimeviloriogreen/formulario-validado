import { Regexp } from "./regex.js";

export class Render{
    constructor(form){
        this.form = form;
        this.btnSubmit = form.submit;
        this.fname = form.fname
        this.email = form.email;
    }
    get btnDisabled(){
        return this.btnSubmit.disabled = false;
    }
    set btnDisabled(value){
        this.btnSubmit.disabled = value;
    }

    btnSubmitHover(){
        if(!this.btnSubmit.disabled){
            this.btnSubmit.style.cursor = "pointer";
            this.btnSubmit.classList.add("form__submit-hover");
            this.btnSubmit.classList.remove("form__submit-disabled");
        }
    }

    namesInputsValidate(){
        for(let input of this.form){
            if( input.classList.contains("form__input_fname") || 
                input.classList.contains("form__input_lname")) {
                    const regexp = new Regexp();
                    const successIcon = document.querySelector(`.form__icon_success_${input.name}`);
                    const errorIcon = document.querySelector(`.form__icon_error_${input.name}`);
                    input.addEventListener("keyup", (e)=>{
                     
                        if  (   e.key !== "Tab" && e.key !== "Shift" &&  
                                e.key !== "CapsLock" && e.key !== "Control" && 
                                e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter"    ){

                            if(regexp.names.test(e.target.value)){
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
    
                        }
                    });
            };
        };
        
    };

    emailInputValidate(){
        const regexp = new Regexp();
        const successIcon = document.querySelector(`.form__icon_success_${this.email.name}`);
        const errorIcon = document.querySelector(`.form__icon_error_${this.email.name}`);
        this.email.addEventListener("keyup", (e)=>{
            if  (   e.key !== "Tab" && e.key !== "Shift" &&  
                    e.key !== "CapsLock" && e.key !== "Control" && 
                    e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter"    ){

                if(regexp.email.test(e.target.value)){
                    this.email.classList.add("success");
                    this.email.classList.remove("error");

                    successIcon.style.display = "unset";
                    errorIcon.style.display = "none";
                }else{
                    this.email.classList.remove("success", "form__input_text-focus");
                    this.email.classList.add("error");
                    successIcon.style.display = "none";
                    errorIcon.style.display = "unset";
                }

            }
        });
       
    }
    
}