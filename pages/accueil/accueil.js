import PhotographerCard from '../../components/cards/photographerCard.js';
import { getPhotoData } from '../../components/tools.js';



async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');
    photographers.forEach(photographer => {
        new PhotographerCard(photographer, 'accueil', photographersSection);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotoData();
    displayData(photographers);
}

init();