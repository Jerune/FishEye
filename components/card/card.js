import { expose, removeSpace } from '../tools.js';

class Card {
    constructor(data, DOMtarget) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.likes = 12;
        this.isLiked = false;
        this.DOM = document.createElement('article');
        this.DOM.className = 'visible';
        this.addCard();
        DOMtarget.appendChild(this.DOM);
    }

    exposeCard() {
        expose('card_' + removeSpace(this.name), this);
    }

    buildTemplate() {
        this.DOM.innerHTML = `
        <img src='assets/photographers/${this.portrait}' alt='${this.name}'>
        <h2 onclick="card_${removeSpace(this.name)}.click()" >${this.name}</h2>
        <p>${this.city}, ${this.country}</p>
        <p>${this.tagline}</p>
        <p>${this.price}€/jour</p>
    `;
    }

    addCard() {
        this.exposeCard();
        this.buildTemplate();
    }

    // getLikesCount() {
    //     return this.isLiked ? this.likes + 1 : this.likes;
    // }

    click() {
        this.isLiked = !this.isLiked;
        this.buildTemplate();
    }
}

export { Card };