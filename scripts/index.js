let btn = document.querySelector("#btn-translate");
let textArea = document.querySelector("#txt-input");
let output = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(sentence) {
  return serverURL + "?" + "text=" + sentence;
}

function errorHandler(error) {
  console.log("Error occurred: ", error);
  alert("Something went wrong! Try Again in some time");
}

function updateOutput(data) {
  let translatedText = data.contents.translated;
  output.innerHTML = translatedText;
  textArea.value = "";
}

function clickHandler() {
  let sentence = textArea.value;

  // fetching api and function reference
  fetch(getTranslationURL(sentence))
    .then((res) => res.json())
    .then(updateOutput)
    .catch(errorHandler);
}

btn.addEventListener("click", clickHandler);
