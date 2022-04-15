function photographerFactory(data) {
    const { name, city, country,tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;

        const tagLine = document.createElement( 'p' );
        tagLine.textContent = tagline;

        const dayPrice = document.createElement( 'p' );
        dayPrice.textContent = `${price}€/jour`;
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tagLine);
        article.appendChild(dayPrice);

        return (article);
    }
    return { name, picture, getUserCardDOM };
}
export {photographerFactory};