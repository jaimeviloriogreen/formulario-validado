import { form, fname, lname, email, phone, message} from "./modules/dom.js";
import { Form } from "./modules/form.js";
import { Render } from "./modules/render.js";


main();

function main(){
    // Events
    form.addEventListener("submit", getDataForm);
   
    // Instances
    const render = new Render();
    render.btnDisabled = true;
    render.btnSubmitHover();
    render.namesInputsValidate();
    render.emailInputValidate();
    render.phoneInputValidate();
    render.phoneInputStyle();
    render.messageValidate();

    render.restoreInputsAfterValidate();
}

function getDataForm(e){
    e.preventDefault();
    const form = new Form(fname.value, lname.value, email.value, phone.value, message.value);

    const render = new Render();
    render.btnDisabled = true;
    render.btnSubmitHover();
    render.restoreInputsAfterValidate();
    render.showAdvise();    
    
    
    this.reset();
    
    console.log(form);
    
}


