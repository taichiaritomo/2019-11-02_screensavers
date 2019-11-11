/********************
 * Materials
 ********************/

// An array of words referring to objects
var objects = [
  "sushi",
  "airpods",
  "apple",
  "brick",
  "broccoli",
  "modpodge"
];

// An array of words referring to scenes
var scenes = [
  "in space",
  "in the fog",
  "in the desert",
  "in the mountains",
  "in ikea",
  "at a festival"
];

// An array of colors
var colors = [
  "#ff9f95",
  "#cccccc",
  "red",
  "brown",
  "green",
  "magenta"
];

// Get HTML elements so that we can edit them later
var firstWordElement = document.querySelector("span.first-word");
var secondWordElement = document.querySelector("span.second-word");




/*********************************************
 * Screensaver Logic
 *********************************************/

var currentIndex1 = 0;
var currentIndex2 = 0;

function change() {

  // get a random index for objects
  var newIndex1 = getRandomInt( objects.length );
  while (newIndex1 == currentIndex1) {
    newIndex1 = getRandomInt( objects.length );
  }
  currentIndex1 = newIndex1;

  // get a random index for scenes
  var newIndex2 = getRandomInt( scenes.length );
  while (newIndex2 == currentIndex2) {
    newIndex2 = getRandomInt( scenes.length );
  }
  currentIndex2 = newIndex2;


  // get first word and corresponding color
  var object = objects[newIndex1];
  var color = colors[newIndex1];

  // change the HTML for the first word
  firstWordElement.innerHTML = object;
  firstWordElement.style["color"] = color;


  // get scene word
  var scene = scenes[newIndex2];

  // change the HTML for word 2
  secondWordElement.innerHTML = scene;

  // schedule the next call to change() in 2 seconds
  // because this part is inside change() itself, it'll continue infinitely after you call change() for the first time
  setTimeout(change, 2000);
}

setTimeout(change, 2000); // call the function change every 2 seconds




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