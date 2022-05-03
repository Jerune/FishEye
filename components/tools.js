function expose(elmName, elm){
    window[elmName] = elm;
}

function removeSpace(str){
    let withoutSpaces = str.split(' ').join('_');
    return withoutSpaces.split('!').join('');
}

async function getPhotoData() {
    const response = await fetch('/data/photographers.json');
    const photographers = await response.json();
    return photographers;
}

export { expose, removeSpace, getPhotoData };