var rpio = require("rpio");

const UNIT = 400;
const SHORT = UNIT;
const LONG = UNIT * 3;
const INTER_ELEMENT = UNIT;
const INTER_LETTER = UNIT * 3;
const INTER_WORD = UNIT * 7;

// Init GPIO
rpio.init();

function reproduce(message){
    let morse = "";
    for(let word in message){
        //console.log(message[word]);
        for(let letter in word){
            console.log(word[letter]);
            for(let sign in letter){
                if(letter[sign] == "."){
                    dot();
                }else{
                    dash();
                }
                rpio.msleep(INTER_ELEMENT);
            }
            rpio.msleep(INTER_LETTER);
        }
        rpio.msleep(INTER_WORD);
    }
}

function test(message){
    console.log("Testing LED morse code for: "+message);
    for(let sign in message){
        console.log(sign + ": "+message[sign]);
        if(message[sign] == "."){
            dot();
        }else{
            dash();
        }
        rpio.msleep(INTER_ELEMENT);
    }
}

// Make LED blink - dash
function dash(){
    rpio.open(11, rpio.OUTPUT, rpio.LOW);

    rpio.write(11, rpio.HIGH);
    rpio.msleep(LONG);
    rpio.write(11, rpio.LOW);

    rpio.close(11);
}
// Make LED blink - dot
function dot(){
    rpio.open(11, rpio.OUTPUT, rpio.LOW);

    rpio.write(11, rpio.HIGH);
    rpio.msleep(SHORT);
    rpio.write(11, rpio.LOW);

    rpio.close(11);
}

module.exports = {
    reproduce: reproduce,
    test: test
}
