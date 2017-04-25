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
        "morse": morsified
    });
});

// Listener
app.listen(port, () =>{
    console.log("Stuff happening on port "+port)
});