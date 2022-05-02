import { Card } from '../../components/card/card.js';

async function getPhotographers() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');
    photographers.forEach(photographer => {
        new Card(photographer, photographersSection);
    });
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
}

init();