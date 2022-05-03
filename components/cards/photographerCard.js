import { expose, removeSpace } from '../tools.js';

class PhotographerCard {
    constructor(data, type, DOMtarget) {
        this.DOM = document.createElement('article');
        this.type = type;
        if(type === 'photographer'){
            this.name = data.name;
            this.id = data.id;
            this.city = data.city;
            this.country = data.country;
            this.tagline = data.tagline;
            this.price = data.price;
            this.portrait = data.portrait;
            this.DOM.className = 'photographer_card';        
        } else if(type === 'photo'){
            this.id = data.id;
            this.photographerId = data.photographerId;
            this.title = data.title;
            this.imgName = data.image;
            this.likes = data.likes;
            this.isLiked = false;
            this.dateCreated = data.date;
            this.photoPrice = data.price;
            this.DOM.className = 'photo_card';
        }
        this.addCard();
        DOMtarget.appendChild(this.DOM);
    }

    exposeCard() {
        expose('card_' + removeSpace(this.name), this);
    }

    buildPhotographerTemplate() {
        this.DOM.innerHTML = `
        <a href="/pages/photographer/photographer.html?${this.id}" aria-label="${this.name}">
            <img src='assets/photographers/${this.portrait}' alt="">
            <h2>${this.name}</h2>
        </a>
        <p class="photographer_card_location">${this.city}, ${this.country}</p>
        <p class="photographer_card_tagline">${this.tagline}</p>
        <p class="photographer_card_daily-rate">${this.price}€/jour</p>
    `;
    }

    buildPhotoTemplate() {
        this.DOM.innerHTML = `
        <a href="#">
            <img src="/assets/photos/${this.imgName}" alt="">
        </a>
        <aside>
            <p class="photo_card_title">${this.title}</p>
            <i class="photo_card_likes">${this.likes}</i>
        </aside>
    `;
    }

    addCard() {
        this.exposeCard();
        if(this.type === 'photographer'){
            this.buildPhotographerTemplate();
        } else if (this.type === 'photo'){
            this.buildPhotoTemplate();
        }
    }

    // getLikesCount() {
    //     return this.isLiked ? this.likes + 1 : this.likes;
    // }

    // Use for onclick="card_${removeSpace(this.name)}.click()"
    // click() {
    //     this.isLiked = !this.isLiked;
    //     this.buildTemplate();
    // }
}

export { PhotographerCard };