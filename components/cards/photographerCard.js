import { expose, removeSpace } from '../tools.js';

export default class PhotographerCard {
    constructor(data, page, DOMtarget) {
        this.pageType = page;
        for (const [key, value] of Object.entries(data)) {
            this[key]=value;
        }
        
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
            <img class="portrait" src='assets/photographers/${this.portrait}' alt="Portrait ${this.name}" aria-hidden="true">
            <h2 aria-hidden="true">${this.name}</h2>
        </a>
        <p class="photographer_card_location" tabindex="0">${this.city}, ${this.country}</p>
        <p class="photographer_card_tagline" tabindex="0">${this.tagline}</p>
        <p class="photographer_card_daily-rate" tabindex="0">${this.price}€/jour</p>
    `;
    }

    buildPhotographerTemplate() {
        this.DOM.innerHTML = `
        <img class="portrait" src='../../assets/photographers/${this.portrait}' alt="${this.name}">
        <div class="photographer_details">
            <h1 tabindex="0">${this.name}</h1>
            <p class="photographer-header_location" tabindex="0">${this.city}, ${this.country}</p>
            <p class="photographer-header_tagline" tabindex="0">${this.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal('contact_modal')">Contactez-moi</button>
        
        `;
    }
}