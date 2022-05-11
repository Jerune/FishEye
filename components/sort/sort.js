import { expose } from '../tools.js';
import { getPhotoData } from '../../components/tools.js';

let unsortedMedia;
let sortedMedia;

//DOM
const sortSelect = document.getElementById('sort');

//Events
sortSelect.addEventListener('change', () => {
    const type = sortSelect.value.toLowerCase();
    sortData(type);
});

async function sortInit(){
    const { media } = await getPhotoData();
    unsortedMedia = media;
}

// Function
function sortData(type){
    if (type === 'titre'){
        console.log('passed title');
        sortedMedia = unsortedMedia.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });  
    } else if (type === 'date'){
        console.log('passed date');
        sortedMedia = unsortedMedia.sort((a, b) => {
            let da = new Date(a.date),
                db = new Date(b.date);
            return da - db;
        });
    } else if (type === 'popularité'){
        console.log('passed popularité');
        sortedMedia = unsortedMedia.sort((a, b) => {
            return b.likes - a.likes;
        });
    }
    displayMedia(sortedMedia);
    console.log(sortedMedia);
}

expose ('sortData', sortData);
sortInit();