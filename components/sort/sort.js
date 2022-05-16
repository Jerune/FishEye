// Imports
import { expose } from '../tools.js';
import { getPhotoData } from '../../components/tools.js';

// Variables
let unsortedMedia; 
let sortedMedia;
let dropdownTarget;
let selectSimulator;

//DOM
const sortSelect = document.getElementById('sort');

// Functions
async function sortInit(){
    const { media } = await getPhotoData();
    unsortedMedia = media;
    showDropdown(sortSelect);
}

function showDropdown(dropdown){
    if (dropdown.style.display === 'none')return;
    dropdownTarget = dropdown;
    let html='<i class="fa-solid fa-angle-up" onclick="sortBy(\'popularité\')"></i>';
    for (const opt of dropdown.options){
        html+=`<button onclick="sortBy('${opt.innerText.toLowerCase()}')">${opt.innerText}</button>`;
    }
    selectSimulator = document.createElement('div');
    selectSimulator.className = 'select-menu';
    selectSimulator.innerHTML = html;
    dropdown.parentNode.insertBefore(selectSimulator, dropdown.nextSibling);
    dropdown.style.display='none';
}

function sortBy(str){
    dropdownTarget.style.display='block';
    selectSimulator.parentNode.removeChild(selectSimulator);
    sortSelect.value = str.charAt(0).toUpperCase() + str.slice(1);
    selectSimulator=null;
    displayMedia(sortData(str));
}

function sortData(type){
    if (type === 'titre'){
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
        sortedMedia = unsortedMedia.sort((a, b) => {
            let da = new Date(a.date),
                db = new Date(b.date);
            return da - db;
        });
    } else if (type === 'popularité'){
        sortedMedia = unsortedMedia.sort((a, b) => {
            return b.likes - a.likes;
        });
    }
    return sortedMedia;
}

expose ('sortData', sortData);
expose ('showDropdown', showDropdown);
expose ('sortBy', sortBy);

export{ sortBy };

sortInit();