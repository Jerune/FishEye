import { displayModal } from './modals.js';
import { expose } from '../tools.js';

// Variables
let mediaList;
let mediaIndex;
let currentElement;
const carousel = document.querySelector('.carousel');

// Functions
function initLightbox(mediaName) {
    mediaList = [];
    let mediaElm;
    let mediaToAdd;
    for (const media of document.querySelectorAll('.photo_card')) {
        mediaToAdd = {};
        mediaElm = media.querySelector('img');
        if (mediaElm !== null) {
            mediaToAdd.type = 'image';
            mediaToAdd.url = mediaElm.src;
            mediaToAdd.url = mediaToAdd.url.replace('thumbs','lightbox');
        }
        else {
            mediaToAdd.type = 'video';
            mediaElm = media.querySelector('video');
            mediaToAdd.url = mediaElm.querySelector('source').src;
        }
        mediaToAdd.title = media.querySelector('.photo_card_title_section_title').textContent;
        if (mediaToAdd.url.includes(mediaName)) { mediaToAdd.isCurrent = true; } ;
        mediaList.push(mediaToAdd);
    }

    toggleCurrentMedia();
    displayModal('lightbox_modal');
}

function toggleCurrentMedia(){
    mediaIndex = 0;
    currentElement = {};
    mediaList.forEach(mediaItem => {
        if(mediaItem.isCurrent){
            mediaIndex = mediaList.indexOf(mediaItem);
            currentElement = mediaItem;
        }  
    })
    buildLightbox();
}

function switchSlide(direction){
    if (direction === 'previous'){
        mediaList[mediaIndex-1].isCurrent = true;
        mediaList[mediaIndex].isCurrent = false;
        mediaIndex = mediaIndex-1;
    } else if (direction === 'next'){
        mediaList[mediaIndex+1].isCurrent = true;
        mediaList[mediaIndex].isCurrent = false;
        mediaIndex = mediaIndex+1;
    } 

    toggleCurrentMedia();
}

function insertMedia(){
    if (currentElement.type === 'image'){
        return `<img src="${currentElement.url}" alt='${currentElement.title}' />`
    } else{
        return `
        <video controls>
            <source src="${currentElement.url}" type="video/mp4" control="true">
        </video>`
    }
}

function buildLightbox() {
    carousel.innerHTML = `
        ${buildMediaNavigation('previous')} 
        <div class="carousel_data">
            ${insertMedia()}
            <p>${currentElement.title}</p>
        </div>
        ${buildMediaNavigation('next')}
        <img class="close" src="../../assets/icons/close-red.svg" onclick="closeModal('lightbox_modal')" />
    `;

};

function buildMediaNavigation(direction) {
    if (direction === 'previous'){
        if (mediaIndex > 0){
            return `
            <div role="button" class="carousel_previous" onclick="switchSlide('previous')">
                <i aria-hidden="true" class="fa-solid fa-angle-left""></i>
                <p class="sr-only">Previous</p>
            </div>
            `;
        } else {
            return `
            <div aria-hidden="true" class="carousel_previous">
            </div>
            `;
        }
    } else if (direction === 'next' && mediaIndex < mediaList.length-1){
        return `
        <div role="button" class="carousel_next" onclick="switchSlide('next')">
            <i aria-hidden="true" class="fa-solid fa-angle-right""></i>
            <p class="sr-only">Next</p>
        </div>
        `;
    } else if (direction === 'next' && mediaIndex == mediaList.length-1){
        return `
        <div aria-hidden="true" class="carousel_next">
        </div>
        `;
    } else{
        return '';
    }
};


// document.onkeydown( (key) => {
//     const keyCode = key.keyCode ? key.keyCode : key.which;

//     if (keyCode === 39) {
//         goToNextSlide();
//     } else if (keyCode === 37) {
//         goToPreviousSlide();
//     }
// });

expose('initLightbox', initLightbox);
expose('buildLightbox', buildLightbox);
expose('toggleCurrentMedia', toggleCurrentMedia);
expose('switchSlide', switchSlide);
expose('buildMediaNavigation', buildMediaNavigation);

export { initLightbox, buildLightbox };