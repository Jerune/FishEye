import { displayModal, closeModal } from './modals.js';
import { expose } from '../tools.js';

// Variables
let mediaList;
let mediaIndex;
const lightboxModal = document.querySelector('#lightbox_modal');

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
        console.log(mediaToAdd);
    }
    displayModal('lightbox_modal');
}

// function toggleCurrentMedia(mediaName){
//     mediaList.forEach(mediaItem => {
//         if(mediaItem.isCurrent){
//             mediaIndex = mediaList.indexOf(mediaItem);
//         }
//     });
// }

function buildLightbox() {
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('carousel-item');
    mediaContainer.innerHTML = `


        <div class="caroussel-title">
            <p>${this.title}</p>
        </div>
    `;
    
    lightboxModal.appendChild(mediaContainer);

}


// function goToNextSlide() {
//     if (currentItemPosition + 1 >= $carouselItems.length) {

//         const lastItem = `.item-${currentItemPosition}`;

//         currentItemPosition = 0;
//         const currentItem = `.item-${currentItemPosition}`;

//         setNodeAttributes(lastItem, currentItem);
//     } else {
//         currentItemPosition += 1;
//         const lastItem = `.item-${currentItemPosition - 1}`;
//         const currentItem = `.item-${currentItemPosition}`;

//         setNodeAttributes(lastItem, currentItem);
//     }

//     <div role="button" class="controls controls-right">
//     <span class="img next-image">
//         <i aria-hidden="true" class="fa fa-arrow-circle-right"></i>
//     </span>
//     <p class="sr-only">Next</p>
//     </div>  
// };

// function goToPreviousSlide() {
//     if (currentItemPosition - 1 >= 0) {
//         currentItemPosition -= 1;
//         const currentItem = `.item-${currentItemPosition}`;
//         const lastItem = `.item-${currentItemPosition + 1}`;

//         setNodeAttributes(lastItem, currentItem);
//     } else {
//         const lastItem = `.item-${currentItemPosition}`;

//         currentItemPosition = 2;
//         const currentItem = `.item-${currentItemPosition}`;

//         setNodeAttributes(lastItem, currentItem);
//     }

//     <div role="button" class="controls controls-right">
//     <span class="img next-image">
//         <i aria-hidden="true" class="fa fa-arrow-circle-right"></i>
//     </span>
//     <p class="sr-only">Next</p>
//     </div>
// };


// const setNodeAttributes = (lastItem, currentItem) => {
//     $(lastItem).css('display', 'none');
//     $(currentItem).css('display', 'block');
//     $(lastItem).attr('aria-hidden', 'true');
//     $(currentItem).attr('aria-hidden', 'false');
// };

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

export { initLightbox, buildLightbox };