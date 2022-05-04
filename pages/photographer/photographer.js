import { PhotographerCard } from '../../components/cards/photographerCard.js';
import { PhotoCard } from '../../components/cards/photoCard.js';
import { getPhotoData } from '../../components/tools.js';
import { updateBanner } from '../../components/banner/banner.js';

async function displayData(media, photographers) {
    const photoOverviewSection = document.querySelector('.photo-overview');
    const photographerHeader = document.querySelector('.photographer-header');
    const urlSearchQuery = location.search.slice(1);
    let totalLikes = 0;
    let selectedPhotographer;
    media.forEach(photo => {
        if (urlSearchQuery == photo.photographerId) {
            new PhotoCard(photo, photoOverviewSection);
            totalLikes += photo.likes;
        }
        return totalLikes;
    });
    photographers.forEach(photographer => {
        if (urlSearchQuery == photographer.id) {
            selectedPhotographer = photographer;
            new PhotographerCard(photographer, 'photographer-detail', photographerHeader);
        }
    });

    updateBanner(selectedPhotographer, totalLikes);
}

async function init() {
    // Récupère les datas des images
    const { media, photographers } = await getPhotoData();
    displayData(media, photographers);
}

init();