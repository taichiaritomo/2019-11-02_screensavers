// get all the fish elements...
var fishes = document.querySelectorAll(".fish");

// add randomness to each fish
for (var i = 0; i < fishes.length; i++) {

  var fish = fishes[i];
  
  // give the fish a random top value within the screen
  fish.style["top"] = (window.innerHeight - fish.clientHeight) * Math.random() + 'px';

  // start the swimming animation start at a random offset, from -0s to -14s
  fish.style["animation-delay"] = -1 * Math.random() * 14 + 's';

  // make the animation loop a random duration, from 10s to 18s
  fish.style["animation-duration"] = 10 + Math.random() * 8 + 's';

}