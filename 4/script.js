var timeOfLastFrame;

// an "animation frame request" helps the browser multitask while it takes care of all the other work it has to do
// if you request an animation frame, it'll make the frame when it gets the chance.
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
var request; // this variable stores the "animation frame request"
var i = 0;

var screensaverText = document.querySelector('.screensaver span');

// this is our drawing function. it can be named anything, but i called it "draw"
function draw() {

  // first, we request a new animation frame and renew the "request" variable.
  // "draw" is passed as a parameter. this means that every time we ask for a new frame, we run draw() again
  request = requestAnimationFrame( draw );

  // here, we write what draw() should really do

  // create a Date object, a data structure that contains information and methods - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var space = "&nbsp;";
  var string = space.repeat(seconds) + "seconds," + space.repeat(minutes) + "minutes," + space.repeat(hours) + "hours.";
  screensaverText.innerHTML = string;
}

draw();

function adjust() {
  var fontsize = 2;
  while (screensaverText.offsetHeight < window.innerHeight) {
    fontsize = fontsize + 0.1;
    screensaverText.style.fontSize = fontsize + 'px';
  }
  screensaverText.style.fontSize = (fontsize - 0.1) + 'px';
}

screensaverText.innerHTML = "&nbsp;".repeat(166);
adjust();