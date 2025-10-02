let squareX;
let squareY;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  squareX = width / 2;  // start in middle
  squareY = height / 2;
}

function draw() {
  background(220),120, 150;
  fill(255, 50, 150,50);

  // only update position if mouse is inside canvas
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    squareX = mouseX;
    squareY = mouseY;
  }

  rect(squareX, squareY, 50, 50);
}
