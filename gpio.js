var rpio = require("rpio");
//var morse = require("./morse");

function reproduce(message){
    rpio.init();
    rpio.open(11, rpio.OUTPUT, rpio.LOW);

    for(let i = 0; i < 5; i++){
        rpio.write(11, rpio.HIGH);
        rpio.sleep(1);

        rpio.write(11, rpio.LOW);
        rpio.msleep(500);
    }
}

module.exports = {
    reproduce: reproduce
}
