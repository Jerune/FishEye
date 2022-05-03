import { expose, removeSpace } from '../tools.js';

class PhotoCard {
    constructor(data, DOMtarget) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.imgName = data.image;
        this.likes = data.likes;
        this.isLiked = false;
        this.dateCreated = data.date;
        this.photoPrice = data.price;
        this.DOM = document.createElement('article');
        this.DOM.className = 'photo_card';
        this.addCard();
        DOMtarget.appendChild(this.DOM);
    }

    exposeCard() {
        expose('photo_card_' + removeSpace(this.title), this);
    }

    buildPhotoTemplate() {
        this.DOM.innerHTML = `
        <a href="#">
            <img src="/assets/photos/thumbs/${this.imgName}" alt="">
        </a>
        <aside class="photo_card_title">
            <p>${this.title}</p>
            <i class="photo_card_likes">${this.likes}&nbsp;</i>
        </aside>
    `;
    }

    addCard() {
        this.exposeCard();
        this.buildPhotoTemplate();
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

export { PhotoCard };