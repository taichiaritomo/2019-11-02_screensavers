// The poem
// This is an *array* containing 3 strings.
var poem = [
  "wind curls",
  "in a leaf's palm",
  "then unwinds"
];

// How do we manipulate HTML objects such as divs?
// First, we tell Javascript to find it.
// document.querySelector() is kind of like a Ctrl+F for your HTML.
// You give it a CSS selector, like "h1" and it'll return the first element it finds that matches the selector.
var textContainer = document.querySelector(".text-container");

var lineNumber = 0; // This variable keeps track of the line we're on in the poem. 0 = first line


// This function will contain all of the logic for switching out the text in the container
function update() {
  lineNumber = lineNumber + 1; // add 1 to the current line
  if (lineNumber >= poem.length) {
    // (if the line number has passed the length of the poem...)
    lineNumber = 0;              // go back to line 0
  }

  // replace the HTML content with the new line
  textContainer.innerHTML = poem[lineNumber];
}

// How do we tell Javascript to do something at regular intervals?
// setInterval() accepts a Function (the function that you want to run every x milliseconds) and an integer (x, the number of milliseconds)
setInterval(update, 3000);