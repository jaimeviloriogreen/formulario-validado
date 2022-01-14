import { Regexp } from "./regex.js";
import { form } from "./dom.js";

export class Render{
    constructor(){
        this.form = form;
        this.btnSubmit = form.submit;
        this.fname = form.fname
        this.lname = form.lname;
        this.email = form.email;
        this.phone = form.phone;
        this.message = form.message;
    }
   
    get btnDisabled(){
        return this.btnSubmit.disabled = true;
    }
    set btnDisabled(value){
        this.btnSubmit.disabled = value;
    }
    validateSuccess(){
        if(this.fname.classList.contains("success") && this.lname.classList.contains("success") && this.email.classList.contains("success") && this.phone.classList.contains("success") && this.message.classList.contains("success") && this.validateInputsValue){
            this.btnDisabled = false;
            this.btnSubmitHover();
        
        }else{
            this.btnDisabled = true;
            this.btnSubmitHover();
            
        }        
    }
    get validateInputsValue(){
       if(this.fname.value.length > 0 && this.lname.value.length > 0 && this.email.value.length > 0 && this.phone.value.length > 0 && this.message.value.length > 0){
           return true;
       }

       return false;
    }
    restoreInputsAfterValidate(){
        for(let input of this.form){
            
            if(input.name !== "submit"){
                const successIcon = document.querySelector(`.form__icon_success_${input.name}`);
                const errorIcon = document.querySelector(`.form__icon_error_${input.name}`);
    
                successIcon.style.display = "none";
                errorIcon.style.display = "none";
                input.classList.remove("success");
            }
           
        }
            
    }
    btnSubmitHover(){
        if(!this.btnSubmit.disabled){
            this.btnSubmit.style.cursor = "pointer";
            this.btnSubmit.classList.add("form__submit-hover");
            this.btnSubmit.classList.remove("form__submit-disabled");
        }else{
            this.btnSubmit.style.cursor = "not-allowed";
            this.btnSubmit.classList.remove("form__submit-hover");
            this.btnSubmit.classList.add("form__submit-disabled");
        }
    }
    keyExcluded(e){
        if( e.key !== "Tab" && e.key !== "Shift" &&  
            e.key !== "CapsLock" && e.key !== "Control" && 
            e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter" ){
                return true;
        }
        return false;
    }
    stylesFormInputs(regex, value, input, type, successIcon, errorIcon){
        if(regex.test(value)){
            input.classList.remove("error", `form__input_${type}-focus`);
            input.classList.add("success");

            successIcon.style.display = "unset";
            errorIcon.style.display = "none";
        }else{
            input.classList.remove("success",  `form__input_${type}-focus`);
            input.classList.add("error");
            successIcon.style.display = "none";
            errorIcon.style.display = "unset";
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

                    if  ( this.keyExcluded(e) ){
                        this.stylesFormInputs(regexp.names, e.target.value, input, "text", successIcon, errorIcon);
                        this.validateSuccess();
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

            if  ( this.keyExcluded(e) ){
                this.stylesFormInputs(regexp.email, e.target.value, this.email, "text", successIcon, errorIcon);
                this.validateSuccess();
            }
        });
       
    }
    phoneInputValidate(){
        const regexp = new Regexp();
        const successIcon = document.querySelector(`.form__icon_success_${this.phone.name}`);
        const errorIcon = document.querySelector(`.form__icon_error_${this.phone.name}`);
        
        this.phone.addEventListener("keyup", (e)=>{
            if  ( this.keyExcluded(e) ){ 
                this.stylesFormInputs(regexp.phone, e.target.value, this.phone, "text", successIcon, errorIcon);
                this.validateSuccess();
            }
        });
    }
    phoneInputStyle(){
        const regexp = new Regexp();
        this.phone.addEventListener("blur", (e)=>{
            if  ( this.keyExcluded(e) ){
                e.target.value = e.target.value.replace(regexp.phone, "($2) $3-$4");     
            }
        });
    }
    messageValidate(){
        const regexp = new Regexp();
        const successIcon = document.querySelector(`.form__icon_success_${this.message.name}`);
        const errorIcon = document.querySelector(`.form__icon_error_${this.message.name}`);

        this.message.addEventListener("keyup", (e)=>{
            if  ( this.keyExcluded(e) ){
                this.stylesFormInputs(regexp.message, e.target.value, this.message, "textarea", successIcon, errorIcon);
                this.validateSuccess();
            }
        });

        
    }
    
}