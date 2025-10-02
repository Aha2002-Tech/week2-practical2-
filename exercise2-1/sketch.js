function setup() {
  createCanvas(600, 600);
}

function draw() {
  if (mouseIsPressed) {
    background(255, 0, 150); // pink background
    fill(220); // grey ellipse
  } else {
    background(220); // grey background
    fill(255, 0, 150); // pink ellipse
  }

  ellipse(225, 300, 400, 400);
}

