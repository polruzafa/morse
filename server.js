// HTTP Server
var express = require("express");
//var request = require("superagent");
var app = express();
// Define port to listen to
var port = 8011;
// Import our own DigitalOcean module
var morse = require("./morse.js");

// API
// Returns the external IP address
app.get("/pls/give/ip", (request, response) =>{
    //console.log(request.ip.substr(7));
    response.json({
        "address":request.ip.substr(7)
    });
});


// Returns whether the current IP is different 
app.get("/pls/has/:subdomain/changed/:ip", (request, response) =>{
    // DigitalOcean
    
});

// Update subdomain ip address
app.post("/pls/:subdomain/to/:ip", (request, response) =>{
    
});

// Listener
app.listen(port, () =>{
    console.log("Stuff happening on port "+port)
});