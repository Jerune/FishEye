import MediaCard from "./mediaCard.js";

export default class VideoCard extends MediaCard {
    //title;
    constructor(data, DOMtarget) {
        super({ ...data, videoName: data.video }, DOMtarget);
        this.buildMediaTemplate();
    }

    buildTemplate() {
        return `
    <video height="300">
        <source src="/assets/videos/${this.videoName}" type="video/mp4">
    </video>
    `;
    }
};