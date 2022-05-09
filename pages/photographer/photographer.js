// Imports
import PhotographerCard from '../../components/cards/photographerCard.js';
import PhotoCard from '../../components/cards/photoCard.js';
import { expose, getPhotoData } from '../../components/tools.js';
import { initPageBanners, updatePageBanners } from '../../components/banner/banner.js';
import VideoCard from '../../components/cards/videoCard.js';
import { initLightbox } from '../../components/modals/lightbox.js';
let totalLikes;

expose("lightBox", initLightbox);

// Displaying the data on the page
async function displayData(media, photographers) {
    
    const photoOverviewSection = document.querySelector('.photo-overview');
    const photographerHeader = document.querySelector('.photographer-header');
    const urlSearchQuery = location.search.slice(1);
    
    // Show images & videos for selected photographer
    totalLikes = 0;
    media.forEach(photo => {
        if (urlSearchQuery == photo.photographerId) {
            if (photo.image) new PhotoCard(photo, photoOverviewSection);
            else new VideoCard(photo, photoOverviewSection)
            totalLikes += photo.likes;
        }
    });
    
    // Show data of selected photographer
    let selectedPhotographer;
    photographers.forEach(photographer => {
        if (urlSearchQuery == photographer.id) {
            selectedPhotographer = photographer;
            new PhotographerCard(photographer, 'photographer-detail', photographerHeader);
        }
    });

    // Show total likes and daily rate for selected photographer in footer banner
    initPageBanners(selectedPhotographer, totalLikes);
}

async function init() {
    const { media, photographers } = await getPhotoData();
    displayData(media, photographers);
}

/**
 * [updateLikes description]
 *
 * @param   {Boolean}  increment  [increment description]
 *
 * @return  {void}             [return description]
 */
function updateLikes(increment){
    totalLikes = increment ? totalLikes+1 : totalLikes-1;
    updatePageBanners(totalLikes);
}
init();

export { updateLikes };