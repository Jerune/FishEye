import { expose } from "../tools.js";

// DOM Elements
const formInputFields = Array.from(document.getElementsByTagName('input'));
const formTextarea = Array.from(document.getElementsByTagName('textarea'));
const allFormFields = formInputFields.concat(formTextarea);

//const allFormFields = formInputFields.concat(formTextarea);

// Functions
function displayModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'block';
}

function closeModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'none';
}

function readyToSubmit(Array) {
    return Array.every(val => val.checkValidity() === true);
}

function validateForm(){
    let userData = {};
    for (let i = 0; i < allFormFields.length; i++){
        if (allFormFields[i].checkValidity()){
            allFormFields[i].parentElement.classList.remove('error');
            let attribute = allFormFields[i].getAttribute('name');
            userData[attribute] = allFormFields[i].value;
        } else {
            allFormFields[i].parentElement.classList.add('error');
            allFormFields[i].parentElement.setAttribute('error-message', 'Veuillez remplir ce champ correctement.');
        }
    }
    
    if (!readyToSubmit(allFormFields)){
        console.log('great!');
        return false;
    } else{
        console.log('too far');
        allFormFields.forEach(field => {
            field.value = '';
        });
        closeModal();
        console.log(userData);
        return false;
    }
}


// Expose & Export
expose('displayModal', displayModal);
expose('closeModal', closeModal);
expose('validateForm', validateForm);

export { displayModal, closeModal, validateForm}
