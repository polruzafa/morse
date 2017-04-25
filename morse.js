var rpio = require("rpio");

const alphabet = {
    "a": "·-",
    "b": "-···",
    "c": "-·-·",
    "d": "--··",
    "e": "·",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}

//  Transforms the message to morse code, using ·- as symbols;
function morse(message){
    let tokens = message.split(" ");
    for(let i = 0; i < tokens.length; i++){

    }

}

module.exports = {
    morse: morse
}