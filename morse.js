
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

// to morse
function c2m(character){
    return alphabet[character];
}
function w2m(word){
    let morse_word = [];
    for(let i = 0; i < word.length; i++){
        morse_word.push(c2m(word[i].toLowerCase()));
    }
    return morse_word;
}
function m2m(message){
    let tokens = message.split(" ");
    let morse_tokens = [];
    for(let i = 0; i < tokens.length; i++){
        morse_tokens.push(w2m(tokens[i]));
    }
    return morse_tokens;
}
// de-morse
function m2c(character){
    for(let letter in alphabet) {
        if(alphabet.hasOwnProperty(letter)){
            if(alphabet[letter] == character){
                return letter;
            }
        }
    }
}
function m2w(word){
    let actual_word = "";
    for(let i = 0; i < word.length; i++){
        actual_word += m2c(word[i]);
    }
    return actual_word;
}
function m2a(message){
    let actual_message = "";
    for(let i = 0; i < message.length; i++){
        actual_message += m2w(message[i])+" ";
    }
    return actual_message.trim();
}

function stringify(tokens){
    let stringified = "";
    for(let n = 0; n < tokens.length; n++){
        for(let m = 0; m < tokens[n].length; m++){
            for(let b = 0; b < tokens[n][m].length; b++){
                stringified += tokens[n][m][b];
                stringified += " ";    
            }            
            stringified += "   ";
        }
        stringified += "       ";
    }
    console.log(stringified);
    return stringified.trim();
}

module.exports = {
    c2m: c2m,
    w2m: w2m,
    m2m: m2m,

    m2c: m2c,
    m2w: m2w,
    m2a: m2a,

    stringify: stringify
}