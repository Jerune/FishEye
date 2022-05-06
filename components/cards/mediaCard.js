import { updateLikes } from '../../pages/photographer/photographer.js';
import { expose, removeSpace } from '../tools.js';

export default class MediaCard {
    constructor(data, DOMtarget) {
        for (const [key, value] of Object.entries(data)) {
            if (key === 'image' || key === 'video') continue;
            this[key]=value;
        }
        this.isLiked = false;
        this.DOM = document.createElement('article');
        this.DOM.className = 'photo_card';
        DOMtarget.appendChild(this.DOM);
        expose('card_' + removeSpace(this.title), this);
    }

    /**
     * fonction remplie par la method du même nom dans l'enfant
     */
    buildTemplate(){}

    likeMedia() {
        this.isLiked = !this.isLiked;
        this.buildMediaTemplate();
        updateLikes(this.isLiked);
    }

    buildMediaTemplate() {
        this.DOM.innerHTML = `
        <a href="#">
            ${this.buildTemplate()}
        </a>
        <aside class="photo_card_title">
            <p>${this.title}</p>
            <i class="photo_card_likes" onclick='likeMedia()'>${this.likes}&nbsp;</i>
        </aside>
        `;
    }
}
