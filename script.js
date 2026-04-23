const element = document.getElementById("title");
const content = element.textContent; 

element.textContent = "";

let index = 0;

function typeEffect() {
  if (index < content.length) {
    element.textContent += content[index];
    index++;
    setTimeout(typeEffect, 100);
  }
  else {
    element.style.animation = "none";
  }
}

typeEffect();


const elementWord = document.getElementById("description");
const contentWord = elementWord.textContent;
elementWord.textContent = "";
const words = contentWord.split(' ');
let indexWord = 0;

function wordTypeEffect() {
  if (indexWord < words.length) {
    const wordSpan = document.createElement('span');
    wordSpan.textContent = words[indexWord] + ' ';
    wordSpan.classList.add('jump-word');
    elementWord.appendChild(wordSpan);
    indexWord++;
    setTimeout(wordTypeEffect, 100);
  }
  else {
    elementWord.style.animation = "none";
  }

}

wordTypeEffect();
