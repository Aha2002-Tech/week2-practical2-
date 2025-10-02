let x = 0;
let movingRight = true;
let speed;

function setup() {
  createCanvas(600, 600);
  speed = random(1, 10); 
}

function draw() {
  background(0);
  circle(x, height / 2, 100);

  if (movingRight && x < width) {
    x += speed;
  } else if (movingRight && x >= width) {
    movingRight = false;
    speed = random(1, 5); 
  } else if (!movingRight && x > 1) {
    x -= speed;
  } else {
    movingRight = true;
    speed = random(1, 10); 
  }
}
