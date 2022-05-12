import { updateLikes } from '../../pages/photographer/photographer.js';
import { expose, removeSpace } from '../tools.js';
export default class MediaCard {
    constructor(data, DOMtarget) {
        for (const [key, value] of Object.entries(data)) {
            if (key === 'image' || key === 'video') continue;
            this[key]=value;
        }
        this.cardName = 'card_' + removeSpace(this.title);
        this.isLiked = false;
        this.DOM = document.createElement('article');
        this.DOM.className = 'photo_card';
        DOMtarget.appendChild(this.DOM);
        expose(this.cardName, this);
    }

    buildTemplate(){}

    likeMedia() {
        this.isLiked = !this.isLiked;
        this.buildMediaTemplate();
        updateLikes(this.isLiked);
    }

    buildMediaTemplate() {
        this.DOM.innerHTML = `
        <a tabindex="0" onclick="initLightbox('${this.imgName||this.videoName}')" role="link" aria-label="${this.title} vue zoomé">
            ${this.buildTemplate()}
        </a>
        <aside class="photo_card_title_section">
            <p class="photo_card_title_section_title">${this.title}</p>
            <i class="photo_card_likes" onclick='${this.cardName}.likeMedia()' role="link" tabindex="0" aria-label="like">${this.countLikes()}&nbsp;</i>
        </aside>
        `;
    }
    countLikes(){
        if (this.isLiked) return this.likes+1;
        return this.likes;
    }
}
