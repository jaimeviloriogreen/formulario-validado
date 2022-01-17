const form = document.mainForm;
const fname = form.fname;
const lname = form.lname;
const email = form.email;
const phone = form.phone;
const message = form.message;
const btnSubmit = form.submit;
const advise = document.querySelector(".advise");
const adviseSpinner = document.querySelector(".advise__spinner");
const adviseText = document.querySelector(".advise__text");
const adviceIcon = document.querySelector(".advise__icon");
const overlay = document.querySelector(".overlay");



export{ form, fname, lname, email, phone, message, btnSubmit, advise, adviseSpinner, adviseText, adviceIcon, overlay }