//import { PhotographerCard } from '../../components/cards/photographerCard.js';
import { PhotoCard } from '../../components/cards/photoCard.js';
import { getPhotoData } from '../../components/tools.js';

async function displayData(photos) {
    const photoOverviewSection = document.querySelector('.photo-overview');
    photos.forEach(photo => {
        new PhotoCard(photo, photoOverviewSection);
    });
}

async function init() {
    // Récupère les datas des images
    const { media } = await getPhotoData();
    //displayData(photographers, 'photographer');
    displayData(media);
}

init();