var rpio = require("rpio");

const SHORT = 200;
const LONG = 600;

// Init GPIO
rpio.init();

function reproduce(message){
    

    console.log(message);

    /*for(let i = 0; i < 5; i++){
        rpio.write(11, rpio.HIGH);
        rpio.sleep(1);

        rpio.write(11, rpio.LOW);
        rpio.msleep(500);
    }*/
    let morse = "";
    for(let word in message){
        for(letter in word){
            console.log(letter);
        }
    }

    rpio.close(11);
}
function dash(){
    rpio.open(11, rpio.OUTPUT, rpio.LOW);



    rpio.close(11);
}

module.exports = {
    reproduce: reproduce
}
