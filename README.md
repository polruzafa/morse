# Morse for the Raspberry Pi GPIO!

A little app with API written in Javascript using `rpio` to make a LED reproduce messages in morse code.

## Requirements
- Node v7.9.0
- Jasmine (testing only)

## Usage
- `node install`
- Connect the GPIO pin 11 to the LED and back to the GND.
- Start the API server with `node server.js`
- Any POST to the `/morse/this/:message` will be reproduced in morse code.