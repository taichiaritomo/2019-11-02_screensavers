/********************
 * Materials
 ********************/

// An array of sentences based on Yoko Ono's EARTH PIECE: Listen to the sound of the earth turning -- https://artsandculture.google.com/asset/earth-piece-listen-to-the-sound-of-the-earth-turning-yoko-ono/0gGjFv9n_JYAzg?hl=en
var sentences = [
  "Listen to the sound of earth turning",
  "Listen to the sound of leaves growing",
  "Listen to the sound of the building getting older",
  "Listen to the sound of your brain thinking",
  "Listen to the sound of your neighbor thinking",
  "Listen to the sound of everyone thinking together",
  "Listen to the sound of the sun shining",
  "Listen to the sound of computers charging",
  "Listen to the sound of emails in the air",
  "Listen to the sound of your daydreaming",
  "Listen to the sound of your eyes blinking",
  "Listen to the sound of your desk without you",
  "Listen to the sound of pixels dancing",
  "Listen to the sound of dust gathering"
];


// An array of CSS color names from https://www.quackit.com/css/css_color_codes.cfm
var colors = [
  "DarkTurquoise",
  "DarkKhaki",
  "RosyBrown",
  "Sienna",
  "HotPink",
  "DeepPink",
  "Goldenrod",
  "Blue",
  "Crimson",
  "ForestGreen",
  "RebeccaPurple",
  "Teal",
  "Orchid",
  "CornflowerBlue",
  "Chartreuse"
];


// An array of class names that will be applied to the <p> element
var sizes = [
  "medium",
  "small",
  "big",
  "small",
  "medium",
  "big",
  "small",
  "medium",
  "small",
  "medium",
  "big",
  "medium",
  "small",
  "big",
  "medium"
];


// Get HTML elements so that we can edit them later
var textElement = document.querySelector("p");
var body = document.querySelector("body");

// ^^^ USEFUL AND IMPORTANT! ^^^
// document.querySelector() finds and returns the first HTML element that matches the given CSS selector
//
// Some other examples...
// var mySpecialElement = document.querySelector("#special"); // get the element with id "special"
// var myBoxElement = document.querySelector(".box");         // get the first element with class "box"
//
// More info - https://www.w3schools.com/jsref/met_document_queryselector.asp





/*********************************************
 * Screensaver Logic
 *********************************************/

// Keep track of the current index of the sentence being shown
var currentIndex = 0;


// Define the function that changes the screensaver
function change() {
  // Get a random integer from 0 to sentences.length, using our helper function getRandomInt()
  var newIndex = getRandomInt( sentences.length );
  while (newIndex == currentIndex) {
    newIndex = getRandomInt( sentences.length ); // Avoid repeats. If we're about to get the same index as last time, reroll.
  }
  currentIndex = newIndex; // update currentIndex for next time


  // VISUAL CHANGES //

  // Get a new sentence, color, and size from our arrays
  var sentence = sentences[newIndex];
  textElement.innerHTML = sentence; // change the HTML inside <p>

  var color = colors[newIndex];
  body.style["background-color"] = color; // change the style of <body> using the same language as CSS properties.
  
  // Pick a size based on phraseB
  // Uncomment this code to change sizes~
  // var size = sizes[newIndex];
  // textElement.className = size; // change the class of <p>


  // SCHEDULE THE NEXT CALL TO CHANGE

  // because this part is inside change() itself, it'll continue infinitely after you call change() for the first time
  setTimeout(change, 2000);
}





/*********************************************
 * Start the Screensaver
 *********************************************/

// call change() for the first time, to set the whole thing in motion
change();

// or, instead, you can wait two seconds, then call the function change()...
// setTimeout(change, 2000);





/****************************************
 * Helper functions
 * 
 * You probably won't need to edit this,
 * although you could learn something
 * technical from it or write your own!
 ****************************************/ 

// Helper function that returns a random integer between 0 and less than the given maximum number.
// Note, the range doesn't include the maximum number.
// For more info, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
