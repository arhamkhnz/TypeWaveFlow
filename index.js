let defaultCharacters = [
  ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', 
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
]

let defaultDelay = 20

let defaultCompleteLimit = 10

const TypeWaveFlow = {
  rotationPrint: async function (word, consoleElemId, characters = defaultCharacters, delay = defaultDelay) {
    const consoleElem = document.getElementById(consoleElemId);
    let current_word = "";
    let i = 0;

    while (i < word.length) {
      const char = word[i];
      let characterFound = false;

      for (let j = 0; j < characters.length; j++) {
        consoleElem.innerText =
          current_word + characters[j].repeat(word.length - i);
        await new Promise((resolve) => setTimeout(resolve, delay));
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
  },

  scrollPrint: async function (
    word,
    consoleElemId,
    characters = defaultCharacters,
    delay = defaultDelay,
    completeLimit = defaultCompleteLimit
  ) {
    const consoleElem = document.getElementById(consoleElemId);
    let current_word = "";

    for (let i = 0; i < word.length; i++) {
      let characterFound = false;
      for (let j = 0; j < characters.length; j++) {
        consoleElem.innerText += current_word + characters[j] + "\n";
        consoleElem.scrollTop = consoleElem.scrollHeight;
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (
          word[i] === characters[j] ||
          word[i] === characters[j].toUpperCase()
        ) {
          current_word = current_word + characters[j];
          characterFound = true;
          if (current_word === word) {
            for (let k = 0; k < completeLimit; k++) {
              consoleElem.innerText += current_word + "\n";
              consoleElem.scrollTop = consoleElem.scrollHeight;
              await new Promise((resolve) => setTimeout(resolve, 20));
            }
          }
          break;
        }
      }
      if (!characterFound) {
        current_word += word[i];
      }
    }
  },

  smoothPrint: async function (word, consoleElemId, characters = defaultCharacters, delay = defaultDelay) {
    const consoleElem = document.getElementById(consoleElemId);
    let current_word = "";

    for (let i = 0; i < word.length; i++) {
      let characterFound = false;
      for (let j = 0; j < characters.length; j++) {
        let output = current_word + characters[j];
        consoleElem.innerText = output;
        await new Promise((resolve) => setTimeout(resolve, delay));
        if (
          word[i] === characters[j] ||
          word[i] === characters[j].toUpperCase()
        ) {
          current_word += characters[j];
          characterFound = true;
          break;
        }
      }
      if (!characterFound) {
        current_word += word[i];
      }
    }
    consoleElem.innerText = current_word;
  },

  afterEffect: async function(word, consoleElemId, characters = defaultCharacters, delay = defaultDelay) {
    const consoleElem = document.getElementById(consoleElemId);
    let current_word = '';
    const wordLength = word.length;
  
    for (let i = 0; i < wordLength; i++) {
      let characterFound = false;
      let char = word[i];
      let wordSubstring = word.substring(i + 1);
  
      for (let j = 0; j < characters.length; j++) {
        consoleElem.innerText = current_word + characters[j] + wordSubstring;
        await new Promise(resolve => setTimeout(resolve, delay));
        if (char === characters[j] || char === characters[j].toUpperCase()) {
          current_word = current_word + characters[j];
          characterFound = true;
          break;
        }
      }
      if (!characterFound) {
        current_word += word[i];
      }
    }
  }
};

// Export the TypeWaveFlow module
module.exports = TypeWaveFlow;
