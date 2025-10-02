let x = 100;      //  X position
let y = 100;      // Y position
let dx = 3;       //  X axis (pixels per frame)
let dy = 3;       // speed on
let r = 50;       // radius ellipse

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100, 50, 255);
  fill(255, 0, 150);
  ellipse(x, y, r * 2, r * 2);

  // update position
  x += dx;
  y += dy;

  //  left&right travlling
  if (x + r >= width || x - r <= 10) {
    dx = -dx;
  }

  // top&bottom travlling
  if (y + r >= height || y - r <= 10) {
    dy = -dy;
  }
}
