function expose(elmName, elm){
    window[elmName] = elm;
}

function removeSpace(str){
    let withoutSpaces = str.split(' ').join('_');
    return withoutSpaces.split('!').join('');
}

export { expose, removeSpace };