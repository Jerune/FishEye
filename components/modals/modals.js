import { expose } from '../tools.js';

//DOM
const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];


function displayModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    header.setAttribute('aria-hidden', 'true');
    main.setAttribute('aria-hidden', 'true');
    footer.setAttribute('aria-hidden', 'true');
}

function closeModal(elementID) {
    const modal = document.getElementById(elementID);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    header.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'false');
    footer.setAttribute('aria-hidden', 'false');
}

// Expose & Export
expose('displayModal', displayModal);
expose('closeModal', closeModal);

export { displayModal, closeModal }
