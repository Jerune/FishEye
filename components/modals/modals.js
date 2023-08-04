import { expose } from '../tools.js';

const focusableElements = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';
const tabindexElements = '[tabindex="-1"]';

function displayModal(elementID) {
    const modal = document.getElementById(elementID);
    const focusableContent = modal.querySelectorAll(focusableElements);
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; 
    
    hideGeneralPageData();

    modal.style.display = 'flex';
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'false');
    focusableContent.forEach(element => {
        element.setAttribute('tabindex', '0');
        element.setAttribute('aria-hidden', 'false');
    });

    firstFocusableElement.focus();
}

function closeModal(elementID) {
    const modal = document.getElementById(elementID);
    const focusableContent = document.querySelectorAll(focusableElements);
    const tabindexContent = document.querySelectorAll(tabindexElements);
    modal.style.display = 'none';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-modal', 'false');
    modal.setAttribute('aria-hidden', 'true');
    
    focusableContent.forEach(element => {
        element.removeAttribute('aria-hidden');
    });

    tabindexContent.forEach(element => {
        element.setAttribute('tabindex', '0');
    });
    
    hideModalData(elementID);
}

function hideModalData(elementID){
    const modal = document.getElementById(elementID);
    const focusableContentToHide = modal.querySelectorAll(focusableElements);
    focusableContentToHide.forEach(element => {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('aria-hidden', 'true');
    });
}

function hideGeneralPageData(){
    const allFocusableContent = document.querySelectorAll(focusableElements);
    allFocusableContent.forEach(element => {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('aria-hidden', 'true');
    });
}

// Expose & Export
expose('displayModal', displayModal);
expose('closeModal', closeModal);

export { displayModal, closeModal };
