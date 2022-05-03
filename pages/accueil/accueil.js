import { PhotographerCard } from '../../components/cards/photographerCard.js';
import { getPhotoData } from '../../components/tools.js';



async function displayData(photographers, type) {
    const photographersSection = document.querySelector('.photographer_section');
    photographers.forEach(photographer => {
        new PhotographerCard(photographer, type, photographersSection);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotoData();
    displayData(photographers, 'photographer');
}

init();