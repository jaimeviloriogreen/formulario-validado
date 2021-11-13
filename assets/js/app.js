import { form, fname, lname, email, phone, message, btnSubmit } from "./modules/dom.js";
import { Form } from "./modules/form.js";
import { Render } from "./modules/reder.js";


main();

function main(){
    // Events
    form.addEventListener("submit", getDataForm);
   

    // Instances
    const render = new Render(btnSubmit);
    render.btnDisabled = true;
    render.btnSubmitHover();

}


function getDataForm(e){
    e.preventDefault();
    const form = new Form(fname.value, lname.value, email.value, phone.value, message.value);

    this.reset();
}


