import { form, fname, lname, email, phone, message, btnSubmit } from "./modules/dom.js";
import { Form } from "./modules/form.js";
import { Render } from "./modules/reder.js";
import { Validate } from "./modules/validate.js";

main();

function main(){
    // Events
    form.addEventListener("submit", getDataForm);
   
    // Instances
    const render = new Render(btnSubmit, fname);
    render.btnDisabled = true;
    render.btnSubmitHover();

    
    const validate = new Validate();
    validate.namesInputs(form);

}


function getDataForm(e){
    e.preventDefault();
    const form = new Form(fname.value, lname.value, email.value, phone.value, message.value);
    
    this.reset();
}


