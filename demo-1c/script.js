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





/*********************************************
 * Screensaver Logic
 *********************************************/


// Keep track of the current index of the sentence being shown
var currentIndex = 0;


// This is the function that changes the screensaver
function change() {

  // Get a random integer from 0 to sentences.length, using our helper function getRandomInt()
  var newIndex = getRandomInt( sentences.length );
  while (newIndex == currentIndex) {
    newIndex = getRandomInt( sentences.length ); // Avoid repeats. If we're about to get the same index as last time, reroll.
  }
  currentIndex = newIndex; // update currentIndex for next time


  // VISUAL CHANGES //

  // First, grab the visible and hidden screensaver elements.
  // The plan is to
  // 1. change stuff in the hidden one
  // 2. make the hidden one visible
  // 3. make the visible one hidden
  var visibleElement = document.querySelector(".screensaver.visible");
  var hiddenElement = document.querySelector(".screensaver.hidden");

  var sentence = sentences[newIndex];
  hiddenElement.innerHTML = "<p>" + sentence + "</p>";
  hiddenElement.style["background-color"] = colors[newIndex];

  visibleElement.classList.remove("visible"); // we use .classList instead of .className here, so that we don't end up deleting the class "screensaver"
  visibleElement.classList.add("hidden");     // more info on .classList - https://www.w3schools.com/jsref/prop_element_classlist.asp

  hiddenElement.classList.remove("hidden");
  hiddenElement.classList.add("visible");


  // SCHEDULE THE NEXT CALL TO CHANGE
  // because this part is inside change() itself, it'll continue infinitely after you call change() for the first time
  setTimeout(change, 4000);
}





/*********************************************
 * Start the Screensaver
 *********************************************/

// call change() for the first time, to set the whole thing in motion
change();

// OR, instead, you can wait 2 seconds, then call the function change()...
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
