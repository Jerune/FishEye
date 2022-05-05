import MediaCard from "./mediaCard.js";

export default class PhotoCard extends MediaCard{
    //title;
    constructor(data, DOMtarget) {
        super({...data, imgName:data.image}, DOMtarget);
        this.buildMediaTemplate()
    }

    buildTemplate() {
        return `
            <img src="/assets/photos/thumbs/${this.imgName}" alt="" />
        `;
    }
}