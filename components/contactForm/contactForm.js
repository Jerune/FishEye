import { expose } from "../tools.js";

function displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
}

expose('displayModal', displayModal);
expose('closeModal', closeModal);

export { displayModal, closeModal}
