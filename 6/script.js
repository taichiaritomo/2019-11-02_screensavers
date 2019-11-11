// PART 2 //

// The poem
// Replaceable terms are indicated by curly brackets, {}.
// These terms should correspond with the poem's pattern defined below, or our program will become quite confused.
var poem = [
  "{wind} {curls} in a",
  "{leaf}'s {palm}",
  "then {unwinds}"
];

// The poem's pattern
// Replaceable terms are indicated by a label and curly brackets, {}.
// The labels correspond to the vocabulary list below.
var pattern = [
  "{NOUN} {VERB} in a",
  "{NOUN}'s {NOUN}",
  "then {VERB}"
];

// The vocabulary list
// This is an *object*. Unlike in arrays, you can name the entries in an object.
// For example, one entry is named "NOUN", and it contains an array of words.
var vocabulary = {
  "NOUN" : ["bacon", "navel", "consultant", "wind", "leaf", "palm"],
  "VERB" : ["breaks", "shines", "kisses", "coils", "stomps", "giggles"]
};


// How do we manipulate HTML objects such as divs?
// First, we tell Javascript to find it.
// document.querySelector() is kind of like a Ctrl+F for your HTML.
// You give it a CSS selector, like "h1" and it'll return the first element it finds that matches the selector.
var textContainer = document.querySelector(".text-container");


var lineNumber = 0; // This variable keeps track of the line we're on in the poem. 0 = first line
var loopNumber = 0; // This variable keeps track of the number of loops in the poem we've gone through.


// This function changes the screen
function update() {
  lineNumber = lineNumber + 1;

  /* **************************************************** */
  /* you can do stuff between each line of the poem here! */

  /* **************************************************** */


  // (if the line number has passed the length of the poem)
  if (lineNumber >= poem.length) {
    lineNumber = 0;              // go back to line 0
    loopNumber = loopNumber + 1; // count a loop

    /* **************************************************** */
    /* you can do stuff between each loop of the poem here! */

    var randomLineNumber = Math.random() * poem.length;
    randomLineNumber = Math.floor(randomLineNumber);
    replaceWordInPoem(randomLineNumber); // replace a word on a random line in the poem
    // replaceWordInPoem(2, 0);             // replace the first word in the last line of the poem

    /* **************************************************** */
  }

  // get the line from the poem
  var line = poem[lineNumber];
  line = line.replace(/[\{\}]/g, ""); // get rid of the curly brackets

  // replace the HTML content with the new line
  textContainer.innerHTML = line;
}

// How do we tell Javascript to do something at regular intervals?
// setInterval() accepts a Function (the function that you want to run every x milliseconds) and an integer (x, the number of milliseconds)
var myInterval = setInterval(update, 1000);

// Listen for a click to stop the animation.
// (Useful for debugging)
document.addEventListener('click', () => {
  console.log("You clicked, so the animation stopped.");
  clearInterval(myInterval);
});





/************************
 * Advanced Stuff
 ************************/

// regular expression to match words inside curly brackets
var regex = /\{.*?\}/g;

// Replaces a word in a line of the poem with an appropriate word from the vocabulary list...
// l = index of the line in the poem
// w (optional) = index of the term in the line of the poem. random if not specified.
// 
// For example, if you want to replace the 3rd replaceable word in the 2nd line,
// you'd call replaceWordInPoem(2, 3)
function replaceWordInPoem(l, termIndex) {
  var poemLine = poem[l];              // get a random line from the poem
  var patternLine = pattern[l];        // get corresponding line from the pattern

  // find the curly-bracket-wrapped terms in the poem and pattern
  var poemLineTerms = poemLine.match(regex);
  var patternLineTerms = patternLine.match(regex);

  // (if the number of matches in the poem and in the pattern are different, then there must be a mistake in the poem and pattern)
  if (poemLineTerms.length != patternLineTerms.length) {
    throw `The pattern doesn't match the pattern map. There are ${poemLineTerms.length} terms in the poem, and ${patternLineTerms.length} terms in the pattern.`;
  }

  // (if the number of terms in the poem's line is 0, then we're not going to switch anything)
  if (poemLineTerms.length == 0) {
    return;
  }

  // if no term number was specified, replace a random word from the line
  if (termIndex === undefined) {
    termIndex = Math.floor( Math.random() * patternLineTerms.length );
  };

  // find the term in the poem to replace
  var term = poemLineTerms[termIndex];

  // get a new term to replace the old term
  var label = patternLineTerms[termIndex];      // the term's label, e.g. "NOUN"
  label = label.substring(1, label.length - 1); // trim the {} around the label
  if (!(label in vocabulary)) {
    throw `There were no words labelled ${label} in your vocabulary list.`
  }
  var possibleNewTerms = vocabulary[label];     // look in the vocabulary list for words with the label
  var newTermIndex = Math.floor(Math.random() * possibleNewTerms.length);
  var newTerm = possibleNewTerms[newTermIndex]; // pick a new term randomly

  console.log(`Replace ${term} with ${newTerm}`);

  // Replace the term in the poem
  poem[l] = poem[l].replace(term, "{"+newTerm+"}");
}

// This function looks through line l in the poem
// and counts how many words are replaceable in it...
function countReplaceableWordsInLine(l) {
  var poemTerms = myString.match(regex); // join the poem then find curly-bracket-wrapped terms
  return poemTerms.length;
}