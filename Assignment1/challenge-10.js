// Challenge

// 1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

// 2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

// 3. Declare a variable lastLetter and assign it a value of the last letter of lyrics using bracket notation and the .length property we learned in the last challenge.


const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

let firstLetter = songTitle[0];
let seventhLetter = songTitle[6];

let lastLetter = lyrics[lyrics.length-1];


console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);