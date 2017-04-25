var morse = require("../morse");

describe("Morse.js unit testing", ()=>{
    // Test single letter
    it("- Testing c2m with 'a'", ()=>{
        expect(morse.c2m("a")).toBe(".-");
    });
    // Test single word
    it("- Testing w2m with 'Hello'", ()=>{
        let morse_hello = [ '....', '.', '.-..', '.-..', '---' ];
        expect(morse.w2m("Hello")).toEqual(morse_hello);
    });
    // Test message
    it("- Testing m2m with 'Hello world'", ()=>{
        let morse_hello_world = [
            [ '....', '.', '.-..', '.-..', '---' ],
            [ '.--', '---', '.-.', '.-..', '--..' ]
        ];
        
        expect(morse.m2m("Hello world")).toEqual(morse_hello_world);
    });

});