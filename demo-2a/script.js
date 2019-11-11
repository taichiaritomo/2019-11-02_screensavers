/********************
 * Materials
 ********************/

// An array of image URLs, using images of objects from p2
var objects = [
  "objects/sushi.png",
  "objects/airpods.png",
  "objects/apple.png",
  "objects/brick.png",
  "objects/broccoli.png",
  "objects/modpodge.png",
];

// Another array of image URLs, this time using images of scenery from p2
var scenes = [
  "scenes/space.jpg",
  "scenes/fog.png",
  "scenes/desert.jpg",
  "scenes/mountains.jpg",
  "scenes/ikea.jpg",
  "scenes/kumbh.jpg"
];

// Get HTML elements so that we can edit them later
var imgElement = document.querySelector("img");
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

var currentIndexA = 0;
var currentIndexB = 0;

function change() {
  // get a random index for objects
  var newIndexA = getRandomInt( objects.length );
  while (newIndexA == currentIndexA) {
    newIndexA = getRandomInt( objects.length );
  }
  currentIndexA = newIndexA;

  // get a random index for scenes
  var newIndexB = getRandomInt( scenes.length );
  while (newIndexB == currentIndexB) {
    newIndexB = getRandomInt( scenes.length );
  }
  currentIndexB = newIndexB;

  // change the foreground image's src attribute
  // more info about setAttribtute() - https://www.w3schools.com/jsref/met_element_setattribute.asp
  imgElement.setAttribute("src", objects[newIndexA]);

  // change the body background-image using CSS syntax
  // in CSS you would do this like, background-image: url('scenes/space.jpg');
  body.style["background-image"] = "url('" + scenes[newIndexB] + "')";

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


// Modern browsers don't try to load an image until it's used on the page.
// This means the image might not show up right away if you're adding it using Javascript, like we're doing in this demo.
// To avoid this, we can *preload* images in Javascript
// Note: this does not work if you don't have the Chrome console open and caching is not turned off.
// More info - https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
var preloadedImages = [];
function preload(imageSrcs) {
  for (var i = 0; i < imageSrcs.length; i++) {
    var img = new Image();
    img.src = imageSrcs[i];
    preloadedImages.push(img);
  }
}
preload(objects);
preload(scenes);
