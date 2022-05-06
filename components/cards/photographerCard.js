import { expose, removeSpace } from '../tools.js';

export default class PhotographerCard {
    constructor(data, page, DOMtarget) {
        this.pageType = page;
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        if(this.pageType === 'accueil'){
            this.DOM = document.createElement('article');
            this.DOM.className = 'photographer_card';
        } else if (this.pageType === 'photographer-detail'){
            this.DOM = DOMtarget;
        }
        expose('card_' + removeSpace(this.name), this);
        if(this.pageType === 'accueil'){
            this.buildHomeTemplate();
        } else if (this.pageType === 'photographer-detail'){
            this.buildPhotographerTemplate();
        }
        if(this.pageType === 'accueil'){ 
            DOMtarget.appendChild(this.DOM);
        } 
    }


    buildHomeTemplate() {
        this.DOM.innerHTML = `
        <a href="/pages/photographer/photographer.html?${this.id}" aria-label="${this.name}">
            <img class="portrait" src='assets/photographers/${this.portrait}' alt="">
            <h2>${this.name}</h2>
        </a>
        <p class="photographer_card_location">${this.city}, ${this.country}</p>
        <p class="photographer_card_tagline">${this.tagline}</p>
        <p class="photographer_card_daily-rate">${this.price}€/jour</p>
    `;
    }

    buildPhotographerTemplate() {
        this.DOM.innerHTML = `
        <div>
            <h1>${this.name}</h1>
            <p class="photographer-header_location">${this.city}, ${this.country}</p>
            <p class="photographer-header_tagline">${this.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal('contact_modal')">Contactez-moi</button>
        <img class="portrait" src='../../assets/photographers/${this.portrait}' alt="${this.name}">
        `;
    }
}