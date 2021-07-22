let btn = document.querySelector("#btn-translate");
let textArea = document.querySelector("#txt-input");
let output = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(sentence) {
  return serverURL + "?" + "text=" + sentence;
}

function errorHandler(){
    
}