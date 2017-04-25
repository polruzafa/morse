// HTTP Server
var express = require("express");
//var request = require("superagent");
var app = express();
// Define port to listen to
var port = 8011;
// Import our own DigitalOcean module
var morse = require("./morse.js");
var gpio = require("./gpio");
// API

// Returns whether the current IP is different 
app.get("/pls/has/:subdomain/changed/:ip", (request, response) =>{
    // DigitalOcean
    
});

// Update subdomain ip address
app.post("/morse/this/:message", (request, response) =>{
    //console.log(request.params.message);
    // Codify message to morse code
    let coded = morse.m2m(request.params.message);
    // Reproduce message as blinking LED
    gpio.reproduce(coded);
    // Return info
    response.json({
        "message": request.params.message,
        "morse": coded
    });
});

app.post("/morse/test/:message", (request, response) =>{
    morse.stringify(request.params.message);
    response.json({
        "message": request.params.message,
        "coded": morse.stringify(morse.m2m(request.params.message))
    });
})

app.get("/morse/test", (request, response) =>{
    gpio.test("...---...");
    response.json({
        "message": "Testing"
    });
});

// Listener
app.listen(port, () =>{
    console.log("Stuff happening on port "+port)
});