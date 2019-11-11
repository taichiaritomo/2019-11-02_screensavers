/********************
 * Materials
 ********************/

// An array of phrases that will come before a phrase from phrasesB
var phrasesA = [
  "earth",
  "leaves",
  "the building",
  "your brain",
  "your neighbor",
  "everyone",
  "the sun",
  "computers",
  "emails",
  "yourself",
  "your eyes",
  "your desk",
  "pixels",
  "dust"
];

// An array of phrases that will come after a phrase from phrasesA
var phrasesB = [
  "turning",
  "growing",
  "getting older",
  "thinking",
  "shining",
  "charging",
  "in the air",
  "daydreaming",
  "blinking",
  "without you",
  "dancing",
  "gathering"
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
var currentIndexA = 0;
var currentIndexB = 0;


// This is the function that changes the screensaver
function change() {
  // get a random index for A
  // we also want to avoid repeats, so if newIndexA isn't different from currentIndexA, we keep trying
  var newIndexA = getRandomInt( phrasesA.length );
  while (newIndexA == currentIndexA) {
    newIndexA = getRandomInt( phrasesA.length );
  }
  currentIndexA = newIndexA;

  // get a random index for B
  // we want to avoid repeats for this too
  var newIndexB = getRandomInt( phrasesB.length );
  while (newIndexB == currentIndexB) {
    newIndexB = getRandomInt( phrasesB.length );
  }
  currentIndexB = newIndexB;


  // VISUAL CHANGES //

  // Build a new sentence
  var sentence = "Listen to the sound of " + phrasesA[newIndexA] + " " + phrasesB[newIndexB];
  textElement.innerHTML = sentence; // change the HTML inside <p>

  // Pick a color based on phraseA
  var color = colors[newIndexA];
  body.style["background-color"] = color; // change the style of <body> using the same language as CSS properties.

  // Pick a size based on phraseB
  // Uncomment this code to change sizes~
  // var size = sizes[newIndexB];
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

// or, instead, you can wait 2 seconds, then call the function change()...
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
