async function rotateAllText(word, characters, consoleElemId, delay) {
    const consoleElem = document.getElementById(consoleElemId);
    let current_word = '';
    let i = 0;
  
    while (i < word.length) {
      const char = word[i];
      let characterFound = false;
  
      for (let j = 0; j < characters.length; j++) {
        consoleElem.innerText = current_word + characters[j].repeat(word.length - i);
        await new Promise(resolve => setTimeout(resolve, delay));
        if (char === characters[j] || char === characters[j].toUpperCase()) {
          current_word = current_word + characters[j];
          characterFound = true;
          break;
        }
      }
  
      if (!characterFound) {
        current_word += char;
      }
  
      i += 1;
    }
  
    consoleElem.innerText = current_word;
  }
  
  module.exports = rotateAllText;
  