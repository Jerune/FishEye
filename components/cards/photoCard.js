import MediaCard from "./mediaCard.js";

export default class PhotoCard extends MediaCard{
    #list=[
        'Fashion_Pattern_on_Pattern.jpg',
        'Fashion_Yellow_Beach.jpg',
        'Fashion_Wings.jpg',
        'Fashion_Melody_Red_on_Stripes.jpg',
        'Event_Emcee.jpg'
    ];
    //title;
    constructor(data, DOMtarget) {
        super({...data, imgName:data.image}, DOMtarget);
        this.buildMediaTemplate();
    }

    buildTemplate() {
        return `
            <img src="/assets/photos/thumbs/${this.imgName}" ${this.addClass()} alt="" />
        `;
    }

    addClass(){
        if (!this.#list.includes(this.imgName)) return;
        return 'class="top"';
    }
}