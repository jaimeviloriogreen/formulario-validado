

export class Render{
    constructor(btn, fname){
        this.btn = btn;
        this.fname = fname
    }
    get btnDisabled(){
        return this.btn.disabled = false;
    }
    set btnDisabled(value){
        this.btn.disabled = value;
    }

    btnSubmitHover(){
        if(!this.btn.disabled){
            this.btn.style.cursor = "pointer";
            this.btn.classList.add("form__submit-hover");
            this.btn.classList.remove("form__submit-disabled");
        }
    }
}