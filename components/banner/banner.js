// DOM Elements
const likePriceBanner = document.querySelector('.likes_price_banner');

// Functions
function initBanner(photographerData, totalLikes){
    likePriceBanner.lastElementChild.innerHTML = `${photographerData.price}€ / jour`;
    updateBanner(totalLikes);
};

function updateBanner(totalLikes) {
    likePriceBanner.firstElementChild.innerHTML = `${totalLikes} `;
}

export { initBanner, updateBanner };