var Letter = require("Letter.js");

// Constructor Function
function Word(word){
    this.letters = word.split("").map(function(char){
        return new Letter(char)
    });
}

// Prototypes



// get Solution

// to string

// guess the letter

// guess correctly