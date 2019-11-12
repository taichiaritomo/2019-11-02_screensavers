// get all the firefly elements...
var fireflies = document.querySelectorAll(".firefly");

// add randomness to each firefly
for (var i = 0; i < fireflies.length; i++) {

  var firefly = fireflies[i];

  /*
  because each firefly has three animations running,
  we must provide three comma-separated values for each animation property
  */

  // start the animations at a random offset, from -0s to -14s
  firefly.style["animation-delay"] = (-1 * Math.random() * 14) + 's, ' +
                                     (-1 * Math.random() * 14) + 's, ' +
                                     (-1 * Math.random() * 14) + 's';

  // make the animation a random duration, from 10s to 15s
  firefly.style["animation-duration"] = (10 + Math.random() * 5) + 's, ' +
                                        (10 + Math.random() * 5) + 's, ' +
                                        (10 + Math.random() * 5) + 's';

}