// HTTP Server
var express = require("express");
//var request = require("superagent");
var app = express();
// Define port to listen to
var port = 8011;
// Import our morse and gpio lib
var morse = require("./morse.js");
var gpio = require("./gpio");

// API
app.post("/morse/this/:message", (request, response) =>{
    // Codify message to morse code
    let coded = morse.stringify(morse.m2m(request.params.message));
    
    // Respond with info
    response.json({
        "message": request.params.message,
        "morse": coded
    });

    // Reproduce message as blinking LED
    gpio.reproduce(coded);
});

app.get("/morse/test", (request, response) =>{
    //
    response.json({
        "message": "Testing"
    });
    //
    gpio.test("...---...");
});

// Listener
app.listen(port, () =>{
    console.log("Stuff happening on port "+port)
});