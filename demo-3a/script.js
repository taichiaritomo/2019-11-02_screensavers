// /*
//  get the flies' DOM elements
// */

// var flyOne = document.querySelector("#one");
// var flyTwo = document.querySelector("#two");
// var flyThree = document.querySelector("#three");


// /*
// Sprinkle a little "life-giving" randomness to the flies' animation style properties.

// The values assigned here will override the ones defined in your CSS file, because they are applied "inline" to the DOM element. You can see the assigned values in Inspect Element.

// Because each fly has three CSS animations applied to it, we have to provide three comma-separated values for each CSS animation property...
// To avoid repetitive and difficult-to-read code, we use some helper functions to get our random time values
// */

// flyOne.style["animation-delay"]    = getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10);
// flyOne.style["animation-duration"] = "10s, " + getRandomAnimationDuration(5, 10) + ", " + getRandomAnimationDuration(5, 10);

// flyTwo.style["animation-delay"]    = getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10);
// flyTwo.style["animation-duration"] = "10s, " + getRandomAnimationDuration(5, 10) + ", " + getRandomAnimationDuration(5, 10);

// flyThree.style["animation-delay"]    = getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10);
// flyThree.style["animation-duration"] = "10s, " + getRandomAnimationDuration(5, 10) + ", " + getRandomAnimationDuration(5, 10);




// /********************
//  * Helper functions~
//  ********************/

// /**
//  * Gets a random negative value for CSS property animation-delay.
//  * 
//  * The negative animation delay makes the animation appear as if it started from somewhere in the middle.
//  * @link https://css-tricks.com/starting-css-animations-mid-way/
//  * 
//  * @param  {Number}  max  Maximum number of seconds
//  * @return {String}       A value for the CSS property animation-delay, with a random number of seconds between 0 and -max
//  */
// function getRandomAnimationDelay( max ) {
//   var seconds = -1 * Math.random() * max;
//   return seconds + "s"; // return as a CSS unit string
// }

// /**
//  * Gets a random value for CSS property animation-duration.
//  * 
//  * @param  {Number}  min  Minimum number of seconds
//  * @param  {Number}  max  Maximum number of seconds
//  * @return {String}       A value for the CSS property animation-duration, with a random number of seconds between min and max.
//  */
// function getRandomAnimationDuration( min , max ) {
//   var range = max - min;
//   return (min + (Math.random() * range)) + "s";
// }
