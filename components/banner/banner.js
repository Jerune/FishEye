function updateBanner(photographerData, totalLikes) {
    const likePriceBanner = document.querySelector('.likes_price_banner');
    const likesElement = document.createElement('p');
    likesElement.className = 'photo_card_likes';
    const priceElement = document.createElement('p');

    likesElement.innerHTML = `${totalLikes} `;
    priceElement.innerHTML = `${photographerData.price}€ / jour`;

    likePriceBanner.appendChild(likesElement);
    likePriceBanner.appendChild(priceElement);
}

export { updateBanner };