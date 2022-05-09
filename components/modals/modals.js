import { expose } from '../tools.js';

function displayModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'block';
}

function closeModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'none';
}

// Expose & Export
expose('displayModal', displayModal);
expose('closeModal', closeModal);

export { displayModal, closeModal }
