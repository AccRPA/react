
function decodeHtmlCharacters(text){
    const element = document.createElement('div');
    element.innerHTML = text;
    const textDecoded = element.textContent;
    
    element.remove();
    return textDecoded;
}

export const Utils = {
    decodeHtmlCharacters: decodeHtmlCharacters
}