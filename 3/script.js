// A prototypical data structure for a vector, which has a magnitude and direction.
// The direction is expected to be an angle in radians.
// The magnitude is just a positive number for speed, e.g. "2" for 2px/second.
class Vector {
  constructor(A, B) {
    if (A && B===undefined) {
      // if only one parameter is passed, then we create a vector that has magnitude A with a random direction
      var angle = Math.random() * Math.PI * 2;
      this.x = A * Math.cos(angle);
      this.y = A * Math.sin(angle);
    } else {
      // if two parameters are passed, then we create a vector with x-component A, y-component B
      this.x = A;
      this.y = B;
    }
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

  update(timeSinceLastFrame) {
    // get the particle's new projected position
    var dX = this.velocity.x * (timeSinceLastFrame / 1000);
    var dY = this.velocity.y * (timeSinceLastFrame / 1000);
    var newX = this.x + dX;
    var newY = this.y + dY;

    // check if the particle is out of bounds.
    // if it is, reverse its direction (velocity) and its new projected position
    if (newX < 0) {
      // horizontal
      this.velocity.x = Math.abs(this.velocity.x); // make it positive so that it heads to the right
      newX -= 2*dX; // correct for reversed dX
    } else if (newX + this.width > window.innerWidth) {
      this.velocity.x = -1 * Math.abs(this.velocity.x); // make it negative so that it heads to the left
      newX -= 2*dX; // correct for reversed dX
    }
    if (newY < 0) {
      // vertical
      this.velocity.y = Math.abs(this.velocity.y);
      newY -= 2*dY;
    } else if (newY + this.height > window.innerHeight) {
      this.velocity.y = -1 * Math.abs(this.velocity.y);
      newY -= 2*dY;
    }

    // update the particle's location in memory and on the screen, using the function defined in the Particle class
    this.move(newX, newY);
  }
}

var myElement3 = document.querySelector('.shadow.three');
var myFly3 = new Particle(myElement3, 15, 15, Math.random()*(window.innerWidth-15), Math.random()*(window.innerHeight - 15), 100);
var myElement4 = document.querySelector('.shadow.four');
var myFly4 = new Particle(myElement4, 15, 15, Math.random()*(window.innerWidth-15), Math.random()*(window.innerHeight - 15), 75);
var myElement5 = document.querySelector('.shadow.five');
var myFly5 = new Particle(myElement5, 15, 15, Math.random()*(window.innerWidth-15), Math.random()*(window.innerHeight - 15), 60);

var timeOfLastFrame;

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
  myFly3.update(timeSinceLastFrame);
  myFly4.update(timeSinceLastFrame);
  myFly5.update(timeSinceLastFrame);

  // update the time of the last frame
  timeOfLastFrame = timeOfThisFrame; // update :)
}

timeOfLastFrame = Date.now();
draw();
