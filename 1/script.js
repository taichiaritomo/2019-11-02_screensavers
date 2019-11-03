// var i = 0; // index of currently displayed frame
// var loop = 0; // loop count
// var delay = frameData[0].frameInfo.delay * 10;
// favicon.href = frameData[0].frameInfo.dataURL;
// var lastFrameUpdate = Date.now();
// var request; // rAF
// function animate() {
//   request = requestAnimationFrame(animate);
//   if (Date.now() - lastFrameUpdate > delay) {
//     if (++i == frameData.length) {
//       if (++loop > 2) cancelAnimationFrame(request);
//       i %= frameData.length;
//     }
//     delay = frameData[i].frameInfo.delay * 10; // gif delay is in 1/100ths of a second, so multiply by 10
//     favicon.href = frameData[i].frameInfo.dataURL;
//     lastFrameUpdate = Date.now();
//   }
// }

// A prototypical data structure for a vector, which has a magnitude and direction.
// The direction is expected to be an angle in radians.
// The magnitude is just a positive number for speed, e.g. "2" for 2px/second.
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// A prototypical data structure for a moving object on the screen
class Particle {
  // the constructor helps us define the essential information about a particle
  constructor(DOMelement, width, height, x, y, speed) {
    this.element = DOMelement;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    var velocityComponent = speed / Math.sqrt(2); // if the particle starts moving at a 45 degree angle, then its perpendicular components are 1/sqrt(2) of the magnitude
    this.velocity = new Vector(velocityComponent, -velocityComponent); // px/second?
  }

  move(x, y) {
    this.x = x;
    this.y = y;
    this.element.style.left = x + 'px';
    this.element.style.top = y + 'px';
  }
}

// The Fly data structure is based on the Particle data structure
// class Fly extends Particle {
//   constructor(DOMelement, width, height, x, y, speed) {

//   }

//   // the fly picks a new target
//   update() {

//   }
// }

var myElement = document.querySelector('.shadow');
var myFly = new Particle(myElement, 15, 15, 0, 0, 530); // we create a new Particle data structure that holds the DOM element (<div class="shadow"></div>), its width, height, and starting position of (0, 0), and speed of 5px/second
var timeOfLastFrame;

// console.log(myElement);

// an "animation frame request" helps the browser multitask while it takes care of all the other work it has to do
// if you request an animation frame, it'll make the frame when it gets the chance.
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
var request; // this variable stores the "animation frame request"
var i = 0;

// this is our drawing function. it can be named anything, but i called it "draw"
function draw() {

  // first, we request a new animation frame and renew the "request" variable.
  // "draw" is passed as a parameter. this means that every time we ask for a new frame, we run draw() again
  request = requestAnimationFrame( draw );

  // here, we write what draw() should really do

  // get the fly's new projected position
  var timeOfThisFrame = Date.now();
  var timeSinceLastFrame = timeOfThisFrame - timeOfLastFrame; // ms
  var dX = myFly.velocity.x * (timeSinceLastFrame / 1000);
  var dY = myFly.velocity.y * (timeSinceLastFrame / 1000);
  var newX = myFly.x + dX;
  var newY = myFly.y + dY;

  // check if the fly is out of bounds.
  // if it is, reverse its velocity and its new projected position
  if (newX < 0 || myFly.x + myFly.width > window.innerWidth) {
    // horizontal
    myFly.velocity.x = -myFly.velocity.x;
    newX -= 2*dX;
  }
  if (myFly.y < 0 || myFly.y + myFly.height > window.innerHeight) {
    // vertical
    myFly.velocity.y = -myFly.velocity.y;
    newY -= 2*dY;
  }

  // update the fly's location in memory and on the screen, using the function defined in the Particle class
  myFly.move(newX, newY);

  // update the time of the last frame
  timeOfLastFrame = timeOfThisFrame; // update :)
}

// finally, to start the animation, we call draw() just once.
// after this, draw() calls itself every time a new animation frame is requested.
function start() {
  console.log('Start');
  timeOfLastFrame = Date.now();
  draw();

  // Add stop listener
  document.addEventListener('click', () => {
    stop();
  }, {once: true});
}

// to stop the animation, we cancel the last requested animation frame.
// the draw() call that was supposed to happen won't happen, thereby ending the loop.
function stop() {
  console.log('Stop');
  cancelAnimationFrame(request);

  // Add start listener
  document.addEventListener('click', () => {
    start();
  }, {once: true});
}

// attach a click event listener to start the animation, for testing.
document.addEventListener('click', () => {
  start();
}, {once: true});
