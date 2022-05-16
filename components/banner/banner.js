// DOM
const footerBanner = document.querySelector('.likes_price_banner');
const contactFormHeader = document.querySelector('.contactFormHeader');

// Functions
function initPageBanners(photographerData, totalLikes){
    footerBanner.lastElementChild.innerHTML = `${photographerData.price}€ / jour`;
    contactFormHeader.innerHTML = `Contactez-moi ${photographerData.name}`;
    updatePageBanners(totalLikes);
}

function updatePageBanners(totalLikes) {
    footerBanner.firstElementChild.innerHTML = `${totalLikes} `;
}

export { initPageBanners, updatePageBanners };