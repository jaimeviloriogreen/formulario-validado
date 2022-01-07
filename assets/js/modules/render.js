import { Regexp } from "./regex.js";

export class Render{
    constructor(form){
        this.form = form;
        this.btnSubmit = form.submit;
        this.fname = form.fname
        this.email = form.email;
        this.phone = form.phone;
        this.message = form.message;
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
                                input.classList.remove("error", "form__input_text-focus");
                                input.classList.add("success");
    
                                successIcon.style.display = "unset";
                                errorIcon.style.display = "none";

                                return "validado!";
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
                    this.email.classList.remove("error", "form__input_text-focus");
                    this.email.classList.add("success");

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

    phoneInputValidate(){
        const regexp = new Regexp();
        const successIcon = document.querySelector(`.form__icon_success_${this.phone.name}`);
        const errorIcon = document.querySelector(`.form__icon_error_${this.phone.name}`);
        
        this.phone.addEventListener("keyup", (e)=>{
            if  (   e.key !== "Tab" && e.key !== "Shift" &&  
                    e.key !== "CapsLock" && e.key !== "Control" && 
                    e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter"    ){
                       
                if(regexp.phone.test(e.target.value)){
                    this.phone.classList.remove("error", "form__input_text-focus");
                    this.phone.classList.add("success");

                    successIcon.style.display = "unset";
                    errorIcon.style.display = "none";
                }else{
                    this.phone.classList.remove("success", "form__input_text-focus");
                    this.phone.classList.add("error");
                    successIcon.style.display = "none";
                    errorIcon.style.display = "unset";
                }

            }
        });
    }

    phoneInputStyle(){
        const regexp = new Regexp();
        this.phone.addEventListener("blur", (e)=>{
            if  (   e.key !== "Tab" && e.key !== "Shift" &&  
                    e.key !== "CapsLock" && e.key !== "Control" && 
                    e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter"    ){

                    e.target.value = e.target.value.replace(regexp.phone, "($2) $3-$4");
                        
            }
        });
    }

    messageValidate(){
        const regexp = new Regexp();
        const successIcon = document.querySelector(`.form__icon_success_${this.message.name}`);
        const errorIcon = document.querySelector(`.form__icon_error_${this.message.name}`);

        this.message.addEventListener("keyup", (e)=>{
            if  (   e.key !== "Tab" && e.key !== "Shift" &&  
                    e.key !== "CapsLock" && e.key !== "Control" && 
                    e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter"    ){

                if(regexp.message.test(e.target.value)){
                    
                    this.message.classList.remove("form__input_textarea-focus","error");
                    this.message.classList.add("success");

                    successIcon.style.display = "unset";
                    errorIcon.style.display = "none";
                }else{
                    this.message.classList.remove("success", "form__input_textarea-focus");
                    this.message.classList.add("error");
                    successIcon.style.display = "none";
                    errorIcon.style.display = "unset";
                }

            }
        });
    }
    
}