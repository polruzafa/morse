// HTTP Server
var express = require("express");
//var request = require("superagent");
var ip = require("ip");
var app = express();
var bodyParser = require("body-parser")

// Define port to listen to
var port = 8011;
// Import our morse and gpio lib
var morse = require("./morse.js");
var gpio = require("./gpio");

// API
var jsonParser = bodyParser.json();
app.post("/morse/this", jsonParser, (request, response) =>{
    // Codify message to morse code
    let coded = morse.stringify(morse.m2m(request.body.message));
    
    // Respond with info
    response.json({
        "message": request.body.message,
        "morse": coded,
        "elapsed": coded.length * gpio.UNIT
    });

    // Reproduce message as blinking LED
    //gpio.reproduce(coded);
});

app.post("/morse/play", jsonParser,(request, response) =>{
    // Directly reproduce a morse-coded string
    gpio.reproduce(request.body.morse);
});

app.get("/morse/test", (request, response) =>{
    //
    response.json({
        "message": "SOS",
        "morse": "...---..."
    });
    //
    gpio.reproduce("...---...");
});

app.get("/morse/discover", (request, response) =>{
    response.json({
        "hey": "listen",
        "ip": ip.address(),
        "port": port
    });
});

// Listener
app.listen(port, () =>{
    console.log("Stuff happening on port "+port)
});
