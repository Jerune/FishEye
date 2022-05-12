import { expose } from '../tools.js';

//DOM
const header = document.getElementsByTagName('header')[0];
const footer = document.getElementsByTagName('footer')[0];
const photographerHeader = document.querySelector('.photographer-header');
const sortSelect = document.querySelector('#sort');
const photoOverview = document.querySelector('.photo-overview');

function displayModal(elementID) {
    const modal = document.getElementById(elementID);
    const pageLinks = Array.from(document.getElementsByTagName('a'));
    modal.focus();
    modal.style.display = 'flex';
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'false');
    Array.from(modal.children).forEach(element => {
        element.setAttribute('tabindex', '0');
    });
    header.setAttribute('aria-hidden', 'true');
    footer.setAttribute('aria-hidden', 'true');
    pageLinks.forEach(link => {
        link.setAttribute('tabindex', '-1');
    });
    photographerHeader.setAttribute('tabindex', '-1');
    photographerHeader.setAttribute('aria-hidden', 'true');
    sortSelect.setAttribute('tabindex', '-1');
    sortSelect.setAttribute('aria-hidden', 'true');
    photoOverview.setAttribute('tabindex', '-1');
    photoOverview.setAttribute('aria-hidden', 'true');
}

function closeModal(elementID) {
    const modal = document.getElementById(elementID);
    const pageLinks = Array.from(document.getElementsByTagName('a'));
    modal.style.display = 'none';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-modal', 'false');
    modal.setAttribute('aria-hidden', 'true');
    header.setAttribute('aria-hidden', 'false');
    footer.setAttribute('aria-hidden', 'false');
    Array.from(modal.children).forEach(element => {
        element.removeAttribute('tabindex');
    });
    pageLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
    });
    photographerHeader.removeAttribute('tabindex');
    sortSelect.removeAttribute('tabindex');
    photoOverview.removeAttribute('tabindex');
}

// Expose & Export
expose('displayModal', displayModal);
expose('closeModal', closeModal);

export { displayModal, closeModal }
