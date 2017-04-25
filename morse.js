//var rpio = require("rpio");

const alphabet = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "--..",
    "e": ".",
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

//  Transforms the message to morse code, using .- as symbols;
function morse(message){
    
}

function c2m(character){
    return alphabet[character];
}
function w2m(word){
    let morse_word = [];
    for(let i = 0; i < word.length; i++){
        morse_word.push(c2m(word[i].toLowerCase()));
    }
    console.log(morse_word);
    return morse_word;
}

function m2m(message){
    let tokens = message.split(" ");
    let morse_tokens = [];
    for(let i = 0; i < tokens.length; i++){
        morse_tokens.push(w2m(tokens[i]));
    }
    console.log(morse_tokens);
    return morse_tokens;
}

module.exports = {
    morse: morse,
    c2m: c2m,
    w2m: w2m,
    m2m: m2m
}