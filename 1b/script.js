/*
 get the flies' DOM elements
*/

var flyOne = document.querySelector("#one");


/*
Sprinkle a little "life-giving" randomness to the flies' animation style properties.

The values assigned here will override the ones defined in your CSS file, because they are applied "inline" to the DOM element. You can see the assigned values in Inspect Element.

Because each fly has three CSS animations applied to it, we have to provide three comma-separated values for each CSS animation property...
To avoid repetitive and difficult-to-read code, we use some helper functions to get our random time values
*/

flyOne.style["animation-delay"]    = getRandomAnimationDelay(10) + ", " + getRandomAnimationDelay(10);



var images = [
  "images/IMG_3502.jpeg",
  "images/IMG_3682.jpeg",
  "images/IMG_4088.jpeg",
  "images/IMG_5270.jpeg",
  "images/IMG_5918.jpeg",
  "images/IMG_6029.jpeg",
  "images/IMG_6117.jpeg",
  "images/IMG_7270.jpeg",
  "images/IMG_7272.jpeg",
  "images/IMG_7274.jpeg"
];

var body = document.querySelector("body");
var randomImageSrc = images[ Math.floor( Math.random() * images.length ) ];
body.style["background-image"] = "url('" + randomImageSrc + "')";




/********************
 * Helper functions~
 ********************/

/**
 * Gets a random negative value for CSS property animation-delay.
 * 
 * The negative animation delay makes the animation appear as if it started from somewhere in the middle.
 * @link https://css-tricks.com/starting-css-animations-mid-way/
 * 
 * @param  {Number}  max  Maximum number of seconds
 * @return {String}       A value for the CSS property animation-delay, with a random number of seconds between 0 and -max
 */
function getRandomAnimationDelay( max ) {
  var seconds = -1 * Math.random() * max;
  return seconds + "s"; // return as a CSS unit string
}

/**
 * Gets a random value for CSS property animation-duration.
 * 
 * @param  {Number}  min  Minimum number of seconds
 * @param  {Number}  max  Maximum number of seconds
 * @return {String}       A value for the CSS property animation-duration, with a random number of seconds between min and max.
 */
function getRandomAnimationDuration( min , max ) {
  var range = max - min;
  return (min + (Math.random() * range)) + "s";
}
